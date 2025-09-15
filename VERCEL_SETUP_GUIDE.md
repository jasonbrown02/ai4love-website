# Vercel Setup Guide for AI4Love Marketing Website

## Step 1: Create a New Project

1. From the Vercel dashboard, click "Import Git Repository"
2. Select your GitHub account (jasonbrown02)
3. Create a new repository for the marketing website (e.g., "ai4love-website")
4. Click "Create" and then "Import"

## Step 2: Configure Project Settings

When configuring the project, use these settings:

### Build and Development Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Development Command**: `npm run dev`

### Environment Variables
No environment variables are required for the marketing website.

### Project Name
- Set a descriptive name like "ai4love-marketing"

## Step 3: Deploy Settings

- **Production Branch**: `main`
- **Framework**: Next.js

## Step 4: Deployment

After configuring the settings, click "Deploy" to start the deployment process.

## Step 5: Verify Public Access

Once deployed, your site will be available at a URL like:
`https://ai4love-marketing.vercel.app`

## Additional Settings (Optional)

### Custom Domain
1. Go to Project Settings > Domains
2. Add your custom domain (e.g., marketing.ai4love.com)
3. Follow the instructions to verify domain ownership

### Automatic Deployments
By default, Vercel will automatically deploy when you push changes to your GitHub repository.

### Preview Deployments
Vercel automatically creates preview deployments for pull requests.
