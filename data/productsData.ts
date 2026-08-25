export interface Product {
  id: string;
  name: string;
  category: 'Fresh Vegetables' | 'Fresh Fruits' | 'Rice & Grains' | 'Spices & Superfoods';
  description: string;
  exportGrade: string;
  packingOptions: string;
  origin: string;
  methodOfFreight: string;
  image: string;
  featured: boolean;
  shelfLife?: string;
  loadability?: string;
  seasonality?: string;
}

export const CATEGORIES = [
  'All',
  'Fresh Vegetables',
  'Fresh Fruits',
  'Rice & Grains',
  'Spices & Superfoods'
] as const;

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'indian-onion',
    name: 'Indian Red Onion',
    category: 'Fresh Vegetables',
    description: 'Fresh, natural and carefully selected red onions with strong pungency and long export shelf life.',
    exportGrade: '45mm+, 50mm+, 55mm+, 60mm+',
    packingOptions: '10 kg / 20 kg / 25 kg Mesh Bags, Customized Packing',
    origin: 'Maharashtra (Nashik), Madhya Pradesh, Karnataka, Gujarat',
    methodOfFreight: 'By Sea (FCL / Reefer), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '45 - 60 Days under controlled atmosphere',
    loadability: '28 - 29 MT in 40ft Reefer Container',
    seasonality: 'Round the Year (Peak: Dec - May)'
  },
  {
    id: 'g4-green-chilli',
    name: 'G4 Green Chilli',
    category: 'Fresh Vegetables',
    description: 'Bold size, vibrant deep green colour, firm texture, and rich hot pungency ideal for international cuisines.',
    exportGrade: '4-6 cm, 6-8 cm, 8+ cm',
    packingOptions: '3.5 kg / 4 kg / 5 kg / 10 kg Corrugated Export Boxes',
    origin: 'Maharashtra, Karnataka, Andhra Pradesh, Gujarat',
    methodOfFreight: 'By Air Cargo (Primary), By Sea (Reefer FCL)',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '15 - 20 Days in 8-10°C cold chain',
    loadability: '8.5 - 9.5 MT in 40ft Reefer Container',
    seasonality: 'Round the Year'
  },
  {
    id: 'g9-banana',
    name: 'G9 Cavendish Banana',
    category: 'Fresh Fruits',
    description: 'Premium Cavendish variety harvested at ideal maturity with uniform finger length, spotless skin, and sweet taste.',
    exportGrade: 'Finger Count: 14+, 16+, 18+, Calibration 39-44mm',
    packingOptions: '7 kg / 13 kg / 13.5 kg High-Burst Export Cartons',
    origin: 'Maharashtra (Jalgaon), Tamil Nadu, Andhra Pradesh, Gujarat',
    methodOfFreight: 'By Sea (Reefer 13.5°C), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '30 - 45 Days under CA reefer shipment',
    loadability: '1540 Boxes (~20.5 MT) per 40ft Reefer',
    seasonality: 'Round the Year'
  },
  {
    id: 'basmati-rice',
    name: '1121 Premium Basmati Rice',
    category: 'Rice & Grains',
    description: 'World-renowned extra long grain aromatic rice with exquisite elongation upon cooking, delicate aroma, and fluffy non-sticky texture.',
    exportGrade: '1121 Steam, 1121 Golden Sella, Traditional Raw, XXL Grain (8.35mm+)',
    packingOptions: '1 kg / 5 kg / 10 kg / 25 kg / 50 kg Non-Woven, BOPP, Jute & PP Bags',
    origin: 'Punjab, Haryana, Uttar Pradesh, Uttarakhand',
    methodOfFreight: 'By Sea (FCL 20ft / 40ft), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '24 Months',
    loadability: '25 - 26 MT in 20ft FCL Container',
    seasonality: 'Round the Year'
  },
  {
    id: 'sona-masoori-rice',
    name: 'Sona Masoori Rice',
    category: 'Rice & Grains',
    description: 'Lightweight, aromatic medium-grain rice prized for low starch, high nutritional value, and tender softness.',
    exportGrade: 'Raw Silky Sortex, Steam Sortex, Single/Double Polish',
    packingOptions: '5 kg / 10 kg / 20 kg / 25 kg / 50 kg PP Bags',
    origin: 'Andhra Pradesh, Telangana, Karnataka',
    methodOfFreight: 'By Sea (FCL / LCL), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    featured: false,
    shelfLife: '24 Months',
    loadability: '26 MT in 20ft Container',
    seasonality: 'Round the Year'
  },
  {
    id: 'ir64-parboiled-rice',
    name: 'IR64 Non-Basmati Rice',
    category: 'Rice & Grains',
    description: 'Long grain non-basmati rice with 5% / 25% broken options, high grain integrity, and affordable bulk export viability.',
    exportGrade: 'Raw 5% Broken, Parboiled 5%, Sortex 100% Clean',
    packingOptions: '25 kg / 50 kg PP Bags or Jumbo Bulk Bags',
    origin: 'Andhra Pradesh, Telangana, Chhattisgarh, West Bengal',
    methodOfFreight: 'By Sea (FCL / Break Bulk), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    shelfLife: '24 Months',
    loadability: '26 - 27 MT per 20ft Container',
    seasonality: 'Round the Year'
  },
  {
    id: 'drum-stick',
    name: 'Fresh Drumstick (Moringa)',
    category: 'Fresh Vegetables',
    description: 'Tender, straight, nutritious moringa pods rich in vitamins, carefully packed to retain optimal crispness.',
    exportGrade: '30-50 cm, 50-70 cm, 70+ cm',
    packingOptions: '5 kg / 10 kg Air-Ventilated Cartons',
    origin: 'Tamil Nadu, Karnataka, Andhra Pradesh',
    methodOfFreight: 'By Air Cargo (Primary), By Sea (FCL)',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    featured: false,
    shelfLife: '12 - 15 Days in cold chain',
    loadability: '8 MT in Reefer or customized air shipments',
    seasonality: 'Round the Year'
  },
  {
    id: 'okra-ladies-finger',
    name: "Fresh Okra (Lady's Finger)",
    category: 'Fresh Vegetables',
    description: 'Bright green, tender, fiber-free fresh bhindi pods harvested early morning for maximum export freshness.',
    exportGrade: '6-8 cm, 8-10 cm, 10+ cm (Tender Grade A)',
    packingOptions: '4 kg / 5 kg / 10 kg Export Cartons with moisture liners',
    origin: 'Maharashtra, Karnataka, Andhra Pradesh, Gujarat',
    methodOfFreight: 'By Air Cargo, By Sea (FCL Reefer)',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '10 - 14 Days at 7-10°C',
    loadability: '7 - 8 MT in 40ft Reefer',
    seasonality: 'Round the Year'
  },
  {
    id: 'fresh-pomegranate',
    name: 'Fresh Bhagwa Pomegranate',
    category: 'Fresh Fruits',
    description: 'Ruby red arils, sweet and juicy with soft seeds and high antioxidant properties, globally prized Bhagwa variety.',
    exportGrade: '250g+, 300g+, 350g+, 400g+ (Super Grade)',
    packingOptions: '3.5 kg / 4 kg / 5 kg / 7 kg Foam-Cushioned Cartons',
    origin: 'Maharashtra (Solapur / Nashik), Karnataka, Gujarat',
    methodOfFreight: 'By Sea (Reefer 5°C), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '60 - 90 Days under Reefer storage',
    loadability: '18 - 20 MT in 40ft Reefer Container',
    seasonality: 'Round the Year (Peak: Oct - Feb)'
  },
  {
    id: 'makhana-fox-nut',
    name: 'Premium Makhana (Fox Nut)',
    category: 'Spices & Superfoods',
    description: 'Natural puffed lotus seeds, 100% organic grade, crunchy texture, high protein, and zero cholesterol superfood.',
    exportGrade: '5-6 Suta (10mm+), 4-5 Suta (8-10mm), Hand-picked White',
    packingOptions: '100g / 250g / 500g / 1kg Pouches, 10 kg PP Bags',
    origin: 'Bihar (Mithila Region)',
    methodOfFreight: 'By Sea (FCL / LCL), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '12 Months',
    loadability: '4 - 5 MT in 40ft HC (High volume / low density)',
    seasonality: 'Round the Year'
  },
  {
    id: 'ivy-gourd-tindora',
    name: 'Fresh Ivy Gourd (Tindora)',
    category: 'Fresh Vegetables',
    description: 'Crisp, slender, tender tindora hand-graded to ensure uniform shape, free from scars or blemishes.',
    exportGrade: '3-5 cm, 5-7 cm, 7+ cm',
    packingOptions: '5 kg / 10 kg Corrugated Boxes',
    origin: 'Maharashtra, Karnataka, Andhra Pradesh',
    methodOfFreight: 'By Air Cargo, By Sea (FCL / LCL)',
    image: 'https://images.unsplash.com/photo-1566842600175-97dca489844f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    shelfLife: '10 - 14 Days',
    loadability: 'Customized Air Shipments',
    seasonality: 'Round the Year'
  },
  {
    id: 'bitter-gourd-karela',
    name: 'Fresh Bitter Gourd (Karela)',
    category: 'Fresh Vegetables',
    description: 'Dark green, spiky, firm textured bitter gourds with high medicinal and culinary value.',
    exportGrade: '10-15 cm, 15-20 cm, 20+ cm',
    packingOptions: '5 kg / 10 kg Export Cartons',
    origin: 'Maharashtra, Karnataka, Andhra Pradesh, Gujarat',
    methodOfFreight: 'By Air Cargo, By Sea (FCL / LCL)',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    shelfLife: '12 - 15 Days in cold chain',
    loadability: 'Customized Freight',
    seasonality: 'Round the Year'
  },
  {
    id: 'dry-red-chilli',
    name: 'Indian Dry Red Chilli',
    category: 'Spices & Superfoods',
    description: 'Sun-dried premium whole red chillies with intense aroma, deep natural red color (high ASTA value), and sharp pungency.',
    exportGrade: 'Teja S17, Sanam S4, Byadgi Stemless / With Stem',
    packingOptions: '5 kg / 10 kg / 25 kg Jute Bags, Gunny Bags or Cartons',
    origin: 'Andhra Pradesh (Guntur), Telangana, Karnataka',
    methodOfFreight: 'By Sea (FCL / LCL), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '12 - 18 Months',
    loadability: '14 - 15 MT in 40ft HC Container',
    seasonality: 'Round the Year'
  },
  {
    id: 'fresh-grapes',
    name: 'Indian Table Grapes',
    category: 'Fresh Fruits',
    description: 'Thompson Seedless & Sonaka Green Grapes, crisp, sweet with high Brix levels (16-18°), cold-chain preserved.',
    exportGrade: 'Berry Size 16mm+, 18mm+, Brix 16°+',
    packingOptions: '4.5 kg / 5 kg / 8.2 kg Punnets in Master Cartons',
    origin: 'Maharashtra (Nashik, Sangli), Karnataka',
    methodOfFreight: 'By Sea (CA Reefer 0°C), By Air Cargo',
    image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=800&q=80',
    featured: true,
    shelfLife: '45 - 60 Days in cold chain',
    loadability: '2400 Cartons (~11.5 MT) per 40ft Reefer',
    seasonality: 'January to April'
  }
];
