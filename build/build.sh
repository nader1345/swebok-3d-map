#!/usr/bin/env bash
# Build the SWEBOK 3D map: concatenate content data, bundle the Three.js app, sync docs/.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -d node_modules/three || ! -d node_modules/esbuild ]]; then
  echo "Installing dependencies…"
  npm install
fi

echo "Assembling assets/data.js…"
{
  for f in \
    src/data/00_root.js \
    src/data/01.js src/data/02.js src/data/03.js src/data/04.js src/data/05.js \
    src/data/06.js src/data/07.js src/data/08.js src/data/09.js src/data/10.js \
    src/data/11.js src/data/12.js src/data/13.js src/data/14.js src/data/15.js \
    src/data/16.js src/data/17.js src/data/18.js \
    src/data/en_content.js \
    src/data/glossary.js
  do
    cat "$f"
  done
  printf '%s\n' \
    'SWE.kas.sort(function(a,b){return a.ch-b.ch;});' \
    'SWE.kas.forEach(function(k){k.css=k.color;k.color=parseInt(k.color.slice(1),16);k.foundation=k.ch>15;});'
} > assets/data.js

echo "Bundling assets/app.js with esbuild…"
npx esbuild src/main.js \
  --bundle \
  --format=iife \
  --outfile=assets/app.js \
  --minify \
  --legal-comments=none

echo "Syncing static site into docs/ (GitHub Pages–ready)…"
mkdir -p docs/en docs/assets/fonts
cp -f index.html og-image.png docs/
cp -f en/index.html docs/en/
cp -f assets/app.js assets/data.js assets/style.css assets/favicon.svg docs/assets/
cp -f assets/fonts/*.woff2 docs/assets/fonts/
# Keep README screenshots already in docs/

echo "Build complete."
wc -c assets/app.js assets/data.js | sed 's|^|  |'
