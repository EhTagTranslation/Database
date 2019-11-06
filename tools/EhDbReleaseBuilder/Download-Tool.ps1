#! /bin/env pwsh
#Requires -Version 5

Write-Host 'Fetching latest release info'
$Header = if (${env:GitHub:Token}) { @{ Authorization = "token ${env:GitHub:Token}" } } else { @{ } }
$Release = Invoke-WebRequest 'https://api.github.com/repos/EhTagTranslation/EhTagConnector/releases/latest' -Headers $Header | ConvertFrom-Json

Write-Host "Downloading from $($Release.assets[0].browser_download_url)"
$zipfile = "$PSScriptRoot/EhDbReleaseBuilder.zip"
Invoke-WebRequest $Release.assets[0].browser_download_url -OutFile $zipfile

Write-Host "Unzipping"
if (Get-Command 7za -ErrorAction SilentlyContinue) {
    7za x "$zipfile" -o"$PSScriptRoot" -aoa
} else {
    Expand-Archive $zipfile $PSScriptRoot -Force
}
