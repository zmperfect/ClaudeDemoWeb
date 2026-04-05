@echo off
echo Registering AI Digest scheduled tasks...

schtasks /create /tn "AIDigest-Morning" /tr "G:\AITest\TomTest\ClaudeDemoWeb\scripts\daily-digest.bat morning" /sc daily /st 09:30 /f
schtasks /create /tn "AIDigest-Afternoon" /tr "G:\AITest\TomTest\ClaudeDemoWeb\scripts\daily-digest.bat afternoon" /sc daily /st 14:30 /f
schtasks /create /tn "AIDigest-Evening" /tr "G:\AITest\TomTest\ClaudeDemoWeb\scripts\daily-digest.bat evening" /sc daily /st 20:30 /f

echo.
echo Verifying tasks:
schtasks /query /tn "AIDigest-Morning" /fo list
schtasks /query /tn "AIDigest-Afternoon" /fo list
schtasks /query /tn "AIDigest-Evening" /fo list

echo Done.
pause
