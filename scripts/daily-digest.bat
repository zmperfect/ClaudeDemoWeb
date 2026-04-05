@echo off
setlocal enabledelayedexpansion

REM === AI Daily Digest Automation ===
REM Usage: daily-digest.bat [morning|afternoon|evening]

set PROJECT_DIR=G:\AITest\TomTest\ClaudeDemoWeb
set CLAUDE_EXE=C:\Users\tomjrli\.local\bin\claude.exe
set PERIOD=%~1

if "%PERIOD%"=="" (
    echo Usage: daily-digest.bat [morning^|afternoon^|evening]
    exit /b 1
)

REM Get today's date in YYYY-MM-DD format
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set TODAY=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2%
set TIMESTAMP=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%:%datetime:~12,2%

cd /d %PROJECT_DIR%

REM Create log directory if not exists
if not exist scripts\logs mkdir scripts\logs

set LOGFILE=scripts\logs\%TODAY%-%PERIOD%.log

echo [%TIMESTAMP%] Starting %PERIOD% digest collection... >> %LOGFILE%

REM Read prompt from file
set PROMPT_FILE=scripts\prompts\%PERIOD%.md
if not exist %PROMPT_FILE% (
    echo [ERROR] Prompt file not found: %PROMPT_FILE% >> %LOGFILE%
    exit /b 1
)

REM Run claude in print mode with allowed tools
"%CLAUDE_EXE%" -p ^
    --model sonnet ^
    --verbose ^
    --allowedTools "WebFetch WebSearch Read Write Edit Glob Grep Bash(python*)" ^
    --max-budget-usd 1.00 ^
    < %PROMPT_FILE% >> %LOGFILE% 2>&1

set CLAUDE_EXIT=%ERRORLEVEL%
echo [%TIMESTAMP%] Claude exited with code %CLAUDE_EXIT% >> %LOGFILE%

if %CLAUDE_EXIT% neq 0 (
    echo [ERROR] Claude failed, skipping git operations >> %LOGFILE%
    exit /b %CLAUDE_EXIT%
)

REM Auto commit and push
git add data/
git diff --cached --quiet
if %ERRORLEVEL% neq 0 (
    echo [%TIMESTAMP%] Committing changes... >> %LOGFILE%
    git commit -m "Auto: %TODAY% %PERIOD% digest update" >> %LOGFILE% 2>&1
    git push >> %LOGFILE% 2>&1
    echo [%TIMESTAMP%] Push complete. >> %LOGFILE%
) else (
    echo [%TIMESTAMP%] No changes to commit. >> %LOGFILE%
)

echo [%TIMESTAMP%] Done. >> %LOGFILE%
endlocal
