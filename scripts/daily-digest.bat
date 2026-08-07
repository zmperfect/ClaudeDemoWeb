@echo off
setlocal EnableExtensions

REM === AI Daily Digest Automation ===
REM Usage: daily-digest.bat [morning|afternoon|evening]

set "PERIOD=%~1"
set "SCRIPT_DIR=%~dp0"
for %%I in ("%SCRIPT_DIR%..") do set "PROJECT_DIR=%%~fI"

if "%PERIOD%"=="" (
    goto :usage
)

if /I "%PERIOD%"=="morning" goto :valid_period
if /I "%PERIOD%"=="afternoon" goto :valid_period
if /I "%PERIOD%"=="evening" goto :valid_period
goto :usage

:usage
echo Usage: daily-digest.bat [morning^|afternoon^|evening]
exit /b 1

:valid_period
cd /d "%PROJECT_DIR%"
if errorlevel 1 (
    echo [ERROR] Could not open project directory: "%PROJECT_DIR%"
    exit /b 1
)

if not exist "scripts\logs" mkdir "scripts\logs"

for /f %%I in ('powershell.exe -NoProfile -Command "Get-Date -Format yyyy-MM-dd"') do set "TODAY=%%I"
set "LOGFILE=%PROJECT_DIR%\scripts\logs\%TODAY%-%PERIOD%.log"

if not exist "%SCRIPT_DIR%daily-digest.ps1" (
    echo [ERROR] Cursor digest script not found: "%SCRIPT_DIR%daily-digest.ps1" >> "%LOGFILE%"
    exit /b 1
)

REM Sync remote hide-item commits before the agent reads today's digest.
git fetch origin >> "%LOGFILE%" 2>&1
if errorlevel 1 (
    echo [ERROR] Could not fetch origin before collection >> "%LOGFILE%"
    exit /b 1
)

git rebase origin/master >> "%LOGFILE%" 2>&1
if errorlevel 1 (
    echo [ERROR] Could not rebase onto origin/master before collection >> "%LOGFILE%"
    exit /b 1
)

REM Cursor CLI receives the prompt as Unicode from PowerShell and returns JSON.
REM The PowerShell wrapper validates and atomically writes data\YYYY-MM-DD.json.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%daily-digest.ps1" -Period "%PERIOD%" -LogFile "%LOGFILE%"
set "CURSOR_EXIT=%ERRORLEVEL%"
echo [%DATE% %TIME%] Cursor exited with code %CURSOR_EXIT% >> "%LOGFILE%"

if not "%CURSOR_EXIT%"=="0" (
    echo [ERROR] Cursor failed, skipping git operations >> "%LOGFILE%"
    exit /b %CURSOR_EXIT%
)

REM Auto commit and push
git add -- data/ >> "%LOGFILE%" 2>&1
if errorlevel 1 (
    echo [ERROR] Could not stage digest data >> "%LOGFILE%"
    exit /b 1
)

git diff --cached --quiet
if errorlevel 2 (
    echo [ERROR] Could not inspect staged changes >> "%LOGFILE%"
    exit /b 1
)

if errorlevel 1 (
    echo [%DATE% %TIME%] Committing changes... >> "%LOGFILE%"
    git commit -m "Auto: %TODAY% %PERIOD% digest update" >> "%LOGFILE%" 2>&1
    if errorlevel 1 (
        echo [ERROR] Git commit failed >> "%LOGFILE%"
        exit /b 1
    )

    REM A user can hide an item while collection runs. Rebase again so the
    REM digest commit is replayed after any such remote update.
    git fetch origin >> "%LOGFILE%" 2>&1
    if errorlevel 1 (
        echo [ERROR] Could not fetch origin before push >> "%LOGFILE%"
        exit /b 1
    )

    git rebase origin/master >> "%LOGFILE%" 2>&1
    if errorlevel 1 (
        echo [ERROR] Could not rebase digest commit onto origin/master >> "%LOGFILE%"
        exit /b 1
    )

    git push origin HEAD:master >> "%LOGFILE%" 2>&1
    if errorlevel 1 (
        echo [ERROR] Git push failed >> "%LOGFILE%"
        exit /b 1
    )

    echo [%DATE% %TIME%] Push complete. >> "%LOGFILE%"
) else (
    echo [%DATE% %TIME%] No changes to commit. >> "%LOGFILE%"
)

echo [%DATE% %TIME%] Done. >> "%LOGFILE%"
endlocal
