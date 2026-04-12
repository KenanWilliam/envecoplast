#!/usr/bin/env node

/**
 * Standalone Next.js Server Runner for cPanel/Node.js
 * This script runs the pre-built Next.js standalone server.
 */

const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;
const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');

// Check if standalone server exists
if (!fs.existsSync(standaloneServerPath)) {
  console.error(`❌ Error: Standalone server not found at ${standaloneServerPath}`);
  console.error('Make sure to run "npm run build" first!');
  process.exit(1);
}

// Load and run the built standalone server
try {
  require(standaloneServerPath);
  console.log(`✅ Next.js server started on port ${port}`);
} catch (err) {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
}
