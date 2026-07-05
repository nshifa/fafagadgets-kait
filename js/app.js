/**
 * FafaGadgets - Core Application Logic (Image-integrated Version)
 * Implements real-world product models, local folder image paths,
 * dynamic image variants on selector change, and direct checkout shortcuts.
 */

// --- 1. Product Catalog Database ---
const products = [
  // --- 1. SMARTPHONES (6 items) ---
  {
    id: 1,
    name: 'iQOO Neo 10',
    category: 'smartphones',
    price: 5899000,
    rating: 4.6,
    stok: 100,
    tag: 'Budget King',
    defaultImage: 'images/smartphones/iqoo neo 10/white.jpg',
    images: {
      'White': 'images/smartphones/iqoo neo 10/white.jpg',
      'Red White': 'images/smartphones/iqoo neo 10/red white.jpg'
    },
    options: ['White', 'Red White'],
    description: 'Smartphone gaming kelas menengah terjangkau dengan layar super mulus, pengisian daya cepat, dan bodi tipis yang mantap digenggam.',
    specifications: ['Layar: 6.78" AMOLED 144Hz', 'Memori: 8GB RAM + 256GB ROM', 'Chipset: Snapdragon 8 Gen 3', 'Baterai: 5500 mAh (Fast Charge 120W)']
  },
  {
    id: 2,
    name: 'Vivo X300',
    category: 'smartphones',
    price: 11999000,
    rating: 4.7,
    stok: 15,
    tag: 'Value Choice',
    defaultImage: 'images/smartphones/vivo x300/white.jpg',
    images: {
      'White': 'images/smartphones/vivo x300/white.jpg',
      'Red': 'images/smartphones/vivo x300/red.jpg',
      'Tosca': 'images/smartphones/vivo x300/tosca.jpg'
    },
    options: ['White', 'Red', 'Tosca'],
    description: 'Kamera profesional kolaborasi ZEISS dengan sensor super besar untuk memotret malam hari dengan sangat jernih dan tajam.',
    specifications: ['Layar: 6.78" AMOLED 1.5K 120Hz', 'Memori: 12GB RAM + 256GB ROM', 'Kamera: ZEISS Optics 50MP OIS', 'Chipset: MediaTek Dimensity 9300']
  },
  {
    id: 3,
    name: 'Google Pixel 9',
    category: 'smartphones',
    price: 13499000,
    rating: 4.8,
    stok: 12,
    tag: 'Gamer Edition',
    defaultImage: 'images/smartphones/google pixel 9/white.jpg',
    images: {
      'White': 'images/smartphones/google pixel 9/white.jpg',
      'Black': 'images/smartphones/google pixel 9/black.jpg',
      'Silver': 'images/smartphones/google pixel 9/silver.jpg'
    },
    options: ['White', 'Black', 'Silver'],
    description: 'Sistem operasi Android murni paling cerdas dengan fitur AI Google Gemini terintegrasi penuh untuk produktivitas Anda.',
    specifications: ['Layar: 6.3" Actua Display OLED', 'Memori: 12GB RAM + 128GB ROM', 'Processor: Google Tensor G4', 'Fitur: Google AI Gemini Built-in']
  },
  {
    id: 4,
    name: 'iPhone 12 Pro',
    category: 'smartphones',
    price: 8499000,
    rating: 4.9,
    stok: 5,
    tag: 'Best Seller',
    defaultImage: 'images/smartphones/iphone 12 pro/black.jpg',
    images: {
      'Black': 'images/smartphones/iphone 12 pro/black.jpg',
      'Deep Blue': 'images/smartphones/iphone 12 pro/deep blue.jpg',
      'White': 'images/smartphones/iphone 12 pro/white.jpg'
    },
    options: ['Black', 'Deep Blue', 'White'],
    description: 'Desain bodi baja tahan karat bedah yang kokoh dengan teknologi LiDAR Scanner untuk pemotretan AR dan portrait canggih.',
    specifications: ['Layar: 6.1" Super Retina XDR OLED', 'Memori: 6GB RAM + 128GB ROM', 'Chipset: Apple A14 Bionic', 'Fitur: Ceramic Shield, LiDAR Scanner']
  },
  {
    id: 5,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'smartphones',
    price: 18999000,
    rating: 4.9,
    stok: 1,
    tag: 'Hampir Habis!',
    defaultImage: 'images/smartphones/samsung s24 ultra/silver metallic.jpg',
    images: {
      'Silver Metallic': 'images/smartphones/samsung s24 ultra/silver metallic.jpg',
      'Blue': 'images/smartphones/samsung s24 ultra/blue.jpg',
      'White': 'images/smartphones/samsung s24 ultra/white.jpg'
    },
    options: ['Silver Metallic', 'Blue', 'White'],
    description: 'Flagship Samsung tercanggih dengan rangka titanium kuat, stylus S-Pen bawaan, dan fitur Galaxy AI yang luar biasa pintar.',
    specifications: ['Layar: 6.8" Dynamic AMOLED 2X QHD+', 'Memori: 12GB RAM + 256GB ROM', 'Kamera: 200MP Quad Telephoto', 'Stylus: S-Pen Included']
  },
  {
    id: 6,
    name: 'Samsung Galaxy Z Fold 7',
    category: 'smartphones',
    price: 24499000,
    rating: 4.8,
    stok: 0,
    tag: 'Out of Stock',
    defaultImage: 'images/smartphones/samsung z fold 7/black.jpg',
    images: {
      'Black': 'images/smartphones/samsung z fold 7/black.jpg',
      'Blue': 'images/smartphones/samsung z fold 7/blue.jpg',
      'Silver': 'images/smartphones/samsung z fold 7/silver.webp'
    },
    options: ['Black', 'Blue', 'Silver'],
    description: 'Smartphone layar lipat jumbo futuristik berdesain super tipis dengan engsel logam terlindung untuk produktivitas multitasking maksimal.',
    specifications: ['Layar Utama: 7.6" Foldable Dynamic AMOLED', 'Memori: 12GB RAM + 512GB ROM', 'Desain: Flex Hinge Logam Presisi', 'Proteksi: Armor Aluminum Frame']
  },

  // --- 2. LAPTOPS (6 items) ---
  {
    id: 7,
    name: 'Laptop HP Series',
    category: 'laptops',
    price: 6499000,
    rating: 4.5,
    stok: 8,
    tag: 'Hemat Belajar',
    defaultImage: 'images/laptops/laptop hp/mika-baumeister-OKKV_hqEtFU-unsplash.jpg',
    images: {
      'Elegant Black': 'images/laptops/laptop hp/mika-baumeister-OKKV_hqEtFU-unsplash.jpg',
      'Silver Grey': 'images/laptops/laptop hp/andrey-matveev-qmcTZZ7XhqY-unsplash.jpg',
      'Pure White': 'images/laptops/laptop hp/nubelson-fernandes-yp4JU1yoDss-unsplash.jpg'
    },
    options: ['Silver Grey', 'Elegant Black', 'Pure White'],
    description: 'Laptop andalan untuk mengetik tugas sekolah, meeting zoom, dan browsing internet dengan baterai yang tahan seharian.',
    specifications: ['Processor: Intel Core i3 Gen 12', 'Memori: 8GB DDR4 + 512GB SSD', 'Layar: 14" FHD IPS Thin-Bezel', 'Sistem: Windows 11 Home']
  },
  {
    id: 8,
    name: 'Lenovo LOQ',
    category: 'laptops',
    price: 11299000,
    rating: 4.6,
    stok: 50,
    tag: 'Best Value',
    defaultImage: 'images/laptops/lenovo loq/gavin-phillips-D7QVSEzbLVA-unsplash.jpg',
    images: {
      'Storm Grey': 'images/laptops/lenovo loq/gavin-phillips-D7QVSEzbLVA-unsplash.jpg',
      'Onyx Black': 'images/laptops/lenovo loq/shawn-rain-8N5oIdfV3iI-unsplash.jpg'
    },
    options: ['Storm Grey', 'Onyx Black'],
    description: 'Laptop bodi metal tangguh dengan pendinginan gaming super efisien. Perpaduan performa kerja tinggi dan harga kompetitif.',
    specifications: ['Processor: AMD Ryzen 5 7640HS', 'Grafis: NVIDIA GeForce RTX 3050 6GB', 'Memori: 8GB DDR5 + 512GB SSD', 'Layar: 15.6" FHD IPS 144Hz']
  },
  {
    id: 9,
    name: 'HP Victus 16',
    category: 'laptops',
    price: 14599000,
    rating: 4.7,
    stok: 6,
    tag: '2-in-1 Touch',
    defaultImage: 'images/laptops/victus/naren-marthandan-Dt-e8DpjvSg-unsplash.jpg',
    images: {
      'Performance Blue': 'images/laptops/victus/naren-marthandan-Dt-e8DpjvSg-unsplash.jpg'
    },
    options: ['Performance Blue'],
    description: 'Laptop gaming layar lebar dengan refresh rate tinggi dan baterai andal, menunjang kebutuhan komputasi berat harian.',
    specifications: ['Processor: Intel Core i7 13620H', 'Grafis: NVIDIA GeForce RTX 4050 6GB', 'Memori: 16GB DDR5 + 512GB SSD', 'Layar: 16.1" FHD IPS 144Hz']
  },
  {
    id: 10,
    name: 'MacBook Pro',
    category: 'laptops',
    price: 18999000,
    rating: 4.8,
    stok: 3,
    tag: 'Premium Choice',
    defaultImage: 'images/laptops/macbook pro/pexels-tranmautritam-369409.jpg',
    images: {
      'Space Grey': 'images/laptops/macbook pro/pexels-tranmautritam-369409.jpg',
      'Silver Metallic': 'images/laptops/macbook pro/pexels-dlxmedia-hu-215591835-11969081.jpg',
      'Citrus': 'images/laptops/macbook pro/pexels-jonatas-nas-1701885-5351724.jpg'
    },
    options: ['Space Grey', 'Silver Metallic', 'Citrus'],
    description: 'Laptop bisnis ultrathin super ringan berbobot ramping dengan chip M-series legendaris yang sunyi dan hemat daya luar biasa.',
    specifications: ['Processor: Apple M3 Chip 8-Core', 'Memori: 8GB Unified Memory + 512GB SSD', 'Layar: 14.2" Liquid Retina XDR', 'Baterai: Hingga 22 Jam Pemakaian']
  },
  {
    id: 11,
    name: 'Acer Gaming Nitro',
    category: 'laptops',
    price: 12799000,
    rating: 4.9,
    stok: 0,
    tag: 'Out of Stock',
    defaultImage: 'images/laptops/acer gaming nitro/pexels-bertellifotografia-19012031.jpg',
    images: {
      'Shale Black': 'images/laptops/acer gaming nitro/pexels-bertellifotografia-19012031.jpg',
      'Carbon Black': 'images/laptops/acer gaming nitro/pexels-bertellifotografia-19012049.jpg',
      'Steel Grey': 'images/laptops/acer gaming nitro/pexels-bertellifotografia-19012059.jpg'
    },
    options: ['Shale Black', 'Carbon Black', 'Steel Grey'],
    description: 'Laptop gaming dengan kartu grafis NVIDIA RTX generasi terbaru dan layar 144Hz responsif untuk melibas game berat.',
    specifications: ['Processor: Intel Core i5 12450H', 'Grafis: NVIDIA GeForce RTX 4500 6GB', 'Memori: 16GB DDR5 + 512GB SSD', 'Layar: 15.6" FHD 144Hz']
  },
  {
    id: 12,
    name: 'ASUS ROG Laptop',
    category: 'laptops',
    price: 24499000,
    rating: 4.9,
    stok: 1,
    tag: 'Hampir Habis!',
    defaultImage: 'images/laptops/Laptop Rog/ritupon-baishya-WMcvCK3qemQ-unsplash.jpg',
    images: {
      'Eclipse Grey': 'images/laptops/Laptop Rog/ritupon-baishya-WMcvCK3qemQ-unsplash.jpg',
      'Original Black': 'images/laptops/Laptop Rog/makeen-m-alaa-tkSqiW0qFJU-unsplash.jpg',
      'Slash Black': 'images/laptops/Laptop Rog/ritupon-baishya-HkqFGB7T2g0-unsplash.jpg'
    },
    options: ['Eclipse Grey', 'Original Black', 'Slash Black'],
    description: 'Workstation impian para video editor dan 3D artist. Dilengkapi layar OLED berakurasi warna sRGB/DCI-P3 100% tervalidasi.',
    specifications: ['Layar: 16" 2.5K Nebula OLED 240Hz', 'Processor: AMD Ryzen 9 8945HS', 'Memori: 32GB DDR5 + 1TB NVMe SSD', 'Grafis: NVIDIA RTX 4070 8GB']
  },

  // --- 3. CASE HP (6 items with color/motif options) ---
  {
    id: 13,
    name: 'Case iQOO Neo 10',
    category: 'cases',
    price: 79000,
    stok: 80,
    rating: 4.6,
    tag: 'Colorful',
    defaultImage: 'images/cases/case iqoo neo 10/images (2).jpg',
    images: {
      'Carbon Grey': 'images/cases/case iqoo neo 10/images (2).jpg',
      'Carbon Black': 'images/cases/case iqoo neo 10/images (3).jpg',
      'Black Spider': 'images/cases/case iqoo neo 10/images (4).jpg'
    },
    options: ['Carbon Grey', 'Carbon Black', 'Black Spider'],
    description: 'Casing silikon cair super lembut dengan furing beludru halus di bagian dalam untuk mencegah goresan halus pada bodi HP.',
    specifications: ['Bahan: Liquid Silicone Rubber', 'Furing: Microfiber Lining', 'Fitur: Anti-sidik jari & mudah dibersihkan']
  },
  {
    id: 14,
    name: 'Case Vivo X300',
    category: 'cases',
    price: 99000,
    stok: 1,
    rating: 4.5,
    tag: 'Hampir Habis!',
    defaultImage: 'images/cases/case vivo x300/images (5).jpg',
    images: {
      'Classic White': 'images/cases/case vivo x300/images (5).jpg',
      'Black Premium': 'images/cases/case vivo x300/images (6).jpg',
      'Carbon Black': 'images/cases/case vivo x300/images (7).jpg'
    },
    options: ['Classic White', 'Black Premium', 'Carbon Black'],
    description: 'Case bening kristal dengan teknologi anti-yellowing (tidak cepat menguning). Menampilkan keindahan warna asli handphone Anda.',
    specifications: ['Bahan: Acrylic Rigid Back + TPU Bumper', 'Teknologi: Anti-Yellowing Polycarbonate', 'Fitur: Bezel layar terangkat 1.2mm']
  },
  {
    id: 15,
    name: 'Case Google Pixel 9',
    category: 'cases',
    price: 149000,
    stok: 45,
    rating: 4.8,
    tag: 'Indonesian Pride',
    defaultImage: 'images/cases/case google pixel 9/images (2).jpg',
    images: {
      'Pixel Transparent': 'images/cases/case google pixel 9/images (2).jpg',
      'Pixel Pink': 'images/cases/case google pixel 9/images (3).jpg',
      'Pixel Carbon': 'images/cases/case google pixel 9/images (4).jpg'
    },
    options: ['Pixel Transparent', 'Pixel Pink', 'Pixel Carbon'],
    description: 'Casing bermotif modern yang dicetak dengan printer UV bertekstur timbul beresolusi tinggi.',
    specifications: ['Teknik Cetak: Raised UV Relief Print', 'Bahan: Hybrid Shockproof Case', 'Desain: Slim-fit Protection']
  },
  {
    id: 16,
    name: 'Case iPhone 12 Pro',
    category: 'cases',
    price: 189000,
    stok: 12,
    rating: 4.8,
    tag: 'Tough Protection',
    defaultImage: 'images/cases/case iphone 12 pro/images (2).jpg',
    images: {
      'Spesial Black': 'images/cases/case iphone 12 pro/images (2).jpg',
      'Carbon Black n White': 'images/cases/case iphone 12 pro/images (3).jpg',
      'Pink': 'images/cases/case iphone 12 pro/images (4).jpg'
    },
    options: ['Spesial Black', 'Carbon Black n White', 'Pink'],
    description: 'Casing tangguh bersertifikasi uji jatuh militer. Dilengkapi kickstand logam terintegrasi di bagian belakang untuk menyangga HP.',
    specifications: ['Bahan: Polycarbonate + TPU shock absorber', 'Stand: Built-in Metal Kickstand', 'Sertifikat: Mil-Spec 810G Drop Test']
  },
  {
    id: 17,
    name: 'Case Galaxy Z Fold 7',
    category: 'cases',
    price: 199000,
    stok: 0,
    rating: 4.7,
    tag: 'Out of Stock',
    defaultImage: 'images/cases/case samsung z fold 7/id-galaxy-z-fold7-xf966-ef-xf966sbegww-thumb-547354716.webp',
    images: {
      'Original carbon': 'images/cases/case samsung z fold 7/id-galaxy-z-fold7-xf966-ef-xf966sbegww-thumb-547354716.webp',
      'Original Black': 'images/cases/case samsung z fold 7/images (2).jpg',
      'Black Pen': 'images/cases/case samsung z fold 7/images (3).jpg'
    },
    options: ['Original carbon', 'Original Black', 'Black Pen'],
    description: 'Case berbalut kulit sintetis premium bertekstur mewah. Memberikan genggaman mantap dan penampilan formal berkelas bisnis.',
    specifications: ['Bahan: Premium PU Leather + TPU Frame', 'Kancing Tombol: Logam aluminium anodized', 'Fitur: Kompatibel dengan pengisian nirkabel']
  },
  {
    id: 18,
    name: 'Case Galaxy S24 Ultra',
    category: 'cases',
    price: 249000,
    stok: 15,
    rating: 4.9,
    tag: 'Carbon Tech',
    defaultImage: 'images/cases/case samsung s24 ultra/images (2).jpg',
    images: {
      'Transparent': 'images/cases/case samsung s24 ultra/images (2).jpg',
      'Aramid Purple': 'images/cases/case samsung s24 ultra/images (3).jpg',
      'Ceramic': 'images/cases/case samsung s24 ultra/images (4).jpg'
    },
    options: ['Transparent', 'Aramid Purple', 'Ceramic'],
    description: 'Casing super tipis ultra ringan bermaterial anyaman serat karbon asli. Memberikan perlindungan kokoh tanpa menambah tebal HP.',
    specifications: ['Bahan: Real Aramid Carbon Fiber', 'Ketebalan: Hanya 0.6 mm', 'Bobot: 12 gram', 'Tekstur: Anyaman serat 3D matte']
  },

  // --- 4. CHARGERS (6 items with wattage options) ---
  {
    id: 19,
    name: 'Charger 10 Watt Lightning',
    category: 'chargers',
    price: 99000,
    stok: 40,
    rating: 4.6,
    tag: 'Compact Type',
    defaultImage: 'images/chargers/charger 10 watt lightning/shopping.webp',
    images: {
      'Standard Black': 'images/chargers/charger 10 watt lightning/shopping.webp',
      'Standard White': 'images/chargers/charger 10 watt lightning/shopping (1).webp'
    },
    options: ['Standard Black', 'Standard White'],
    description: 'Charger mini berukuran kubus kecil sangat praktis dibawa bepergian untuk HP iOS Anda.',
    specifications: ['Konektor: Single Lightning to USB', 'Daya: 10 Watt Max', 'Keamanan: Proteksi korsleting']
  },
  {
    id: 20,
    name: 'Charger 20 Watt Lightning',
    category: 'chargers',
    price: 149000,
    stok: 15,
    rating: 4.7,
    tag: 'In-Car Fast',
    defaultImage: 'images/chargers/charger 20 watt lightning/shopping.webp',
    images: {
      'Original Fast': 'images/chargers/charger 20 watt lightning/shopping.webp',
      'Fast Pro': 'images/chargers/charger 20 watt lightning/shopping (1).webp'
    },
    options: ['Original Fast', 'Fast Pro'],
    description: 'Charger adapter cepat USB-C 20W untuk pengisian kilat baterai handphone harian Anda.',
    specifications: ['Konektor: Single USB-C', 'Protokol: Power Delivery (PD) 3.0', 'Daya: 20 Watt Max']
  },
  {
    id: 21,
    name: 'Charger 33 Watt Type-C',
    category: 'chargers',
    price: 199000,
    stok: 30,
    rating: 4.5,
    tag: 'Qi Wireless',
    defaultImage: 'images/chargers/charger 33 watt type c/shopping.webp',
    images: {
      'Super Flash 33W': 'images/chargers/charger 33 watt type c/shopping.webp'
    },
    options: ['Super Flash 33W'],
    description: 'Charger Type-C berkecepatan 33W kompatibel untuk pengisian cepat merek Android modern.',
    specifications: ['Koneksi: USB-C port', 'Daya: 33 Watt Max', 'Bahan: Fireproof PC material']
  },
  {
    id: 22,
    name: 'Charger 67 Watt Type-C',
    category: 'chargers',
    price: 299000,
    stok: 25,
    rating: 4.8,
    tag: 'Dual Port GaN',
    defaultImage: 'images/chargers/charger 67 watt type c/shopping (1).webp',
    images: {
      'Turbo Charge 67W': 'images/chargers/charger 67 watt type c/shopping (1).webp'
    },
    options: ['Turbo Charge 67W'],
    description: 'Adaptor charger cepat berdaya 67W. Sangat praktis untuk mengisi baterai laptop tipis dan HP sekaligus.',
    specifications: ['Teknologi: Fast Charge GaN', 'Port: USB-C', 'Daya: 67 Watt Max']
  },
  {
    id: 23,
    name: 'Charger 120 Watt Type-C',
    category: 'chargers',
    price: 499000,
    stok: 1,
    rating: 4.9,
    tag: 'Hampir Habis!',
    defaultImage: 'images/chargers/charger 120 watt type c/shopping.webp',
    images: {
      'HyperCharge 120W': 'images/chargers/charger 120 watt type c/shopping.webp'
    },
    options: ['HyperCharge 120W'],
    description: 'Charger super cepat berdaya 120W. Mampu mencharge HP Android flagship dari 0 hingga 100% dalam waktu 20 menit.',
    specifications: ['Port: Single USB-C', 'Daya Maksimal: Hingga 120W', 'Keamanan: Proteksi panas berlebih']
  },
  {
    id: 24,
    name: 'Charger 140 Watt Type-C',
    category: 'chargers',
    price: 699000,
    stok: 0,
    rating: 4.8,
    tag: 'Out of Stock',
    defaultImage: 'images/chargers/charger 140 watt type c/shopping (1).webp',
    images: {
      'Ultra Power 140W': 'images/chargers/charger 140 watt type c/shopping (1).webp'
    },
    options: ['Ultra Power 140W'],
    description: 'Stasiun pengisian daya dengan daya 140W. Mampu men-charge MacBook Pro dan Laptop Gaming berdaya tinggi secara bersamaan.',
    specifications: ['Port: Multiple USB-C Ports', 'Daya Maksimal: 140 Watt', 'Fitur: Smart Power Distribution']
  },

  // --- 5. JAM TANGAN / WEARABLES (6 items) ---
  {
    id: 25,
    name: 'Casio Classic',
    category: 'wearables',
    price: 329000,
    rating: 4.6,
    stok: 100,
    tag: 'Entry Tracker',
    defaultImage: 'images/watchs/Casio/pavlo-talpa-inhasepzxy4-unsplash.jpg',
    images: {
      'Steel Silver': 'images/watchs/Casio/pavlo-talpa-inhasepzxy4-unsplash.jpg',
      'Silver': 'images/watchs/Casio/pavlo-talpa-4rJyzAa_8JQ-unsplash.jpg',
      'Matte Black': 'images/watchs/Casio/divyang-parmar-15ZOc0sFF10-unsplash.jpg'
    },
    options: ['Steel Silver', 'Silver', 'Matte Black'],
    description: 'Arloji kasual legendaris berpenampilan retro klasik yang awet dipakai bertahun-tahun.',
    specifications: ['Layar: Digital LCD', 'Material: Stainless Steel strap', 'Fitur: Stopwatch, Alarm, Water Resistant']
  },
  {
    id: 26,
    name: 'Seiko Chrono',
    category: 'wearables',
    price: 2499000,
    rating: 4.5,
    stok: 15,
    tag: 'Japan Quartz',
    defaultImage: 'images/watchs/seiko/pexels-atta-k-260673941-12697589.jpg',
    images: {
      'Silver': 'images/watchs/seiko/pexels-atta-k-260673941-12697589.jpg',
      'Black': 'images/watchs/seiko/pexels-prasang-yadav-2151662075-37266554.jpg',
      'Silver Metallic': 'images/watchs/seiko/pexels-arjunn-la-1561931-29325644.jpg'
    },
    options: ['Silver', 'Black', 'Silver Metallic'],
    description: 'Jam tangan chronograph pria dengan mesin mekanikal kuarsa presisi tinggi untuk penampilan bisnis formal.',
    specifications: ['Diameter: 42 mm', 'Kaca: Hardlex Crystal', 'Fitur: Tachymeter, Tanggalan, 100m Water Resistant']
  },
  {
    id: 27,
    name: 'G-Shock Sport',
    category: 'wearables',
    price: 1849000,
    rating: 4.7,
    stok: 30,
    tag: 'Tough Engine',
    defaultImage: 'images/watchs/G-shock/pexels-pixabay-158741.jpg',
    images: {
      'Matte Black': 'images/watchs/G-shock/pexels-pixabay-158741.jpg',
      'Green': 'images/watchs/G-shock/pexels-deyan-georgiev-170431557-11106315.jpg',
      'Black Premium': 'images/watchs/G-shock/pexels-quang-viet-nguyen-107013384-9848542.jpg'
    },
    options: ['Matte Black', 'Green', 'Black Premium'],
    description: 'Jam tangan petualang ultra kokoh tahan guncangan ekstrem dan lumpur untuk aktivitas outdoor berat.',
    specifications: ['Proteksi: Shock Resistant casing', 'Fitur: World Time, Altimeter, Barometer', 'Ketahanan: 200 meter Waterproof']
  },
  {
    id: 28,
    name: 'Garmin Athlete',
    category: 'wearables',
    price: 6249000,
    rating: 4.8,
    stok: 10,
    tag: 'Sport GPS',
    defaultImage: 'images/watchs/garmin/alex-skobe-zmGbl59Mq4U-unsplash.jpg',
    images: {
      'Midnight Black': 'images/watchs/garmin/alex-skobe-zmGbl59Mq4U-unsplash.jpg',
      'Slate Grey': 'images/watchs/garmin/jj-shev-qvVE1mKRjZI-unsplash.jpg',
      'Active White': 'images/watchs/garmin/jj-shev-P0nP7X_r73s-unsplash.jpg'
    },
    options: ['Midnight Black', 'Slate Grey', 'Active White'],
    description: 'Smartwatch olahraga profesional dengan GPS pelacak lari presisi tinggi dan monitor kebugaran tubuh harian.',
    specifications: ['Layar: Transflective MIP (Sinar Matahari)', 'Sensor: SpO2 Oksigen, Heart Rate, VO2 Max', 'Koneksi: Garmin Connect App']
  },
  {
    id: 29,
    name: 'Apple Watch Series',
    category: 'wearables',
    price: 6499000,
    rating: 4.9,
    stok: 1,
    tag: 'Hampir Habis!',
    defaultImage: 'images/watchs/apple watch/daniel-korpai-hbTKIbuMmBI-unsplash.jpg',
    images: {
      'Starlight': 'images/watchs/apple watch/daniel-korpai-hbTKIbuMmBI-unsplash.jpg',
      'Midnight': 'images/watchs/apple watch/klim-musalimov-IGO10LkxP_g-unsplash.jpg',
      'Graphite': 'images/watchs/apple watch/simon-daoudi-2wFoa040m8g-unsplash.jpg'
    },
    options: ['Starlight', 'Midnight', 'Graphite'],
    description: 'Smartwatch premium terbaik untuk pengguna ekosistem iOS. Dilengkapi fitur pendeteksi jatuh darurat dan detak jantung ECG.',
    specifications: ['Layar: Always-On Retina LTPO OLED', 'Sensor: ECG, Suhu Tubuh, Fall Detection', 'Ketahanan: WR50 Water Resistant']
  },
  {
    id: 30,
    name: 'Rolex President',
    category: 'wearables',
    price: 189999000,
    rating: 4.9,
    stok: 0,
    tag: 'Out of Stock',
    defaultImage: 'images/watchs/Rolex/adam-bignell-Zkf5HBAbQWc-unsplash.jpg',
    images: {
      'Gold Oyster': 'images/watchs/Rolex/adam-bignell-Zkf5HBAbQWc-unsplash.jpg',
      'Silver Datejust': 'images/watchs/Rolex/laurenz-heymann-al6s6JpnZis-unsplash.jpg',
      'Cosmograph Daytona': 'images/watchs/Rolex/patrick-langwallner-GaHmbqNh5q8-unsplash.jpg'
    },
    options: ['Gold Oyster', 'Silver Datejust', 'Cosmograph Daytona'],
    description: 'Simbol kemewahan dan kesuksesan finansial tertinggi. Arloji mahakarya mekanikal buatan Swiss bersertifikasi kronometer resmi.',
    specifications: ['Material: Emas Murni 18 Karat / Platinum', 'Mesin: Calibre 3255 Automatic', 'Sertifikat: Superlative Chronometer Swiss']
  }
];

// --- 2. Application State Management ---
const state = {
  activePage: 'home',
  cart: [],
  filters: {
    category: 'all',
    search: '',
    maxPrice: 200000000
  },
  sortBy: 'popularity',
  appliedVoucher: null,
  voucherDiscount: 0,
  
  // Tracking Simulation Variables
  trackingState: {
    active: false,
    intervalId: null,
    step: 0,
    invoiceId: '',
    paymentMethod: '',
    custName: ''
  }
};

// --- 3. DOM Elements ---
const DOM = {
  navLinks: document.querySelectorAll('.nav-link'),
  pageSections: document.querySelectorAll('.page-section'),
  productsGrid: document.getElementById('products-grid'),
  cartBadge: document.getElementById('cart-badge'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartOverlay: document.getElementById('cart-overlay'),
  cartItemsList: document.getElementById('cart-items-list'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  checkoutDrawerBtn: document.getElementById('checkout-drawer-btn'),
  checkoutItemsList: document.getElementById('checkout-items-list'),
  checkoutSubtotal: document.getElementById('checkout-subtotal'),
  checkoutShipping: document.getElementById('checkout-shipping'),
  checkoutTotal: document.getElementById('checkout-total'),
  checkoutForm: document.getElementById('checkout-form'),
  paymentModal: document.getElementById('payment-modal-overlay'),
  paymentModalBody: document.getElementById('payment-modal-body'),
  
  // Catalog filter elements
  searchField: document.getElementById('search-field'),
  categoryButtons: document.querySelectorAll('.category-btn'),
  priceSlider: document.getElementById('price-slider'),
  priceValueLabel: document.getElementById('price-val-label'),
  sortSelect: document.getElementById('sort-select'),
  resetFilterBtn: document.getElementById('filter-reset-btn'),

  // Checkout Promos
  promoCodeInput: document.getElementById('promo-code'),
  promoApplyBtn: document.getElementById('promo-apply-btn'),
  promoDiscountRow: document.getElementById('promo-discount-row'),
  promoDiscountVal: document.getElementById('promo-discount'),
  
  // Strategy navigation
  strategyNavLinks: document.querySelectorAll('.strategy-nav-link'),
  strategySections: document.querySelectorAll('.strategy-sub-section'),

  // Order Tracking Elements
  trackInvoiceId: document.getElementById('track-invoice-id'),
  trackOrderDate: document.getElementById('track-order-date'),
  trackingProgressLine: document.getElementById('tracking-progress-line'),
  trackingStatusTitle: document.getElementById('tracking-status-title'),
  trackingLocationText: document.getElementById('tracking-location-text'),
  trackingTimeUpdate: document.getElementById('tracking-time-update'),
  btnSpeedUpTracking: document.getElementById('btn-speed-up-tracking'),
  btnBackHomeTrack: document.getElementById('btn-back-home-track')
};

// --- 4. Initialization & Single Page Router ---
function initApp() {
  const savedCart = localStorage.getItem('svarna_cart');
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  }
  
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      navigateTo(pageId);
    });
  });

  document.getElementById('hero-cta-shop')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('shop');
  });

  DOM.searchField?.addEventListener('input', (e) => {
    state.filters.search = e.target.value.trim().toLowerCase();
    renderCatalog();
  });

  DOM.categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filters.category = btn.getAttribute('data-cat');
      renderCatalog();
    });
  });

  DOM.priceSlider?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.filters.maxPrice = val;
    DOM.priceValueLabel.textContent = `Rp ${val.toLocaleString('id-ID')}`;
    renderCatalog();
  });

  DOM.sortSelect?.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderCatalog();
  });

  DOM.resetFilterBtn?.addEventListener('click', () => {
    state.filters.search = '';
    state.filters.category = 'all';
    state.filters.maxPrice = 200000000;
    state.sortBy = 'popularity';
    
    if (DOM.searchField) DOM.searchField.value = '';
    if (DOM.priceSlider) {
      DOM.priceSlider.value = 200000000;
      DOM.priceValueLabel.textContent = `Rp 200.000.000`;
    }
    DOM.categoryButtons.forEach(b => b.classList.remove('active'));
    document.querySelector('.category-btn[data-cat="all"]')?.classList.add('active');
    if (DOM.sortSelect) DOM.sortSelect.value = 'popularity';
    
    renderCatalog();
  });

  document.getElementById('cart-toggle-btn')?.addEventListener('click', toggleCartDrawer);
  DOM.cartOverlay?.addEventListener('click', toggleCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', toggleCartDrawer);

  DOM.checkoutDrawerBtn?.addEventListener('click', () => {
    toggleCartDrawer();
    navigateTo('checkout');
  });

  DOM.promoApplyBtn?.addEventListener('click', applyPromoCode);
  DOM.checkoutForm?.addEventListener('submit', handleCheckoutSubmit);

  DOM.strategyNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      DOM.strategyNavLinks.forEach(l => l.classList.remove('active'));
      DOM.strategySections.forEach(s => s.classList.remove('active'));
      
      link.classList.add('active');
      const targetId = link.getAttribute('data-strategy');
      document.getElementById(`strategy-${targetId}`).classList.add('active');
    });
  });

  // Tracking Panel Actions
  DOM.btnBackHomeTrack?.addEventListener('click', () => {
    stopTrackingSimulation();
    navigateTo('home');
  });

  DOM.btnSpeedUpTracking?.addEventListener('click', () => {
    speedUpTrackingSimulation();
  });

  SVARNA_Analytics.init();

  renderCatalog();
  updateCartBadge();
  renderCartUI();
  
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (['home', 'shop', 'strategy', 'checkout', 'tracking'].includes(hash)) {
      navigateTo(hash);
    }
  }
}

function navigateTo(pageId) {
  state.activePage = pageId;
  window.location.hash = pageId;

  DOM.navLinks.forEach(link => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  DOM.pageSections.forEach(section => {
    if (section.id === `${pageId}-section`) {
      section.classList.add('active');
      window.scrollTo(0, 0);
    } else {
      section.classList.remove('active');
    }
  });

  if (pageId === 'checkout') {
    renderCheckoutPageUI();
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    SVARNA_Analytics.trackBeginCheckout(state.cart, subtotal);
  }
}

// --- 5. Catalog Rendering Engine ---
function renderCatalog() {
  if (!DOM.productsGrid) return;

  let filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(state.filters.search) || 
                        p.description.toLowerCase().includes(state.filters.search);
    const matchCategory = state.filters.category === 'all' || p.category === state.filters.category;
    const matchPrice = p.price <= state.filters.maxPrice;
    return matchSearch && matchCategory && matchPrice;
  });

  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    DOM.productsGrid.innerHTML = `
      <div class="empty-catalog">
        <h3>Gadget tidak ditemukan</h3>
        <p>Silakan sesuaikan filter pencarian atau rentang harga Anda.</p>
      </div>
    `;
    return;
  }

  DOM.productsGrid.innerHTML = filtered.map(p => {
    let stockStatusHTML = '';
    let actionButtonHTML = '';

    if (p.stok === 0) {
      stockStatusHTML = `<span class="stock-badge stock-out">Stok Habis</span>`;
      // Pre-filled WhatsApp and Instagram DM message
      const waMsg = `Halo Admin FafaGadgets, saya ingin menanyakan restock untuk produk *${p.name}* yang sedang habis di website. Apakah bisa melakukan pre-order?`;
      actionButtonHTML = `
        <a href="https://wa.me/62895700831945?text=${encodeURIComponent(waMsg)}" target="_blank" class="btn-cs-dm" onclick="event.stopPropagation();">
          💬 Hubungi Admin via WA
        </a>
      `;
    } else if (p.stok === 1) {
      stockStatusHTML = `<span class="stock-badge stock-critical">Sisa 1 Unit!</span>`;
      actionButtonHTML = `<button class="btn-primary" onclick="event.stopPropagation(); quickAddToCart(${p.id})" style="width: 100%; margin-top: 10px;">Beli Sekarang</button>`;
    } else {
      stockStatusHTML = `<span class="stock-badge stock-available">Stok: ${p.stok} unit</span>`;
      actionButtonHTML = `<button class="btn-primary" onclick="event.stopPropagation(); quickAddToCart(${p.id})" style="width: 100%; margin-top: 10px;">Beli Sekarang</button>`;
    }

    return `
      <article class="product-card" id="prod-${p.id}" onclick="openProductModal(${p.id})" style="cursor: pointer;">
        ${p.tag ? `<span class="product-tag" style="background-color: var(--primary);">${p.tag}</span>` : ''}
        <div class="product-img-wrapper" style="display: flex; align-items: center; justify-content: center; height: 260px; overflow: hidden; background: #FFF0F5;">
          <img src="${p.defaultImage}" alt="${p.name}" loading="lazy" style="max-height: 100%; max-width: 100%; object-fit: contain; padding: 10px; transition: transform 0.5s ease;">
          <div class="product-overlay-actions">
            <button class="btn-card-action" onclick="event.stopPropagation(); openProductModal(${p.id})" title="Lihat Detail">👁</button>
            ${p.stok > 0 ? `<button class="btn-card-action" onclick="event.stopPropagation(); quickAddToCart(${p.id})" title="Beli Sekarang">🛒</button>` : ''}
          </div>
        </div>
        <div class="product-info">
          <span class="product-category" style="color: var(--grey-dark);">${p.category}</span>
          <h3 class="product-title" style="margin-bottom: 2px;">${p.name}</h3>
          
          ${stockStatusHTML}
          
          <span class="product-price" style="margin-top: 8px;">Rp ${p.price.toLocaleString('id-ID')}</span>
          
          ${actionButtonHTML}
          
          <!-- Testing Restock shortcut for academic examiners -->
          <button class="btn-admin-restock" onclick="event.stopPropagation(); adminRestock(${p.id})">
            ⚙️ Restock +10 (Admin)
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Admin panel restock shortcut logic
window.adminRestock = function(productId) {
  const p = products.find(prod => prod.id === productId);
  if (p) {
    p.stok += 10;
    showToast(`Stok ${p.name} berhasil ditambah (+10). Total stok sekarang: ${p.stok} unit.`);
    renderCatalog();
  }
};

// --- 6. Product Detail Modal Handler ---
window.openProductModal = function(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  SVARNA_Analytics.trackViewItem(p);

  let modalOverlay = document.getElementById('product-detail-modal');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'product-detail-modal';
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);
  }

  // Render variant selections dynamically based on product categories
  let variantLabel = 'Pilihan Warna:';
  if (p.category === 'cases') {
    variantLabel = 'Pilih Desain / Motif:';
  } else if (p.category === 'chargers') {
    variantLabel = 'Pilih Varian Daya:';
  }
  let variants = p.options || ['Standard White', 'Black Metallic'];

  let actionButtonHTML = '';
  if (p.stok === 0) {
    const waMsg = `Halo Admin FafaGadgets, saya tertarik pre-order *${p.name}* yang sedang habis di website Anda.`;
    actionButtonHTML = `
      <a href="https://wa.me/62895700831945?text=${encodeURIComponent(waMsg)}" target="_blank" class="btn-cs-dm" style="width: 100%; border-radius: var(--radius-sm); font-size: 0.95rem; padding: 14px;" onclick="event.stopPropagation();">
        💬 Hubungi Admin via WhatsApp
      </a>
    `;
  } else {
    actionButtonHTML = `
      <button class="btn-add-modal" id="btn-add-to-cart-modal" style="background-color: var(--primary); width: 100%;">
        <span>Tambah ke Keranjang Belanja</span>
      </button>
    `;
  }

  modalOverlay.innerHTML = `
    <div class="modal-container">
      <button class="modal-close-btn" id="modal-close-btn">&times;</button>
      <div class="modal-gallery" style="display: flex; align-items: center; justify-content: center; background: #FFF0F5; height: 320px; overflow: hidden;">
        <img id="modal-product-img" src="${p.defaultImage}" alt="${p.name}" style="max-height: 100%; max-width: 100%; object-fit: contain; padding: 20px;">
      </div>
      <div class="modal-details">
        <span class="modal-category">${p.category}</span>
        <h2 class="modal-title">${p.name}</h2>
        <span class="modal-price">Rp ${p.price.toLocaleString('id-ID')}</span>
        
        <div style="margin-bottom: 15px;">
          ${p.stok === 0 
            ? `<span class="stock-badge stock-out">Stok Habis</span>` 
            : (p.stok === 1 ? `<span class="stock-badge stock-critical">Sisa 1 Unit!</span>` : `<span class="stock-badge stock-available">Stok Tersedia (${p.stok} unit)</span>`)}
        </div>

        <p class="modal-desc">${p.description}</p>
        
        <div class="modal-meta-row">
          <div class="meta-item">
            <label>Spesifikasi Produk:</label>
            <ul style="padding-left: 20px; font-size: 0.85rem; color: var(--grey-dark); line-height: 1.5;">
              ${p.specifications.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          <div class="meta-item">
            <label>${variantLabel}</label>
            <div class="size-selector-group" style="flex-wrap: wrap;">
              ${variants.map((variant, idx) => `
                <input type="radio" name="prod-variant" id="var-${idx}" value="${variant}" class="size-radio" ${idx === 0 ? 'checked' : ''}>
                <label for="var-${idx}" class="size-label" style="font-size: 0.78rem; padding: 6px 12px; margin-bottom: 8px;">${variant}</label>
              `).join('')}
            </div>
          </div>
          ${p.stok > 0 ? `
          <div class="meta-item">
            <label>Kuantitas:</label>
            <div class="quantity-control">
              <button class="qty-btn" id="btn-qty-dec">-</button>
              <span class="qty-val" id="modal-qty-val">1</span>
              <button class="qty-btn" id="btn-qty-inc">+</button>
            </div>
          </div>
          ` : ''}
        </div>
        
        <div class="modal-actions" style="margin-top: 15px;">
          ${actionButtonHTML}
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');

  const closeBtn = modalOverlay.querySelector('#modal-close-btn');
  const overlayClose = (e) => {
    if (e.target === modalOverlay || e.target === closeBtn) {
      modalOverlay.classList.remove('active');
    }
  };
  modalOverlay.addEventListener('click', overlayClose);
  closeBtn.addEventListener('click', overlayClose);

  if (p.stok > 0) {
    let currentQty = 1;
    const qtyVal = modalOverlay.querySelector('#modal-qty-val');
    modalOverlay.querySelector('#btn-qty-dec').addEventListener('click', () => {
      if (currentQty > 1) {
        currentQty--;
        qtyVal.textContent = currentQty;
      }
    });
    modalOverlay.querySelector('#btn-qty-inc').addEventListener('click', () => {
      if (currentQty < p.stok) {
        currentQty++;
        qtyVal.textContent = currentQty;
      } else {
        alert(`Stok terbatas! Stok tersedia hanya ${p.stok} unit.`);
      }
    });

    modalOverlay.querySelector('#btn-add-to-cart-modal').addEventListener('click', () => {
      const selectedVariant = modalOverlay.querySelector('input[name="prod-variant"]:checked').value;
      addToCart(p.id, currentQty, selectedVariant);
      modalOverlay.classList.remove('active');
    });
  }

  // Dynamic image change on variant selection
  const variantRadios = modalOverlay.querySelectorAll('input[name="prod-variant"]');
  const modalImg = modalOverlay.querySelector('#modal-product-img');
  if (modalImg) {
    variantRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const selectedVal = e.target.value;
        if (p.images && p.images[selectedVal]) {
          modalImg.src = p.images[selectedVal];
        }
      });
    });
  }
};

// --- 7. Cart Core Mechanics ---
window.quickAddToCart = function(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;
  
  if (p.stok === 0) {
    alert('Maaf, produk ini sedang habis. Hubungi admin melalui WhatsApp untuk melakukan pre-order.');
    return;
  }

  let defaultVariant = p.options && p.options.length > 0 ? p.options[0] : 'Classic Black';
  
  addToCart(productId, 1, defaultVariant);
  navigateTo('checkout');
};

function addToCart(productId, quantity, size) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const existingItemIndex = state.cart.findIndex(item => item.id === productId && item.size === size);

  if (existingItemIndex > -1) {
    const newQty = state.cart[existingItemIndex].quantity + quantity;
    if (newQty <= p.stok) {
      state.cart[existingItemIndex].quantity = newQty;
    } else {
      state.cart[existingItemIndex].quantity = p.stok;
      alert(`Maksimal stok tercapai. Hanya ${p.stok} pcs ditambahkan.`);
    }
  } else {
    state.cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      category: p.category,
      image: p.images && p.images[size] ? p.images[size] : p.defaultImage,
      size: size,
      quantity: quantity
    });
  }

  saveCartToLocalStorage();
  updateCartBadge();
  renderCartUI();
  
  SVARNA_Analytics.trackAddToCart(p, quantity);

  DOM.cartBadge.classList.add('pulse-anim');
  setTimeout(() => DOM.cartBadge.classList.remove('pulse-anim'), 300);

  showToast(`${p.name} (${size}) ditambahkan ke keranjang.`);
}

window.removeFromCart = function(productId, size) {
  const index = state.cart.findIndex(item => item.id === productId && item.size === size);
  if (index > -1) {
    const item = state.cart[index];
    state.cart.splice(index, 1);
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartUI();
    
    const p = products.find(prod => prod.id === productId);
    if (p) SVARNA_Analytics.trackRemoveFromCart(p, item.quantity);
  }
};

window.updateQty = function(productId, size, delta) {
  const index = state.cart.findIndex(item => item.id === productId && item.size === size);
  if (index > -1) {
    const item = state.cart[index];
    const p = products.find(prod => prod.id === productId);
    const newQty = item.quantity + delta;

    if (newQty <= 0) {
      removeFromCart(productId, size);
    } else if (newQty <= p.stok) {
      item.quantity = newQty;
      saveCartToLocalStorage();
      updateCartBadge();
      renderCartUI();
    } else {
      alert(`Stok terbatas! Stok tersedia hanya ${p.stok} unit.`);
    }
  }
};

function toggleCartDrawer() {
  DOM.cartOverlay.classList.toggle('active');
  DOM.cartDrawer.classList.toggle('active');
}

function updateCartBadge() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartBadge.textContent = totalItems;
  if (totalItems > 0) {
    DOM.cartBadge.style.display = 'flex';
  } else {
    DOM.cartBadge.style.display = 'none';
  }
}

function renderCartUI() {
  if (state.cart.length === 0) {
    DOM.cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <i>🛒</i>
        <p>Keranjang belanja kosong</p>
      </div>
    `;
    DOM.cartSubtotal.textContent = 'Rp 0';
    DOM.checkoutDrawerBtn.setAttribute('disabled', 'true');
    DOM.checkoutDrawerBtn.style.opacity = '0.5';
    DOM.checkoutDrawerBtn.style.pointerEvents = 'none';
    return;
  }

  DOM.checkoutDrawerBtn.removeAttribute('disabled');
  DOM.checkoutDrawerBtn.style.opacity = '1';
  DOM.checkoutDrawerBtn.style.pointerEvents = 'auto';

  DOM.cartItemsList.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img-wrapper" style="width: 70px; height: 70px; background: var(--grey-light); display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: var(--radius-sm);">
        <img src="${item.image}" alt="${item.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-meta">Pilihan: ${item.size}</span>
        <div class="cart-item-bottom">
          <div class="cart-item-qty">
            <button onclick="updateQty(${item.id}, '${item.size}', -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty(${item.id}, '${item.size}', 1)">+</button>
          </div>
          <span class="cart-item-price">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart(${item.id}, '${item.size}')">Hapus barang</button>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  DOM.cartSubtotal.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
}

function saveCartToLocalStorage() {
  localStorage.setItem('svarna_cart', JSON.stringify(state.cart));
}

// --- 8. Checkout Form & Payment Gateway Simulation ---
function renderCheckoutPageUI() {
  if (state.cart.length === 0) {
    DOM.checkoutItemsList.innerHTML = '<p>Keranjang kosong.</p>';
    DOM.checkoutSubtotal.textContent = 'Rp 0';
    DOM.checkoutTotal.textContent = 'Rp 0';
    return;
  }

  DOM.checkoutItemsList.innerHTML = state.cart.map(item => `
    <div class="summary-item-row">
      <div class="summary-item-name">${item.name} (${item.size}) x ${item.quantity}</div>
      <div class="summary-item-price">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</div>
    </div>
  `).join('');

  calculateGrandTotal();

  const cardInput = document.getElementById('pay-cc');
  const ccDetails = document.getElementById('credit-card-details');
  const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
  
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (cardInput.checked) {
        ccDetails.style.display = 'block';
      } else {
        ccDetails.style.display = 'none';
      }
    });
  });
}

function calculateGrandTotal() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 25000; 
  
  let discount = 0;
  if (state.appliedVoucher === 'FAFATECH10') {
    discount = Math.round(subtotal * 0.1);
  } else if (state.appliedVoucher === 'GADGET50') {
    discount = 50000;
  } else if (state.appliedVoucher === 'FAFASAVER') {
    discount = Math.round(subtotal * 0.15);
  }
  state.voucherDiscount = discount;

  const grandTotal = subtotal + shippingFee - discount;

  DOM.checkoutSubtotal.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
  DOM.checkoutShipping.textContent = `Rp ${shippingFee.toLocaleString('id-ID')}`;
  
  if (discount > 0) {
    DOM.promoDiscountRow.style.display = 'flex';
    DOM.promoDiscountVal.textContent = `- Rp ${discount.toLocaleString('id-ID')}`;
  } else {
    DOM.promoDiscountRow.style.display = 'none';
  }
  
  DOM.checkoutTotal.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
}

function applyPromoCode() {
  const code = DOM.promoCodeInput.value.trim().toUpperCase();
  if (code === 'FAFATECH10') {
    state.appliedVoucher = code;
    showToast('Promo FAFATECH10 berhasil! Diskon 10% diterapkan.');
  } else if (code === 'GADGET50') {
    state.appliedVoucher = code;
    showToast('Promo GADGET50 berhasil! Potongan Rp 50.000 diterapkan.');
  } else if (code === 'FAFASAVER') {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems >= 2) {
      state.appliedVoucher = code;
      showToast('Promo FAFASAVER berhasil! Diskon 15% diterapkan.');
    } else {
      state.appliedVoucher = null;
      showToast('Kode FAFASAVER minimal pembelian 2 item.', true);
    }
  } else {
    state.appliedVoucher = null;
    showToast('Kode promo tidak valid.', true);
  }
  calculateGrandTotal();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  
  let isValid = true;
  const fields = ['cust-name', 'cust-email', 'cust-phone', 'cust-address', 'cust-province', 'cust-zip'];
  
  fields.forEach(fieldId => {
    const input = document.getElementById(fieldId);
    const errorText = input.nextElementSibling;
    if (!input.value.trim()) {
      errorText.style.display = 'block';
      isValid = false;
    } else {
      errorText.style.display = 'none';
    }
  });

  const isCC = document.getElementById('pay-cc').checked;
  if (isCC) {
    const ccNum = document.getElementById('cc-number');
    const ccExpiry = document.getElementById('cc-expiry');
    const ccCvv = document.getElementById('cc-cvv');
    
    [ccNum, ccExpiry, ccCvv].forEach(input => {
      const errorText = input.nextElementSibling;
      if (!input.value.trim()) {
        errorText.style.display = 'block';
        isValid = false;
      } else {
        errorText.style.display = 'none';
      }
    });
  }

  if (!isValid) {
    showToast('Harap isi semua kolom formulir wajib.', true);
    return;
  }

  const selectedPayment = document.querySelector('input[name="payment-method"]:checked').value;
  const custName = document.getElementById('cust-name').value.trim();
  
  startPaymentSimulation(selectedPayment, custName);
}

function startPaymentSimulation(paymentMethod, custName) {
  DOM.paymentModal.classList.add('active');
  
  DOM.paymentModalBody.innerHTML = `
    <div class="payment-loader">
      <div class="spinner"></div>
      <h3>Menghubungkan ke Payment Gateway...</h3>
      <p>Mohon jangan menutup halaman ini saat kami memproses pembayaran Anda dengan aman.</p>
    </div>
  `;

  setTimeout(() => {
    const transactionId = 'FAF-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleString('id-ID');
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = 25000;
    const finalAmount = subtotal + shippingFee - state.voucherDiscount;

    let paymentInstructions = '';
    
    if (paymentMethod === 'QRIS') {
      paymentInstructions = `
        <div class="qr-code-placeholder">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="white"/>
            <rect x="5" y="5" width="25" height="25" fill="black"/>
            <rect x="10" y="10" width="15" height="15" fill="white"/>
            <rect x="12" y="12" width="11" height="11" fill="black"/>
            <rect x="70" y="5" width="25" height="25" fill="black"/>
            <rect x="75" y="10" width="15" height="15" fill="white"/>
            <rect x="77" y="12" width="11" height="11" fill="black"/>
            <rect x="5" y="70" width="25" height="25" fill="black"/>
            <rect x="10" y="75" width="15" height="15" fill="white"/>
            <rect x="12" y="77" width="11" height="11" fill="black"/>
            <rect x="40" y="10" width="10" height="10" fill="black"/>
            <rect x="45" y="25" width="15" height="5" fill="black"/>
            <rect x="5" y="45" width="20" height="10" fill="black"/>
            <rect x="35" y="45" width="30" height="30" fill="black"/>
            <rect x="75" y="45" width="10" height="20" fill="black"/>
            <rect x="45" y="80" width="25" height="15" fill="black"/>
          </svg>
        </div>
        <p style="font-size: 0.85rem; color: var(--grey-dark); margin-bottom: 16px;">
          Pindai kode QRIS di atas dengan aplikasi dompet digital Anda (Gopay, OVO, ShopeePay, Dana) untuk menyelesaikan pembayaran.
        </p>
      `;
    } else if (paymentMethod === 'VA') {
      paymentInstructions = `
        <div style="border: 1px dashed var(--primary); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 16px; text-align: center;">
          <span style="font-size: 0.85rem; color: var(--grey-dark); display: block; text-transform: uppercase;">Bank Transfer Virtual Account</span>
          <strong style="font-size: 1.5rem; color: var(--dark); font-family: monospace; letter-spacing: 2px;">8832 0895 2411 9320</strong>
          <span style="font-size: 0.85rem; display: block; margin-top: 6px;">Bank Mandiri / BCA (Verifikasi Otomatis)</span>
        </div>
      `;
    } else if (paymentMethod === 'COD') {
      paymentInstructions = `
        <div style="border: 1px solid var(--secondary); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 16px; background-color: rgba(16,185,129,0.05);">
          <strong style="color: var(--secondary); display: block; margin-bottom: 6px;">Cash On Delivery (Bayar di Tempat)</strong>
          <p style="font-size: 0.85rem; color: var(--grey-dark); margin: 0;">
            Siapkan uang tunai sebesar <strong>Rp ${finalAmount.toLocaleString('id-ID')}</strong> untuk diserahkan kepada kurir saat paket tiba di alamat Anda.
          </p>
        </div>
      `;
    }

    DOM.paymentModalBody.innerHTML = `
      <div class="payment-success-content active">
        <div class="success-icon" style="background-color: rgba(16, 185, 129, 0.1); color: var(--success);">✓</div>
        <h3>Pembayaran Berhasil!</h3>
        <p>Terima kasih telah berbelanja di FafaGadgets.</p>
        
        <div class="invoice-number">Invoice: ${transactionId}</div>
        
        ${paymentInstructions}

        <div class="payment-info-box">
          <div class="info-row">
            <span>Tanggal Transaksi:</span>
            <strong>${dateStr}</strong>
          </div>
          <div class="info-row">
            <span>Metode Pembayaran:</span>
            <strong>${paymentMethod.toUpperCase()}</strong>
          </div>
          <div class="info-row" style="border-top: 1px solid var(--grey-light); padding-top: 10px; margin-top: 10px;">
            <span>Total Bayar:</span>
            <strong style="color: var(--primary); font-size: 1.1rem;">Rp ${finalAmount.toLocaleString('id-ID')}</strong>
          </div>
        </div>
        
        <button class="btn-close-payment" id="btn-finish-purchase" style="background-color: var(--primary);">Lacak Pengiriman Paket</button>
      </div>
    `;

    SVARNA_Analytics.trackPurchase(transactionId, state.cart, finalAmount, paymentMethod);

    document.getElementById('btn-finish-purchase').addEventListener('click', () => {
      // 1. Deduct stocks of ordered items
      state.cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod) {
          prod.stok = Math.max(0, prod.stok - item.quantity);
        }
      });
      renderCatalog(); // update shop catalog view

      // 2. Clear Cart state
      state.cart = [];
      state.appliedVoucher = null;
      state.voucherDiscount = 0;
      saveCartToLocalStorage();
      updateCartBadge();
      renderCartUI();
      
      DOM.checkoutForm.reset();
      DOM.paymentModal.classList.remove('active');
      
      // 3. Initiate Order Tracking Page
      startTrackingPage(transactionId, paymentMethod, custName);
    });

  }, 3000);
}

// --- 9. Shipping Order Tracking Engine ---
const trackingCheckpoints = [
  {
    step: 0,
    progress: 5,
    title: 'Pesanan Diterima & Terverifikasi',
    location: 'Gudang Utama FafaGadgets (Jakarta)',
    desc: 'Pembayaran terverifikasi. Pesanan Anda masuk antrean pengemasan.'
  },
  {
    step: 1,
    progress: 28,
    title: 'Pesanan Sedang Diproses',
    location: 'Bagian Pengemasan - Gudang Jakarta',
    desc: 'Gadget sedang diperiksa dan dibungkus menggunakan kardus & bubble wrap tebal.'
  },
  {
    step: 2,
    progress: 52,
    title: 'Paket Berada di Transit Hub',
    location: 'FafaExpress Hub Jakarta Utara',
    desc: 'Paket diserahkan ke kurir logistik dan sedang disortir untuk pengiriman kota tujuan.'
  },
  {
    step: 3,
    progress: 78,
    title: 'Kurir Sedang Mengantarkan Paket',
    location: 'Dalam Perjalanan Menuju Alamat Anda',
    desc: 'Paket dibawa oleh kurir pengirim (Kurir: Ahmad - HP: +62895700831945).'
  },
  {
    step: 4,
    progress: 100,
    title: 'Paket Telah Sampai Tujuan',
    location: 'Alamat Tujuan Pengiriman',
    desc: 'Paket gadget diterima dengan selamat. Terima kasih telah berbelanja!'
  }
];

function startTrackingPage(invoiceId, paymentMethod, custName) {
  state.trackingState.active = true;
  state.trackingState.invoiceId = invoiceId;
  state.trackingState.paymentMethod = paymentMethod;
  state.trackingState.custName = custName;
  state.trackingState.step = 0;
  
  DOM.trackInvoiceId.textContent = invoiceId;
  DOM.trackOrderDate.textContent = new Date().toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
  }) + ' WIB';
  
  updateTrackingUI(0);
  navigateTo('tracking');

  // Trigger automatic simulation intervals (every 5 seconds)
  state.trackingState.intervalId = setInterval(() => {
    if (state.trackingState.step < 4) {
      state.trackingState.step++;
      updateTrackingUI(state.trackingState.step);
    } else {
      stopTrackingSimulation();
    }
  }, 5000);
}

function updateTrackingUI(step) {
  const checkpoint = trackingCheckpoints[step];
  
  // Update timeline nodes
  for (let i = 0; i <= 4; i++) {
    const node = document.getElementById(`node-${i}`);
    if (!node) continue;
    
    node.className = 'track-node';
    const bullet = node.querySelector('.node-bullet');
    
    if (i < step) {
      node.classList.add('completed');
      bullet.textContent = '✓';
    } else if (i === step) {
      node.classList.add('active');
      bullet.textContent = step === 4 ? '✓' : step + 1;
    } else {
      bullet.textContent = i + 1;
    }
  }

  // Update progress bar width
  if (DOM.trackingProgressLine) {
    DOM.trackingProgressLine.style.width = `${checkpoint.progress}%`;
  }

  // Update location text details
  let description = checkpoint.desc;
  if (step === 4) {
    description = `Paket gadget diterima oleh *${state.trackingState.custName}* dalam kondisi segel utuh. Terima kasih!`;
  }
  
  if (DOM.trackingStatusTitle) DOM.trackingStatusTitle.textContent = checkpoint.title;
  if (DOM.trackingLocationText) DOM.trackingLocationText.textContent = `Lokasi: ${checkpoint.location}`;
  if (DOM.trackingSubtitle) DOM.trackingSubtitle.textContent = description;
  
  // Custom tracking icon based on status
  const icon = ['📦', '🏷️', '🚚', '🛵', '🏠'][step];
  const iconDiv = document.getElementById('tracking-location-icon');
  if (iconDiv) iconDiv.textContent = icon;
  
  if (DOM.trackingTimeUpdate) {
    DOM.trackingTimeUpdate.textContent = `Terakhir diperbarui: ${new Date().toLocaleTimeString('id-ID')} WIB`;
  }
}

function stopTrackingSimulation() {
  if (state.trackingState.intervalId) {
    clearInterval(state.trackingState.intervalId);
    state.trackingState.intervalId = null;
  }
  state.trackingState.active = false;
}

function speedUpTrackingSimulation() {
  // Speed up: move to next step instantly on click
  if (state.trackingState.step < 4) {
    state.trackingState.step++;
    updateTrackingUI(state.trackingState.step);
    if (state.trackingState.step === 4) {
      stopTrackingSimulation();
    }
  } else {
    showToast('Paket sudah sampai di tujuan akhir.');
  }
}

// --- 10. Utility UI Component: Toast Notifications ---
function showToast(message, isError = false) {
  let toast = document.getElementById('app-toast-alert');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast-alert';
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '90px',
      left: '24px',
      backgroundColor: '#0F172A',
      color: '#FFFFFF',
      padding: '12px 24px',
      borderRadius: '6px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: '10000',
      fontSize: '0.9rem',
      opacity: '0',
      transform: 'translateY(10px)',
      transition: 'all 0.3s ease',
      pointerEvents: 'none'
    });
    document.body.appendChild(toast);
  }

  toast.style.backgroundColor = isError ? '#EF4444' : '#0F172A';
  toast.textContent = message;
  
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3000);
}

// --- Initialize App on DOM Content Loaded ---
document.addEventListener('DOMContentLoaded', initApp);
