# Hike Marketplace

A full-stack web application for a hiking gear marketplace, built with React (frontend), Express (backend), MongoDB (database), and Tailwind CSS for styling.

---

## Table of Contents
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Main Components](#main-components)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Authentication & Security](#authentication--security)
- [Development](#development)

---

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB URI, JWT secret, etc.
3. **Run the application:**
   ```sh
   npm run dev
   ```
   - The frontend will be available at `http://localhost:3000` by default.

---

## Project Structure

```
app/
├── server/
│   ├── middlewares/
│   │   ├── authenticate.mjs
│   │   ├── errorHandler.mjs
│   │   ├── middleware.mjs
│   │   └── passportAuthenticate.mjs
│   ├── models/
│   │   ├── UserRegistered.js
│   │   ├── UserLogin.js
│   │   └── User.mjs
│   ├── responses/
│   │   ├── login.mjs
│   │   ├── main.mjs
│   │   ├── register.mjs
│   │   └── responses.mjs
│   └── server.mjs
├── src/
│   ├── App.tsx
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── home/ui/Home.tsx
│   │   ├── login/ui/Login.tsx
│   │   ├── register/ui/Register.tsx
│   │   ├── cart/ui/Cart.tsx
│   ├── shared/
│   │   ├── button/ui/Button.tsx
│   │   ├── catalog-card/ui/CatalogCard.tsx
│   │   ├── footer/ui/Footer.tsx
│   │   ├── freedom-benefits/ui/FreedomBenefits.tsx
│   │   ├── header/ui/Header.tsx
│   │   ├── hikes-section/ui/HikesSection.tsx
│   │   ├── overlay/ui/Overlay.tsx
│   │   ├── product-card/ui/ProductCard.tsx
│   │   ├── product-card/ui/MiniProductCard.tsx
│   │   └── shop-promotion-section/ui/ShopPromotion.tsx
│   └── widgets/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Main Components
- **Header** (`src/shared/header/ui/Header.tsx`): Navigation bar and login/logout controls.
- **Footer** (`src/shared/footer/ui/Footer.tsx`): Footer with contact and social links.
- **Home** (`src/pages/home/ui/Home.tsx`): Main landing page, product showcase.
- **Cart** (`src/pages/cart/ui/Cart.tsx`): Shopping cart and order summary.
- **Login/Register** (`src/pages/login/ui/Login.tsx`, `src/pages/register/ui/Register.tsx`): Authentication forms.
- **ProductCard/MiniProductCard** (`src/shared/product-card/ui/`): Product display cards for catalog and cart.
- **CatalogCard** (`src/shared/catalog-card/ui/CatalogCard.tsx`): Category cards.
- **HikesSection** (`src/shared/hikes-section/ui/HikesSection.tsx`): Promotional hiking section.
- **FreedomBenefits** (`src/shared/freedom-benefits/ui/FreedomBenefits.tsx`): Membership benefits section.
- **ShopPromotion** (`src/shared/shop-promotion-section/ui/ShopPromotion.tsx`): Promotional banners.
- **Button** (`src/shared/button/ui/Button.tsx`): Reusable button component.
- **Overlay** (`src/shared/overlay/ui/Overlay.tsx`): Overlay for modals and banners.

---

## Backend Overview
- **Express server** (`server/server.mjs`): Main server entry point.
- **Authentication**: Passport.js with JWT, CSRF protection, and session management.
- **MongoDB Models**: User registration and login tracking (`UserRegistered`, `UserLogin`).
- **API Endpoints**:
  - `/api/login` - User login
  - `/api/register` - User registration
  - `/api/logout` - User logout
  - `/api/check-auth` - Check authentication status

---

## Frontend Overview
- **React + Vite**: Fast development with HMR.
- **Tailwind CSS**: Utility-first responsive styling.
- **Component-based structure**: All UI is modular and reusable.

---

## Authentication & Security
- **JWT**: Used for stateless authentication, stored in HTTP-only cookies.
- **CSRF Protection**: All forms use CSRF tokens for security.
- **Password Hashing**: User passwords are hashed with bcrypt before storage.

---

## Development
- **Start the app**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`

---

## License
MIT
