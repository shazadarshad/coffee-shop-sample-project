# Brew Haven Café - Modern Coffee Shop Website

A fully responsive, modern front-end website for a local coffee shop built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean UI/UX with coffee-themed color palette
- 📱 Fully responsive (mobile-first design)
- ⚡ Smooth animations with Framer Motion
- 🎯 SEO-friendly and accessible
- ☕ Four pages: Home, Menu, About Us, and Contact

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd brew-haven-cafe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build
4. Deploy!

The build command is automatically set to `npm run build` and the output directory is `dist`.

### Other Platforms

For other deployment platforms, run:
```bash
npm run build
```

The `dist` folder contains the production-ready files.

## Project Structure

```
src/
├── components/     # Reusable components (Navbar, Footer, etc.)
├── pages/          # Page components (Home, Menu, About, Contact)
├── assets/         # Static assets
├── App.jsx         # Main app component with routing
└── main.jsx        # Entry point
```

## Color Palette

- **Cream**: `#F5F1E8`
- **Brown**: `#8B4513`
- **Beige**: `#D4B896`
- **Dark Green**: `#2D5016`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Made by

Shazad Arshad
