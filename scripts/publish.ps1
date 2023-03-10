#!/usr/bin/env pwsh
#Requires -Version 6

Push-Location "$PSScriptRoot/.."

node --enable-source-maps tool create-release . ./publish --strict

Pop-Location
