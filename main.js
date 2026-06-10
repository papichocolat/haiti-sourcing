// =============================================
// Haiti Sourcing — Main JS
// All 42 products from Lakay Pa Lwen, -$1 each
// Port-au-Prince delivery only
// =============================================

const PRODUCTS = [
// STAPLES & GRAINS
{ name: "White Rice 4.5 Mamit", price: 18.00, orig: 19.00, cat: "staples", icon: "🍚", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/BONGU_RICE_4.5_MAMIT.jpg", desc: "Clean, high-quality white rice for all types of dishes." },
{ name: "Riz 9 Mamit (Gwo Sak)", price: 39.00, orig: 40.00, cat: "staples", icon: "🌾", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/FullSizeRender.jpg", desc: "Large bag of quality rice, ideal for family cooking." },
{ name: "Diri Shella (Mamit)", price: 14.00, orig: 15.00, cat: "staples", icon: "🍚", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/download_5_2b9295aa-7a5d-4409-b71e-1b4dc993cc0e.png", desc: "Traditional dried rice flakes, perfect for Haitian meals." },
{ name: "Spaghetti (Kes)", price: 16.00, orig: 17.00, cat: "staples", icon: "🍝", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59.jpg", desc: "High-quality spaghetti, perfect for quick family meals." },
{ name: "Macaroni KèS", price: 12.00, orig: 13.00, cat: "staples", icon: "🍜", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/AB701554-88F1-4D31-8397-8EA507397D2C_2.jpg", desc: "Quality macaroni pasta ideal for a variety of dishes." },
{ name: "Mamit Ble", price: 11.00, orig: 12.00, cat: "staples", icon: "🌾", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/IMG-0014.jpg", desc: "Whole wheat grain, a nutritious household staple." },
{ name: "Mamit Avwàn", price: 10.00, orig: 11.00, cat: "staples", icon: "🌾", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/IMG-0016.jpg", desc: "Oats for a healthy, filling breakfast." },
{ name: "Mamit Farine", price: 6.50, orig: 7.50, cat: "staples", icon: "🌾", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/IMG-0015.jpg", desc: "Quality flour for baking and everyday cooking." },
{ name: "MAYI MOULEN (Mamit)", price: 8.00, orig: 9.00, cat: "staples", icon: "🌽", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-58-17.jpg", desc: "Finely ground corn flour perfect for traditional cooking." },
{ name: "Pitimi (1 Mamit)", price: 11.00, orig: 12.00, cat: "staples", icon: "🌾", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/PITIMI.webp", desc: "Traditional grain, a Haitian household essential." },
{ name: "PITIMI (1 MAMIT)", price: 7.50, orig: 8.50, cat: "staples", icon: "🌾", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/PITIMI.webp", desc: "Seasoning product to enhance flavor of every dish." },
{ name: "Red Beans (Mamit)", price: 10.50, orig: 11.50, cat: "staples", icon: "🫘", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_2_f8e57c53-d9c1-4a97-a51d-3a680463b292.jpg", desc: "High-quality red beans (Pwa wouj), rich in protein." },
{ name: "Black Beans (Pwa Nwa) Mamit", price: 7.00, orig: 8.00, cat: "staples", icon: "🫘", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/translated_image_en_2.png", desc: "Quality black beans perfect for traditional Haitian dishes." },
{ name: "Corn Flakes", price: 5.00, orig: 6.00, cat: "staples", icon: "🥣", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_8.jpg", desc: "Crispy corn flakes, perfect for a healthy breakfast." },
{ name: "Sugar (Mamit)", price: 9.00, orig: 10.00, cat: "staples", icon: "🍬", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_3.jpg", desc: "Fine-quality sugar for cooking, baking, and beverages." },

// DAIRY & EGGS
{ name: "Alaska Milk 900g", price: 18.50, orig: 19.50, cat: "dairy", icon: "🥛", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_4.jpg", desc: "High-quality powdered milk, rich in nutrients." },
{ name: "Bongu Milk 9 CT", price: 7.00, orig: 8.00, cat: "dairy", icon: "🥛", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_7.jpg", desc: "Rich and tasty milk, great for drinking and cooking." },
{ name: "Lait Bongu Kès (48 unités)", price: 29.00, orig: 30.00, cat: "dairy", icon: "🥛", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/IMG-0188.jpg", desc: "Bulk pack of 48 Bongu milk cartons for the whole family." },
{ name: "Bongu Shake 3 CT", price: 6.00, orig: 7.00, cat: "dairy", icon: "🥤", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/9A8FFD21-CEBA-43A1-A0EF-BA8F5209F7ED_2_414ac4ea-5621-4b74-bfeb-a1f70f6ceda1.png", desc: "Delicious shakes in chocolate, vanilla, and strawberry." },
{ name: "Shake Bongu 3 CT", price: 6.00, orig: 7.00, cat: "dairy", icon: "🥤", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/Shake-Bongu-pack-of-24.png", desc: "Refreshing sport shake, perfect for energy and hydration." },
{ name: "Cheese (La Vache Qui Rit)", price: 3.00, orig: 4.00, cat: "dairy", icon: "🧀", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_6.jpg", desc: "Creamy cheese, perfect for snacks, sandwiches, and meals." },
{ name: "KATON ZE", price: 9.00, orig: 10.00, cat: "dairy", icon: "🥚", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/katonze.jpg", desc: "100% fresh eggs (Zè yo 100% frè)." },

// MEAT & FISH
{ name: "Smoked Salami (Induveca)", price: 6.00, orig: 7.00, cat: "meat", icon: "🥩", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/BF1587EB-E4BB-4DE9-ADE6-698A2D6B2342_2.png", desc: "Rich smoked salami, perfect for sandwiches and meals.", popular: true },
{ name: "VYANN BèF", price: 19.00, orig: 20.00, cat: "meat", icon: "🥩", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/VYANNBEF.png", desc: "Quality beef — rich in protein, iron, and vitamins." },
{ name: "KWIS POUL (12 CT)", price: 9.50, orig: 10.50, cat: "meat", icon: "🍗", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/VYANNPOUL.jpg", desc: "Fresh, high-quality chicken thighs (Poul frè ak bon kalite)." },
{ name: "PYE POUL (30 CT)", price: 9.00, orig: 10.00, cat: "meat", icon: "🍗", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/PYEPOUL.jpg", desc: "Fresh chicken feet, 30 pieces (Poul ki frè ak bon kalite)." },
{ name: "ZEL POUL (14 CT)", price: 6.00, orig: 7.00, cat: "meat", icon: "🍗", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/ZELPOULHAITI.webp", desc: "Fresh chicken wings, quality guaranteed." },
{ name: "ARANSO 6 CT", price: 9.00, orig: 10.00, cat: "meat", icon: "🐟", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/F36581D1-46C1-4395-BEEF-2AD7F7025701_2.png", desc: "Freshly prepared dried fish, perfect for traditional dishes." },
{ name: "Somon", price: 3.50, orig: 4.50, cat: "meat", icon: "🐟", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/IMG-0024.jpg", desc: "Quality salmon product for everyday meals." },

// CONDIMENTS & PANTRY
{ name: "Cooking Oil", price: 14.00, orig: 15.00, cat: "condiments", icon: "🫙", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_9.jpg", desc: "High-quality oil ideal for frying and daily cooking." },
{ name: "Ketchup MAMIT", price: 4.00, orig: 5.00, cat: "condiments", icon: "🍅", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_17.jpg", desc: "Classic tomato ketchup loved by all ages." },
{ name: "Mayonnaise MAMIT", price: 12.00, orig: 13.00, cat: "condiments", icon: "🥫", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_13.jpg", desc: "Smooth creamy mayonnaise for sandwiches and salads." },
{ name: "Tomato Paste MAMIT", price: 12.00, orig: 13.00, cat: "condiments", icon: "🍅", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_18.jpg", desc: "Rich tomato paste for sauces and traditional dishes." },
{ name: "Maggi (El Criollito) 60 CT", price: 5.00, orig: 6.00, cat: "condiments", icon: "🧂", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/029340FD-89BE-4B80-99BF-5ED17BACD9F0_1.jpg", desc: "Popular seasoning to enhance the flavor of your meals." },
{ name: "Maggi with Tomato 36 CT", price: 3.00, orig: 4.00, cat: "condiments", icon: "🧂", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/1049DA24-B458-4492-96F3-9182DF6332B9.jpg", desc: "Tomato-flavored Maggi seasoning, rich taste and color." },
{ name: "TI MALICE MAMIT", price: 12.00, orig: 13.00, cat: "condiments", icon: "🫙", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/timalice8lbs.webp", desc: "Nutritious baby food specially made for healthy growth." },

// DRINKS
{ name: "Gatorade Drink 3 CT", price: 6.00, orig: 7.00, cat: "drinks", icon: "🥤", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/6911A4BF-83DD-47A6-8C27-C5FB9C3FBEB6_2.jpg", desc: "Refreshing sports drink to stay hydrated and energized." },

// PACKAGES
{ name: "Lamanjay Basic Package", price: 149.00, orig: 150.00, cat: "packages", icon: "📦", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_7.jpg", desc: "Starter essentials package for one person or a small household." },
{ name: "Lafanmi Family Package", price: 249.00, orig: 250.00, cat: "packages", icon: "📦", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/FullSizeRender.jpg", desc: "Complete family grocery package with all the essentials.", popular: true },
{ name: "Kè Kontan Premium Package", price: 287.00, orig: 288.00, cat: "packages", icon: "🎁", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-04_07-17-43.jpg", desc: "Premium package with extras including meat, flowers, and more." },

// OTHER
{ name: "BONBON SèL", price: 2.00, orig: 3.00, cat: "other", icon: "🍬", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-02_04-57-59_16.jpg", desc: "Sweet and salty candy, loved by kids and adults alike." },
{ name: "Flower Bouquet", price: 59.00, orig: 60.00, cat: "other", icon: "💐", img: "https://cdn.shopify.com/s/files/1/0985/2954/2516/files/photo_2026-04-04_07-17-43.jpg", desc: "Beautiful fresh flower bouquet, perfect for gifts and occasions." },
];

// ---- RENDER PRODUCTS ----
function renderProducts(cat) {
const grid = document.getElementById('productGrid');
const countEl = document.getElementById('productCount');
const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
countEl.textContent = filtered.length + ' item' + (filtered.length !== 1 ? 's' : '');

grid.innerHTML = filtered.map(p => `
<div class="product-card">
  <div class="product-img-wrap">
    <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\"product-icon\\">${p.icon}</span>'">
    ${p.popular ? '<span class="badge">Popular</span>' : ''}
  </div>
  <div class="product-body">
    <p class="product-name">${p.name}</p>
    <p class="product-desc">${p.desc}</p>
    <div class="product-footer">
      <div><span class="price">$${p.price.toFixed(2)}</span><span class="price-old">$${p.orig.toFixed(2)}</span></div>
      <button class="add-btn" onclick="orderWhatsApp('${p.name.replace(/'/g,"\\'")}',' ${p.price.toFixed(2)}')">Order</button>
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
const navLinks = document.getElementById('navLinks');
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
