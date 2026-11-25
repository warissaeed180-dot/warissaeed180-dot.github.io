# Red Pepper — Pizza & More (Frontend v3)

Black background · red buttons · red + white text · **RED PEPPER** logo —
a full working frontend for **pizzas & Chinese (Wok & Roll)**, UK names and £ pricing.
Design inspired by the Pizza Hut layout the owner shared (categories, best sellers,
item customisation popup, top deals), rebuilt in Red Pepper's own style.

## Run it
Open `index.html` in any browser — no build step. Or deploy the folder to Vercel / Netlify.

## What's new in v3
- **Welcome splash screen** — the dough-tossing photo sits in a red-glowing frame with
  an upgraded welcome layout, animated title, menu CTA, and Login / Sign up shortcut.
  The welcome screen shows once per session.
- **Header** — Home · Menu · Deals · Build Your Own, plus a **working Login**
  (create account / login, stored on the device; header shows your name, profile shows
  your loyalty stamps, logout included) and the bag.
- **Explore Categories** — horizontal cards (Pizzas, Chinese, Deals, Sides, Desserts,
  Build Your Own) that jump & filter the menu.
- **Wok & Roll transition** — entering the Chinese menu shows an animated wok-cooking
  loader with the message "Wok & Roll! Your Chinese Menu Is Loading".
- **Pizza menu transition** — selecting the pizza kitchen or Pizzas category reveals
  an animated fire oven with the message "Preparing Your Pizza Menu".
- **Kitchen-specific sections** — the custom pizza builder and its links are hidden
  while the Chinese menu is selected, and return with the pizza menu.
- **Item popup (like the reference)** — click any pizza or Chinese dish to open its card:
  full **ingredients** list + allergen note, sizes (Small 10" / Medium 12" / Large 14" /
  XL 16"), crust (Classic / Thin & Crispy / Pan / Stuffed), extra toppings (+£0.99 etc.),
  quantity stepper and a live **Add to Cart £xx.xx** button. Chinese items get portion
  size + spice level + extras; sides/desserts get dips & extras.
- **UK pizza menu (12 pizza-kitchen items)** — Red Pepperoni, Truffle Shroom, Hot Honey
  Heat, Margherita, BBQ Chicken Feast, Garden Veggie Supreme, Burrata & Spinach,
  Buffalo Mozzarella & Basil + sides & brownie. Chinese menu: 8 Wok & Roll items.
- **Top Deals** — Deal for 2 £16.99 · Deal for 3 £26.99 · Family Deal (M) £29.99 ·
  Family Deal (L) £42.99, all addable to the bag.
- **Make Your Customized Pizza — with working animation** — the pizza slowly rotates,
  the sauce colour changes (Tomato / BBQ / Spicy), the crust changes (Thin / Classic /
  Pan / Stuffed), the size scales, and photo toppings pop onto the isolated golden
  cheese pizza image in real time. Toppings are spaced around the full pizza without
  clustering; extra mozzarella covers most of the surface underneath them. Topping
  image cards and the live price update as options are selected.
- **Card hover effects** — menu, category, rewards and loyalty cards zoom slightly and
  glow red along the border when hovered.
- **Footer with loyalty cards** — Rewards card (stamps), Gold Member card and a £25
  Gift Card, followed by the copyright and pricing row.

## Cart (fully working, carried from v2)
Quantity +/−, remove, clear, subtotal, free delivery over £25 (£2.95 under, progress
bar), PEPPER10 = 10% off, cart saved across reloads, checkout form → order
confirmation with order number & ETA, floating "View bag" button, favourites (♥).

## Files
`index.html` · `style.css` · `script.js` · `images/` (all photos local, incl. dough-toss.png)
