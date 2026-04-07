#!/bin/bash
echo "=== Checking .next/standalone ===" 
ls -lah .next/standalone/ || { echo "ERROR: .next/standalone not found!"; exit 1; }

echo -e "\n=== Required files check ==="
[ -f .next/standalone/server.js ] && echo "✓ server.js found" || echo "✗ server.js MISSING"
[ -f .next/standalone/package.json ] && echo "✓ package.json found" || echo "✗ package.json MISSING"
[ -d .next/standalone/.next ] && echo "✓ .next folder found" || echo "✗ .next folder MISSING"
[ -d .next/standalone/public ] && echo "✓ public folder found" || echo "✗ public folder MISSING"

echo -e "\n=== Creating ZIP ==="
cd .next/standalone
zip -r ../envecoplast-deploy.zip . && echo "✓ ZIP created successfully"
cd ../..

echo -e "\n=== ZIP contents preview ==="
unzip -l .next/envecoplast-deploy.zip | head -15

echo -e "\n=== ZIP size ==="
ls -lh .next/envecoplast-deploy.zip