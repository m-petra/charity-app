#!/bin/bash

set -e

echo "🚀 Starting FRONTEND deployment..."

echo "📁 Navigating to project root..."
cd "$(git rev-parse --show-toplevel)"

echo "🧹 Removing previous frontend dist if exists..."
rm -rf dist/apps/charity-app-web

echo "🏗️ Building frontend application with NX..."
npx nx build charity-app-web

echo "📝 Copying frontend ecosystem config to dist..."
mkdir -p dist/apps/charity-app-web/server
cp apps/charity-app-web/ecosystem.config.js dist/apps/charity-app-web/server/

echo "📁 Navigating to frontend dist directory..."
cd dist/apps/charity-app-web/server

echo "🛑 Stopping and deleting existing 'frontend' pm2 process..."
pm2 stop frontend || true
pm2 delete frontend || true

echo "▶️ Starting frontend with pm2..."
pm2 start ./ecosystem.config.js

echo "🔍 Verifying frontend process..."
pm2 describe frontend

echo "✅ FRONTEND deployment finished."

cd ../../../../
exit 0