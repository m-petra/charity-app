#!/bin/bash

set -e

echo "🚀 Starting BACKEND deployment..."

echo "📦 Running npm install in root..."
npm install

echo "📁 Navigating to backend directory..."
cd apps/charity-app-be/

echo "⚙️ Generating Prisma client..."
npx prisma generate

echo "🏗️ Building backend application with NX..."
npx nx build charity-app-be

echo "📝 Copying .env and ecosystem config to dist..."
cp .env ./dist/
cp ecosystem.config.js ./dist/

echo "📁 Navigating to backend dist directory..."
cd dist

echo "🛑 Stopping and deleting existing 'backend' pm2 process..."
pm2 stop backend || true
pm2 delete backend || true

echo "▶️ Starting backend with pm2..."
pm2 start ./ecosystem.config.js

echo "🔍 Verifying backend process..."
pm2 describe backend

echo "✅ BACKEND deployment finished."

cd ../../../
exit 0