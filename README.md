# My Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing my projects, skills, and professional experience with a clean, elegant design.

## ✨ Features

- 🎨 **Modern, Beautiful UI** - Glassmorphism effects, smooth animations, and gradient designs
- 📱 **Fully Responsive** - Looks great on all devices (desktop, tablet, mobile)
- 🚀 **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🔗 **GitHub Integration** - Automatically fetches and displays my GitHub projects
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid interactions
- 🌙 **Dark Theme** - Modern dark theme with vibrant accent colors
- 📊 **Skills Showcase** - Animated progress bars displaying technical proficiency
- 📧 **Contact Section** - Professional contact information and social links

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Personal Information

Open `src/config.js` and update with personal information:

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

The application will be available at `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service.

## 🎨 Customization

### Update Personal Information
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
│   ├── config.js    # Personal configuration
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
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

- Ensure the GitHub username in `config.js` is correct for project fetching
- Only public, non-forked repositories are displayed
- Projects are sorted by last updated date
- The site automatically generates preview images for each project

## 📄 License

This project is open source and available under the MIT License.

