#!/bin/bash
# Pre-deployment setup script for Envecoplast
# Run this before building for production

echo "🚀 Envecoplast Pre-Deployment Setup"
echo "===================================="
echo ""

echo "📝 REQUIRED CHANGES BEFORE DEPLOYMENT:"
echo ""

echo "1. Update Contact Information"
echo "   File: lib/site.ts"
echo "   Lines: 9-12"
echo "   Current:"
echo "     email: 'hello@envecoplast.com'"
echo "     phone: '+254 700 000 000'"
echo "     location: 'Nairobi, Kenya'"
echo ""

echo "2. Update Social Media Links"
echo "   File: lib/site.ts"
echo "   Lines: 14-17"
echo "   Required changes:"
echo "     instagram: '#' → 'https://instagram.com/envecoplast'"
echo "     linkedin: '#' → 'https://linkedin.com/company/envecoplast'"
echo "     facebook: '#' → 'https://facebook.com/envecoplast'"
echo ""

echo "3. Create .env.production file"
echo "   $ cat > .env.production << 'EOF'"
echo "   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID"
echo "   EOF"
echo ""

echo "4. Set up Formspree Account"
echo "   a. Go to https://formspree.io"
echo "   b. Sign up with your email"
echo "   c. Create a new form"
echo "   d. Copy the endpoint URL"
echo "   e. Use it for NEXT_PUBLIC_FORM_ENDPOINT"
echo ""

echo "✅ FILES ALREADY CORRECTED:"
echo "   • next.config.ts - Removed invalid turbo config"
echo ""

echo "🔨 Building for production..."
npm run build

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Build successful!"
  echo ""
  echo "📦 Next steps:"
  echo "1. Deploy .next/standalone/* to Spaceship"
  echo "2. Deploy public/* to Spaceship app root"
  echo "3. Set startup file to: server.js"
  echo "4. Add environment variables in cPanel"
  echo "5. Restart Node.js app"
else
  echo ""
  echo "❌ Build failed. Check errors above."
  exit 1
fi
