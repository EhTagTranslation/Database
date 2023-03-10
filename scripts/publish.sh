#!/usr/bin/env sh

cd "$(dirname "$0")/.."

node --enable-source-maps tool create-release . ./publish --strict
