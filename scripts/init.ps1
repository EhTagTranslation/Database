#!/usr/bin/env pwsh
#Requires -Version 6

Push-Location "$PSScriptRoot/.."

New-Item ./tool -ItemType Directory -Force
Invoke-WebRequest "https://github.com/EhTagTranslation/Editor/releases/latest/download/release.zip" -OutFile ./tool/release.zip
Expand-Archive ./tool/release.zip ./tool/

Pop-Location