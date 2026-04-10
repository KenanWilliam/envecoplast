# Spaceship Hosting Migration Guide
## Moving Envecoplast from Vercel to Spaceship cPanel

This guide walks you through migrating your Next.js application (envecoplast.com) from Vercel to Spaceship's cPanel-based hosting with automated push-to-deploy via GitHub Actions.

---

## Table of Contents
1. [Prerequisites & Hosting Plan Requirements](#1-prerequisites--hosting-plan-requirements)
2. [Verify DNS & Nameservers](#2-verify-dns--nameservers)
3. [Set Up Node.js App in cPanel](#3-set-up-nodejs-app-in-cpanel)
4. [Generate and Configure SSH Keys](#4-generate-and-configure-ssh-keys)
5. [Configure GitHub Actions Secrets](#5-configure-github-actions-secrets)
6. [Git Push Triggers Auto-Deploy](#6-git-push-triggers-auto-deploy)
7. [Enable HTTPS/SSL](#7-enablehttpsssl)
8. [Set Environment Variables](#8-set-environment-variables)
9. [Test the Deployment](#9-test-the-deployment)
10. [Troubleshooting](#10-troubleshooting)
11. [Rollback Procedure](#11-rollback-procedure)

---

## ⚠️ 1. Prerequisites & Hosting Plan Requirements

### Step 1.1: Verify Your Spaceship Plan Supports Node.js

Before proceeding, confirm your Spaceship hosting plan includes Node.js support.

**What you need:**
- **Minimum Plan:** Business plan or higher
  *(Shared Starter plans do NOT support Node.js applications)*
- **Alternative:** VPS plan if you prefer lower price with more control

**How to verify in Spaceship Dashboard:**
1. Log in to [spaceship.com](https://spaceship.com)
2. Navigate to **Hosting** → **My Hosting Accounts**
3. Click the account associated with **envecoplast.com**
4. Look for a **Plan Details** or **Plan Type** section
5. Confirm it says **Business**, **Agency**, **VPS**, or higher

**What you should see:**
A plan name like "Business Web Hosting" or "VPS" (NOT "Starter" or "Personal")

⚠️ **If you only see Starter:** You must upgrade. Contact Spaceship sales or upgrade via the dashboard.

### Step 1.2: Verify cPanel Access

1. Go to [spaceship.com](https://spaceship.com) → **Hosting** → Click your hosting account
2. Look for a **cPanel Login** button (or link labeled "Manage")
3. Click it — you should land on your cPanel dashboard
4. In the left sidebar, look for a section called **Software** or **Developer**
5. Inside, look for **Setup Node.js App**

**If you see "Setup Node.js App":** ✅ You're ready to proceed.
**If you don't see it:** Your plan doesn't support Node.js. Upgrade or contact support.

---

## ✅ 2. Verify DNS & Nameservers

Your domain should already be registered and configured on Spaceship. Let's verify.

### Step 2.1: Check Nameservers

1. Log in to [spaceship.com](https://spaceship.com)
2. Navigate to **Domains** → **Manage Domains**
3. Find **envecoplast.com** in the list
4. Click on it to view details
5. Look for **Nameservers** section

**You should see DNS pointed to Spaceship's nameservers.** They typically look like:
- `ns1.spaceship.com`
- `ns2.spaceship.com`
- `ns3.spaceship.com`
- `ns4.spaceship.com`

**If these are set correctly:** ✅ Continue to step 2.2.

### Step 2.2: Check DNS Records

1. Still in the Domains section, find **DNS Settings** or **Manage DNS**
2. Click on **envecoplast.com**
3. Verify there's an **A record** pointing to your Spaceship server IP

**You should see:**
- **Type:** A
- **Name:** @ (or envecoplast.com)
- **Value:** Your server's IP address (e.g., 192.x.x.x)

**If everything looks correct:** ✅ Continue to section 3.

---

## 🖥️ 3. Set Up Node.js App in cPanel

This is where you configure Next.js to run on Spaceship's server.

### Step 3.1: Log In to cPanel

1. From Spaceship dashboard, click **Manage** on your hosting account
2. You'll be taken to **cPanel dashboard**
3. You should see a home page with various categories (Files, Email, Databases, etc.)

### Step 3.2: Navigate to Node.js Setup

1. In cPanel, look for the **Software** section (or **Developer** in newer cPanel versions)
2. Click **Setup Node.js App**

**What you'll see:**
A page showing:
- "Create Node.js Application"
- Dropdown menus for Node.js version, app mode, paths, etc.

### Step 3.3: Create the Application

Fill in the following fields:

| Field | Value | Notes |
|-------|-------|-------|
| **Node.js Version** | 20.x | Select the latest 20.x LTS version |
| **Application Mode** | Production | NOT "Development" |
| **Application Root** | `/home/{cPanel_username}/envecoplast` | Replace {cPanel_username} with your actual username (check top-right corner of cPanel) |
| **Application URL** | `envecoplast.com` | Select from dropdown; make sure it's the correct domain |
| **Application Startup File** | `server.js` | This file is in the repo root |
| **Directory for Node app modules** | (auto-filled) | Usually `/home/{username}/envecoplast/node_modules` |

**Step-by-step in cPanel:**
1. Select **Node.js version 20.12.x** (or latest 20.x) from dropdown
2. Select **Application Mode: Production**
3. In **Application Root**, clear the default and type: `/home/YOUR_USERNAME/envecoplast`
   - *Find YOUR_USERNAME: Look in top-right corner of cPanel near your name*
4. For **Application URL**, select `envecoplast.com` from the dropdown
5. Set **Application Startup File** to `server.js`
6. Leave other fields as default

### Step 3.4: Create the App

Click the **CREATE** button (or **Add Application**).

**What happens next:**
- cPanel creates the directory `/home/{username}/envecoplast`
- A `node_modules` folder is created
- The app appears in a list as **Active**

**You should see a message like:**
```
Successfully created Node.js application.
```

### Step 3.5: Note Your App Details

On the "Setup Node.js App" page, find your newly created application in the list. Note:
- **Application Root Path:** (will be something like `/home/cpaneluser/envecoplast`)
- **Application URL:** `envecoplast.com`

💾 **Save these values** — you'll need them for GitHub Actions secrets.

---

## 🔐 4. Generate and Configure SSH Keys

To deploy from GitHub Actions, we need SSH access. This section creates an ED25519 key pair.

### Step 4.1: Generate SSH Key Locally

**On your computer (not on the server), open a terminal:**

#### macOS / Linux:
```bash
ssh-keygen -t ed25519 -C "github-actions@envecoplast.com" -f ~/.ssh/spaceship_deploy -N ""
```

#### Windows (PowerShell):
```powershell
ssh-keygen -t ed25519 -C "github-actions@envecoplast.com" -f "$env:USERPROFILE\.ssh\spaceship_deploy" -N ""
```

**What this does:**
- Creates two files in `~/.ssh/`:
  - `spaceship_deploy` (private key — keep secret)
  - `spaceship_deploy.pub` (public key — to upload)

### Step 4.2: Copy Your Public Key

**Terminal command to display the public key:**

#### macOS / Linux:
```bash
cat ~/.ssh/spaceship_deploy.pub
```

#### Windows (PowerShell):
```powershell
Get-Content "$env:USERPROFILE\.ssh\spaceship_deploy.pub"
```

**Output will look like:**
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... github-actions@envecoplast.com
```

📋 **Copy the entire line** — you'll paste it in cPanel next.

### Step 4.3: Add Public Key to cPanel

1. Log in to **cPanel**
2. In the **Security** section, click **SSH Access** (or **Manage SSH Keys**)
3. Click **Authorize key** (or **Import Key**)
4. Paste the public key you copied above
5. Click **Import** or **Add Key**

**What you'll see:**
- Your key appears in the list as "Active"
- Status shows: **Authorized**

### Step 4.4: Test SSH Connection

⚠️ **Important:** Spaceship uses **custom SSH port 21098** (not standard port 22).

Find your SSH port details in cPanel:
1. Go to **Security** → **SSH Access**
2. Look for **SSH port:** in the Access Details section

**Open a terminal and test the connection:**

#### macOS / Linux:
```bash
ssh -i ~/.ssh/id_rsa -p 21098 cpaneluser@your-server-ip
```

#### Windows (PowerShell):
```powershell
ssh -i "$env:USERPROFILE\.ssh\id_rsa" -p 21098 cpaneluser@your-server-ip
```

**Replace:**
- `21098` with your SSH port (from cPanel SSH Access section)
- `cpaneluser` with your actual cPanel username (from cPanel top-right corner)
- `your-server-ip` with your server's IP (from Spaceship dashboard or cPanel)

**Expected output:**
```
[cpaneluser@server ~]$
```

✅ **If you see the prompt:** SSH is working. Type `exit` to logout.
❌ **If connection refused:** Double-check username and IP; verify SSH key was added to cPanel.

### Step 4.5: Get Your Server IP

1. Log in to Spaceship dashboard
2. Navigate to **Hosting** → Click your hosting account
3. Look for **Server Details** or **Technical Details**
4. Find **Server IP** or **Shared IP** (e.g., `192.x.x.x`)

💾 **Save this IP** — you'll need it for GitHub Actions secrets.

---

## 🔑 5. Configure GitHub Actions Secrets

GitHub Actions needs **5 secrets** to deploy automatically.

### Step 5.1: Gather Required Information

Before adding secrets, collect these values:
- **SPACESHIP_HOST:** Your server IP (from step 4.5) — e.g., `209.74.76.3`
- **SPACESHIP_USERNAME:** Your cPanel username (top-right in cPanel) — e.g., `dufoopqjnr`
- **SPACESHIP_SSH_PORT:** Your SSH port (from cPanel SSH Access) — e.g., `21098`
- **SPACESHIP_APP_PATH:** `/home/{username}/envecoplast` (from step 3.5) — e.g., `/home/dufoopqjnr/envecoplast`
- **SPACESHIP_SSH_KEY:** Your private key (from `~/.ssh/id_rsa`)

### Step 5.2: Add SSH Key Secret

1. Go to your GitHub repo: [github.com/yourusername/envecoplast](https://github.com)
2. Click **Settings** (top-right)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**

**Add Secret 1:**
- **Name:** `SPACESHIP_SSH_KEY`
- **Value:** Paste the entire contents of `~/.ssh/id_rsa`
  - **Linux/macOS:** `cat ~/.ssh/id_rsa`
  - **Windows:** `Get-Content "$env:USERPROFILE\.ssh\id_rsa"`

Click **Add secret**

### Step 5.3: Add Host Secret

Click **New repository secret** again.

**Add Secret 2:**
- **Name:** `SPACESHIP_HOST`
- **Value:** Your server IP (e.g., `209.74.76.3`)

Click **Add secret**

### Step 5.4: Add SSH Port Secret

Click **New repository secret** again.

**Add Secret 3:**
- **Name:** `SPACESHIP_SSH_PORT`
- **Value:** Your SSH port (e.g., `21098`)

Click **Add secret**

### Step 5.5: Add Username Secret

Click **New repository secret** again.

**Add Secret 4:**
- **Name:** `SPACESHIP_USERNAME`
- **Value:** Your cPanel username (e.g., `dufoopqjnr`)

Click **Add secret**

### Step 5.6: Add App Path Secret

Click **New repository secret** again.

**Add Secret 5:**
- **Name:** `SPACESHIP_APP_PATH`
- **Value:** `/home/{cPanel_username}/envecoplast`
  - Example: `/home/dufoopqjnr/envecoplast`

Click **Add secret**

**What you should see:**
All 5 secrets listed under "Repository secrets":
- `SPACESHIP_HOST`
- `SPACESHIP_USERNAME`
- `SPACESHIP_SSH_PORT`
- `SPACESHIP_APP_PATH`
- `SPACESHIP_SSH_KEY`

---

## 🚀 6. Git Push Triggers Auto-Deploy

With GitHub Actions set up, every push to the `main` branch automatically builds and deploys.

### Step 6.1: How It Works

```
You push to GitHub main branch
    ↓
GitHub Actions runs (builds Next.js)
    ↓
Build output sent to Spaceship via rsync + SSH
    ↓
Node.js app restarted on server
    ↓
envecoplast.com loads updated code
```

### Step 6.2: Make Your First Deploy

Make a small change to test the workflow:

```bash
# Make a small change (e.g., update a comment)
git add .
git commit -m "test: trigger deployment workflow"
git push origin main
```

### Step 6.3: Watch the Deployment

1. Go to your GitHub repo
2. Click **Actions** tab
3. You'll see a workflow run listed with your commit message
4. Click the run to watch the logs

**You'll see steps:**
- ✅ Checkout code
- ✅ Setup Node.js
- ✅ Install dependencies
- ✅ Build Next.js
- ✅ Prepare deployment package
- ✅ Deploy to Spaceship via rsync
- ✅ Restart Node.js app on Spaceship

**Expected duration:** 2–5 minutes

### Step 6.4: Verify on the Server

Once the workflow shows **green checkmark**, verify the site is live:

1. Open a browser
2. Go to `https://envecoplast.com`
3. You should see your Next.js site running

---

## 🔒 7. Enable HTTPS/SSL

Spaceship provides free Let's Encrypt SSL. Here's how to enable it.

### Step 7.1: Enable AutoSSL in cPanel

1. Log in to **cPanel**
2. Find the **Domains** section, click **Addon Domains** or **Domains**
3. Find `envecoplast.com` in the list
4. Look for an **SSL/TLS** or **Secure** option/icon next to it
5. Click to enable SSL

**Alternative in newer cPanel:**
1. Go **Security** → **SSL/TLS Status**
2. Find your domain
3. Click **Install** or **Manage SSL** next to `envecoplast.com`

**What you should see:**
- Status changes to **Active** or 🔒 icon appears

This uses Let's Encrypt (free) and auto-renews.

### Step 7.2: Force HTTPS Redirects

To ensure all traffic uses HTTPS, add a redirect in your app's `.htaccess` file (if using Apache):

**Create or edit `.htaccess` in your application root:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

Or, add to `server.js` a redirect header:

```javascript
// At the top of server.js, after imports:
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect(301, `https://${req.hostname}${req.url}`);
  } else {
    next();
  }
});
```

---

## 🔧 8. Set Environment Variables

Next.js environment variables can be set in cPanel.

### Step 8.1: Navigate to Environment Variables

1. In **cPanel**, go to **Software** → **Setup Node.js App**
2. Find your **envecoplast** application in the list
3. Look for an **Edit** button or **Environment Variables** option
4. Click it

### Step 8.2: Add Environment Variables

If you have any `.env` or `.env.production` variables, add them here.

**Common variables:**
- `NEXT_PUBLIC_FORM_ENDPOINT` — API endpoint for contact forms
- `NODE_ENV` — should be "production"

**To add a variable:**
1. Click **Add Variable** (or similar)
2. **Name:** (e.g., `NEXT_PUBLIC_FORM_ENDPOINT`)
3. **Value:** (e.g., `https://api.envecoplast.com/contact`)
4. Click **Add**

**Note:** Variables starting with `NEXT_PUBLIC_` are exposed to the browser. Don't put secrets there.

### Step 8.3: Update Google Search Console Verification

From the original SEO task, you need to add your Google Search Console token:

1. In GitHub, edit `app/layout.tsx`
2. Find the metadata section
3. Replace `metadata.verification.google` with your actual token (from Google Search Console)

```typescript
// In app/layout.tsx
export const metadata: Metadata = {
  // ... other fields ...
  verification: {
    google: "YOUR_ACTUAL_GOOGLE_TOKEN_HERE",
  },
};
```

4. Commit and push — GitHub Actions will automatically redeploy.

---

## ✔️ 9. Test the Deployment

### Step 9.1: Verify Site Is Live

1. Open browser
2. Go to `https://envecoplast.com`
3. Check that the site loads and all pages work
4. Check links, forms, images

### Step 9.2: Check Server Logs

If something goes wrong, check server logs:

1. Open a terminal and SSH into the server:
   ```bash
   ssh -i ~/.ssh/spaceship_deploy your_username@your_server_ip
   ```

2. View Node.js app logs:
   ```bash
   cd /home/your_username/envecoplast
   tail -f logs/error.log
   ```

**Common log locations in cPanel Node.js apps:**
- `/home/{username}/envecoplast/logs/error.log`
- `/home/{username}/envecoplast/logs/console.log`

### Step 9.3: Monitor GitHub Actions

After each git push, monitor the workflow:

1. Go to GitHub repo → **Actions** tab
2. Click the latest run
3. All steps should be green ✅

**If a step fails:**
- Click the failed step to see the error message
- Scroll through the logs to diagnose
- Common issues are listed in section 10 (Troubleshooting)

---

## 🐛 10. Troubleshooting

### Issue: "Connection timed out" or "Permission denied" for SSH

**Cause:** Wrong port, username, or SSH key format.

**Fix:**
1. Verify your SSH port from cPanel → **Security** → **SSH Access** → **Access Details**
2. Use the correct port in your SSH command:
   ```bash
   ssh -i ~/.ssh/id_rsa -p YOUR_PORT your_username@server_ip
   ```
3. Ensure your private key is in **OpenSSH format** (not PuTTY format)
   - If using PuTTY, export the key using PuTTY Key Generator → Conversions → Export OpenSSH Key

---

**Fix:**
1. SSH into the server
2. Run:
   ```bash
   cd /home/your_username/envecoplast
   npm ci --production
   ```
3. Then restart the app (touch `tmp/restart.txt` or restart from cPanel)

---

### Issue: "Port 3000 is already in use"

**Cause:** Another process is running on port 3000.

**Fix:**
1. SSH into server
2. Find the process:
   ```bash
   lsof -i :3000
   ```
3. Kill it:
   ```bash
   kill -9 <PID>
   ```
4. Restart the app from cPanel

---

### Issue: Static Assets Return 404

**Cause:** `.next/static` directory wasn't copied to the server.

**Fix in GitHub Actions:**
The `deploy.yml` file should copy static files. Verify the step:
```yaml
cp -r .next/static deploy/.next/
cp -r public deploy/
```

If it's missing, update the deploy.yml workflow.

---

### Issue: Deployment Hangs or Times Out

**Cause:** rsync to server is slow, or SSH key authentication is failing.

**Fix:**
1. Test SSH connection manually:
   ```bash
   ssh -i ~/.ssh/spaceship_deploy your_username@your_server_ip
   ```
2. If that fails, verify:
   - SSH key was added to cPanel
   - GitHub secret `SPACESHIP_SSH_KEY` has correct private key
   - `SPACESHIP_HOST`, `SPACESHIP_USERNAME` are correct

---

### Issue: App Restarts But Site Doesn't Update

**Cause:** Old process still running, or port binding issue.

**Fix:**
1. In cPanel, go to **Software** → **Setup Node.js App**
2. Find your app, click **Stop**
3. Wait 10 seconds
4. Click **Start**
5. Visit site in browser (clear cache: Ctrl+Shift+Delete)

---

### Issue: "Fatal: Could Not Read From Remote Repository"

**Cause:** SSH key permissions are wrong (deployment can't access GitHub).

**This is NOT a Spaceship issue** — it's a Spaceship-to-GitHub connection issue, which GitHub Actions handles for you. If this appears in logs, check:
- GitHub repo is public OR deploy user has access
- No Git operations should be happening on Spaceship (only rsync transfers)

---

## 🔄 11. Rollback Procedure

If a deployment breaks the site, you can quickly rollback.

### Step 11.1: Revert the Git Commit

```bash
# Find the commit before the bad one:
git log --oneline -n 5

# Revert to the previous commit:
git revert HEAD  # or git reset --soft HEAD~1 and re-commit

# Push:
git push origin main
```

**What happens:**
- GitHub Actions triggers automatically
- Previous version is deployed
- Site rolls back in ~3 minutes

### Step 11.2: Manual Rollback (If Needed)

If you can't wait for GitHub Actions:

1. SSH into server:
   ```bash
   ssh -i ~/.ssh/spaceship_deploy your_username@your_server_ip
   ```

2. Check if a backup exists:
   ```bash
   ls -la /home/your_username/envecoplast_backup/
   ```

3. If backup exists, restore it:
   ```bash
   rm -rf /home/your_username/envecoplast
   cp -r /home/your_username/envecoplast_backup /home/your_username/envecoplast
   touch /home/your_username/envecoplast/tmp/restart.txt
   ```

4. Restart the app from cPanel

---

## 📋 Quick Reference: Commands

### Local Setup
```bash
# Generate SSH key in cPanel (not locally)
# Download the private key from cPanel → Security → SSH Access

# Test SSH connection (with custom port)
ssh -i ~/.ssh/id_rsa -p 21098 your_username@server_ip
```

### cPanel / Server
```bash
# SSH into server (with custom port)
ssh -i ~/.ssh/id_rsa -p 21098 your_username@server_ip

# View Node.js app status
cd /home/your_username/envecoplast && npm -v

# Install dependencies
npm ci --production

# View error logs
tail -f logs/error.log

# Restart the app
touch tmp/restart.txt
```

### GitHub Actions
```bash
# Push to trigger deployment
git push origin main

# View workflow logs
# Go to: GitHub repo → Actions → Click workflow run
```

---

## 🎯 Summary: Deployment Workflow

1. **You make code changes locally**
2. **You push to GitHub (`git push`)**
3. **GitHub Actions automatically:**
   - Checks out code
   - Installs dependencies
   - Builds Next.js (output in `.next/standalone/`)
   - Transfers files to Spaceship via rsync + SSH
   - Restarts the Node.js app
4. **Within 3–5 minutes, your site is live at `envecoplast.com`**

No manual login to cPanel needed for deploys — it's fully automated.

---

## ❓ Getting Help

- **Spaceship Support:** [spaces.com/support](https://spaceship.com/support)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Actions Docs:** [docs.github.com/actions](https://docs.github.com/en/actions)
- **Node.js Docs:** [nodejs.org/docs](https://nodejs.org/docs)

---

**Last Updated:** April 2026
**Framework:** Next.js (App Router)
**Target:** Spaceship cPanel Hosting
**Domain:** envecoplast.com
