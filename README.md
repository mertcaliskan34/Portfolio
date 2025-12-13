# Portfolio Website

A stunning, modern portfolio website built with React, Vite, and Tailwind CSS. Showcase your projects, skills, and personality with a beautiful, responsive design that will impress employers and clients.

## ✨ Features

- 🎨 **Modern, Beautiful UI** - Glassmorphism effects, smooth animations, and gradient designs
- 📱 **Fully Responsive** - Looks great on all devices (desktop, tablet, mobile)
- 🚀 **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🔗 **GitHub Integration** - Automatically fetches and displays your GitHub projects
- ✨ **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 🌙 **Dark Theme** - Modern dark theme with vibrant accent colors
- 📊 **Skills Showcase** - Animated progress bars for your technical skills
- 📧 **Contact Section** - Easy ways for potential employers to reach you

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your Information

Open `src/config.js` and update with your personal information:

```javascript
export const config = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  githubUsername: "your-github-username", // IMPORTANT: For fetching projects
  // ... update other fields
}
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📦 Deployment to Netlify

### Easy Method (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site" 🎉

Your site will be live at `your-site-name.netlify.app`!

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Customization

### Update Your Information
Edit `src/config.js` to customize:
- Personal information (name, bio, location, email)
- Social media links
- Skills and proficiency levels
- GitHub username (for auto-fetching projects)

### Change Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add Custom Projects
If you want to manually add projects, add them to the `featuredProjects` array in `config.js`.

## 📁 Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config.js    # Your personal configuration
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── netlify.toml     # Netlify configuration
└── package.json     # Dependencies
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **GitHub API** - Fetching repositories

## 📝 Notes

- Make sure your GitHub username in `config.js` is correct
- Only public, non-forked repositories are displayed
- Projects are sorted by last updated date
- The site automatically generates preview images for each project

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for showcasing your amazing work!**

