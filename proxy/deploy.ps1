<#
  A2 one-click deploy script (Windows PowerShell)
  Purpose: minimize manual steps for deploying the Cloudflare Worker
           and auto-fill the Worker URL back into app.js.

  You only need to do 3 things manually:
    1) In the browser: revoke the old PAT and create a new fine-grained PAT
    2) During "wrangler login", click "Allow" in the browser
    3) Paste the new PAT once when prompted

  Usage:
    powershell -ExecutionPolicy Bypass -File .\deploy.ps1
#>

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

function Write-Step($msg) { Write-Host "`n==== $msg ====" -ForegroundColor Cyan }

Write-Step "Step 0/1: Revoke old PAT and create a new one (do this in your browser)"
Write-Host "1) Revoke old token: https://github.com/settings/tokens" -ForegroundColor Yellow
Write-Host "2) Create fine-grained token: https://github.com/settings/tokens?type=beta" -ForegroundColor Yellow
Write-Host "   - Repository access: only zmperfect/ClaudeDemoWeb"
Write-Host "   - Permissions -> Actions: Read and write"
Write-Host "Copy the token (shown only once). You'll paste it later."
Read-Host "Press Enter to continue when done"

Write-Step "Check / prepare wrangler"
Write-Host "Using wrangler via npx (no global install needed)."

Write-Step "Login to Cloudflare (a browser page will open, click Allow)"
npx --yes wrangler login

Write-Step "Set GITHUB_TOKEN secret (paste your new PAT, then press Enter)"
npx --yes wrangler secret put GITHUB_TOKEN

Write-Step "Deploy the Worker"
$deployOutput = npx --yes wrangler deploy 2>&1 | Out-String
Write-Host $deployOutput

# Parse the Worker URL from deploy output
$workerUrl = $null
$match = [regex]::Match($deployOutput, 'https://[^\s]+\.workers\.dev')
if ($match.Success) { $workerUrl = $match.Value }

if (-not $workerUrl) {
    Write-Host "`nCould not auto-detect the Worker URL. Please copy the https://xxx.workers.dev URL from the output above." -ForegroundColor Yellow
    $workerUrl = Read-Host "Paste your Worker URL (e.g. https://claudedemoweb-proxy.xxx.workers.dev)"
}

$hideUrl = ($workerUrl.TrimEnd('/')) + '/hide'
Write-Step "Write PROXY_URL back into app.js"

$appJs = Join-Path (Split-Path $PSScriptRoot -Parent) 'js\app.js'
if (Test-Path $appJs) {
    $content = Get-Content -Raw -Encoding UTF8 $appJs
    $newLine = "    const PROXY_URL = '$hideUrl';"
    $content = [regex]::Replace($content, "    const PROXY_URL = '[^']*';", $newLine)
    Set-Content -Path $appJs -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Done: PROXY_URL = $hideUrl" -ForegroundColor Green
} else {
    Write-Host "app.js not found at $appJs. Please set PROXY_URL to $hideUrl manually." -ForegroundColor Yellow
}

Write-Step "Finished! Next: commit and push (this script does NOT auto-push)"
Write-Host 'git add js/app.js proxy/'
Write-Host 'git commit -m "A2: use Cloudflare Worker proxy to trigger hide-item; remove hardcoded PAT from frontend"'
Write-Host 'git push'
Write-Host "`nVerify: on the live site, click the x on a card; in Network you should see a POST to $hideUrl returning { ok: true }." -ForegroundColor Green
