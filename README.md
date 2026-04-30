# User Management & Clothing Shop

A non-functional React + Vite project showcasing a user authentication system with a clothing shop interface.

## Project Overview

This project demonstrates a multi-page application with user authentication (Login/Registration) and a non-functional clothing e-commerce shop. The app uses React Router for navigation and includes reusable components for modular design.

### Features

- **Authentication Pages**: Login and Registration components
- **Shop Interface**: Non-functional clothing shop with 15 items loaded from `clothes.json`
- **Responsive Layout**: Header with navigation, shop product grid, and footer
- **Mock Data**: All clothing items sourced from `src/data/clothes.json`

### Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Navigation header
│   ├── Shop.jsx          # Product grid (loads from JSON)
│   ├── Footer.jsx        # Site footer
│   ├── LogIn.jsx         # Login page
│   └── Registration.jsx  # Registration page
├── styles/
│   ├── header.css        # Header styling
│   ├── shop.css          # Shop grid and product cards
│   ├── footer.css        # Footer styling
│   ├── base.css          # Base styles
│   └── registration.css  # Auth form styles
├── data/
│   └── clothes.json      # 15 clothing items (names, prices, images)
├── App.jsx               # Main app component (renders Header/Shop/Footer)
└── main.jsx              # Router setup with Auth pages
```

### Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **CSS** - Styling

### Getting Started

```bash
npm install
npm run dev
```

The app routes to `/` (Shop), `/login`, and `/register` pages.

---

*This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.*
