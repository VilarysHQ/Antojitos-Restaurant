
# Antojitos — Restaurant Landing Page

A modern, responsive, and interactive restaurant website built with **React, Vite, Tailwind CSS, and Motion**.

Antojitos is a conceptual Peruvian restaurant specializing in rotisserie chicken, crispy broaster chicken, and comfort food. The website combines a warm visual identity with interactive features designed to make discovering dishes and preparing orders simple and enjoyable.

Developed as a portfolio project by **Vilarys**, showcasing modern frontend development, responsive design, and user-focused digital experiences.

---

## Overview

Antojitos is designed to demonstrate how a restaurant can establish a distinctive online presence through a modern and functional website.

The project focuses on three main goals:

- **Visual appeal:** Create an engaging gastronomic experience through photography, typography, and warm colors.
- **User experience:** Provide intuitive navigation and responsive layouts across different devices.
- **Ordering experience:** Allow visitors to explore dishes, manage a shopping cart, and prepare orders through WhatsApp.

The website is built as a frontend application, without requiring a traditional backend or payment gateway.

---

## Features

### Responsive Design

A mobile-first experience optimized for smartphones, tablets, laptops, and desktop monitors.

- Adaptive navigation.
- Touch-friendly interactions.
- Horizontal product carousels on mobile.
- Responsive grids on larger screens.
- Optimized layouts and spacing.

### Interactive Digital Menu

Visitors can explore the restaurant's products using a visual and interactive catalog.

- Category filtering.
- Product photographs.
- Individual descriptions and prices.
- Horizontal scrolling on mobile.
- Product selection and cart integration.

### Shopping Cart

A shared shopping cart manages products selected from the menu and promotional sections.

- Add products.
- Increase or decrease quantities.
- Remove individual products.
- Clear the entire cart.
- Automatically calculate estimated totals.
- Review selections in a sliding cart drawer.

### Promotions

Dedicated promotional banners highlight featured restaurant combos.

- Distinctive promotional designs.
- Responsive image presentation.
- Interactive add-to-cart buttons.
- Integration with the shared shopping cart.

### WhatsApp Integration

The website supports preparing orders and contact messages for WhatsApp.

- Generate messages containing selected products.
- Include quantities and estimated totals.
- Prepare inquiries through the contact form.
- Open WhatsApp with a prefilled message.

**Note:** Orders are not automatically submitted or confirmed. Users must complete the messaging process through WhatsApp.

### Animations and Interactions

Motion-based animations enhance the interface without overwhelming the experience.

- Scroll-triggered reveals.
- Scale and fade transitions.
- Staggered animations.
- Hover effects.
- Interactive buttons.
- Reduced-motion accessibility support.

### Contact Section

A responsive contact area includes:

- Contact form.
- WhatsApp messaging integration.
- Restaurant information placeholders.
- Gastronomic background imagery.
- Responsive layouts for different screen sizes.

---

## Website Sections

| Section | Description |
|---------|-------------|
| Home | Restaurant introduction and primary calls to action |
| Menu | Interactive food catalog with category filters |
| Promotions | Featured combos and promotional offers |
| About | Restaurant concept and brand presentation |
| Testimonials | Demonstration customer testimonial layouts |
| How to Order | Three-step ordering process |
| Contact | Contact form and WhatsApp integration |
| Footer | Navigation, branding, and contact information |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Component-based user interface |
| Vite | Development server and build tooling |
| Tailwind CSS | Utility-first styling and responsive design |
| Motion | Animations and transitions |
| Lucide React | Interface icons |
| JavaScript / JSX | Application logic and components |
| WebP | Optimized food photography |

---

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── Menu/
│   │   ├── Navbar/
│   │   └── Promotions/
│   │
│   ├── components/
│   │   ├── About/
│   │   ├── Cart/
│   │   ├── Home/
│   │   ├── HowToOrder/
│   │   ├── InfoCards/
│   │   ├── Menu/
│   │   ├── Navbar/
│   │   ├── Promotions/
│   │   └── Testimonials/
│   │
│   ├── data/
│   │   ├── About/
│   │   ├── Home/
│   │   ├── HowToOrder/
│   │   ├── Menu/
│   │   ├── Navbar/
│   │   ├── Promotions/
│   │   └── Testimonials/
│   │
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The project follows a modular architecture, separating interface components, application data, assets, and reusable logic.

---

## Getting Started

### Prerequisites

Ensure that Node.js and npm are installed.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/VilarysHQ/Antojitos-Restaurant.git
```

2. Navigate to the frontend directory:

```bash
cd Antojitos-Restaurant/frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your terminal.

---

## Environment Variables

The application supports an optional WhatsApp configuration.

Create a `.env.local` file inside the `frontend` directory:

```env
VITE_WHATSAPP_NUMBER=
```

Set this variable to an authorized WhatsApp destination number, including the international country code without spaces or symbols.

Example format for Peru:

```text
51XXXXXXXXX
```

When no number is configured, WhatsApp ordering and contact functionality should remain unavailable.

Do not commit personal or private contact information to the repository.

---

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

---

## Design Approach

The design is inspired by modern restaurant websites, combining vibrant food photography with a clean and welcoming interface.

### Color Palette

| Color | Usage |
|-------|-------|
| Warm White | Main backgrounds and content surfaces |
| Dark Brown | Headings and primary typography |
| Orange | Accents, highlights, and calls to action |
| Red | Product actions and promotional emphasis |
| Green | WhatsApp-related actions |

### Design Principles

- Clear visual hierarchy.
- Consistent spacing.
- High-quality gastronomic imagery.
- Accessible interaction patterns.
- Mobile-first layouts.
- Lightweight image assets.
- Subtle and purposeful animations.

---

## Performance Considerations

The project uses several frontend optimization techniques:

- WebP images for restaurant photography.
- Lazy loading for noncritical images.
- Vite production builds.
- Responsive layouts using Tailwind CSS.
- Reduced-motion support.
- Reusable React components.

Further optimization and testing may be carried out before deployment.

---

## Project Status

**Status:** Frontend development and refinement.

The main website sections and interactive ordering experience have been implemented.

Future improvements may include:

- Additional responsive testing.
- Accessibility auditing.
- Image optimization.
- Shopping cart persistence.
- SEO improvements.
- Performance profiling.
- Production deployment.

---

## Disclaimer

Antojitos is a **fictional restaurant concept** developed for portfolio and demonstration purposes.

Restaurant names, products, prices, promotions, testimonials, addresses, and other commercial information are illustrative.

The website does not represent an operational restaurant or a live commercial ordering service.

No actual payments or restaurant orders are processed by this project.

---

## Developed By

**Vilarys**

*Digital solutions for a world in motion.*

Vilarys is a technology brand focused on building modern websites, digital platforms, and custom software solutions.

GitHub: [VilarysHQ](https://github.com/VilarysHQ)

---

## License

All rights reserved unless a separate license is provided.

The project's source code, brand assets, and visual materials are not automatically licensed for redistribution or commercial reuse.

---

**Antojitos — El sabor que te provoca volver.**
