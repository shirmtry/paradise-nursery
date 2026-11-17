# Paradise Nursery

**Paradise Nursery** is a React shopping cart application for an online
houseplant store. Users can browse houseplants grouped into three categories,
add them to a cart managed with Redux, adjust quantities, and view the total
cart amount.

## Features

- Landing page with the company name and a "Get Started" button
- Product listing page with 3 categories (Air Purifying, Aromatic Fragrant,
  Insect Repellent) and 6 plants per category
- Each plant shows a thumbnail, name, and price
- "Add to Cart" button per plant that adds the product, disables after adding,
  and increments the cart icon count
- Navbar with links to Home, Plants, About, and Cart, plus a dynamic cart badge
- Shopping cart page with per-item quantity controls (+/-), delete button,
  per-item totals, and the total cart amount
- Checkout button that shows a "Coming Soon" message
- "Continue Shopping" button that links back to the product listing
- Redux slice (`CartSlice.jsx`) with `addItem`, `removeItem`, and
  `updateQuantity` reducers

## Tech Stack

- React 19
- Redux Toolkit + React Redux
- React Router
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Open the URL printed by Vite (by default http://localhost:5173).

## Project Structure

```
src/
  App.jsx            # Landing page (company name + Get Started button)
  App.css            # Landing page styles incl. background image
  AboutUs.jsx        # About Us page with company details
  ProductList.jsx    # Product listing page
  CartItem.jsx       # Shopping cart page
  CartSlice.jsx      # Redux slice for the cart
  store.js           # Redux store configuration
  data/plants.js     # Plant catalog data
  components/
    Navbar.jsx       # Shared navbar with cart badge
```

## Build

```bash
npm run build
```
