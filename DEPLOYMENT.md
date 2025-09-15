# AI4Love Marketing Website Deployment Guide

This document provides instructions for deploying the AI4Love marketing website using GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" button in the top right corner and select "New repository"
3. Name your repository (e.g., "ai4love-website")
4. Choose whether to make it public or private
5. Click "Create repository"

### 2. Initialize Git and Push to GitHub

```bash
# Navigate to the project directory
cd /Users/jasonbrown/CascadeProjects/ai4love-website

# Initialize Git repository if not already done
git init

# Add all files to Git
git add .

# Commit the changes
git commit -m "Initial commit"

# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/ai4love-website.git

# Push to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch and "/docs" folder
5. Click "Save"

### 4. Prepare for GitHub Pages Deployment

Before deploying, you need to copy the static export files to a docs folder:

```bash
# Create docs directory
mkdir -p docs

# Copy all files from out directory to docs
cp -r out/* docs/

# Add .nojekyll file to docs directory to prevent Jekyll processing
touch docs/.nojekyll

# Add and commit these changes
git add docs .nojekyll
git commit -m "Add static files for GitHub Pages"
git push
```

### 5. Verify Deployment

1. Wait a few minutes for GitHub Pages to build your site
2. Visit `https://YOUR_USERNAME.github.io/ai4love-website/` to see your deployed site

## Updating the Website

To update the website after making changes:

1. Make your changes to the source code
2. Rebuild the static export:
   ```bash
   npm run build
   ```
3. Copy the updated files to the docs directory:
   ```bash
   cp -r out/* docs/
   ```
4. Commit and push the changes:
   ```bash
   git add docs
   git commit -m "Update website content"
   git push
   ```

## Using a Custom Domain (Optional)

1. Go to your repository settings on GitHub
2. Scroll down to the "GitHub Pages" section
3. Under "Custom domain", enter your domain name
4. Click "Save"
5. Configure your domain's DNS settings to point to GitHub Pages

## Troubleshooting

- If your site is not displaying correctly, check that the `.nojekyll` file exists in both the root and docs directories
- Ensure all paths in the HTML files are relative, not absolute
- Check the GitHub Pages build logs for any errors
