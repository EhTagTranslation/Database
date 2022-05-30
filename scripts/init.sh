#!/usr/bin/env sh

cd "$(dirname "$0")/.."

rm -rf ./tool/
mkdir ./tool/
curl "https://github.com/EhTagTranslation/Editor/releases/latest/download/release.zip" -Lo ./tool/release.zip
unzip ./tool/release.zip -d ./tool/
