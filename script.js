// ══════════ Red Pepper v3 — Pizza & Chinese, splash, item modal, animated builder, login, full cart ══════════
const PIZZA_EXTRAS = [
  ["Mushroom", 0.99],
  ["Black Olives", 0.99],
  ["Onion", 0.99],
  ["Jalapeños", 0.99],
  ["Mixed Peppers", 0.99],
  ["Sweetcorn", 0.99],
  ["Extra Cheese", 1.75],
  ["Pepperoni", 1.5],
];
const WOK_EXTRAS = [
  ["Extra Chicken", 1.99],
  ["Extra Prawns", 2.49],
  ["Extra Veg", 0.99],
  ["Extra Noodles", 1.49],
  ["Extra Rice", 1.49],
  ["Chilli Oil", 0.49],
];
const SIDE_EXTRAS = [
  ["Garlic Dip", 0.75],
  ["BBQ Dip", 0.75],
  ["Chilli Cheese Dip", 0.95],
  ["Extra Parmesan", 0.75],
];
const DESSERT_EXTRAS = [
  ["Vanilla Ice Cream Scoop", 1.5],
  ["Warm Chocolate Sauce", 0.75],
  ["Crushed Hazelnuts", 0.95],
];
const MENU = {
  pizza: {
    label: "Pizza & Grill — hand-stretched, wood-fired, loaded.",
    tabs: [
      ["all", "All"],
      ["pizza", "Pizza"],
      ["sides", "Sides"],
      ["desserts", "Desserts"],
    ],
    items: [
      {
        id: "red-pepperoni",
        type: "pizza",
        name: "The Red Pepperoni",
        price: 13.95,
        cat: "pizza",
        img: "images/The%20Red%20Pepperoni%20Pizza.png",
        badges: [
          ["Bestseller", "dark"],
          ["🌶 Spicy", "red"],
        ],
        desc: "Our signature spicy pepperoni, mozzarella, house tomato sauce & fresh basil.",
        ing: [
          "Spicy pepperoni",
          "Mozzarella",
          "House tomato sauce",
          "Fresh basil",
          "Oregano",
          "San Marzano tomatoes",
        ],
      },
      {
        id: "truffle-shroom",
        type: "pizza",
        name: "Truffle Shroom",
        price: 14.5,
        cat: "pizza",
        img: "images/Truffle%20Shroom.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "Wild mushrooms, truffle oil, creamy mozzarella & parmesan.",
        ing: [
          "Wild mushrooms",
          "Truffle oil",
          "Mozzarella",
          "Parmesan",
          "Garlic",
          "Thyme",
        ],
      },
      {
        id: "hot-honey",
        type: "pizza",
        name: "Hot Honey Heat",
        price: 14.95,
        cat: "pizza",
        img: "images/Hot%20Honey%20Heat.png",
        badges: [
          ["🌶 Spicy", "red"],
          ["Popular", "dark"],
        ],
        desc: "Hot honey, fennel sausage, jalapeños & a little attitude.",
        ing: [
          "Hot honey",
          "Fennel sausage",
          "Jalapeños",
          "Mozzarella",
          "Tomato sauce",
          "Chilli flakes",
        ],
      },
      {
        id: "margherita",
        type: "pizza",
        name: "Classic Margherita",
        price: 11.5,
        cat: "pizza",
        img: "images/Classic%20Margherita.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "San Marzano tomato, creamy mozzarella, basil & olive oil.",
        ing: [
          "San Marzano tomatoes",
          "Mozzarella",
          "Fresh basil",
          "Extra virgin olive oil",
          "Sea salt",
        ],
      },
      {
        id: "bbq-feast",
        type: "pizza",
        name: "BBQ Chicken Feast",
        price: 14.95,
        cat: "pizza",
        img: "images/BBQ%20Chicken%20Feast.png",
        badges: [["Popular", "dark"]],
        desc: "Pulled BBQ chicken, pineapple, onion & coriander with a smoky BBQ drizzle.",
        ing: [
          "Pulled chicken",
          "BBQ sauce",
          "Pineapple",
          "Onion",
          "Mozzarella",
          "Coriander",
        ],
      },
      {
        id: "veggie-supreme",
        type: "pizza",
        name: "Garden Veggie Supreme",
        price: 12.95,
        cat: "pizza",
        img: "images/Garden%20Veggie%20Supreme.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "Cherry tomatoes, basil, mozzarella & olives on our signature tomato base.",
        ing: [
          "Cherry tomatoes",
          "Fresh basil",
          "Mozzarella",
          "Black olives",
          "Tomato sauce",
          "Oregano",
        ],
      },
      {
        id: "burrata-spinach",
        type: "pizza",
        name: "Burrata & Spinach",
        price: 14.95,
        cat: "pizza",
        img: "images/Burrata%20%26%20Spinach.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "Creamy burrata, wilted spinach & a pesto drizzle, wood-fired.",
        ing: [
          "Burrata",
          "Spinach",
          "Pesto",
          "Mozzarella",
          "Tomato sauce",
          "Garlic oil",
        ],
      },
      {
        id: "mozzarella-basil",
        type: "pizza",
        name: "Buffalo Mozzarella & Basil",
        price: 13.5,
        cat: "pizza",
        img: "images/Buffalo%20Mozzarella%20%26%20Basil.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "Buffalo mozzarella & torn basil over rich tomato, blistered in the wood oven.",
        ing: [
          "Buffalo mozzarella",
          "Fresh basil",
          "San Marzano tomatoes",
          "Olive oil",
          "Sea salt",
        ],
      },
      {
        id: "garlic-bites",
        type: "side",
        name: "Garlic Dough Bites",
        price: 5.25,
        cat: "sides",
        img: "images/Garlic%20Dough%20Bites.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "Pillowy dough bites, garlic butter & parmesan dip.",
        ing: [
          "Pizza dough",
          "Garlic butter",
          "Parmesan",
          "Parsley",
          "Parmesan dip",
        ],
      },
      {
        id: "crispy-wings",
        type: "side",
        name: "Crispy Wings",
        price: 7.95,
        cat: "sides",
        img: "images/Crispy%20Wings.png",
        badges: [["🌶 Spicy", "red"]],
        desc: "Six crispy wings tossed in your choice of house sauce.",
        ing: [
          "Chicken wings",
          "House spice rub",
          "Spring onion",
          "Sesame",
          "House sauce",
        ],
      },
      {
        id: "loaded-fries",
        type: "side",
        name: "Loaded Pepperoni Fries",
        price: 6.5,
        cat: "sides",
        img: "images/Loaded%20Pepperoni%20Fries.png",
        badges: [["Bestseller", "dark"]],
        desc: "Golden fries, melted mozzarella, pepperoni & smoky dip.",
        ing: [
          "Golden fries",
          "Mozzarella",
          "Pepperoni",
          "Parmesan",
          "Herbs",
          "Smoky dip",
        ],
      },
      {
        id: "brownie",
        type: "dessert",
        name: "Chocolate Brownie",
        price: 5.5,
        cat: "desserts",
        img: "images/Chocolate%20Brownie.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "Warm, gooey chocolate brownie with a crisp top.",
        ing: [
          "Dark chocolate",
          "Butter",
          "Cocoa",
          "Brown sugar",
          "Free-range eggs",
        ],
      },
    ],
  },
  wok: {
    label: "Wok & Roll — wok-fired Chinese favourites, straight off the flame.",
    tabs: [
      ["all", "All"],
      ["noodles", "Noodles"],
      ["mains", "Mains"],
      ["starters", "Starters"],
    ],
    items: [
      {
        id: "chow-mein",
        type: "wok",
        name: "Hakka Chow Mein",
        price: 11.95,
        cat: "noodles",
        img: "images/Hakka%20Chow%20Mein.png",
        badges: [["Bestseller", "dark"]],
        desc: "Wok-tossed egg noodles, crunchy veg, dark soy & toasted sesame.",
        ing: [
          "Egg noodles",
          "Dark soy",
          "Bean sprouts",
          "Carrot",
          "Spring onion",
          "Sesame oil",
          "Cabbage",
        ],
      },
      {
        id: "dan-dan",
        type: "wok",
        name: "Dan Dan Noodle Soup",
        price: 12.5,
        cat: "noodles",
        img: "images/Dan%20Dan%20Noodle%20Soup.png",
        badges: [["🌶 Spicy", "red"]],
        desc: "Chilli-oil noodle broth, fresh herbs & a crispy wok topping.",
        ing: [
          "Wheat noodles",
          "Chilli oil",
          "Sichuan pepper",
          "Pak choi",
          "Spring onion",
          "Sesame",
          "Rich broth",
        ],
      },
      {
        id: "sweet-sour",
        type: "wok",
        name: "Sweet & Sour Chicken",
        price: 12.95,
        cat: "mains",
        img: "images/Sweet%20%26%20Sour%20Chicken.png",
        badges: [["Popular", "dark"]],
        desc: "Glazed chicken & broccoli in our tangy sweet & sour sauce, steamed rice on the side.",
        ing: [
          "Chicken",
          "Sweet & sour glaze",
          "Broccoli",
          "Peppers",
          "Pineapple",
          "Steamed rice",
        ],
      },
      {
        id: "crispy-chilli-chicken",
        type: "wok",
        name: "Crispy Chilli Chicken",
        price: 12.95,
        cat: "mains",
        img: "images/Crispy%20Chilli%20Chicken.png",
        badges: [["🌶 Spicy", "red"]],
        desc: "Golden crispy chicken with chilli & garlic crunch. Seriously moreish.",
        ing: [
          "Crispy chicken",
          "Dried chillies",
          "Garlic",
          "Spring onion",
          "Honey glaze",
          "Sesame",
        ],
      },
      {
        id: "egg-fried-rice",
        type: "wok",
        name: "Egg Fried Rice",
        price: 9.95,
        cat: "mains",
        img: "images/Egg%20Fried%20Rice.png",
        badges: [["🌿 Vegetarian", "green"]],
        desc: "Smoky wok-fried rice, egg, peas, sweetcorn & spring onion.",
        ing: [
          "Jasmine rice",
          "Free-range egg",
          "Peas",
          "Sweetcorn",
          "Spring onion",
          "Light soy",
        ],
      },
      {
        id: "special-rice",
        type: "wok",
        name: "Special Fried Rice",
        price: 13.5,
        cat: "mains",
        img: "images/Special%20Fried%20Rice.png",
        badges: [["Bestseller", "dark"]],
        desc: "Prawn & chicken special rice, wok-seared with herbs & a squeeze of lemon.",
        ing: [
          "King prawns",
          "Chicken",
          "Jasmine rice",
          "Herbs",
          "Lemon",
          "Spring onion",
          "Soy",
        ],
      },
      {
        id: "gyoza",
        type: "wok",
        name: "Steamed Gyoza",
        price: 6.95,
        cat: "starters",
        img: "images/Steamed%20Gyoza.png",
        badges: [],
        desc: "Delicate steamed dumplings, black sesame & a soy-ginger dip.",
        ing: [
          "Dumpling pastry",
          "Seasoned filling",
          "Black sesame",
          "Ginger",
          "Soy dip",
        ],
      },
      {
        id: "xiao-long-bao",
        type: "wok",
        name: "Pork Xiao Long Bao",
        price: 7.95,
        cat: "starters",
        img: "images/Pork%20Xiao%20Long%20Bao.png",
        badges: [["Popular", "dark"]],
        desc: "Steamed soup dumplings in a bamboo basket. Handle with care — they burst.",
        ing: [
          "Pork",
          "Rich soup broth",
          "Ginger",
          "Spring onion",
          "Wheat pastry",
          "Black vinegar",
        ],
      },
    ],
  },
};
const DEALS = [
  {
    id: "deal-2",
    type: "deal",
    name: "Deal for 2",
    price: 16.99,
    was: 21.2,
    img: "images/Classic%20Margherita.png",
    desc: "1 Medium Pizza (Classic) + Garlic Dough Bites + 2 soft drinks.",
    ing: ["1 Medium Classic pizza", "Garlic Dough Bites", "2 soft drinks"],
  },
  {
    id: "deal-3",
    type: "deal",
    name: "Deal for 3",
    price: 26.99,
    was: 33.4,
    img: "images/Hot%20Honey%20Heat.png",
    desc: "1 Large Pizza (Classic) + Crispy Wings + 1 large drink.",
    ing: ["1 Large Classic pizza", "Crispy Wings (6)", "1 large drink"],
  },
  {
    id: "family-m",
    type: "deal",
    name: "Family Deal (Medium)",
    price: 29.99,
    was: 38.9,
    img: "images/Truffle%20Shroom.png",
    desc: "2 Medium Pizzas (Classic) + Garlic Dough Bites + 1 large drink.",
    ing: ["2 Medium Classic pizzas", "Garlic Dough Bites", "1 large drink"],
  },
  {
    id: "family-l",
    type: "deal",
    name: "Family Deal (Large)",
    price: 42.99,
    was: 54.8,
    img: "images/The%20Red%20Pepperoni%20Pizza.png",
    desc: "2 Large Pizzas (Classic) + 6 pcs Garlic Bites + Loaded Fries + 1 large drink.",
    ing: [
      "2 Large Classic pizzas",
      "Garlic Bites (6 pcs)",
      "Loaded Pepperoni Fries",
      "1 large drink",
    ],
  },
];
const ALL_ITEMS = [...MENU.pizza.items, ...MENU.wok.items, ...DEALS];
const money = (n) => "£" + n.toFixed(2);
const ALLERGENS = {
  pizza:
    "Allergens: contains gluten & milk. Made in a kitchen handling nuts, egg & soya.",
  wok: "Allergens: contains gluten, egg, sesame & soya. Made in a kitchen handling shellfish & nuts.",
  side: "Allergens: contains gluten & milk. Ask us about today’s sauce allergens.",
  dessert: "Allergens: contains gluten, egg & milk. May contain nuts.",
  deal: "Allergens: contains gluten & milk. See individual items for full allergen info.",
};
// ── State ──
const WHATSAPP_NUMBER = "";
const ORDER_MODES = {
  Delivery: {
    eta: "35–50 min",
    fee: 2.95,
    freeOver: 25,
    pay: ["Card on delivery", "Cash on delivery", "Pay at counter"],
  },
  Takeaway: {
    eta: "15–20 min",
    fee: 0,
    freeOver: 0,
    pay: ["Pay at counter", "Card at counter", "Cash at counter"],
  },
  "Dine-in": {
    eta: "20–25 min",
    fee: 0,
    freeOver: 0,
    pay: ["Pay at counter", "Card at table", "Cash at table"],
  },
};
let kitchen = "pizza",
  activeCat = "all",
  searchTerm = "",
  promoApplied = false;
let orderType = "Delivery";
try {
  const savedMode = localStorage.getItem("redpepper-order-mode");
  if (savedMode && ORDER_MODES[savedMode]) orderType = savedMode;
} catch (e) {}
let cart = new Map();
let favs = new Set();
try {
  JSON.parse(localStorage.getItem("redpepper-cart-v3") || "[]").forEach(
    ([k, v]) => cart.set(k, v),
  );
  promoApplied = localStorage.getItem("redpepper-promo") === "PEPPER10";
  favs = new Set(JSON.parse(localStorage.getItem("rp-favs") || "[]"));
} catch (e) {}
function persist() {
  try {
    localStorage.setItem("redpepper-cart-v3", JSON.stringify([...cart]));
    localStorage.setItem("redpepper-promo", promoApplied ? "PEPPER10" : "");
    localStorage.setItem("redpepper-order-mode", orderType);
    localStorage.setItem("rp-favs", JSON.stringify([...favs]));
  } catch (e) {}
}
const toast = document.getElementById("toast");
let toastTimer;
function showToast(m) {
  toast.textContent = m;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
const scrollToEl = (id) =>
  document.getElementById(id)?.scrollIntoView?.({ behavior: "smooth" });

// ── Splash ──
const splash = document.getElementById("splash");
function hideSplash() {
  if (!splash || splash.classList.contains("done")) return;
  splash.classList.add("done");
  try {
    sessionStorage.setItem("rp-splash", "1");
  } catch (e) {}
  setTimeout(() => {
    splash.style.display = "none";
  }, 650);
}
if (splash) {
  let seen = false;
  try {
    seen = sessionStorage.getItem("rp-splash") === "1";
  } catch (e) {}
  if (seen) {
    splash.style.display = "none";
  } else {
    setTimeout(hideSplash, 50000);
    splash.addEventListener("click", (e) => {
      if (!e.target.closest("button")) hideSplash();
    });
  }
}
document.getElementById("splashEnter").addEventListener("click", (e) => {
  e.stopPropagation();
  hideSplash();
});

// ── Menu rendering ──
const grid = document.getElementById("menuGrid"),
  tabsEl = document.getElementById("menuTabs");
function cartQtyFor(id) {
  let n = 0;
  cart.forEach((v) => {
    if (v.id === id) n += v.qty;
  });
  return n;
}
function badgeHTML(i) {
  return i.badges
    .map(
      ([t, c], ix) =>
        `<span class="badge ${c === "red" ? "red-badge" : c} ${ix > 0 && c !== "red" ? "right" : ""}">${t}</span>`,
    )
    .join("");
}
function cardHTML(i, isDeal) {
  const q = cartQtyFor(i.id);
  return `<article class="card" data-open="${i.id}">
    <div class="card-img"><img src="${i.img}" alt="${i.name}" loading="lazy">${isDeal?`<span class="save-badge">SAVE ${money(i.was-i.price)}</span>`:''}
      <button class="fav-btn ${favs.has(i.id) ? "faved" : ""}" data-fav="${i.id}" aria-label="Save ${i.name} to favourites">${favs.has(i.id) ? "♥" : "♡"}</button>
      <span class="in-cart-badge ${q ? "show" : ""}" data-incart="${i.id}">${q} in bag</span>
      <button class="add-btn" data-quick="${i.id}" aria-label="Quick add ${i.name}">+</button></div>
    <div class="card-body"><div class="card-row"><h3>${i.name}</h3><strong>${isDeal ? "" : ""}${money(i.price)}</strong></div>
      ${isDeal ? `<p class="deal-contents">${i.desc}</p>` : `<p>${i.desc}</p>`}
      <button class="quick-add" data-open-btn="${i.id}">${isDeal ? "View deal" : "Customise"} <span>→</span></button>
      <button class="quick-add" data-quick="${i.id}" style="margin-left:14px">Quick add <span>→</span></button></div>
  </article>`;
}
function bindCards(scope) {
  scope.querySelectorAll("[data-quick]").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(b.dataset.quick);
    }),
  );
  scope.querySelectorAll("[data-fav]").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = b.dataset.fav;
      favs.has(id) ? favs.delete(id) : favs.add(id);
      persist();
      b.classList.toggle("faved", favs.has(id));
      b.textContent = favs.has(id) ? "♥" : "♡";
      showToast(
        favs.has(id) ? "Saved to favourites ♥" : "Removed from favourites",
      );
    }),
  );
  scope
    .querySelectorAll("[data-open]")
    .forEach((c) =>
      c.addEventListener("click", () => openItem(c.dataset.open)),
    );
  scope.querySelectorAll("[data-open-btn]").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      openItem(b.dataset.openBtn);
    }),
  );
}
function renderTabs() {
  tabsEl.innerHTML = MENU[kitchen].tabs
    .map(
      ([k, l]) =>
        `<button class="tab ${k === activeCat ? "active" : ""}" data-filter="${k}">${l}</button>`,
    )
    .join("");
  tabsEl.querySelectorAll(".tab").forEach((t) =>
    t.addEventListener("click", () => {
      activeCat = t.dataset.filter;
      renderMenu();
    }),
  );
}
function renderMenu() {
  renderTabs();
  const items = MENU[kitchen].items.filter(
    (i) =>
      (activeCat === "all" || i.cat === activeCat) &&
      (i.name + " " + i.desc).toLowerCase().includes(searchTerm),
  );
  document.getElementById("menuSub").textContent = MENU[kitchen].label;
  document.getElementById("tabNote").textContent =
    `${items.length} thing${items.length !== 1 ? "s" : ""} worth eating`;
  document.getElementById("noResults").hidden = items.length > 0;
  grid.innerHTML = items.map((i) => cardHTML(i, false)).join("");
  bindCards(grid);
}
function renderDeals() {
  const dg = document.getElementById("dealsGrid");
  dg.innerHTML = DEALS.map((d) => cardHTML(d, true)).join("");
  bindCards(dg);
}
function renderMenuCountsOnly() {
  document.querySelectorAll("[data-incart]").forEach((el) => {
    const q = cartQtyFor(el.dataset.incart);
    el.textContent = `${q} in bag`;
    el.classList.toggle("show", q > 0);
  });
}

// ── Item modal ──
const itemModal = document.getElementById("itemModal");
let modalItem = null,
  modalQty = 1;
function optionSections(i) {
  if (i.type === "pizza")
    return `
    <div class="opt-section-head"><strong>Choose an option</strong><span>Required</span></div>
    <div class="pizza-size-grid">
      ${[
        ["Small", 10, -3],
        ["Medium", 12, 0],
        ["Large", 14, 4],
        ["Extra Large", 16, 7],
      ]
        .map(
          ([l, s, a], ix) =>
            `<label class="pizza-size-card"><input type="radio" name="im-size" value="${l} ${s}&quot;" data-adj="${a}" ${ix === 1 ? "checked" : ""}><span class="pizza-size-info"><strong>${l}</strong><small>${s} inch</small></span><strong class="opt-price">${money(i.price + a)}</strong></label>`,
        )
        .join("")}
    </div>
    <div class="opt-section-head"><strong>Crust</strong><span>Required</span></div>
    <div class="pizza-option-grid">
      ${[
        ["Classic Hand-Stretched", 0],
        ["Thin & Crispy", 0],
        ["Pan", 1.5],
        ["Stuffed Crust", 2.5],
      ]
        .map(
          ([l, a], ix) =>
            `<label class="pizza-option-card"><input type="radio" name="im-crust" value="${l}" data-adj="${a}" ${ix === 0 ? "checked" : ""}><span class="pizza-option-name">${l}</span><strong class="opt-price">+${money(a)}</strong></label>`,
        )
        .join("")}
    </div>
    <div class="opt-section-head"><strong>Extra Toppings</strong><span>Optional · select any</span></div>
    <div class="pizza-option-grid">
      ${PIZZA_EXTRAS.map(([l, a]) => `<label class="pizza-option-card"><input type="checkbox" class="im-extra" value="${l}" data-adj="${a}"><span class="pizza-option-name">${l}</span><strong class="opt-price">+${money(a)}</strong></label>`).join("")}
    </div>`;
  if (i.type === "wok")
    return `
    <div class="opt-section-head"><strong>Portion size</strong><span>Required</span></div>
    <div class="pizza-option-grid">
      ${[
        ["Regular", 0],
        ["Large", 3],
      ]
        .map(
          ([l, a], ix) =>
            `<label class="pizza-option-card"><input type="radio" name="im-size" value="${l}" data-adj="${a}" ${ix === 0 ? "checked" : ""}><span class="pizza-option-name">${l}</span><strong class="opt-price">+${money(a)}</strong></label>`,
        )
        .join("")}
    </div>
    <div class="opt-section-head"><strong>Spice level</strong><span>Required</span></div>
    <div class="pizza-option-grid">
      ${["Mild", "Medium", "Hot", "Extra Hot 🌶🌶"].map((l, ix) => `<label class="pizza-option-card"><input type="radio" name="im-spice" value="${l}" data-adj="0" ${ix === 1 ? "checked" : ""}><span class="pizza-option-name">${l}</span><strong class="opt-price">+${money(0)}</strong></label>`).join("")}
    </div>
    <div class="opt-section-head"><strong>Extras</strong><span>Optional</span></div>
    <div class="pizza-option-grid">
      ${WOK_EXTRAS.map(([l, a]) => `<label class="pizza-option-card"><input type="checkbox" class="im-extra" value="${l}" data-adj="${a}"><span class="pizza-option-name">${l}</span><strong class="opt-price">+${money(a)}</strong></label>`).join("")}
    </div>`;
  if (i.type === "deal")
    return `<div class="opt-section-head"><strong>What's inside</strong><span>Fixed deal</span></div><p class="modal-sub" style="margin-top:10px">Everything in this deal is included at one fixed price — no swaps needed. Add it and you're fed.</p>`;
  const extras = i.type === "dessert" ? DESSERT_EXTRAS : SIDE_EXTRAS;
  return `<div class="opt-section-head"><strong>Make it yours</strong><span>Optional extras</span></div>
    <div class="pizza-option-grid">
      ${extras.map(([l, a]) => `<label class="pizza-option-card"><input type="checkbox" class="im-extra" value="${l}" data-adj="${a}"><span class="pizza-option-name">${l}</span><strong class="opt-price">+${money(a)}</strong></label>`).join("")}
    </div>`;
}
function modalUnitPrice() {
  let p = modalItem.price;
  itemModal
    .querySelectorAll("input[type=radio]:checked")
    .forEach((r) => (p += parseFloat(r.dataset.adj || 0)));
  itemModal
    .querySelectorAll(".im-extra:checked")
    .forEach((c) => (p += parseFloat(c.dataset.adj || 0)));
  return p;
}
function modalDetail() {
  const parts = [];
  itemModal
    .querySelectorAll("input[type=radio]:checked")
    .forEach((r) => parts.push(r.value.replace(/&quot;/g, '"')));
  const ex = [...itemModal.querySelectorAll(".im-extra:checked")].map(
    (c) => c.value,
  );
  if (ex.length) parts.push("Extras: " + ex.join(", "));
  return parts.join(" · ");
}
function refreshModalTotal() {
  document.getElementById("imTotal").textContent = money(
    modalUnitPrice() * modalQty,
  );
  document.getElementById("imQty").textContent = modalQty;
}
function openItem(id) {
  modalItem = ALL_ITEMS.find((i) => i.id === id);
  if (!modalItem) return;
  modalQty = 1;
  document.getElementById("imImg").src = modalItem.img;
  document.getElementById("imName").textContent = modalItem.name;
  document.getElementById("imDesc").textContent = modalItem.desc;
  document.getElementById("imFromPrice").textContent =
    (modalItem.type === "pizza" ? "From " : "") + money(modalItem.price);
  document.getElementById("imIngredients").innerHTML = modalItem.ing
    .map((x) => `<span>${x}</span>`)
    .join("");
  document.getElementById("imAllergen").textContent =
    ALLERGENS[modalItem.type] || "";
  document.getElementById("imOptions").innerHTML = optionSections(modalItem);
  itemModal
    .querySelectorAll("input")
    .forEach((inp) => inp.addEventListener("change", refreshModalTotal));
  refreshModalTotal();
  itemModal.hidden = false;
}
function closeItem() {
  itemModal.hidden = true;
}
document
  .querySelector("[data-close-item]")
  .addEventListener("click", closeItem);
itemModal.addEventListener("click", (e) => {
  if (e.target === itemModal) closeItem();
});
document.getElementById("imInc").addEventListener("click", () => {
  modalQty++;
  refreshModalTotal();
});
document.getElementById("imDec").addEventListener("click", () => {
  if (modalQty > 1) modalQty--;
  refreshModalTotal();
});
document.getElementById("imAdd").addEventListener("click", () => {
  addItem(
    {
      id: modalItem.id,
      name: modalItem.name,
      detail: modalDetail(),
      price: modalUnitPrice(),
      img: modalItem.img,
    },
    modalQty,
  );
  closeItem();
  openCart();
});

// ── Cart core (v2, qty-aware) ──
let cartCounterFrame = null;
let cartBumpTimeout = null;
function animateCartCounter(previousCount) {
  const counter = document.getElementById("bagCount");
  const target = totals().count;
  const start = Number.isFinite(previousCount) ? previousCount : target;
  if (cartCounterFrame) cancelAnimationFrame(cartCounterFrame);
  const started = performance.now();
  counter.dataset.value = String(target);
  function step(now) {
    const progress = Math.min(1, (now - started) / 600);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.round(start + (target - start) * eased);
    if (progress < 1) cartCounterFrame = requestAnimationFrame(step);
    else {
      counter.textContent = target;
      counter.dataset.value = String(target);
      cartCounterFrame = null;
    }
  }
  counter.textContent = start;
  cartCounterFrame = requestAnimationFrame(step);

  const bb = document.getElementById("bagBtn");
  bb.classList.remove("bump");
  counter.classList.remove("bump");
  void bb.offsetWidth;
  bb.classList.add("bump");
  counter.classList.add("bump");
  if (cartBumpTimeout) clearTimeout(cartBumpTimeout);
  cartBumpTimeout = setTimeout(() => {
    bb.classList.remove("bump");
    counter.classList.remove("bump");
    cartBumpTimeout = null;
  }, 600);
}
function addItem({ id, name, detail, price, img, customization }, qty = 1) {
  const bagCount = document.getElementById("bagCount");
  const previousCount = Number(bagCount.dataset.value ?? bagCount.textContent);
  const key = customization
    ? `custom-pizza::${customization.signature}`
    : detail
      ? `${id}::${detail}`
      : id;
  if (cart.has(key)) cart.get(key).qty += qty;
  else
    cart.set(key, {
      id,
      name,
      detail: detail || "",
      price,
      img,
      customization: customization || null,
      qty,
    });
  persist();
  renderCart();
  renderMenuCountsOnly();
  animateCartCounter(Number.isFinite(previousCount) ? previousCount : 0);
  showToast(`Added ${name} to your bag 🛍`);
}
function addToCart(id) {
  const it = ALL_ITEMS.find((i) => i.id === id);
  if (it) addItem(it);
}
function totals() {
  let subtotal = 0,
    count = 0;
  cart.forEach((v) => {
    subtotal += v.price * v.qty;
    count += v.qty;
  });
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const mode = ORDER_MODES[orderType];
  const discountedSubtotal = subtotal - discount;
  const delivery =
    orderType === "Delivery" &&
    subtotal > 0 &&
    discountedSubtotal < mode.freeOver
      ? mode.fee
      : 0;
  return {
    subtotal,
    discount,
    delivery,
    total: discountedSubtotal + delivery,
    count,
  };
}
function escapeCartHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
}
function renderCart() {
  const t = totals();
  const mode = ORDER_MODES[orderType];
  const bagCount = document.getElementById("bagCount");
  bagCount.textContent = t.count;
  bagCount.dataset.value = String(t.count);
  document.getElementById("cartMeta").textContent =
    `${orderType} · ${mode.eta} · ${t.count} item${t.count !== 1 ? "s" : ""}`;
  const itemsEl = document.getElementById("cartItems");
  document.getElementById("cartEmpty").style.display = cart.size
    ? "none"
    : "block";
  document.getElementById("cartSummary").hidden = cart.size === 0;
  document.getElementById("freeBarWrap").style.display =
    cart.size && orderType === "Delivery" ? "block" : "none";
  itemsEl.innerHTML = [...cart]
    .map(([key, v]) => {
      const safeKey = escapeCartHTML(key),
        safeImg = escapeCartHTML(v.img),
        safeName = escapeCartHTML(v.name);
      let details = "";
      if (v.customization) {
        const c = v.customization;
        const toppingLines = c.toppings
          .map(
            (topping) =>
              `<span>${escapeCartHTML(topping.label)} <b>+${money(topping.price)}</b></span>`,
          )
          .join("");
        const sizePrice =
          c.sizeAdjustment > 0
            ? `+${money(c.sizeAdjustment)}`
            : c.sizeAdjustment < 0
              ? `−${money(Math.abs(c.sizeAdjustment))}`
              : "Included";
        const crustPrice =
          c.crustAdjustment > 0 ? `+${money(c.crustAdjustment)}` : "Included";
        details = `<div class="ci-detail ci-custom-detail">
        <span><b>Size:</b> ${escapeCartHTML(c.size)} <b>${sizePrice}</b></span>
        <span><b>Crust:</b> ${escapeCartHTML(c.crust)} <b>${crustPrice}</b></span>
        <span><b>Sauce:</b> ${escapeCartHTML(c.sauce)}</span>
        ${toppingLines ? `<div class="ci-toppings"><b>Toppings:</b>${toppingLines}</div>` : "<span><b>Toppings:</b> None</span>"}
      </div>`;
      } else if (v.detail) {
        details = `<p class="ci-detail">${escapeCartHTML(v.detail)}</p>`;
      }
      const priceLabel =
        v.qty > 1
          ? `${money(v.price)} each · ${money(v.price * v.qty)} total`
          : `${money(v.price)} final price`;
      return `<div class="cart-item"><img src="${safeImg}" alt="${safeName}"><div><p class="ci-name">${safeName}</p>${details}<p class="ci-price">${priceLabel}</p></div><div class="ci-right"><div class="qty"><button data-dec="${safeKey}" aria-label="Decrease ${safeName} quantity">−</button><span>${v.qty}</span><button data-inc="${safeKey}" aria-label="Increase ${safeName} quantity">+</button></div><button class="ci-remove" data-remove="${safeKey}">Remove</button></div></div>`;
    })
    .join("");
  itemsEl.querySelectorAll("[data-inc]").forEach((b) =>
    b.addEventListener("click", () => {
      const item = cart.get(b.dataset.inc);
      if (item) {
        item.qty++;
        persist();
        renderCart();
        renderMenuCountsOnly();
      }
    }),
  );
  itemsEl.querySelectorAll("[data-dec]").forEach((b) =>
    b.addEventListener("click", () => {
      const item = cart.get(b.dataset.dec);
      if (!item) return;
      item.qty--;
      if (item.qty <= 0) cart.delete(b.dataset.dec);
      persist();
      renderCart();
      renderMenuCountsOnly();
    }),
  );
  itemsEl.querySelectorAll("[data-remove]").forEach((b) =>
    b.addEventListener("click", () => {
      const item = cart.get(b.dataset.remove);
      const removedName = item?.name || "Item";
      cart.delete(b.dataset.remove);
      persist();
      renderCart();
      renderMenuCountsOnly();
      showToast(`${removedName} removed`);
    }),
  );
  document.getElementById("sumSubtotal").textContent = money(t.subtotal);
  document.getElementById("discountRow").hidden =
    !promoApplied || t.discount === 0;
  document.getElementById("sumDiscount").textContent = "−" + money(t.discount);
  document.getElementById("deliveryLabel").textContent =
    orderType === "Delivery" ? "Delivery" : "No delivery fee";
  document.getElementById("sumDelivery").textContent =
    orderType === "Delivery"
      ? t.delivery === 0 && cart.size
        ? "FREE"
        : money(t.delivery)
      : "FREE";
  document.getElementById("sumTotal").textContent = money(t.total);
  const remaining = Math.max(0, mode.freeOver - (t.subtotal - t.discount));
  document.getElementById("freeBarFill").style.width =
    orderType === "Delivery"
      ? Math.min(100, ((t.subtotal - t.discount) / mode.freeOver) * 100) + "%"
      : "0%";
  document.getElementById("freeBarText").innerHTML =
    orderType === "Delivery"
      ? remaining > 0
        ? `Add <strong>${money(remaining)}</strong> more for <strong>FREE delivery</strong>`
        : `🎉 You've unlocked <strong>FREE delivery</strong>`
      : orderType === "Takeaway"
        ? `<strong>Ready for collection in ${mode.eta}</strong>`
        : `<strong>Served to your table in ${mode.eta}</strong>`;
  const fb = document.getElementById("floatingBag");
  fb.hidden = t.count === 0;
  document.getElementById("floatingTotal").textContent = money(t.total);
}
const drawer = document.getElementById("cartDrawer"),
  overlay = document.getElementById("overlay");
function openCart() {
  drawer.classList.add("open");
  overlay.classList.add("show");
}
function closeCart() {
  drawer.classList.remove("open");
  overlay.classList.remove("show");
}
document.getElementById("bagBtn").addEventListener("click", openCart);
document.getElementById("floatingBag").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.getElementById("clearCart").addEventListener("click", () => {
  cart.clear();
  persist();
  renderCart();
  renderMenuCountsOnly();
  showToast("Bag cleared");
});

// ── Promo ──
function applyPromo(code, msgEl) {
  if (code.toUpperCase() === "PEPPER10") {
    promoApplied = true;
    persist();
    renderCart();
    msgEl.textContent = "PEPPER10 applied — 10% off 🎉";
    showToast("10% off applied 🎉");
  } else {
    msgEl.textContent = code
      ? `"${code}" isn't a valid code — try PEPPER10`
      : "Enter a code first — try PEPPER10";
  }
}
document.getElementById("cartPromoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  applyPromo(
    document.getElementById("cartPromoInput").value.trim(),
    document.getElementById("cartPromoMsg"),
  );
});
document.getElementById("promoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  applyPromo(
    document.getElementById("promoInput").value.trim(),
    document.getElementById("promoMsg"),
  );
  if (promoApplied) setTimeout(openCart, 600);
});

// ── Kitchen / order type / search / categories ──
function setKitchen(k) {
  const changed = k !== kitchen;
  kitchen = k;
  activeCat = "all";
  const wokActive = k === "wok";
  document.getElementById("builder").hidden = wokActive;
  document.querySelector('.main-nav a[href="#builder"]').hidden = wokActive;
  document.querySelector('.cat-card[data-goto="builder"]').hidden = wokActive;
  document
    .querySelectorAll(".kt-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.kitchen === k));
  document.getElementById("menuTitle").innerHTML = wokActive
    ? 'Wok-fired, <span class="red">sorted.</span>'
    : 'Cravings, <span class="red">sorted.</span>';
  renderMenu();
  return changed;
}
function showMenuLoader(loaderId, onComplete) {
  const loader = document.getElementById(loaderId);
  loader.hidden = false;
  requestAnimationFrame(() => loader.classList.add("show"));
  setTimeout(() => {
    loader.classList.remove("show");
    setTimeout(() => {
      loader.hidden = true;
      onComplete();
    }, 270);
  }, 1570);
}
function openKitchen(k) {
  const changed = setKitchen(k);
  if (changed)
    showMenuLoader(k === "wok" ? "wokLoader" : "fireLoader", () =>
      scrollToEl("menu"),
    );
  else scrollToEl("menu");
}
document
  .querySelectorAll(".kt-btn")
  .forEach((b) =>
    b.addEventListener("click", () => openKitchen(b.dataset.kitchen)),
  );
function syncPostcodeBar() {
  const postcodeBar = document.getElementById("postcodeBar");
  if (postcodeBar) postcodeBar.hidden = orderType !== "Delivery";
}
document.querySelectorAll("#orderType .seg-btn").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#orderType .seg-btn")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    orderType = b.dataset.type;
    persist();
    syncPostcodeBar();
    renderCart();
    if (checkoutModal && !checkoutModal.hidden) renderCheckoutMode();
    showToast(`${orderType} selected`);
  }),
);
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderMenu();
});
document.querySelectorAll(".cat-card").forEach((c) =>
  c.addEventListener("click", () => {
    const g = c.dataset.goto;
    if (g === "deals") return scrollToEl("deals");
    if (g === "builder") return scrollToEl("builder");
    if (g === "wok") return openKitchen("wok");
    if (g === "pizza") {
      setKitchen("pizza");
      return showMenuLoader("fireLoader", () => scrollToEl("menu"));
    }
    setKitchen("pizza");
    if (g === "sides") activeCat = "sides";
    if (g === "desserts") activeCat = "desserts";
    renderMenu();
    scrollToEl("menu");
  }),
);
document
  .querySelectorAll(".cinematic-slider .slider-arrow")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const track = document.getElementById(button.dataset.slider);
      if (!track) return;
      const card = track.querySelector(".cat-card,.card");
      const distance =
        card?.getBoundingClientRect()?.width || track.clientWidth * 0.75;
      track.scrollBy({
        left: button.classList.contains("slider-next")
          ? distance + 18
          : -distance - 18,
        behavior: "smooth",
      });
    });
  });
document.querySelectorAll(".main-nav a").forEach((a) =>
  a.addEventListener("click", () => {
    document
      .querySelectorAll(".main-nav a")
      .forEach((x) => x.classList.remove("active"));
    a.classList.add("active");
  }),
);
document.getElementById("postcodeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = document.getElementById("postcodeInput").value.trim().toUpperCase();
  const msg = document.getElementById("postcodeMsg");
  const ok = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/.test(v);
  msg.className = "postcode-msg wrap show" + (ok ? "" : " error");
  msg.textContent = !v
    ? "Please enter a postcode first."
    : ok
      ? `Good news — we deliver to ${v} in ${ORDER_MODES.Delivery.eta} 🚚`
      : "That postcode doesn’t look quite right — try e.g. SW1A 1AA.";
});

// ── Animated pizza builder ──
const BUILDER_BASE = 11.95;
let bSizeAdj = 0,
  bSizeLabel = 'Medium 12"',
  bBaseExtra = 0,
  bBaseLabel = "Classic",
  bBaseType = "classic",
  bSauceLabel = "Tomato";
const TOPPING_DETAILS = {
  pepperoni: {
    image: null,
    positions: [
      [50, 12],
      [76, 19],
      [88, 42],
      [82, 68],
      [65, 84],
      [39, 88],
      [17, 73],
      [12, 47],
      [25, 21],
      [50, 38],
      [66, 53],
      [38, 62],
      [53, 74],
      [31, 46],
    ],
  },
  mushroom: {
    image: "images/Photorealistic%20Sliced%20Button%20Mushroom.png",
    positions: [
      [18, 50],
      [50, 50],
      [82, 50],
      [34, 66],
      [66, 66],
    ],
  },
  cheese: {
    image: "images/Shredded%20Cheese%20Mound%20Cutout.png",
    positions: [],
  },
  jalapeno: {
    image: "images/Glossy%20Pickled%20Jalape%C3%B1o%20Slice%201.png",
    positions: [
      [18, 82],
      [50, 82],
      [82, 82],
      [18, 34],
      [82, 66],
    ],
  },
  peppers: {
    image: "images/Glossy%20Red%20Bell%20Pepper%20Slice.png",
    positions: [
      [34, 18],
      [66, 18],
      [18, 66],
      [50, 66],
      [34, 82],
    ],
  },
  onion: {
    image: "images/Glossy%20Purple%20Onion%20Slice%201.png",
    positions: [
      [66, 50],
      [34, 50],
      [50, 34],
      [82, 34],
      [66, 82],
    ],
  },
};
function builderPrice() {
  let t = BUILDER_BASE + bSizeAdj + bBaseExtra;
  document
    .querySelectorAll("#toppingGrid .topping.active")
    .forEach((el) => (t += parseFloat(el.dataset.price)));
  return t;
}
function builderDetail() {
  const tops = [
    ...document.querySelectorAll("#toppingGrid .topping.active"),
  ].map((el) => el.dataset.label);
  return `${bSizeLabel} · ${bBaseLabel} crust · ${bSauceLabel} sauce${tops.length ? " · " + tops.join(", ") : " · No toppings"}`;
}
function renderPizza() {
  const layer = document.getElementById("toppingLayer");
  layer.innerHTML = "";
  document
    .querySelector(".pizza-cheese")
    .classList.toggle(
      "extra-cheese",
      document
        .querySelector('#toppingGrid .topping[data-top="cheese"]')
        .classList.contains("active"),
    );
  document.querySelectorAll("#toppingGrid .topping.active").forEach((btn) => {
    const topping = TOPPING_DETAILS[btn.dataset.top];
    if (!topping) return;
    if (btn.dataset.top === "cheese") return;
    topping.positions.forEach(([x, y], ix) => {
      const piece = topping.image
        ? document.createElement("img")
        : document.createElement("span");
      piece.className = `piece ${btn.dataset.top === "pepperoni" ? "pep" : "ingredient-piece"} ${btn.dataset.top}${btn.dataset.top === "cheese" ? " cheese-layer" : ""}`;
      if (topping.image) {
        piece.src = topping.image;
        piece.alt = "";
      }
      piece.setAttribute("aria-hidden", "true");
      piece.style.left = `${x}%`;
      piece.style.top = `${y}%`;
      piece.style.setProperty("--piece-delay", `${ix * 0.04}s`);
      layer.appendChild(piece);
    });
  });
}
function getBuilderCustomization() {
  const toppings = [
    ...document.querySelectorAll("#toppingGrid .topping.active"),
  ].map((el) => ({
    key: el.dataset.top,
    label: el.dataset.label,
    price: parseFloat(el.dataset.price),
  }));
  return {
    size: bSizeLabel,
    sizeAdjustment: bSizeAdj,
    crust: bBaseLabel,
    crustAdjustment: bBaseExtra,
    sauce: bSauceLabel,
    toppings,
    finalPrice: builderPrice(),
    signature: [
      bSizeLabel,
      bBaseLabel,
      bSauceLabel,
      ...toppings.map((t) => t.key),
    ].join("|"),
  };
}
function refreshBuilder() {
  const sizeClass = bSizeLabel.startsWith("Small")
    ? "size-small"
    : bSizeLabel.startsWith("Extra Large")
      ? "size-extra-large"
      : bSizeLabel.startsWith("Large")
        ? "size-large"
        : "size-medium";
  const crust = document.getElementById("pizzaCrust");
  crust.className = `pizza-crust ${bBaseType} ${sizeClass}`;
  document.getElementById("builderTotal").textContent = money(builderPrice());
  document.getElementById("pvSub").innerHTML =
    `<strong>${bSizeLabel} · ${bBaseLabel} crust · ${bSauceLabel}</strong>`;
  renderPizza();
}
document.querySelectorAll("#sizeRow .opt").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#sizeRow .opt")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    bSizeAdj = parseFloat(b.dataset.adj);
    bSizeLabel = b.dataset.label.replace(/&quot;/g, '"');
    refreshBuilder();
  }),
);
document.querySelectorAll("#baseRow .opt").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#baseRow .opt")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    bBaseExtra = parseFloat(b.dataset.price);
    bBaseLabel = b.dataset.label;
    bBaseType = b.dataset.crust;
    refreshBuilder();
  }),
);
document.querySelectorAll("#sauceRow .opt").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#sauceRow .opt")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    bSauceLabel = b.dataset.label;
    document.getElementById("pizzaSauce").className =
      "pizza-sauce " + b.dataset.sauce;
    refreshBuilder();
  }),
);
document.querySelectorAll("#toppingGrid .topping").forEach((b) =>
  b.addEventListener("click", () => {
    b.classList.toggle("active");
    b.setAttribute("aria-pressed", String(b.classList.contains("active")));
    refreshBuilder();
  }),
);

function loadCanvasImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
async function createCustomPizzaImage(customization) {
  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");
  const sizeName = customization.size.toLowerCase();
  const diameter = sizeName.startsWith("small")
    ? 254
    : sizeName.startsWith("extra large")
      ? 306
      : sizeName.startsWith("large")
        ? 292
        : 272;
  const left = (320 - diameter) / 2,
    top = left;

  try {
    const base = await loadCanvasImage(
      "images/Isolated%20Golden%20Cheese%20Pizza.png",
    );
    ctx.drawImage(base, left, top, diameter, diameter);
  } catch (e) {
    ctx.fillStyle = "#d99a3d";
    ctx.beginPath();
    ctx.arc(160, 160, diameter / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  if (customization.crust === "Stuffed") {
    ctx.strokeStyle = "#edbd67";
    ctx.lineWidth = (13 * diameter) / 272;
    ctx.beginPath();
    ctx.arc(160, 160, diameter / 2 - (7 * diameter) / 272, 0, Math.PI * 2);
    ctx.stroke();
  } else if (customization.crust === "Pan") {
    ctx.strokeStyle = "#5b4430";
    ctx.lineWidth = (12 * diameter) / 272;
    ctx.beginPath();
    ctx.arc(160, 160, diameter / 2 - (8 * diameter) / 272, 0, Math.PI * 2);
    ctx.stroke();
  }

  const sauceRadius = diameter * 0.37;
  ctx.save();
  ctx.beginPath();
  ctx.arc(160, 160, sauceRadius, 0, Math.PI * 2);
  ctx.clip();
  ctx.fillStyle =
    customization.sauce === "BBQ"
      ? "rgba(126,72,35,.72)"
      : customization.sauce === "Spicy red pepper"
        ? "rgba(188,44,24,.74)"
        : "rgba(214,83,48,.72)";
  ctx.fillRect(
    160 - sauceRadius,
    160 - sauceRadius,
    sauceRadius * 2,
    sauceRadius * 2,
  );
  ctx.restore();

  const extraCheese = customization.toppings.some((t) => t.key === "cheese");
  if (extraCheese) {
    const cheeseGradient = ctx.createRadialGradient(
      160,
      160,
      0,
      160,
      160,
      sauceRadius * 0.92,
    );
    cheeseGradient.addColorStop(0, "rgba(255,247,190,.92)");
    cheeseGradient.addColorStop(0.78, "rgba(255,223,132,.82)");
    cheeseGradient.addColorStop(1, "rgba(255,214,112,.2)");
    ctx.fillStyle = cheeseGradient;
    ctx.beginPath();
    ctx.arc(160, 160, sauceRadius * 0.94, 0, Math.PI * 2);
    ctx.fill();
  }

  const scale = diameter / 250;
  const toppingImages = new Map();
  for (const topping of customization.toppings) {
    const key = topping.key;
    if (key === "cheese") continue;
    const detail = TOPPING_DETAILS[key];
    if (!detail) continue;
    let image = null;
    if (detail.image) {
      try {
        image =
          toppingImages.get(detail.image) ||
          (await loadCanvasImage(detail.image));
        toppingImages.set(detail.image, image);
      } catch (e) {}
    }
    detail.positions.forEach(([x, y]) => {
      const px = 160 + ((x - 50) / 100) * diameter * 0.82;
      const py = 160 + ((y - 50) / 100) * diameter * 0.82;
      if (key === "pepperoni") {
        ctx.fillStyle = "#c63b2d";
        ctx.beginPath();
        ctx.arc(px, py, 11 * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#ef8062";
        ctx.lineWidth = 2 * scale;
        ctx.stroke();
        ctx.fillStyle = "#7e251d";
        [
          [-4, -3],
          [4, 2],
          [-2, 5],
          [5, -5],
        ].forEach(([dx, dy]) => {
          ctx.beginPath();
          ctx.arc(
            px + dx * scale,
            py + dy * scale,
            1.3 * scale,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        });
      } else if (image) {
        const size =
          (key === "mushroom"
            ? 20
            : key === "jalapeno" || key === "onion"
              ? 22
              : 24) * scale;
        ctx.drawImage(image, px - size / 2, py - size / 2, size, size);
      }
    });
  }
  return canvas.toDataURL("image/png");
}

document.getElementById("addCustom").addEventListener("click", async () => {
  const button = document.getElementById("addCustom");
  button.disabled = true;
  const customization = getBuilderCustomization();
  let customImage = "images/Isolated%20Golden%20Cheese%20Pizza.png";
  try {
    customImage = await createCustomPizzaImage(customization);
  } catch (e) {}
  const detail = `${customization.size} · ${customization.crust} crust · ${customization.sauce} sauce`;
  addItem({
    id: "custom-pizza",
    name: "Custom Pizza",
    detail,
    price: customization.finalPrice,
    img: customImage,
    customization,
  });
  button.disabled = false;
  openCart();
});

// ── Login (demo auth, stored locally) ──
const loginModal = document.getElementById("loginModal");
let authMode = "login",
  currentUser = null;
try {
  const s = localStorage.getItem("rp-session-v3");
  if (s) {
    const users = JSON.parse(localStorage.getItem("rp-users-v3") || "{}");
    if (users[s]) currentUser = users[s];
  }
} catch (e) {}
function refreshLoginBtn() {
  const label = currentUser ? currentUser.name.split(" ")[0] : "Login";
  document.getElementById("loginBtn").innerHTML =
    `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.5"/><path d="M5 20v-1.5A6.5 6.5 0 0 1 11.5 12h1A6.5 6.5 0 0 1 19 18.5V20"/></svg><span>${label}</span>`;
}
function setAuthMode(m) {
  authMode = m;
  document.getElementById("tabLogin").classList.toggle("active", m === "login");
  document
    .getElementById("tabSignup")
    .classList.toggle("active", m === "signup");
  document.getElementById("nameWrap").hidden = m === "login";
  document.getElementById("loginTitle").textContent =
    m === "login" ? "Welcome back 👋" : "Join Red Pepper 🔥";
  document.getElementById("authSubmit").innerHTML =
    m === "login" ? "Login <span>→</span>" : "Create account <span>→</span>";
  document.getElementById("authMsg").textContent = "";
}
document
  .getElementById("tabLogin")
  .addEventListener("click", () => setAuthMode("login"));
document
  .getElementById("tabSignup")
  .addEventListener("click", () => setAuthMode("signup"));
function openLoginModal() {
  document.getElementById("loginForms").hidden = !!currentUser;
  document.getElementById("profileBox").hidden = !currentUser;
  if (currentUser) {
    document.getElementById("profileTitle").textContent =
      `Hi, ${currentUser.name} 👋`;
    document.getElementById("profileText").textContent =
      `Logged in as ${currentUser.email}. Your favourites and stamps are saved on this device.`;
  }
  loginModal.hidden = false;
}
document.getElementById("loginBtn").addEventListener("click", openLoginModal);
document.getElementById("splashLogin").addEventListener("click", (e) => {
  e.stopPropagation();
  setAuthMode("login");
  hideSplash();
  setTimeout(openLoginModal, 650);
});
document
  .querySelector("[data-close-login]")
  .addEventListener("click", () => (loginModal.hidden = true));
loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.hidden = true;
});
document.getElementById("guestBtn").addEventListener("click", () => {
  loginModal.hidden = true;
  showToast("No problem — ordering as guest 🍕");
});
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("auEmail").value.trim().toLowerCase(),
    pass = document.getElementById("auPass").value,
    name = document.getElementById("auName").value.trim();
  const msg = document.getElementById("authMsg");
  let users = {};
  try {
    users = JSON.parse(localStorage.getItem("rp-users-v3") || "{}");
  } catch (err) {}
  if (authMode === "signup") {
    if (!name) {
      msg.textContent = "Please enter your name to create an account.";
      return;
    }
    if (users[email]) {
      msg.textContent = "That email already has an account — try Login.";
      return;
    }
    users[email] = { name, email, pass };
    currentUser = users[email];
  } else {
    if (!users[email]) {
      msg.textContent = "No account for that email yet — tap “Create account”.";
      return;
    }
    if (users[email].pass !== pass) {
      msg.textContent = "Wrong password — try again.";
      return;
    }
    currentUser = users[email];
  }
  try {
    localStorage.setItem("rp-users-v3", JSON.stringify(users));
    localStorage.setItem("rp-session-v3", email);
  } catch (err) {}
  refreshLoginBtn();
  loginModal.hidden = true;
  showToast(`Welcome, ${currentUser.name.split(" ")[0]}! 🔥`);
  const cn = document.getElementById("coName");
  if (cn && !cn.value) cn.value = currentUser.name;
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  currentUser = null;
  try {
    localStorage.removeItem("rp-session-v3");
  } catch (e) {}
  refreshLoginBtn();
  loginModal.hidden = true;
  showToast("Logged out — see you soon 👋");
});

// ── Checkout ──
const checkoutModal = document.getElementById("checkoutModal"),
  successModal = document.getElementById("successModal");
function closeModals() {
  checkoutModal.hidden = true;
  successModal.hidden = true;
}
document
  .querySelectorAll("[data-close]")
  .forEach((b) => b.addEventListener("click", closeModals));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeModals();
    closeItem();
    loginModal.hidden = true;
  }
});

function ukPostcodeValid(value) {
  return /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(value.trim());
}

function selectedTiming() {
  const choice = document.querySelector('input[name="coTiming"]:checked');
  return choice ? choice.value : "asap";
}

function getWhenText() {
  if (selectedTiming() === "scheduled") {
    const select = document.getElementById("coScheduleTime");
    return select.value ? `Scheduled · ${select.value}` : "Scheduled";
  }
  return orderType === "Dine-in"
    ? `Now (${ORDER_MODES[orderType].eta})`
    : `ASAP (${ORDER_MODES[orderType].eta})`;
}

function generateScheduleSlots() {
  const mode = ORDER_MODES[orderType];
  const minimum = parseInt(mode.eta, 10) || 0;
  const start = new Date(Date.now() + minimum * 60000);
  start.setSeconds(0, 0);
  const minutes = start.getMinutes();
  start.setMinutes(minutes + ((15 - (minutes % 15)) % 15));
  const close = new Date();
  close.setHours(22, 45, 0, 0);
  const slots = [];
  for (
    let time = new Date(start);
    time <= close;
    time = new Date(time.getTime() + 15 * 60000)
  ) {
    const today = new Date();
    const isToday = time.toDateString() === today.toDateString();
    const day = isToday
      ? "Today"
      : time.toLocaleDateString(undefined, {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
    const clock = time.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    slots.push(`${day} ${clock}`);
  }
  const select = document.getElementById("coScheduleTime");
  select.innerHTML = slots
    .map((v) => `<option value="${v}">${v}</option>`)
    .join("");
  if (!slots.length)
    select.innerHTML = '<option value="">No later slots available</option>';
}

function renderCheckoutMode() {
  const mode = ORDER_MODES[orderType];
  const fields = {
    coAddressWrap: orderType === "Delivery",
    coPostcodeWrap: orderType === "Delivery",
    coDriverWrap: orderType === "Delivery",
    coCollectionWrap: orderType === "Takeaway",
    coTableWrap: orderType === "Dine-in",
    coGuestsWrap: orderType === "Dine-in",
  };
  Object.entries(fields).forEach(([id, visible]) => {
    const el = document.getElementById(id);
    el.hidden = !visible;
  });
  const address = document.getElementById("coAddress"),
    postcode = document.getElementById("coPostcode");
  const table = document.getElementById("coTable");
  address.required = orderType === "Delivery";
  postcode.required = orderType === "Delivery";
  table.required = orderType === "Dine-in";
  const payment = document.getElementById("coPayment");
  payment.innerHTML = mode.pay
    .map((option) => `<option>${option}</option>`)
    .join("");
  document.getElementById("coScheduleTitle").textContent =
    orderType === "Dine-in"
      ? "Now or book a table time"
      : "When do you want it?";
  document.getElementById("coAsapLabel").textContent =
    orderType === "Dine-in" ? "Now" : "ASAP";
  document.getElementById("coScheduledLabel").textContent =
    orderType === "Dine-in" ? "Book a table time" : "Schedule for later";
  generateScheduleSlots();
  document.getElementById("coError").textContent = "";
  [
    address,
    postcode,
    table,
    document.getElementById("coPhone"),
    document.getElementById("coName"),
  ].forEach((el) => el?.classList.remove("field-error"));
}

function showCheckoutError(message, fields = []) {
  const error = document.getElementById("coError");
  error.textContent = message;
  [
    document.getElementById("coName"),
    document.getElementById("coPhone"),
    document.getElementById("coAddress"),
    document.getElementById("coPostcode"),
    document.getElementById("coTable"),
  ].forEach((el) => el?.classList.remove("field-error"));
  fields.forEach((el) => el?.classList.add("field-error"));
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.size) return;
  const t = totals(),
    mode = ORDER_MODES[orderType];
  document.getElementById("checkoutMeta").textContent =
    `${orderType} · ${t.count} item${t.count !== 1 ? "s" : ""} · ${orderType === "Takeaway" ? `ready for collection in ${mode.eta}` : orderType === "Dine-in" ? `served to your table in ${mode.eta}` : `ETA ${mode.eta}`}`;
  document.getElementById("coTotal").textContent = money(t.total);
  if (currentUser && !document.getElementById("coName").value)
    document.getElementById("coName").value = currentUser.name;
  renderCheckoutMode();
  document.querySelector('input[name="coTiming"][value="asap"]').checked = true;
  document.getElementById("coScheduleWrap").hidden = true;
  const name = document.getElementById("coName").value.trim();
  if (name) document.getElementById("coCollectionName").value = name;
  closeCart();
  checkoutModal.hidden = false;
});

document.querySelectorAll('input[name="coTiming"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    document.getElementById("coScheduleWrap").hidden =
      selectedTiming() !== "scheduled";
  });
});

document.getElementById("coName").addEventListener("input", (e) => {
  if (
    orderType === "Takeaway" &&
    !document.getElementById("coCollectionName").dataset.edited
  ) {
    document.getElementById("coCollectionName").value = e.target.value;
  }
});
document
  .getElementById("coCollectionName")
  .addEventListener("input", (e) => (e.target.dataset.edited = "true"));

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const t = totals();
  const name = document.getElementById("coName").value.trim();
  const phone = document.getElementById("coPhone").value.trim();
  const phoneDigits = phone.replace(/\D/g, "");
  const address = document.getElementById("coAddress").value.trim();
  const postcode = document.getElementById("coPostcode").value.trim();
  const table = document.getElementById("coTable").value.trim();
  if (!name) {
    showCheckoutError("Please enter your name.", [
      document.getElementById("coName"),
    ]);
    return;
  }
  if (phoneDigits.length < 10) {
    showCheckoutError(
      "Please enter a valid phone number with at least 10 digits.",
      [document.getElementById("coPhone")],
    );
    return;
  }
  if (orderType === "Delivery" && !address) {
    showCheckoutError("Please enter your delivery address.", [
      document.getElementById("coAddress"),
    ]);
    return;
  }
  if (orderType === "Delivery" && !ukPostcodeValid(postcode)) {
    showCheckoutError("Please enter a valid UK postcode.", [
      document.getElementById("coPostcode"),
    ]);
    return;
  }
  if (orderType === "Dine-in") {
    const tableNumber = Number(table);
    if (
      !table ||
      !Number.isInteger(tableNumber) ||
      tableNumber < 1 ||
      tableNumber > 30
    ) {
      showCheckoutError("Please enter a table number between 1 and 30.", [
        document.getElementById("coTable"),
      ]);
      return;
    }
  }
  if (
    selectedTiming() === "scheduled" &&
    !document.getElementById("coScheduleTime").value
  ) {
    showCheckoutError("Please choose a later time.");
    return;
  }
  document.getElementById("coError").textContent = "";
  const whenText = getWhenText();
  const orderNo = "RP-" + Math.floor(1000 + Math.random() * 9000);
  const lines = [...cart.values()]
    .map(
      (v) =>
        `${v.qty} × ${v.name}${v.detail ? ` (${v.detail})` : ""} — ${money(v.price * v.qty)}`,
    )
    .join("<br>");
  const mode = ORDER_MODES[orderType];
  if (orderType === "Delivery") {
    document.getElementById("successText").innerHTML =
      `Your order is on its way 🚚<br>${address}, ${postcode.toUpperCase()} · ${whenText}`;
  } else if (orderType === "Takeaway") {
    document.getElementById("successText").innerHTML =
      `We'll have it ready for collection 🛍<br>Quote order number ${orderNo} at the counter · ${whenText}`;
  } else {
    document.getElementById("successText").innerHTML =
      `Order sent to the kitchen 🍴<br>We'll bring it to Table ${table} · ${whenText}`;
  }
  const feeLine =
    orderType === "Delivery"
      ? `Delivery ${t.delivery ? money(t.delivery) : "FREE"}`
      : "No delivery fee";
  document.getElementById("successBox").innerHTML =
    `<strong>Order ${orderNo}</strong> · ${orderType}<br>${lines}<br><br>Subtotal ${money(t.subtotal)}${t.discount ? ` · Discount −${money(t.discount)}` : ""} · ${feeLine}<br><strong>Total paid: ${money(t.total)}</strong> · ${whenText}`;

  const wa = document.getElementById("waOrderBtn");
  wa.hidden = !WHATSAPP_NUMBER;
  if (WHATSAPP_NUMBER) {
    const payment = document.getElementById("coPayment").value;
    const notes = document.getElementById("coNotes").value.trim();
    const message = [
      `Order ${orderNo}`,
      `Mode: ${orderType}`,
      `When: ${whenText}`,
      "",
      ...[...cart.values()].map(
        (v) =>
          `${v.qty} × ${v.name}${v.detail ? ` (${v.detail})` : ""} — ${money(v.price * v.qty)}`,
      ),
      "",
      `Subtotal: ${money(t.subtotal)}`,
    ];
    if (t.discount) message.push(`Discount (PEPPER10): -${money(t.discount)}`);
    message.push(
      orderType === "Delivery"
        ? t.delivery
          ? `Delivery: ${money(t.delivery)}`
          : "Delivery: FREE"
        : "Delivery: FREE",
    );
    message.push(
      `Total: ${money(t.total)}`,
      `Payment: ${payment}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
    );
    if (orderType === "Delivery") {
      message.push(
        `Address: ${address}`,
        `Postcode: ${postcode.toUpperCase()}`,
      );
      const driver = document.getElementById("coDriver").value.trim();
      if (driver) message.push(`Driver instructions: ${driver}`);
    } else if (orderType === "Takeaway") {
      message.push(
        `Collection name: ${document.getElementById("coCollectionName").value.trim() || name}`,
      );
    } else {
      message.push(`Table: ${table}`);
      const guests = document.getElementById("coGuests").value.trim();
      if (guests) message.push(`Guests: ${guests}`);
    }
    if (notes) message.push(`Notes: ${notes}`);
    wa.dataset.href = `https://wa.me/${String(WHATSAPP_NUMBER).replace(/\D/g, "")}?text=${encodeURIComponent(message.join("\n"))}`;
  }
  cart.clear();
  promoApplied = false;
  persist();
  renderCart();
  renderMenuCountsOnly();
  checkoutModal.hidden = true;
  successModal.hidden = false;
});
document.getElementById("waOrderBtn").addEventListener("click", () => {
  const wa = document.getElementById("waOrderBtn");
  if (wa.dataset.href) window.open(wa.dataset.href, "_blank", "noopener");
});

// ── Init ──
const THEME_KEY = "redpepper-theme";
function applyTheme(theme, persist = true) {
  const safeTheme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = safeTheme;
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    const isLight = safeTheme === "light";
    toggle.classList.toggle("is-light", isLight);
    toggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode",
    );
    toggle.title = isLight ? "Switch to dark mode" : "Switch to light mode";
  }
  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, safeTheme);
    } catch (e) {}
  }
}
let savedTheme = "dark";
try {
  savedTheme = localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
} catch (e) {}
applyTheme(savedTheme, false);
document.getElementById("themeToggle").addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "light" ? "dark" : "light");
});

if (promoApplied)
  document.getElementById("cartPromoMsg").textContent =
    "PEPPER10 applied — 10% off 🎉";
document
  .querySelectorAll("#orderType .seg-btn")
  .forEach((b) => b.classList.toggle("active", b.dataset.type === orderType));
syncPostcodeBar();
refreshLoginBtn();
renderMenu();
renderDeals();
renderCart();
refreshBuilder();
