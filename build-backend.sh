#!/bin/bash
set -e

echo "🔧 Telepítés..."
npm install

echo "📦 Prisma generálás..."
npx prisma generate --schema=apps/charity-app-be/prisma/schema.prisma

echo "🏗 NX build..."
npx nx build charity-app-be