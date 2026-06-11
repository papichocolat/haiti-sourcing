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
  hero_tag: 'PORT-AU-PRINCE DELIVERY',
  hero_h1: 'Send <em>Real Food</em><br>Back Home',
  hero_desc: 'Quality groceries and essentials delivered directly to your family in Port-au-Prince.',
  hero_cta1: 'Shop Now', hero_cta2: 'View Food Boxes',
  feat1_title: 'Locally Sourced', feat1_desc: 'Authentic Haitian products',
  feat2_title: 'Secure Packaging', feat2_desc: 'Protected every step',
  feat3_title: 'PAP Delivery', feat3_desc: 'Port-au-Prince only',
  feat4_title: 'Trusted Service', feat4_desc: 'Family-run with care',
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
  footer_links: 'Quick Links', footer_info: 'Info',
  footer_privacy: 'Privacy Policy', footer_refund: 'Refund Policy',
  footer_terms: 'Terms of Service', footer_area: 'Delivery Area',
  footer_whatsapp: 'WhatsApp Us', footer_copy: '© 2026 Haiti Sourcing. All rights reserved.',
  filter_all: 'All', filter_staples: 'Staples & Grains', filter_dairy: 'Dairy & Eggs',
  filter_meat: 'Meat & Fish', filter_condiments: 'Condiments', filter_drinks: 'Drinks',
  filter_packages: 'Packages', filter_other: 'Other',
  qty: 'Qty', remove: 'Remove', items: 'items', item: 'item',
  cart_icon_label: 'Cart',
  whatsapp_msg_intro: "Hi, I'd like to place the following order for delivery in Port-au-Prince:",
  whatsapp_msg_total: 'Order Total',
  cart_updated: 'Added to cart!',
  box_basic: 'Basic Package', box_popular: 'Most Popular',
  box_family: 'Family Package', box_premium: 'Premium Package',
  contact_location: 'Delivery: Port-au-Prince, Haiti',
  contact_whatsapp: 'Order via WhatsApp'
},
fr: {
  nav_home: 'Accueil', nav_shop: 'Boutique', nav_boxes: 'Boîtes Alimentaires', nav_how: 'Comment ça marche', nav_contact: 'Contact',
  cart_title: 'Votre Panier', cart_empty: 'Votre panier est vide.', cart_checkout: '💬 Commander via WhatsApp',
  cart_total: 'Total', add_btn: 'Ajouter', order_btn: 'Commander',
  banner: 'Livraison Gratuite dès $75 · Livraison à Port-au-Prince · Garantie 30 Jours',
  hero_tag: 'LIVRAISON PORT-AU-PRINCE',
  hero_h1: 'Envoyez de <em>Vraie Nourriture</em><br>Chez Vous',
  hero_desc: 'Des épiceries de qualité livrées directement à votre famille à Port-au-Prince.',
  hero_cta1: 'Acheter', hero_cta2: 'Voir les Boîtes',
  feat1_title: 'Produits Locaux', feat1_desc: 'Produits haïtiens authentiques',
  feat2_title: 'Emballage Sécurisé', feat2_desc: 'Protégé à chaque étape',
  feat3_title: 'Livraison PAP', feat3_desc: 'Port-au-Prince seulement',
  feat4_title: 'Service de Confiance', feat4_desc: 'Géré en famille avec soin',
  notice: 'Nous livrons actuellement à <strong>Port-au-Prince uniquement.</strong>',
  products_title: 'Tous les Produits', how_title: 'Comment ça marche',
  step1_title: 'Parcourir & choisir', step1_desc: "Choisissez des articles ou une boîte prête.",
  step2_title: 'Passer commande', step2_desc: 'Contactez-nous via WhatsApp avec votre commande.',
  step3_title: 'Nous sourceons & emballons', step3_desc: 'Votre commande est soigneusement préparée.',
  step4_title: 'Livré à PAP', step4_desc: 'Votre famille reçoit des produits frais à sa porte.',
  boxes_title: 'Boîtes Alimentaires', contact_title: 'Nous Contacter',
  contact_desc: 'Des questions sur votre commande? Nous sommes là pour vous aider.',
  form_name: 'Votre nom', form_email: 'Votre email', form_msg: 'Votre message ou détails',
  form_btn: 'Envoyer', form_success: 'Message envoyé!',
  footer_tagline: 'Réduire la distance entre vous et votre famille à Port-au-Prince.',
  footer_links: 'Liens Rapides', footer_info: 'Info',
  footer_privacy: 'Politique de Confidentialité', footer_refund: 'Politique de Remboursement',
  footer_terms: 'Conditions', footer_area: 'Zone de Livraison',
  footer_whatsapp: 'WhatsApp', footer_copy: '© 2026 Haiti Sourcing. Tous droits réservés.',
  filter_all: 'Tout', filter_staples: 'Céréales', filter_dairy: 'Laitiers & Œufs',
  filter_meat: 'Viande & Poisson', filter_condiments: 'Condiments', filter_drinks: 'Boissons',
  filter_packages: 'Paquets', filter_other: 'Autre',
  qty: 'Qté', remove: 'Supprimer', items: 'articles', item: 'article',
  cart_icon_label: 'Panier',
  whatsapp_msg_intro: "Bonjour, je voudrais passer cette commande pour Port-au-Prince:",
  whatsapp_msg_total: 'Total de la commande',
  cart_updated: 'Ajouté au panier!',
  box_basic: 'Paquet de Base', box_popular: 'Le Plus Populaire',
  box_family: 'Paquet Famille', box_premium: 'Paquet Premium',
  contact_location: 'Livraison: Port-au-Prince, Haïti',
  contact_whatsapp: 'Commander via WhatsApp'
},
ht: {
  nav_home: 'Akèy', nav_shop: 'Boutik', nav_boxes: 'Bwat Manje', nav_how: 'Kijan sa Travay', nav_contact: 'Kontakte',
  cart_title: 'Panye Ou', cart_empty: 'Panye ou vid.', cart_checkout: '💬 Komande via WhatsApp',
  cart_total: 'Total', add_btn: 'Ajoute', order_btn: 'Komande',
  banner: 'Livrezon Gratis sou $75 · Livrezon Pòtoprens · Garanti 30 Jou',
  hero_tag: 'LIVREZON PÒTOPRENS',
  hero_h1: 'Voye <em>Manje Reyèl</em><br>Lakay',
  hero_desc: 'Pwovizyon kalite livré dirèkteman bay fanmi ou nan Pòtoprens.',
  hero_cta1: 'Achte Kounye a', hero_cta2: 'Gade Bwat Manje',
  feat1_title: 'Pwodui Lokal', feat1_desc: 'Pwodui ayisyen otantik',
  feat2_title: 'Pakèt Sekirize', feat2_desc: 'Pwoteje chak etap',
  feat3_title: 'Livrezon PAP', feat3_desc: 'Pòtoprens sèlman',
  feat4_title: 'Sèvis Konfyans', feat4_desc: 'Fanmi ki jere ak swen',
  notice: 'Nou livré nan <strong>Pòtoprens sèlman.</strong>',
  products_title: 'Tout Pwodui', how_title: 'Kijan sa Travay',
  step1_title: 'Gade & Chwazi', step1_desc: 'Chwazi atik oswa yon bwat manje.',
  step2_title: 'Pase kòmann ou', step2_desc: 'Kontakte nou via WhatsApp.',
  step3_title: 'Nou Source & Pakèt', step3_desc: 'Kòmann ou soinyezmèn prepare.',
  step4_title: 'Livré nan PAP', step4_desc: 'Fanmi ou resevwa pwovizyon fre.',
  boxes_title: 'Bwat Manje', contact_title: 'Kontakte Nou',
  contact_desc: 'Kesyon sou kòmann ou? Nou la pou ede ou.',
  form_name: 'Non ou', form_email: 'Imèl ou', form_msg: 'Mesaj ou',
  form_btn: 'Voye Mesaj', form_success: 'Mesaj voye!',
  footer_tagline: 'Diminye distans ant ou ak fanmi ou nan Pòtoprens.',
  footer_links: 'Lyen Rapid', footer_info: 'Enfòmasyon',
  footer_privacy: 'Politik Konfidansyalite', footer_refund: 'Politik Ranbousman',
  footer_terms: 'Kondisyon', footer_area: 'Zòn Livrezon',
  footer_whatsapp: 'WhatsApp', footer_copy: '© 2026 Haiti Sourcing. Tout dwa rezève.',
  filter_all: 'Tout', filter_staples: 'Grenn & Sereyal', filter_dairy: 'Lèt & Ze',
  filter_meat: 'Vyann & Pwason', filter_condiments: 'Kondiman', filter_drinks: 'Bwason',
  filter_packages: 'Pakèt', filter_other: 'Lòt',
  qty: 'Qte', remove: 'Retire', items: 'atik', item: 'atik',
  cart_icon_label: 'Panye',
  whatsapp_msg_intro: "Bonjou, mwen ta renmen pase kòmann sa a pou Pòtoprens:",
  whatsapp_msg_total: 'Total Kòmann',
  cart_updated: 'Ajoute nan panye!',
  box_basic: 'Pakèt Debaz', box_popular: 'Pi Popilè',
  box_family: 'Pakèt Fanmi', box_premium: 'Pakèt Premium',
  contact_location: 'Livrezon: Pòtoprens, Ayiti',
  contact_whatsapp: 'Komande via WhatsApp'
}
};

let currentLang = 'en';
function t(key) { return (LANG[currentLang] && LANG[currentLang][key]) || LANG.en[key] || key; }

// ---- PRODUCTS — using reliable Unsplash & Wikimedia images ----
const PRODUCTS = [
  // STAPLES & GRAINS
  { name: "White Rice 4.5 Mamit", price: 19.00, orig: 20.00, cat: "staples", icon: "🍚", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", desc: "Clean, high-quality white rice for all types of dishes. A staple of every Haitian kitchen." },
  { name: "Riz 9 Mamit (Gwo Sak)", price: 40.00, orig: 41.00, cat: "staples", icon: "🌾", img: "https://images.unsplash.com/photo-1536304993881-ff86e0c9e84f?w=400&q=80", desc: "Large family-size bag of quality rice, ideal for big family cooking." },
  { name: "Diri Shella (Mamit)", price: 15.00, orig: 16.00, cat: "staples", icon: "🍚", img: "https://images.unsplash.com/photo-1592997572594-34be7f078a6f?w=400&q=80", desc: "Traditional dried rice flakes, perfect for authentic Haitian meals." },
  { name: "Spaghetti (Kes)", price: 17.00, orig: 18.00, cat: "staples", icon: "🍝", img: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400&q=80", desc: "High-quality spaghetti, perfect for quick and delicious family meals." },
  { name: "Macaroni KèS", price: 13.00, orig: 14.00, cat: "staples", icon: "🍜", img: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&q=80", desc: "Quality macaroni pasta ideal for a variety of Haitian dishes." },
  { name: "Mamit Ble", price: 12.00, orig: 13.00, cat: "staples", icon: "🌾", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80", desc: "Whole wheat grain, a nutritious household staple packed with fiber." },
  { name: "Mamit Avwàn", price: 11.00, orig: 12.00, cat: "staples", icon: "🌾", img: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=400&q=80", desc: "Quality oats for a healthy, filling breakfast. Great source of energy." },
  { name: "Mamit Farine", price: 7.50, orig: 8.50, cat: "staples", icon: "🌾", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80", desc: "Quality all-purpose flour for baking, frying, and everyday cooking." },
  { name: "MAYI MOULEN (Mamit)", price: 9.00, orig: 10.00, cat: "staples", icon: "🌽", img: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&q=80", desc: "Finely ground cornmeal (mayi moulen) perfect for traditional Haitian cooking." },
  { name: "Pitimi (1 Mamit)", price: 12.00, orig: 13.00, cat: "staples", icon: "🌾", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80", desc: "Traditional sorghum grain, a staple Haitian household essential." },
  { name: "Red Beans (Mamit)", price: 11.50, orig: 12.50, cat: "staples", icon: "🫘", img: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&q=80", desc: "High-quality red beans (Pwa wouj), rich in protein and fiber. Essential for rice and beans." },
  { name: "Black Beans (Pwa Nwa) Mamit", price: 8.00, orig: 9.00, cat: "staples", icon: "🫘", img: "https://images.unsplash.com/photo-1611575619049-5cbedf0cde22?w=400&q=80", desc: "Quality black beans perfect for traditional Haitian dishes and stews." },
  { name: "Corn Flakes", price: 6.00, orig: 7.00, cat: "staples", icon: "🥣", img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&q=80", desc: "Crispy corn flakes, perfect for a quick healthy breakfast with milk." },
  { name: "Sugar (Mamit)", price: 10.00, orig: 11.00, cat: "staples", icon: "🍬", img: "https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=400&q=80", desc: "Fine-quality white sugar for cooking, baking, and sweetening beverages." },
  // DAIRY & EGGS
  { name: "Alaska Milk 900g", price: 19.50, orig: 20.50, cat: "dairy", icon: "🥛", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80", desc: "High-quality powdered milk, rich in nutrients. Great for cooking and drinking." },
  { name: "Bongu Milk 9 CT", price: 8.00, orig: 9.00, cat: "dairy", icon: "🥛", img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80", desc: "Rich and tasty Bongu milk cartons, great for drinking and cooking. Pack of 9." },
  { name: "Lait Bongu Kès (48 unités)", price: 30.00, orig: 31.00, cat: "dairy", icon: "🥛", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80", desc: "Bulk pack of 48 Bongu milk cartons for the whole family. Best value!" },
  { name: "Bongu Shake 3 CT", price: 7.00, orig: 8.00, cat: "dairy", icon: "🥤", img: "https://images.unsplash.com/photo-1572490122747-3e9197aa1a26?w=400&q=80", desc: "Delicious Bongu shakes in chocolate, vanilla, and strawberry flavors. Pack of 3." },
  { name: "Cheese (La Vache Qui Rit)", price: 4.00, orig: 5.00, cat: "dairy", icon: "🧀", img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80", desc: "Creamy La Vache Qui Rit cheese, perfect for snacks, sandwiches, and meals." },
  { name: "KATON ZE", price: 10.00, orig: 11.00, cat: "dairy", icon: "🥚", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80", desc: "100% fresh eggs (Zè yo 100% frè). Perfect for any meal of the day." },
  // MEAT & FISH
  { name: "Smoked Salami (Induveca)", price: 7.00, orig: 8.00, cat: "meat", icon: "🥩", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80", desc: "Rich smoked Induveca salami, perfect for sandwiches and traditional meals.", popular: true },
  { name: "VYANN BèF", price: 20.00, orig: 21.00, cat: "meat", icon: "🥩", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80", desc: "Quality fresh beef — rich in protein, iron, and essential vitamins." },
  { name: "KWIS POUL (12 CT)", price: 10.50, orig: 11.50, cat: "meat", icon: "🍗", img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&q=80", desc: "Fresh, high-quality chicken thighs (Poul frè ak bon kalite). Pack of 12." },
  { name: "PYE POUL (30 CT)", price: 10.00, orig: 11.00, cat: "meat", icon: "🍗", img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&q=80", desc: "Fresh chicken feet, 30 pieces. A Haitian kitchen staple for soups and stews." },
  { name: "ZEL POUL (14 CT)", price: 7.00, orig: 8.00, cat: "meat", icon: "🍗", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80", desc: "Fresh chicken wings (14 CT), quality guaranteed for grilling or frying." },
  { name: "ARANSO 6 CT", price: 10.00, orig: 11.00, cat: "meat", icon: "🐟", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80", desc: "Freshly prepared dried herring fish (aranso), perfect for traditional Haitian dishes." },
  { name: "Somon", price: 4.50, orig: 5.50, cat: "meat", icon: "🐟", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80", desc: "Quality salmon product for everyday healthy meals." },
  // CONDIMENTS & PANTRY
  { name: "Cooking Oil", price: 15.00, orig: 16.00, cat: "condiments", icon: "🫙", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", desc: "High-quality vegetable cooking oil ideal for frying and daily cooking." },
  { name: "Ketchup MAMIT", price: 5.00, orig: 6.00, cat: "condiments", icon: "🍅", img: "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=400&q=80", desc: "Classic tomato ketchup loved by all ages. Great on everything!" },
  { name: "Mayonnaise MAMIT", price: 13.00, orig: 14.00, cat: "condiments", icon: "🥫", img: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=400&q=80", desc: "Smooth and creamy mayonnaise for sandwiches, salads, and dips." },
  { name: "Tomato Paste MAMIT", price: 13.00, orig: 14.00, cat: "condiments", icon: "🍅", img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80", desc: "Rich tomato paste for sauces, stews, and traditional Haitian dishes." },
  { name: "Maggi (El Criollito) 60 CT", price: 6.00, orig: 7.00, cat: "condiments", icon: "🧂", img: "https://images.unsplash.com/photo-1588951884758-0f7b08c80c75?w=400&q=80", desc: "Popular Maggi seasoning cubes (60 count) to enhance the flavor of every meal." },
  { name: "Maggi with Tomato 36 CT", price: 4.00, orig: 5.00, cat: "condiments", icon: "🧂", img: "https://images.unsplash.com/photo-1596797038530-2c107aa89ae0?w=400&q=80", desc: "Tomato-flavored Maggi seasoning (36 count), rich taste and vibrant color." },
  { name: "TI MALICE MAMIT", price: 13.00, orig: 14.00, cat: "condiments", icon: "🫙", img: "https://images.unsplash.com/photo-1506617420156-8e4536971650?w=400&q=80", desc: "Nutritious and flavorful authentic Haitian Ti Malice hot sauce." },
  // DRINKS
  { name: "Gatorade Drink 3 CT", price: 7.00, orig: 8.00, cat: "drinks", icon: "🥤", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80", desc: "Refreshing Gatorade sports drinks to stay hydrated and energized. Pack of 3." },
  // PACKAGES
  { name: "Lamanjay Basic Package", price: 150.00, orig: 151.00, cat: "packages", icon: "📦", img: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=400&q=80", desc: "Starter essentials package for one person or a small household. Includes rice, oil, beans, spaghetti, macaroni, tomato paste, and Maggi." },
  { name: "Lafanmi Family Package", price: 250.00, orig: 251.00, cat: "packages", icon: "📦", img: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=400&q=80", desc: "Complete family grocery package with all the essentials. Includes large rice bag, cooking oil, beans, pasta, salami, milk, ketchup, and more.", popular: true },
  { name: "Kè Kontan Premium Package", price: 288.00, orig: 289.00, cat: "packages", icon: "🎁", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80", desc: "Premium package with everything in the Family Package plus Alaska milk, beef, chicken, mayonnaise, a flower bouquet, and priority delivery." },
  // OTHER
  { name: "BONBON SèL", price: 3.00, orig: 4.00, cat: "other", icon: "🍬", img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&q=80", desc: "Sweet and salty Haitian candy (bonbon sèl), loved by kids and adults alike." },
  { name: "Flower Bouquet", price: 60.00, orig: 61.00, cat: "other", icon: "💐", img: "https://images.unsplash.com/photo-1487530811015-780a6fdc6d4a?w=400&q=80", desc: "Beautiful fresh flower bouquet, perfect for gifts, celebrations, and special occasions." },
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
        <button class="qty-btn" onclick="changeQty('${item.name.replace(/'/g,'')}', -1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.name.replace(/'/g,'')}', 1)">+</button>
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

// ---- PRODUCT MODAL ----
function openModal(idx) {
  const p = PRODUCTS[idx];
  const overlay = document.getElementById('modalOverlay');
  const imgEl = document.getElementById('modalImg');
  const fallback = document.getElementById('modalFallback');
  document.getElementById('modalCat').textContent = p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = '$' + p.price.toFixed(2);
  document.getElementById('modalOrig').textContent = '$' + p.orig.toFixed(2);
  const btn = document.getElementById('modalAddBtn');
  btn.onclick = () => { addToCart(p.name, p.price); closeModalDirect(); };
  // Handle image
  imgEl.style.display = 'block';
  fallback.style.display = 'none';
  imgEl.src = p.img;
  imgEl.alt = p.name;
  imgEl.onerror = function() {
    this.style.display = 'none';
    fallback.style.display = 'flex';
    fallback.textContent = p.icon;
  };
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- RENDER PRODUCTS ----
function renderProducts(cat) {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  if (countEl) countEl.textContent = filtered.length + ' ' + (filtered.length !== 1 ? t('items') : t('item'));

  grid.innerHTML = filtered.map((p, i) => {
    const realIdx = PRODUCTS.indexOf(p);
    return `
    <div class="product-card" onclick="openModal(${realIdx})" role="button" tabindex="0" aria-label="View ${p.name}" onkeydown="if(event.key==='Enter'||event.key===' ')openModal(${realIdx})">
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
          <button class="add-btn" onclick="event.stopPropagation();addToCart('${p.name.replace(/'/g,'\'')}','${p.price.toFixed(2)}')">${t('add_btn')}</button>
        </div>
      </div>
    </div>
  `;
  }).join('');
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
