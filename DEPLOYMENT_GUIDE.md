# Envecoplast Deployment Guide - Spaceship Hosting

## ✅ Codebase Audit Results

### Issues Found & Fixed:
1. **✅ FIXED** - Invalid `next.config.ts` options: Removed undefined `outputFileTracingRoot` and `turbo` from experimental config
2. **✅ All dependencies** - Successfully installed (0 vulnerabilities)
3. **✅ TypeScript** - All type checks pass
4. **✅ Build** - Production build completes successfully
5. **✅ Static rendering** - All routes generate properly

### Warnings to Address Before Launch:

#### 1. **Social Media Links (lib/site.ts:14-17)**
Currently set to `#` - these won't work:
```typescript
social: {
  instagram: '#',     // ❌ Change to your Instagram URL
  linkedin: '#',      // ❌ Change to your LinkedIn URL
  facebook: '#',      // ❌ Change to your Facebook URL
  whatsapp: 'https://wa.me/254700000000', // ✅ Already configured
}
```

#### 2. **Placeholder Contact Info (lib/site.ts:9-12)**
Update these with your actual details:
```typescript
email: 'hello@envecoplast.com',        // ✅ Already set
phone: '+254 700 000 000',             // ✅ Already set
location: 'Nairobi, Kenya',            // ✅ Already set
whatsapp: '+254700000000',             // ✅ Already set
```

#### 3. **Formspree Endpoint**
The contact form uses Formspree for free submissions. Configure this during deployment:
```typescript
formspreeEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/xblypvvz'
```

#### 4. **Missing Spec Sheets**
Product pages have a "Download Spec Sheet (PDF)" button that's currently non-functional:
- File: `app/products/[slug]/page.tsx:102`
- Note in code: "Future hook: cart and payment actions..."

---

## 🚀 Spaceship Deployment Steps

### Step 1: Prepare for Production
```bash
# 1. Install dependencies (already done)
npm install

# 2. Update configuration before build
# Edit lib/site.ts with your actual details:
# - Social media URLs
# - Contact information
# - Company details

# 3. Create .env.production file with Formspree endpoint
echo 'NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID' > .env.production

# 4. Build production bundle
npm run build

# 5. Verify standalone build exists
ls -la .next/standalone/server.js
```

### Step 2: Prepare Spaceship Environment

#### A. Register Domain
1. Go to **Spaceship.com** → **Domain Registration**
2. Search for your domain (e.g., `envecoplast.ke` or `envecoplast.com`)
3. Add to cart and complete purchase
4. Choose your nameservers (keep Spaceship's default)

#### B. Set Up Hosting
1. Go to **Spaceship.com** → **Hosting** → **Node.js Apps**
2. Create a new Node.js app:
   - **App Name**: `envecoplast` (or preferred name)
   - **Domain**: Select your registered domain
   - **Node.js Version**: 20.x or 22.x (latest stable)
   - **Startup File**: `server.js` ⚠️ Important!
   - **Memory**: 512 MB minimum
   - **Storage**: 1 GB minimum

#### C. Environment Variables in cPanel
1. Access **cPanel** (provided by Spaceship)
2. Navigate to **Node.js App Manager**
3. Select your app → **Environment Variables**
4. Add this variable:
   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

### Step 3: Upload Built Files to Spaceship

#### Option A: Via cPanel File Manager (Easiest)
1. Go to cPanel → **File Manager**
2. Navigate to your app folder (usually `/app` or `/public_html`)
3. Delete existing files
4. Create folder structure:
   ```
   app/
   ├── .next/            (from .next/standalone/.next/)
   ├── node_modules/     (from .next/standalone/node_modules/)
   ├── public/           (from project root)
   ├── package.json      (from .next/standalone/)
   └── server.js         (from .next/standalone/)
   ```

#### Option B: Via SFTP (Faster for large uploads)
1. Get SFTP credentials from Spaceship cPanel
2. Use FileZilla or WinSCP to connect
3. Upload contents of `.next/standalone/` to app folder
4. Upload `public/` folder to root

#### Option C: Terminal/Command Line
```bash
# Local commands (run from your project directory)
# Prepare standalone folder
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
cp package.json .next/standalone/

# Connect via SFTP and upload
sftp user@spaceship-ftp-host
cd /app
put -r .next/standalone/*
```

### Step 4: Configure Spaceship Node.js App

1. **cPanel → Node.js App Manager**
2. Select your app
3. **Startup File**: Set to `server.js`
4. **Application Startup File**: Ensure it points to `server.js`
5. **Environment**:
   - Set to **Production**
   - Add all environment variables
6. **Click "Save & Restart"**

### Step 5: DNS Configuration (if not auto-configured)

If domain doesn't auto-configure:
1. Spaceship cPanel → **DNS Zone Editor**
2. Verify these records exist:
   ```
   Type    | Name           | Value
   A       | @              | [Spaceship IP Address]
   A       | www            | [Spaceship IP Address]
   CNAME   | www            | @ or your-domain.com
   ```

### Step 6: Test & Launch

```bash
# Test locally before deployment
npm run dev
# Visit http://localhost:3000

# Test after Spaceship deployment:
# 1. Visit your domain: https://envecoplast.com
# 2. Check all pages load:
#    - /
#    - /products
#    - /products/interlocking-plastic-construction-block
#    - /about
#    - /contact
# 3. Test contact form submission
# 4. Verify links to WhatsApp work
```

---

## 📋 Pre-Launch Checklist

- [ ] Social media links updated (Instagram, LinkedIn, Facebook)
- [ ] Contact info verified (email, phone, location)
- [ ] Contact form endpoint set (NEXT_PUBLIC_FORM_ENDPOINT)
- [ ] Production build completes: `npm run build`
- [ ] Standalone files copied: `.next/static`, `public/`, `node_modules/`
- [ ] `server.js` exists in app folder
- [ ] Spaceship Node.js app configured with correct startup file
- [ ] Environment variables set in cPanel
- [ ] Domain DNS points to Spaceship
- [ ] HTTPS certificate auto-generated (Spaceship auto-provides)
- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Mobile responsive design verified
- [ ] Analytics/GTM codes added (if needed)

---

## 🔧 Production Environment Variables

Create `.env.production` **before building**:

```bash
# Formspree Form Endpoint (get from formspree.io)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional: Analytics/Tracking
# NEXT_PUBLIC_GA_ID=G_XXXXXXX
```

**Note**: `NEXT_PUBLIC_*` variables are embedded at build time. Rebuild if you change them.

---

## 🌐 DNS & Domain Setup Summary

### Timeline
1. **Domain Registration**: 5 mins (instant activation)
2. **Nameserver Propagation**: 15 mins - 48 hours (usually 1-2 hours)
3. **Node.js App Setup**: 5 mins
4. **File Upload**: 5-15 mins
5. **HTTPS Certificate**: Auto-issued by Spaceship (5-10 mins)

### Spaceship Resources
- **Hosting Dashboard**: spaceship.com/login
- **Node.js Docs**: spaceship.com/docs/nodejs
- **Support Portal**: support.spaceship.com

---

## 🐛 Troubleshooting

### App won't start
- Check startup file is set to `server.js`
- Verify `package.json` is in app root
- Check Node.js version compatibility (use 20.x+)
- Review cPanel error logs

### Forms not submitting
- Verify `NEXT_PUBLIC_FORM_ENDPOINT` is set correctly
- Check Formspree account for form ID
- Test submission from contact page
- Check browser console for CORS errors

### Pages showing 404
- Ensure all files copied to app folder
- Check `.next/` folder has `standalone/` contents
- Restart Node.js app in cPanel

### Slow performance
- Upgrade to higher memory plan (1GB+)
- Enable caching headers in Spaceship settings
- Optimize images (already done in codebase)

---

## 📝 Post-Launch Tasks

1. **Set up Formspree**: Go to formspree.io → create free form → copy endpoint
2. **Monitor uptime**: Use Spaceship dashboard or external monitoring
3. **Track inquiries**: Formspree emails go to your contact email
4. **Regular backups**: Use Spaceship backup feature (if available)
5. **Update content**: Edit `lib/site.ts`, `lib/products.ts`, `lib/content.ts` as needed

---

## 🎯 Cost Estimate (Spaceship)

- **Domain** (.com): ~$8-12/year
- **Node.js Hosting**: ~$5-20/month (512MB-2GB)
- **Formspree**: Free (up to 50 submissions/month)
- **SSL Certificate**: Included with Spaceship hosting

**Total**: ~$10-30/month depending on plan

---

Generated: 2026-04-07
Next.js: 16.2.2 with Turbopack
Build Status: ✅ Production Ready
