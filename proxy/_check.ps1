$errs = $null
$null = [System.Management.Automation.PSParser]::Tokenize((Get-Content -Raw -Encoding UTF8 'G:\AITest\TomTest\ClaudeDemoWeb\proxy\deploy.ps1'), ([ref]$errs))
if ($errs.Count -eq 0) {
    Write-Output 'SYNTAX_OK'
} else {
    $errs | ForEach-Object { Write-Output $_.Message }
}
