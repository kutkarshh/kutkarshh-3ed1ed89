# Utkarsh Kumar - Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Stunning Dark Theme** - Royal blue and neon purple gradients with glassmorphism
- **Smooth Animations** - Powered by Framer Motion
- **Fully Responsive** - Works on all devices
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Easy to Customize** - All data in separate files

## 🛠️ Tech Stack

- React 18 + Vite
- TypeScript
- TailwindCSS
- Framer Motion
- shadcn/ui components
- Lucide Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/
├── data/
│   ├── profile.ts       # Personal info
│   ├── skills.ts        # Skills data
│   ├── experience.ts    # Work experience
│   ├── projects.ts      # Projects
│   ├── achievements.ts  # Achievements
│   └── education.ts     # Education & certs
├── pages/
│   └── Index.tsx
└── index.css            # Design system
```

## 🎨 Customization

### Update Personal Information

Edit the files in `src/data/` folder:

1. **profile.ts** - Name, role, bio, contact info
2. **skills.ts** - Technical skills by category
3. **experience.ts** - Work history
4. **projects.ts** - Featured projects
5. **achievements.ts** - Awards and achievements
6. **education.ts** - Education and certifications

### Change Colors

Edit `src/index.css` to modify:
- Primary color (royal blue)
- Accent color (neon purple)
- Background colors
- Gradients

## 🚀 Deployment to GitHub Pages

1. Push code to GitHub repository
2. Go to Settings > Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically deploy on push to `main`

Your site will be available at: `https://yourusername.github.io/repository-name`

## 📧 Contact Form Setup (EmailJS)

1. Create account at [EmailJS](https://emailjs.com)
2. Create email service and template
3. Update `Contact.tsx` with your EmailJS credentials

## 🏃 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ❤️ by Utkarsh Kumar
