#!/usr/bin/env pwsh
#Requires -Version 6

Push-Location "$PSScriptRoot/.."

node tool create-release . ./publish --strict

Pop-Location
