$Release = Invoke-WebRequest 'https://api.github.com/repos/EhTagTranslation/EhTagConnector/releases/latest' -Headers @{ Authorization = "token $($env:GitHub:Token)" } | ConvertFrom-Json

$zipfile = "$PSScriptRoot/EhDbReleaseBuilder.zip"
Invoke-WebRequest $Release.assets[0].browser_download_url -OutFile $zipfile
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory($zipfile, $PSScriptRoot)