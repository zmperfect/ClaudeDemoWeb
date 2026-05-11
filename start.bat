@echo off
cd /d "%~dp0"
echo ================================================
echo   AI Daily Digest Server
echo ================================================
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do (
        echo   Local:   http://localhost:8080
        echo   Phone:   http://%%b:8080
    )
)
echo.
echo   Share the "Phone" URL to access from your phone
echo   (make sure on the same WiFi)
echo ================================================
start http://localhost:8080
python -m http.server 8080 --bind 0.0.0.0
