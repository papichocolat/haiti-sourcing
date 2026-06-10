// =============================================
// Haiti Sourcing — Main JS
// All 42 products from Lakay Pa Lwen, -$1 each
// Port-au-Prince delivery only
// =============================================

const PRODUCTS = [
  // STAPLES & GRAINS
  { name: "White Rice 4.5 Mamit",       price: 18.00, orig: 19.00, cat: "staples",    icon: "🍚", desc: "Clean, high-quality white rice for all types of dishes." },
  { name: "Riz 9 Mamit (Gwo Sak)",      price: 39.00, orig: 40.00, cat: "staples",    icon: "🌾", desc: "Large bag of quality rice, ideal for family cooking." },
  { name: "Diri Shella (Mamit)",        price: 14.00, orig: 15.00, cat: "staples",    icon: "🍚", desc: "Traditional dried rice flakes, perfect for Haitian meals." },
  { name: "Spaghetti (Kes)",            price: 16.00, orig: 17.00, cat: "staples",    icon: "🍝", desc: "High-quality spaghetti, perfect for quick family meals." },
  { name: "Macaroni KèS",               price: 12.00, orig: 13.00, cat: "staples",    icon: "🍜", desc: "Quality macaroni pasta ideal for a variety of dishes." },
  { name: "Mamit Ble",                  price: 11.00, orig: 12.00, cat: "staples",    icon: "🌾", desc: "Whole wheat grain, a nutritious household staple." },
  { name: "Mamit Avwàn",                price: 10.00, orig: 11.00, cat: "staples",    icon: "🌾", desc: "Oats for a healthy, filling breakfast." },
  { name: "Mamit Farine",               price: 6.50,  orig: 7.50,  cat: "staples",    icon: "🌾", desc: "Quality flour for baking and everyday cooking." },
  { name: "MAYI MOULEN (Mamit)",        price: 8.00,  orig: 9.00,  cat: "staples",    icon: "🌽", desc: "Finely ground corn flour perfect for traditional cooking." },
  { name: "Pitimi (1 Mamit)",           price: 11.00, orig: 12.00, cat: "staples",    icon: "🌾", desc: "Traditional grain, a Haitian household essential." },
  { name: "PITIMI (1 MAMIT)",           price: 7.50,  orig: 8.50,  cat: "staples",    icon: "🌾", desc: "Seasoning product to enhance flavor of every dish." },
  { name: "Red Beans (Mamit)",          price: 10.50, orig: 11.50, cat: "staples",    icon: "🫘", desc: "High-quality red beans (Pwa wouj), rich in protein." },
  { name: "Black Beans (Pwa Nwa) Mamit",price: 7.00,  orig: 8.00,  cat: "staples",    icon: "🫘", desc: "Quality black beans perfect for traditional Haitian dishes." },
  { name: "Corn Flakes",                price: 5.00,  orig: 6.00,  cat: "staples",    icon: "🥣", desc: "Crispy corn flakes, perfect for a healthy breakfast." },
  { name: "Sugar (Mamit)",              price: 9.00,  orig: 10.00, cat: "staples",    icon: "🍬", desc: "Fine-quality sugar for cooking, baking, and beverages." },

  // DAIRY & EGGS
  { name: "Alaska Milk 900g",           price: 18.50, orig: 19.50, cat: "dairy",      icon: "🥛", desc: "High-quality powdered milk, rich in nutrients." },
  { name: "Bongu Milk 9 CT",            price: 7.00,  orig: 8.00,  cat: "dairy",      icon: "🥛", desc: "Rich and tasty milk, great for drinking and cooking." },
  { name: "Lait Bongu Kès (48 unités)", price: 29.00, orig: 30.00, cat: "dairy",      icon: "🥛", desc: "Bulk pack of 48 Bongu milk cartons for the whole family." },
  { name: "Bongu Shake 3 CT",           price: 6.00,  orig: 7.00,  cat: "dairy",      icon: "🥤", desc: "Delicious shakes in chocolate, vanilla, and strawberry." },
  { name: "Shake Bongu 3 CT",           price: 6.00,  orig: 7.00,  cat: "dairy",      icon: "🥤", desc: "Refreshing sport shake, perfect for energy and hydration." },
  { name: "Cheese (La Vache Qui Rit)",  price: 3.00,  orig: 4.00,  cat: "dairy",      icon: "🧀", desc: "Creamy cheese, perfect for snacks, sandwiches, and meals." },
  { name: "KATON ZE",                   price: 9.00,  orig: 10.00, cat: "dairy",      icon: "🥚", desc: "100% fresh eggs (Zè yo 100% frè)." },

  // MEAT & FISH
  { name: "Smoked Salami (Induveca)",   price: 6.00,  orig: 7.00,  cat: "meat",       icon: "🥩", desc: "Rich smoked salami, perfect for sandwiches and meals.", popular: true },
  { name: "VYANN BèF",                  price: 19.00, orig: 20.00, cat: "meat",       icon: "🥩", desc: "Quality beef — rich in protein, iron, and vitamins." },
  { name: "KWIS POUL (12 CT)",          price: 9.50,  orig: 10.50, cat: "meat",       icon: "🍗", desc: "Fresh, high-quality chicken thighs (Poul frè ak bon kalite)." },
  { name: "PYE POUL (30 CT)",           price: 9.00,  orig: 10.00, cat: "meat",       icon: "🍗", desc: "Fresh chicken feet, 30 pieces (Poul ki frè ak bon kalite)." },
  { name: "ZEL POUL (14 CT)",           price: 6.00,  orig: 7.00,  cat: "meat",       icon: "🍗", desc: "Fresh chicken wings, quality guaranteed." },
  { name: "ARANSO 6 CT",                price: 9.00,  orig: 10.00, cat: "meat",       icon: "🐟", desc: "Freshly prepared dried fish, perfect for traditional dishes." },
  { name: "Somon",                      price: 3.50,  orig: 4.50,  cat: "meat",       icon: "🐟", desc: "Quality salmon product for everyday meals." },

  // CONDIMENTS & PANTRY
  { name: "Cooking Oil",                price: 14.00, orig: 15.00, cat: "condiments", icon: "🫙", desc: "High-quality oil ideal for frying and daily cooking." },
  { name: "Ketchup MAMIT",              price: 4.00,  orig: 5.00,  cat: "condiments", icon: "🍅", desc: "Classic tomato ketchup loved by all ages." },
  { name: "Mayonnaise MAMIT",           price: 12.00, orig: 13.00, cat: "condiments", icon: "🥫", desc: "Smooth creamy mayonnaise for sandwiches and salads." },
  { name: "Tomato Paste MAMIT",         price: 12.00, orig: 13.00, cat: "condiments", icon: "🍅", desc: "Rich tomato paste for sauces and traditional dishes." },
  { name: "Maggi (El Criollito) 60 CT", price: 5.00,  orig: 6.00,  cat: "condiments", icon: "🧂", desc: "Popular seasoning to enhance the flavor of your meals." },
  { name: "Maggi with Tomato 36 CT",    price: 3.00,  orig: 4.00,  cat: "condiments", icon: "🧂", desc: "Tomato-flavored Maggi seasoning, rich taste and color." },
  { name: "TI MALICE MAMIT",            price: 12.00, orig: 13.00, cat: "condiments", icon: "🫙", desc: "Nutritious baby food specially made for healthy growth." },

  // DRINKS
  { name: "Gatorade Drink 3 CT",        price: 6.00,  orig: 7.00,  cat: "drinks",     icon: "🥤", desc: "Refreshing sports drink to stay hydrated and energized." },

  // PACKAGES
  { name: "Lamanjay Basic Package",     price: 149.00, orig: 150.00, cat: "packages", icon: "📦", desc: "Starter essentials package for one person or a small household." },
  { name: "Lafanmi Family Package",     price: 249.00, orig: 250.00, cat: "packages", icon: "📦", desc: "Complete family grocery package with all the essentials.", popular: true },
  { name: "Kè Kontan Premium Package",  price: 287.00, orig: 288.00, cat: "packages", icon: "🎁", desc: "Premium package with extras including meat, flowers, and more." },

  // OTHER
  { name: "BONBON SèL",                 price: 2.00,  orig: 3.00,  cat: "other",      icon: "🍬", desc: "Sweet and salty candy, loved by kids and adults alike." },
  { name: "Flower Bouquet",             price: 59.00, orig: 60.00, cat: "other",      icon: "💐", desc: "Beautiful fresh flower bouquet, perfect for gifts and occasions." },
];

// ---- RENDER PRODUCTS ----
function renderProducts(cat) {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  countEl.textContent = filtered.length + ' item' + (filtered.length !== 1 ? 's' : '');

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img">${p.icon}${p.popular ? '<span class="badge">Popular</span>' : ''}</div>
      <div class="product-body">
        <p class="product-name">${p.name}</p>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <div><span class="price">$${p.price.toFixed(2)}</span><span class="price-old">$${p.orig.toFixed(2)}</span></div>
          <button class="add-btn" onclick="orderWhatsApp('${p.name.replace(/'/g,"\\'")}', '${p.price.toFixed(2)}')">Order</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- WHATSAPP ORDER ----
function orderWhatsApp(name, price) {
  const msg = encodeURIComponent(`Hi, I'd like to order: ${name} ($${price}). Please confirm availability and delivery details for Port-au-Prince.`);
  window.open(`https://wa.me/50944708000?text=${msg}`, '_blank');
}

// ---- FILTER TABS ----
document.getElementById('filterTabs').addEventListener('click', e => {
  if (!e.target.matches('.filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderProducts(e.target.dataset.cat);
});

// ---- MOBILE NAV ----
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ---- CONTACT FORM ----
function handleForm(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  if (success) {
    success.style.display = 'block';
    e.target.reset();
    setTimeout(() => { success.style.display = 'none'; }, 4000);
  }
}

// ---- INIT ----
renderProducts('all');
