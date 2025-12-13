# Deployment Guide for Netlify

## Quick Deploy Steps

### Option 1: Deploy via Netlify UI (Recommended for beginners)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select your repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Configure your site**
   - Build command: `npm run build` (already set in netlify.toml)
   - Publish directory: `dist` (already set in netlify.toml)
   - Click "Deploy site"

4. **Customize your domain**
   - Netlify will provide a random domain (e.g., `your-site-123.netlify.app`)
   - You can change it in Site settings → Domain management → Options → Edit site name

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build your site**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Before Deploying

1. **Update your information in `src/config.js`**
   - Add your name, title, bio
   - Add your GitHub username (important for fetching projects)
   - Add your social media links
   - Add your email and location
   - Update your skills

2. **Test locally**
   ```bash
   npm install
   npm run dev
   ```

3. **Build and preview**
   ```bash
   npm run build
   npm run preview
   ```

## Important Notes

- Make sure your GitHub username in `config.js` is correct - this is used to fetch your repositories
- The site will automatically fetch your public GitHub repositories
- Only non-forked repositories will be displayed
- If you have private repositories you want to showcase, you'll need to add them manually to the `featuredProjects` array in `config.js`

## Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow Netlify's instructions to configure your DNS

## Environment Variables (if needed)

If you need to use environment variables:
1. Go to Site settings → Environment variables
2. Add your variables
3. Access them in your code with `import.meta.env.VITE_YOUR_VARIABLE`

## Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **Projects not showing**: Verify your GitHub username is correct in `config.js`
- **Styling issues**: Make sure Tailwind CSS is properly configured
- **404 errors**: The `netlify.toml` includes redirect rules for SPA routing

