// =============================================
// Haiti Sourcing — Main JS
// Port-au-Prince delivery only
// =============================================

// ---- TRANSLATIONS ----
const LANG = {
  en: {
    nav_home: 'Home', nav_shop: 'Shop', nav_boxes: 'Food Boxes', nav_how: 'How It Works', nav_contact: 'Contact',
    cart_title: 'Your Cart', cart_empty: 'Your cart is empty.', cart_checkout: '💬 Checkout via WhatsApp',
    cart_total: 'Total', add_btn: 'Add to Cart', order_btn: 'Order',
    banner: 'Free Shipping Over $75 · Delivering to Port-au-Prince · 30-Day Guarantee',
    hero_tag: 'Port-au-Prince Delivery', hero_h1: 'Send <em>Real Food</em><br>Back Home',
    hero_desc: 'Quality groceries and essentials delivered directly to your family in Port-au-Prince.',
    hero_cta1: 'Shop Now', hero_cta2: 'View Food Boxes',
    notice: 'We currently deliver to <strong>Port-au-Prince only.</strong> Orders from the US, Canada, or abroad are delivered to your family in PAP.',
    products_title: 'All Products', how_title: 'How It Works',
    step1_title: 'Browse & select', step1_desc: 'Pick individual items or choose a ready-made food box package.',
    step2_title: 'Place your order', step2_desc: 'Contact us via WhatsApp with your order and recipient details.',
    step3_title: 'We source & pack', step3_desc: 'Your order is carefully sourced, verified, and securely packaged.',
    step4_title: 'Delivered in PAP', step4_desc: 'Your family receives fresh groceries right at their door.',
    boxes_title: 'Food Box Packages', contact_title: 'Get in Touch',
    contact_desc: "Questions about your order or delivery in Port-au-Prince? We're here to help.",
    form_name: 'Your name', form_email: 'Your email', form_msg: 'Your message or order details',
    form_btn: 'Send Message', form_success: "Message sent! We'll be in touch soon.",
    footer_tagline: 'Bridging the distance between you and your family in Port-au-Prince — one grocery box at a time.',
    filter_all: 'All', filter_staples: 'Staples & Grains', filter_dairy: 'Dairy & Eggs',
    filter_meat: 'Meat & Fish', filter_condiments: 'Condiments', filter_drinks: 'Drinks',
    filter_packages: 'Packages', filter_other: 'Other',
    qty: 'Qty', remove: 'Remove', items: 'items', item: 'item',
    cart_icon_label: 'Cart',
    whatsapp_msg_intro: "Hi, I'd like to place the following order for delivery in Port-au-Prince:",
    whatsapp_msg_total: "Order Total",
    cart_updated: 'Added to cart!'
  },
  fr: {
    nav_home: 'Accueil', nav_shop: 'Boutique', nav_boxes: 'Boîtes Alimentaires', nav_how: 'Comment ça marche', nav_contact: 'Contact',
    cart_title: 'Votre Panier', cart_empty: 'Votre panier est vide.', cart_checkout: '💬 Commander via WhatsApp',
    cart_total: 'Total', add_btn: 'Ajouter', order_btn: 'Commander',
    banner: 'Livraison Gratuite dès $75 · Livraison à Port-au-Prince · Garantie 30 Jours',
    hero_tag: 'Livraison à Port-au-Prince', hero_h1: 'Envoyez de <em>Vraie Nourriture</em><br>Chez Vous',
    hero_desc: "Des épiceries de qualité livrées directement à votre famille à Port-au-Prince.",
    hero_cta1: 'Acheter', hero_cta2: 'Voir les Boîtes',
    notice: "Nous livrons actuellement \u00e0 <strong>Port-au-Prince uniquement.</strong> Les commandes de l'\u00e9tranger sont livr\u00e9es \u00e0 votre famille \u00e0 PAP.",
    products_title: 'Tous les Produits', how_title: 'Comment ça marche',
    step1_title: 'Parcourir & choisir', step1_desc: "Choisissez des articles individuels ou une bo\u00eete pr\u00eate \u00e0 l'emploi.",
    step2_title: 'Passer commande', step2_desc: "Contactez-nous via WhatsApp avec votre commande et les d\u00e9tails du destinataire.",
    step3_title: 'Nous sourceons & emballons', step3_desc: 'Votre commande est soigneusement sourcée, vérifiée et emballée.',
    step4_title: 'Livré à PAP', step4_desc: 'Votre famille reçoit des produits frais directement à sa porte.',
    boxes_title: 'Boîtes Alimentaires', contact_title: 'Nous Contacter',
    contact_desc: "Des questions sur votre commande ou la livraison \u00e0 Port-au-Prince ? Nous sommes l\u00e0 pour vous aider.",
    form_name: 'Votre nom', form_email: 'Votre email', form_msg: 'Votre message ou détails de commande',
    form_btn: 'Envoyer', form_success: "Message envoyé ! Nous vous contacterons bientôt.",
    footer_tagline: "R\u00e9duire la distance entre vous et votre famille \u00e0 Port-au-Prince — une bo\u00eete d'\u00e9picerie \u00e0 la fois.",
    filter_all: 'Tout', filter_staples: 'Céréales', filter_dairy: 'Laitiers & Œufs',
    filter_meat: 'Viande & Poisson', filter_condiments: 'Condiments', filter_drinks: 'Boissons',
    filter_packages: 'Paquets', filter_other: 'Autre',
    qty: 'Qté', remove: 'Supprimer', items: 'articles', item: 'article',
    cart_icon_label: 'Panier',
    whatsapp_msg_intro: "Bonjour, je voudrais passer la commande suivante pour livraison à Port-au-Prince:",
    whatsapp_msg_total: "Total de la commande",
    cart_updated: 'Ajouté au panier!'
  },
  ht: {
    nav_home: 'Akèy', nav_shop: 'Boutik', nav_boxes: 'Bwat Manje', nav_how: 'Kijan sa Travay', nav_contact: 'Kontakte',
    cart_title: 'Panye Ou', cart_empty: 'Panye ou vid.', cart_checkout: '💬 Komande via WhatsApp',
    cart_total: 'Total', add_btn: 'Ajoute', order_btn: 'Komande',
    banner: 'Livrezon Gratis sou $75 · Livrezon Pòtoprens · Garanti 30 Jou',
    hero_tag: 'Livrezon Pòtoprens', hero_h1: 'Voye <em>Manje Reyèl</em><br>Lakay',
    hero_desc: "Pwovizyon kalite livré dirèkteman bay fanmi ou nan Pòtoprens.",
    hero_cta1: 'Achte Kounye a', hero_cta2: 'Gade Bwat Manje',
    notice: 'Nou livré nan <strong>Pòtoprens sèlman.</strong> Kòmann ki soti nan peyi Etazini, Kanada, oswa lòt kote yo livré bay fanmi ou nan PAP.',
    products_title: 'Tout Pwodui', how_title: 'Kijan sa Travay',
    step1_title: 'Gade & Chwazi', step1_desc: "Chwazi atik endividy\u00e8l oswa yon bwat manje pr\u00e8t pou w.",
    step2_title: 'Pase kòmann ou', step2_desc: 'Kontakte nou via WhatsApp ak kòmann ou ak detay moun ki resevwa a.',
    step3_title: 'Nou Source & Pakèt', step3_desc: 'Kòmann ou soinyezmèn source, verifye, ak pake an sekirite.',
    step4_title: 'Livré nan PAP', step4_desc: 'Fanmi ou resevwa pwovizyon fre dirèkteman nan pòt yo.',
    boxes_title: 'Bwat Manje', contact_title: 'Kontakte Nou',
    contact_desc: "Kesyon sou kòmann ou oswa livrezon nan Pòtoprens? Nou la pou ede ou.",
    form_name: 'Non ou', form_email: 'Imèl ou', form_msg: 'Mesaj ou oswa detay kòmann ou',
    form_btn: 'Voye Mesaj', form_success: "Mesaj voye! Nou ap kontakte ou byento.",
    footer_tagline: 'Diminye distans ant ou ak fanmi ou nan Pòtoprens — yon bwat pwovizyon ala fwa.',
    filter_all: 'Tout', filter_staples: 'Grenn & Sereyal', filter_dairy: 'Lèt & Ze',
    filter_meat: 'Vyann & Pwason', filter_condiments: 'Kondiman', filter_drinks: 'Bwason',
    filter_packages: 'Pakèt', filter_other: 'Lòt',
    qty: 'Qte', remove: 'Retire', items: 'atik', item: 'atik',
    cart_icon_label: 'Panye',
    whatsapp_msg_intro: "Bonjou, mwen ta renmen pase kòmann sa a pou livrezon nan Pòtoprens:",
    whatsapp_msg_total: "Total Kòmann",
    cart_updated: 'Ajoute nan panye!'
  }
};

let currentLang = 'en';
function t(key) { return LANG[currentLang][key] || LANG.en[key] || key; }

// ---- PRODUCTS (royalty-free images from Open Food Facts & Wikimedia) ----
const PRODUCTS = [
// STAPLES & GRAINS
{ name: "White Rice 4.5 Mamit", price: 19.00, orig: 20.00, cat: "staples", icon: "🍚", img: "https://images.openfoodfacts.org/images/products/004/971/002/8305/front_en.7.400.jpg", desc: "Clean, high-quality white rice for all types of dishes." },
{ name: "Riz 9 Mamit (Gwo Sak)", price: 40.00, orig: 41.00, cat: "staples", icon: "🌾", img: "https://images.openfoodfacts.org/images/products/001/270/500/0019/front_fr.3.400.jpg", desc: "Large bag of quality rice, ideal for family cooking." },
{ name: "Diri Shella (Mamit)", price: 15.00, orig: 16.00, cat: "staples", icon: "🍚", img: "https://images.openfoodfacts.org/images/products/761/720/400/0085/front_en.3.400.jpg", desc: "Traditional dried rice flakes, perfect for Haitian meals." },
{ name: "Spaghetti (Kes)", price: 17.00, orig: 18.00, cat: "staples", icon: "🍝", img: "https://images.openfoodfacts.org/images/products/008/000/090/3073/front_fr.17.400.jpg", desc: "High-quality spaghetti, perfect for quick family meals." },
{ name: "Macaroni KèS", price: 13.00, orig: 14.00, cat: "staples", icon: "🍜", img: "https://images.openfoodfacts.org/images/products/008/000/090/2267/front_fr.14.400.jpg", desc: "Quality macaroni pasta ideal for a variety of dishes." },
{ name: "Mamit Ble", price: 12.00, orig: 13.00, cat: "staples", icon: "🌾", img: "https://images.openfoodfacts.org/images/products/021/130/002/6000/front_en.3.400.jpg", desc: "Whole wheat grain, a nutritious household staple." },
{ name: "Mamit Avwàn", price: 11.00, orig: 12.00, cat: "staples", icon: "🌾", img: "https://images.openfoodfacts.org/images/products/007/669/200/3030/front_en.36.400.jpg", desc: "Oats for a healthy, filling breakfast." },
{ name: "Mamit Farine", price: 7.50, orig: 8.50, cat: "staples", icon: "🌾", img: "https://images.openfoodfacts.org/images/products/003/800/034/7136/front_en.9.400.jpg", desc: "Quality flour for baking and everyday cooking." },
{ name: "MAYI MOULEN (Mamit)", price: 9.00, orig: 10.00, cat: "staples", icon: "🌽", img: "https://images.openfoodfacts.org/images/products/001/600/001/4276/front_en.14.400.jpg", desc: "Finely ground corn flour perfect for traditional cooking." },
{ name: "Pitimi (1 Mamit)", price: 12.00, orig: 13.00, cat: "staples", icon: "🌾", img: "https://images.openfoodfacts.org/images/products/003/760/020/5451/front_en.5.400.jpg", desc: "Traditional grain, a Haitian household essential." },
{ name: "PITIMI (1 MAMIT)", price: 8.50, orig: 9.50, cat: "staples", icon: "🌾", img: "https://images.openfoodfacts.org/images/products/004/149/011/4011/front_en.3.400.jpg", desc: "Seasoning product to enhance flavor of every dish." },
{ name: "Red Beans (Mamit)", price: 11.50, orig: 12.50, cat: "staples", icon: "🫘", img: "https://images.openfoodfacts.org/images/products/003/561/000/3003/front_en.6.400.jpg", desc: "High-quality red beans (Pwa wouj), rich in protein." },
{ name: "Black Beans (Pwa Nwa) Mamit", price: 8.00, orig: 9.00, cat: "staples", icon: "🫘", img: "https://images.openfoodfacts.org/images/products/007/684/300/0087/front_en.8.400.jpg", desc: "Quality black beans perfect for traditional Haitian dishes." },
{ name: "Corn Flakes", price: 6.00, orig: 7.00, cat: "staples", icon: "🥣", img: "https://images.openfoodfacts.org/images/products/003/800/001/6518/front_en.12.400.jpg", desc: "Crispy corn flakes, perfect for a healthy breakfast." },
{ name: "Sugar (Mamit)", price: 10.00, orig: 11.00, cat: "staples", icon: "🍬", img: "https://images.openfoodfacts.org/images/products/048/700/001/4011/front_en.5.400.jpg", desc: "Fine-quality sugar for cooking, baking, and beverages." },

// DAIRY & EGGS
{ name: "Alaska Milk 900g", price: 19.50, orig: 20.50, cat: "dairy", icon: "🥛", img: "https://images.openfoodfacts.org/images/products/004/800/002/3458/front_en.6.400.jpg", desc: "High-quality powdered milk, rich in nutrients." },
{ name: "Bongu Milk 9 CT", price: 8.00, orig: 9.00, cat: "dairy", icon: "🥛", img: "https://images.openfoodfacts.org/images/products/003/017/400/2473/front_fr.3.400.jpg", desc: "Rich and tasty milk, great for drinking and cooking." },
{ name: "Lait Bongu Kès (48 unités)", price: 30.00, orig: 31.00, cat: "dairy", icon: "🥛", img: "https://images.openfoodfacts.org/images/products/003/017/400/8444/front_fr.3.400.jpg", desc: "Bulk pack of 48 milk cartons for the whole family." },
{ name: "Bongu Shake 3 CT", price: 7.00, orig: 8.00, cat: "dairy", icon: "🥤", img: "https://images.openfoodfacts.org/images/products/003/600/042/7076/front_en.9.400.jpg", desc: "Delicious shakes in chocolate, vanilla, and strawberry." },
{ name: "Shake Bongu 3 CT", price: 7.00, orig: 8.00, cat: "dairy", icon: "🥤", img: "https://images.openfoodfacts.org/images/products/001/600/002/7570/front_en.4.400.jpg", desc: "Refreshing sport shake, perfect for energy and hydration." },
{ name: "Cheese (La Vache Qui Rit)", price: 4.00, orig: 5.00, cat: "dairy", icon: "🧀", img: "https://images.openfoodfacts.org/images/products/003/045/140/9306/front_en.96.400.jpg", desc: "Creamy cheese, perfect for snacks, sandwiches, and meals." },
{ name: "KATON ZE", price: 10.00, orig: 11.00, cat: "dairy", icon: "🥚", img: "https://images.openfoodfacts.org/images/products/002/000/645/3020/front_en.5.400.jpg", desc: "100% fresh eggs (Zè yo 100% frè)." },

// MEAT & FISH
{ name: "Smoked Salami (Induveca)", price: 7.00, orig: 8.00, cat: "meat", icon: "🥩", img: "https://images.openfoodfacts.org/images/products/003/270/035/3036/front_en.3.400.jpg", desc: "Rich smoked salami, perfect for sandwiches and meals.", popular: true },
{ name: "VYANN BèF", price: 20.00, orig: 21.00, cat: "meat", icon: "🥩", img: "https://images.openfoodfacts.org/images/products/020/129/300/0013/front_en.3.400.jpg", desc: "Quality beef — rich in protein, iron, and vitamins." },
{ name: "KWIS POUL (12 CT)", price: 10.50, orig: 11.50, cat: "meat", icon: "🍗", img: "https://images.openfoodfacts.org/images/products/002/038/600/9051/front_en.3.400.jpg", desc: "Fresh, high-quality chicken thighs (Poul frè ak bon kalite)." },
{ name: "PYE POUL (30 CT)", price: 10.00, orig: 11.00, cat: "meat", icon: "🍗", img: "https://images.openfoodfacts.org/images/products/005/410/057/5001/front_en.3.400.jpg", desc: "Fresh chicken feet, 30 pieces (Poul ki frè ak bon kalite)." },
{ name: "ZEL POUL (14 CT)", price: 7.00, orig: 8.00, cat: "meat", icon: "🍗", img: "https://images.openfoodfacts.org/images/products/003/270/015/6804/front_en.3.400.jpg", desc: "Fresh chicken wings, quality guaranteed." },
{ name: "ARANSO 6 CT", price: 10.00, orig: 11.00, cat: "meat", icon: "🐟", img: "https://images.openfoodfacts.org/images/products/003/560/070/2044/front_en.4.400.jpg", desc: "Freshly prepared dried fish, perfect for traditional dishes." },
{ name: "Somon", price: 4.50, orig: 5.50, cat: "meat", icon: "🐟", img: "https://images.openfoodfacts.org/images/products/001/490/002/6453/front_en.3.400.jpg", desc: "Quality salmon product for everyday meals." },

// CONDIMENTS & PANTRY
{ name: "Cooking Oil", price: 15.00, orig: 16.00, cat: "condiments", icon: "🫙", img: "https://images.openfoodfacts.org/images/products/003/660/110/7040/front_en.4.400.jpg", desc: "High-quality oil ideal for frying and daily cooking." },
{ name: "Ketchup MAMIT", price: 5.00, orig: 6.00, cat: "condiments", icon: "🍅", img: "https://images.openfoodfacts.org/images/products/003/660/050/0049/front_en.15.400.jpg", desc: "Classic tomato ketchup loved by all ages." },
{ name: "Mayonnaise MAMIT", price: 13.00, orig: 14.00, cat: "condiments", icon: "🥫", img: "https://images.openfoodfacts.org/images/products/003/660/011/4007/front_en.10.400.jpg", desc: "Smooth creamy mayonnaise for sandwiches and salads." },
{ name: "Tomato Paste MAMIT", price: 13.00, orig: 14.00, cat: "condiments", icon: "🍅", img: "https://images.openfoodfacts.org/images/products/001/290/000/7510/front_en.4.400.jpg", desc: "Rich tomato paste for sauces and traditional dishes." },
{ name: "Maggi (El Criollito) 60 CT", price: 6.00, orig: 7.00, cat: "condiments", icon: "🧂", img: "https://images.openfoodfacts.org/images/products/007/613/034/8523/front_en.13.400.jpg", desc: "Popular seasoning to enhance the flavor of your meals." },
{ name: "Maggi with Tomato 36 CT", price: 4.00, orig: 5.00, cat: "condiments", icon: "🧂", img: "https://images.openfoodfacts.org/images/products/006/104/600/2940/front_en.3.400.jpg", desc: "Tomato-flavored Maggi seasoning, rich taste and color." },
{ name: "TI MALICE MAMIT", price: 13.00, orig: 14.00, cat: "condiments", icon: "🫙", img: "https://images.openfoodfacts.org/images/products/007/117/600/2472/front_en.3.400.jpg", desc: "Nutritious and flavorful Haitian sauce." },

// DRINKS
{ name: "Gatorade Drink 3 CT", price: 7.00, orig: 8.00, cat: "drinks", icon: "🥤", img: "https://images.openfoodfacts.org/images/products/005/200/014/5307/front_en.16.400.jpg", desc: "Refreshing sports drink to stay hydrated and energized." },

// PACKAGES
{ name: "Lamanjay Basic Package", price: 150.00, orig: 151.00, cat: "packages", icon: "📦", img: "https://images.openfoodfacts.org/images/products/003/017/400/2473/front_fr.3.400.jpg", desc: "Starter essentials package for one person or a small household." },
{ name: "Lafanmi Family Package", price: 250.00, orig: 251.00, cat: "packages", icon: "📦", img: "https://images.openfoodfacts.org/images/products/001/270/500/0019/front_fr.3.400.jpg", desc: "Complete family grocery package with all the essentials.", popular: true },
{ name: "Kè Kontan Premium Package", price: 288.00, orig: 289.00, cat: "packages", icon: "🎁", img: "https://images.openfoodfacts.org/images/products/003/045/140/9306/front_en.96.400.jpg", desc: "Premium package with extras including meat, flowers, and more." },

// OTHER
{ name: "BONBON SèL", price: 3.00, orig: 4.00, cat: "other", icon: "🍬", img: "https://images.openfoodfacts.org/images/products/007/117/800/0893/front_en.3.400.jpg", desc: "Sweet and salty candy, loved by kids and adults alike." },
{ name: "Flower Bouquet", price: 60.00, orig: 61.00, cat: "other", icon: "💐", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flower_bouquet_2.jpg/400px-Flower_bouquet_2.jpg", desc: "Beautiful fresh flower bouquet, perfect for gifts and occasions." },
];

// ---- CART STATE ----
let cart = [];

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}
function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}
function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; } 
  else { cart.push({ name, price: parseFloat(price), qty: 1 }); }
  updateCartUI();
  showCartToast();
}
function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartUI();
}
function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(name);
  else updateCartUI();
}

function updateCartUI() {
  const count = getCartCount();
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = count;
  renderCartItems();
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = '<p class="cart-empty">' + t('cart_empty') + '</p>';
    if (totalEl) totalEl.textContent = '';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.name.replace(/'/g,'')}',-1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.name.replace(/'/g,'')},',1)">+</button>
        <button class="remove-btn" onclick="removeFromCart('${item.name.replace(/'/g,'')}')">✕</button>
      </div>
    </div>
  `).join('');
  if (totalEl) totalEl.innerHTML = '<strong>' + t('cart_total') + ':</strong> $' + getCartTotal().toFixed(2);
}

function showCartToast() {
  let toast = document.getElementById('cartToast');
  if (!toast) return;
  toast.textContent = t('cart_updated');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show');
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;
  let msg = t('whatsapp_msg_intro') + '\n\n';
  cart.forEach(item => {
    msg += '• ' + item.qty + 'x ' + item.name + ' — $' + (item.price * item.qty).toFixed(2) + '\n';
  });
  msg += '\n' + t('whatsapp_msg_total') + ': $' + getCartTotal().toFixed(2);
  msg += '\n\nPlease confirm availability and delivery details for Port-au-Prince.';
  window.open('https://wa.me/50944708000?text=' + encodeURIComponent(msg), '_blank');
}

// ---- RENDER PRODUCTS ----
function renderProducts(cat) {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  countEl.textContent = filtered.length + ' ' + (filtered.length !== 1 ? t('items') : t('item'));

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span class="product-icon-fallback">${p.icon}</span>
        ${p.popular ? '<span class="badge">Popular</span>' : ''}
      </div>
      <div class="product-body">
        <p class="product-name">${p.name}</p>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <div><span class="price">$${p.price.toFixed(2)}</span><span class="price-old">$${p.orig.toFixed(2)}</span></div>
          <button class="add-btn" onclick="addToCart('${p.name.replace(/'/g,'')}','${p.price.toFixed(2)}')">${t('add_btn')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- LANGUAGE SWITCHER ----
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
  renderProducts(document.querySelector('.filter-btn.active')?.dataset.cat || 'all');
  renderCartItems();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.innerHTML = t(key);
    }
  });
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
applyTranslations();
