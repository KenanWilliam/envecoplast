# Deployment Guide for cPanel

## Quick Start
This application is now configured to run on cPanel with Node.js. Follow these steps:

## Prerequisites
- Node.js 20.x installed on cPanel
- SSH access to your cPanel server
- GitHub Actions enabled for CI/CD

## Option 1: Automatic Deployment (Recommended)

GitHub Actions will automatically build and deploy when you push to `main` branch.

### Setup: Configure GitHub Secrets
Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

1. **SPACESHIP_HOST** - Your server hostname/IP
2. **SPACESHIP_USERNAME** - SSH username
3. **SPACESHIP_SSH_KEY** - Private SSH key (generate with `ssh-keygen`)
4. **SPACESHIP_SSH_PASSPHRASE** - Passphrase for SSH key (if encrypted)
5. **SPACESHIP_SSH_PORT** - SSH port (usually 22)
6. **SPACESHIP_APP_PATH** - Full path where app is deployed (e.g., `/home/user/envecoplast`)

### Generate SSH Key
```bash
ssh-keygen -t rsa -b 4096 -f deploy_key -N "passphrase"
cat deploy_key # Copy this to SPACESHIP_SSH_KEY secret
cat deploy_key.pub # Add this to ~/.ssh/authorized_keys on server
```

## Option 2: Manual Deployment

### 1. SSH into your cPanel server
```bash
ssh -p 22 username@your-host.com
```

### 2. Navigate to your app directory
```bash
cd /path/to/envecoplast
```

### 3. Install dependencies
```bash
npm ci
```

### 4. Build the application
```bash
npm run build
```

### 5. Create .htaccess (if not already done)
The `.htaccess` file should proxy requests to your Node.js app:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
</IfModule>

<IfModule mod_proxy.c>
  ProxyPreserveHost On
</IfModule>
```

### 6. Create Node.js App in cPanel
1. Log in to cPanel
2. Go to "Node.js" → "Create Application"
3. Set:
   - **Document Root**: `/public_html` (or your deployment path)
   - **Application Startup File**: `server.js`
   - **Node.js version**: 20.x or later
   - **Application Port**: 3000 (or let cPanel assign)

### 7. Start the application
- Click "Start App" in cPanel's Node.js manager
- The app should now be accessible at your domain

## Deployment Workflow

### Files that matter:
- `server.js` - Entry point, starts the Node.js server
- `ecosystem.config.js` - PM2 configuration (used by cPanel)
- `.htaccess` - Proxies Apache requests to Node.js
- `package.json` - Dependencies and scripts
- `.next/` - Built Next.js app (auto-generated)
- `node_modules/` - Dependencies (auto-installed)

### What happens in automatic deployment:
1. GitHub Actions builds the app: `npm run build`
2. Copies built files to `.next/standalone/`
3. Copies static assets and node_modules
4. Deploys to cPanel server via rsync
5. Restarts the Node.js app (touches `tmp/restart.txt`)

## Troubleshooting

### App won't start
- Check: `npm start` works locally
- Verify `server.js` exists and is executable
- Check cPanel logs in Node.js manager

### Port conflicts
- If port 3000 is busy, cPanel may assign a different port
- Update `.htaccess` if using a different port

### .htaccess not working
- Ensure `mod_rewrite` and `mod_proxy` are enabled
- Check file permissions: `chmod 644 .htaccess`
- Verify it's in the correct directory (application root)

### Deployment fails
- Check GitHub Actions logs for errors
- Verify SSH credentials are correct
- Ensure `SPACESHIP_APP_PATH` is the correct directory

### App crashes after deploy
- SSH to server and check: `npm start`
- Look for missing dependencies or build errors
- Check system resources (disk space, memory)

## Environment Variables

Create a `.env.production` file on your server (not in git):
```bash
NODE_ENV=production
PORT=3000
# Add other env vars as needed
```

## Performance Optimizations

1. Enable caching in .htaccess
2. Use PM2 clustering (configured in ecosystem.config.js)
3. Monitor memory usage (max 512MB in ecosystem.config.js)
4. Consider CDN for static assets

## Support

For issues:
1. Check cPanel's Node.js app manager logs
2. SSH and run: `npm run build` to test locally
3. Check GitHub Actions workflow status
4. Review error logs in `logs/` directory
