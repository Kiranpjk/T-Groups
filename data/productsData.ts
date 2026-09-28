export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Fresh Fruits' | 'Fresh Vegetables' | 'Rice & Grains' | 'Spices' | 'Other Agro Products';
  categoryBadge: 'Seasonal' | 'Year Round' | 'Bulk Available' | 'Export Grade' | 'Expanding';
  shortDescription: string;
  description: string;
  origin: string;
  availableGrades: string[];
  packagingOptions: string[];
  supplyType: string;
  moq: string;
  seasonality: string;
  applicablePorts: string[];
  targetMarkets: string[];
  freightMethod: string;
  shelfLife: string;
  loadability: string;
  image: string;
  featured: boolean;
  specifications: { key: string; value: string }[];
  qualityAssurance: string[];
  exportDocuments: string[];
}

export const CATEGORIES = [
  'All Products',
  'Fresh Fruits',
  'Fresh Vegetables',
  'Rice & Grains',
  'Spices',
  'Other Agro Products'
] as const;

export const CATEGORY_SUMMARIES = [
  {
    name: 'Fresh Fruits',
    badge: 'Seasonal',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    examples: 'Mango · G9 Banana · Pomegranate · Table Grapes',
    description: 'Farm-fresh, carefully harvested fruits conditioned in temperature-regulated packhouses for export.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
    slug: 'fresh-fruits'
  },
  {
    name: 'Fresh Vegetables',
    badge: 'Year Round',
    badgeClass: 'bg-green-50 text-green-800 border-green-200',
    examples: 'Fresh Onion · Green Chilli · Tomato · Drumstick · Okra',
    description: 'Direct farm-procured Indian vegetables graded by size, firmness, and shelf-stability for global transit.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    slug: 'fresh-vegetables'
  },
  {
    name: 'Rice & Grains',
    badge: 'Bulk Available',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    examples: '1121 Basmati · Sona Masoori · IR64 · Swarna Rice',
    description: 'Sortex-cleaned, premium-aged long grain basmati and high-yield non-basmati rice ready for container loads.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    slug: 'rice-grains'
  },
  {
    name: 'Spices',
    badge: 'Export Grade',
    badgeClass: 'bg-red-50 text-red-800 border-red-200',
    examples: 'Dry Red Chilli · Turmeric · Cumin · Coriander',
    description: 'High-pungency, sun-dried Guntur chillies and pure aromatic Indian whole and ground spices.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    slug: 'spices'
  },
  {
    name: 'Other Agro Products',
    badge: 'Expanding',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    examples: 'Semi-Husk Coconut · Makhana · Seasonal Commodities',
    description: 'This category is continuously expanding as we establish new sourcing relationships across India. Contact us for custom product requirements.',
    image: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=800&q=80',
    slug: 'other-agro-products'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'fresh-red-onion',
    slug: 'onion',
    name: 'Fresh Red Onion',
    category: 'Fresh Vegetables',
    categoryBadge: 'Year Round',
    shortDescription: 'High-pungency, firm, mature Indian red onions sorted and graded for international transit.',
    description: 'Our Fresh Red Onions are sourced directly from premier growing belts in Maharashtra (Nashik) and Andhra Pradesh. Selected for firm bulbs, strong skin retention, low moisture, and intense flavor profile. Cleaned, graded, and packed in ventilated mesh bags for optimal shelf-life during reefer and sea transit.',
    origin: 'Maharashtra (Nashik), Andhra Pradesh, Karnataka, Gujarat (India)',
    availableGrades: ['45mm+', '50mm+', '55mm+', '60mm+'],
    packagingOptions: ['5 kg Mesh Bag', '10 kg Mesh Bag', '20 kg Mesh Bag', '25 kg Mesh Bag', 'Customized Jute/Mesh Packing'],
    supplyType: 'Bulk Export (FCL Reefer / Dry Vent)',
    moq: '1 x 40ft Reefer Container (approx. 28-29 MT) / 1 x 20ft FCL',
    seasonality: 'Round the Year (Peak Season: November to May)',
    applicablePorts: ['JNPT (Nhava Sheva) Mumbai', 'Mundra Port', 'Chennai Port', 'Krishnapatnam Port'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'Sri Lanka', 'Bangladesh', 'Malaysia', 'Nepal'],
    freightMethod: 'Ocean Freight (40ft High Cube Reefer Containers at 0-2°C / 65-70% RH) or Air Cargo',
    shelfLife: '45 - 60 Days under controlled temperature',
    loadability: '28 - 29 Metric Tons per 40ft Reefer Container',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Product Variety', value: 'Indian Fresh Red Onion (Nasik / Garwa)' },
      { key: 'Size Calibration', value: '45mm to 65mm diameter' },
      { key: 'Bulb Shape', value: 'Globular / Round to Flat-Round' },
      { key: 'Color', value: 'Deep Red / Dark Pink' },
      { key: 'Skin Layers', value: '2-3 Tight outer dry papery skins' },
      { key: 'Foreign Matter', value: 'Max 0.5% (Nil foreign matter)' },
      { key: 'Pungency', value: 'High Pyruvic Acid Content (Distinct pungent taste)' }
    ],
    qualityAssurance: [
      'Visual sorting and grading for dry necks and zero sprouting',
      'Free from pest damage, decay, cuts, and fungal infections',
      'APEDA and Phytosanitary certified pre-loading inspection',
      'Container pre-cooling and continuous data-logger temperature tracking'
    ],
    exportDocuments: [
      'Commercial Invoice & Packing List',
      'Certificate of Origin (Chamber of Commerce / Preferential)',
      'Phytosanitary Certificate issued by Plant Quarantine Dept',
      'Bill of Lading / Air Waybill',
      'FSSAI & APEDA Export Health Certificate'
    ]
  },
  {
    id: 'g9-cavendish-banana',
    slug: 'g9-banana',
    name: 'G9 Cavendish Banana',
    category: 'Fresh Fruits',
    categoryBadge: 'Year Round',
    shortDescription: 'Uniform finger length, flawless green skin, harvested at exact calibration for long reefer export.',
    description: 'Grand Nain (G9) Cavendish Bananas are harvested at precise maturity index from contracted farms in Andhra Pradesh and Maharashtra. Hands are washed in alum water, treated with food-grade fungicide, dried, and vacuum-packed in high-burst telescopic cartons with modified atmosphere packaging (MAP).',
    origin: 'Andhra Pradesh (Anantapur/Kadapa), Maharashtra (Jalgaon), Tamil Nadu (India)',
    availableGrades: ['Calibration: 39mm - 46mm', 'Finger Length: 18cm - 22cm', 'Hands: 4, 5, 6 hands per box'],
    packagingOptions: ['7 kg Top-Bottom Carton', '13 kg Export Master Box', '13.5 kg High-Burst Telescopic Box', 'Vacuum Bag with Ethylene Absorber'],
    supplyType: 'Bulk Export (40ft High Cube Reefer)',
    moq: '1 x 40ft Reefer Container (~1540 Boxes / 20.7 MT)',
    seasonality: 'Round the Year (Continuous harvest cycles)',
    applicablePorts: ['JNPT (Nhava Sheva) Mumbai', 'Chennai Port', 'Krishnapatnam Port', 'Mundra Port'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain', 'Iran'],
    freightMethod: 'Ocean Freight (40ft Reefer set at 13.5°C with 10% fresh air ventilation) or Air Cargo',
    shelfLife: '30 - 45 Days in green condition under controlled atmosphere',
    loadability: '1540 Boxes (~20.7 MT) per 40ft Reefer Container',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Variety', value: 'Grand Nain (G9) Cavendish' },
      { key: 'Color on Loading', value: 'Stage 1 - Dark Emerald Green' },
      { key: 'Calibration / Thickness', value: '39mm to 44mm' },
      { key: 'Finger Length', value: 'Min 7.5 inches (19 cm+)' },
      { key: 'Brix Level on Ripening', value: '18° - 22° Brix' },
      { key: 'Pulp Temperature', value: '13.5°C ± 0.5°C' }
    ],
    qualityAssurance: [
      'De-handed with sanitary curved knives and washed in alum sanitizing tanks',
      'Foam separators placed between hands to avoid transit chafing',
      'Pre-cooled to 13.5°C before container stuffing',
      'APEDA approved packhouse facility inspection'
    ],
    exportDocuments: [
      'Commercial Invoice & Detailed Packing List',
      'Phytosanitary Certificate',
      'Certificate of Origin',
      'Bill of Lading',
      'APEDA Export Certificate'
    ]
  },
  {
    id: 'dry-red-chilli',
    slug: 'dry-red-chilli',
    name: 'Dry Red Chilli (Guntur Teja / Sanam)',
    category: 'Spices',
    categoryBadge: 'Export Grade',
    shortDescription: 'World-famous Guntur dry red chillies with intense SHU heat, brilliant natural red color, and high ASTA.',
    description: 'Sourced directly from Guntur, Andhra Pradesh — the spice capital of Asia. We export premium Teja (S17), Sanam (S4), Byadgi, and 334 varieties. Available with stem, stemless, or crushed/powder form, sun-dried and Sortex-cleaned to remove dirt, discolored pods, and foreign matter.',
    origin: 'Guntur, Andhra Pradesh & Telangana (India)',
    availableGrades: ['Teja S17 (Stem / Stemless)', 'Sanam S4 (Stem / Stemless)', 'Byadgi (High ASTA Color, Low Heat)', 'Armoor / 334 Variety'],
    packagingOptions: ['5 kg / 10 kg / 25 kg Jute / Gunny Bags', '10 kg Corrugated Master Carton', '25 kg / 50 kg PP Woven Bags', 'Customized Private Label Pouches'],
    supplyType: 'Bulk Export (FCL 20ft / 40ft HC)',
    moq: '1 x 20ft FCL (approx. 6.5 - 7 MT in bags) / 1 x 40ft HC (approx. 14 - 15 MT)',
    seasonality: 'Round the Year (Peak harvest: January to May)',
    applicablePorts: ['Chennai Port', 'Krishnapatnam Port', 'Visakhapatnam Port', 'JNPT Mumbai'],
    targetMarkets: ['Sri Lanka', 'Malaysia', 'Bangladesh', 'Indonesia', 'UAE', 'USA', 'Canada'],
    freightMethod: 'Ocean Freight (Dry Ventilated Containers) or Air Cargo',
    shelfLife: '12 - 18 Months in cool, dry storage',
    loadability: '6.5 - 7 MT in 20ft FCL; 14 - 15 MT in 40ft HC',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Variety', value: 'Teja S17 / Sanam S4 / Byadgi' },
      { key: 'Heat Value (SHU)', value: '65,000 - 90,000 SHU (Teja); 20,000 - 35,000 SHU (Sanam)' },
      { key: 'Color Value (ASTA)', value: '60 - 70 ASTA (Teja); 120 - 150 ASTA (Byadgi)' },
      { key: 'Moisture Content', value: 'Max 10% - 11%' },
      { key: 'Foreign Matter', value: 'Max 0.5% (Nil)' },
      { key: 'Aflatoxin', value: 'Below 5 ppb / 10 ppb (EU / US compliant options)' }
    ],
    qualityAssurance: [
      'Sortex optical sorting for uniform color and size consistency',
      'Laboratory-tested for Aflatoxin, Pesticide Residue, and Moisture levels',
      'Fumigation certificate and Spice Board of India quality clearance'
    ],
    exportDocuments: [
      'Commercial Invoice & Packing List',
      'Certificate of Origin',
      'Phytosanitary & Fumigation Certificate',
      'Spices Board of India Certificate of Analysis',
      'Bill of Lading'
    ]
  },
  {
    id: '1121-basmati-rice',
    slug: 'basmati-rice',
    name: '1121 Premium Basmati Rice',
    category: 'Rice & Grains',
    categoryBadge: 'Bulk Available',
    shortDescription: 'World-renowned extra long grain aromatic basmati with unmatched 2.5x cooked elongation and aroma.',
    description: 'Extra-long grain Indian 1121 Basmati Rice grown in the fertile Himalayan foothills. Aged naturally to optimize elongation and eliminate stickiness during cooking. 100% Sortex cleaned, free from impurities and broken grains, packed in moisture-resistant BOPP/non-woven bags for bulk and retail buyers.',
    origin: 'Punjab, Haryana, Uttar Pradesh (India)',
    availableGrades: ['1121 Steam Basmati (Grain length 8.35mm+)', '1121 Golden Sella (Parboiled)', '1121 White Sella', '1121 Raw / Traditional Basmati'],
    packagingOptions: ['1 kg / 5 kg / 10 kg / 20 kg / 25 kg / 50 kg BOPP, Non-Woven, Jute & PP Bags', 'Customized Private Label Export Bags'],
    supplyType: 'Bulk Export (FCL 20ft Containers)',
    moq: '1 x 20ft FCL (approx. 25 - 26 MT)',
    seasonality: 'Round the Year',
    applicablePorts: ['Mundra Port', 'Kandla Port', 'JNPT (Nhava Sheva) Mumbai', 'Kolkata Port'],
    targetMarkets: ['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Canada', 'UK', 'USA', 'Malaysia'],
    freightMethod: 'Ocean Freight (20ft Dry FCL) or Break Bulk',
    shelfLife: '24 Months in dry warehouse condition',
    loadability: '25 - 26 Metric Tons per 20ft Container',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Average Grain Length', value: '8.35 mm to 8.40 mm (Pre-cooked)' },
      { key: 'Cooked Length', value: '18.0 mm to 22.0 mm (Elongation 2.5x)' },
      { key: 'Broken Grain', value: 'Max 1.0% (Sortex Grade 1)' },
      { key: 'Moisture', value: 'Max 12.0% - 12.5%' },
      { key: 'Purity', value: '95% Pure 1121 Basmati' },
      { key: 'Aroma', value: 'Rich, natural characteristic Basmati fragrance' }
    ],
    qualityAssurance: [
      'Laser Sortex clean-room milling with double metal detection',
      'DNA purity certified and free from GMO or adulteration',
      'APEDA & FSSAI certified batch testing'
    ],
    exportDocuments: [
      'Commercial Invoice & Packing List',
      'Certificate of Origin',
      'Phytosanitary Certificate',
      'Fumigation Certificate',
      'SGS / Intertek Independent Inspection Certificate',
      'Bill of Lading'
    ]
  },
  {
    id: 'sona-masoori-rice',
    slug: 'sona-masoori',
    name: 'Sona Masoori Rice',
    category: 'Rice & Grains',
    categoryBadge: 'Bulk Available',
    shortDescription: 'Lightweight, aromatic medium-grain Indian rice prized for low starch, easy digestibility, and fluffiness.',
    description: 'Sona Masoori is an aromatic, lightweight medium-grain rice grown extensively in Andhra Pradesh and Karnataka. Renowned for its low glycemic index, softness, and pleasant aroma. Milled in state-of-the-art Sortex plants and supplied in consumer or bulk packings for international distributors.',
    origin: 'Andhra Pradesh (Guntur/Kurnool), Telangana, Karnataka (India)',
    availableGrades: ['Raw Silky Sortex Clean', 'Steam Sortex Clean', 'Single Polish / Double Polish'],
    packagingOptions: ['5 kg / 10 kg / 20 kg / 25 kg / 50 kg PP Bags & Non-Woven Bags', 'Customized Private Labeling'],
    supplyType: 'Bulk Export (20ft FCL)',
    moq: '1 x 20ft FCL (approx. 26 MT)',
    seasonality: 'Round the Year',
    applicablePorts: ['Chennai Port', 'Krishnapatnam Port', 'Visakhapatnam Port', 'JNPT Mumbai'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'Singapore', 'Malaysia', 'USA', 'Canada', 'Guyana'],
    freightMethod: 'Ocean Freight (20ft Dry FCL)',
    shelfLife: '24 Months',
    loadability: '26 Metric Tons per 20ft Container',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Grain Length', value: '5.0 mm - 5.5 mm (Medium Grain)' },
      { key: 'Broken Grain', value: 'Max 2.0% (Sortex Grade)' },
      { key: 'Moisture', value: 'Max 13.0%' },
      { key: 'Damaged / Discolored', value: 'Max 0.5%' },
      { key: 'Foreign Matter', value: 'Nil (100% Sortex Clean)' }
    ],
    qualityAssurance: [
      'Paddy aged minimum 6 to 12 months for non-sticky cooking',
      'Optical grading and magnetic separation',
      'Pre-shipment weight and moisture certification'
    ],
    exportDocuments: [
      'Commercial Invoice & Packing List',
      'Certificate of Origin',
      'Phytosanitary & Fumigation Certificate',
      'Bill of Lading'
    ]
  },
  {
    id: 'fresh-green-chilli',
    slug: 'green-chilli',
    name: 'Fresh Green Chilli (G4 / Bullet)',
    category: 'Fresh Vegetables',
    categoryBadge: 'Year Round',
    shortDescription: 'Bold size, dark green color, firm crisp texture, and sharp pungency ideal for air and reefer export.',
    description: 'Selected G4 and Bullet green chillies harvested in early morning hours from Andhra Pradesh and Maharashtra. Sorted for uniform stem length, deep green pigmentation, and unblemished skin. Packed in ventilated corrugated boxes with paper lining for maximum shelf freshness.',
    origin: 'Andhra Pradesh, Maharashtra, Karnataka, Gujarat (India)',
    availableGrades: ['G4 (Length 6-9 cm, Medium-High Pungency)', 'Bullet Chilli (Length 3-5 cm, High Pungency)', 'Jwala Chilli (Length 9-12 cm)'],
    packagingOptions: ['3.5 kg / 4 kg / 5 kg / 10 kg Export Corrugated Cartons with moisture absorbent sheets'],
    supplyType: 'Air Cargo (Primary) & 40ft Reefer FCL',
    moq: '500 kg (Air Freight) / 1 x 40ft Reefer Container (8.5 - 9.5 MT)',
    seasonality: 'Round the Year',
    applicablePorts: ['Hyderabad / Mumbai / Chennai International Airport (Air Cargo)', 'JNPT / Chennai Port (Sea Reefer at 8-10°C)'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'UK', 'Canada', 'Singapore'],
    freightMethod: 'Air Cargo or 40ft Reefer Container at 8-10°C',
    shelfLife: '15 - 20 Days under 8-10°C cold chain',
    loadability: '8.5 - 9.5 MT in 40ft Reefer / Customized Air Pallets',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Variety', value: 'G4 / Bullet Green Chilli' },
      { key: 'Color', value: 'Deep Dark Green / Glossy' },
      { key: 'Length', value: '6 cm to 10 cm' },
      { key: 'Pungency', value: 'High (Hot)' },
      { key: 'Foreign Matter', value: 'Nil' }
    ],
    qualityAssurance: [
      'Hand-picked with green fresh calyx (stem intact)',
      'Pre-cooling within 3 hours of harvest',
      'Phytosanitary inspection and export clearance'
    ],
    exportDocuments: [
      'Commercial Invoice & Packing List',
      'Phytosanitary Certificate',
      'Certificate of Origin',
      'Air Waybill / Bill of Lading'
    ]
  },
  {
    id: 'bhagwa-pomegranate',
    slug: 'pomegranate',
    name: 'Fresh Bhagwa Pomegranate',
    category: 'Fresh Fruits',
    categoryBadge: 'Seasonal',
    shortDescription: 'Ruby red arils, sweet and juicy with soft seeds, high antioxidant value and thick protective rind.',
    description: 'World-famous Indian Bhagwa Pomegranates characterized by deep glossy red skin, soft chewable seeds, and rich sweet juice with high Brix (15-16°). Graded by weight and packed in foam-cushioned export boxes to ensure zero transit bruising.',
    origin: 'Maharashtra (Solapur/Nashik), Andhra Pradesh, Gujarat (India)',
    availableGrades: ['Super Grade: 350g - 450g', 'Grade A: 250g - 350g', 'Grade B: 200g - 250g'],
    packagingOptions: ['3.5 kg / 4 kg / 5 kg Master Cartons with individual foam nets and molded pulp trays'],
    supplyType: 'Bulk Export (40ft Reefer FCL / Air Cargo)',
    moq: '1 x 40ft Reefer Container (~4000 Cartons / 18 MT) / Air Cargo (1 MT+)',
    seasonality: 'Round the Year (Peak: October to March)',
    applicablePorts: ['JNPT (Nhava Sheva) Mumbai', 'Chennai Port', 'Mundra Port'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'Netherlands', 'Germany', 'Bangladesh', 'Nepal'],
    freightMethod: 'Ocean Reefer (5°C with 90-95% RH) or Air Cargo',
    shelfLife: '60 - 75 Days under 5°C controlled atmosphere',
    loadability: '18 - 20 MT per 40ft Reefer Container',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Variety', value: 'Bhagwa (Kesar Red)' },
      { key: 'Aril Color', value: 'Blood Red / Ruby Red' },
      { key: 'Sugar Content (Brix)', value: '15.5° - 16.5° Brix' },
      { key: 'Seed Hardness', value: 'Very Soft / Chewable' },
      { key: 'Skin Color', value: 'Bright Glossy Red' }
    ],
    qualityAssurance: [
      'Individual weight grading and defect scanning',
      'Foam netting applied to every individual fruit',
      'APEDA GrapeNet/AnarNet traceability compliance'
    ],
    exportDocuments: [
      'Commercial Invoice & Packing List',
      'Phytosanitary Certificate',
      'Certificate of Origin',
      'Bill of Lading'
    ]
  },
  {
    id: 'semi-husk-coconut',
    slug: 'semi-husk-coconut',
    name: 'Semi-Husked Fresh Coconut',
    category: 'Other Agro Products',
    categoryBadge: 'Expanding',
    shortDescription: 'Naturally mature Indian coconuts with high water content, thick white kernel, and long shelf life.',
    description: 'Mature semi-husked coconuts sourced from prime coastal groves in Andhra Pradesh, Tamil Nadu, and Kerala. Carefully defibred leaving the protective inner tuft to prevent moisture loss. Graded by weight and packed in heavy-duty PP mesh bags.',
    origin: 'Andhra Pradesh (East/West Godavari), Tamil Nadu, Karnataka (India)',
    availableGrades: ['Grade A (Weight 550g - 650g)', 'Grade B (Weight 450g - 550g)', 'Jumbo (Weight 650g+)'],
    packagingOptions: ['12 kg / 13 kg / 25 pcs per PP Mesh Bag (Customized counts available)'],
    supplyType: 'Bulk Export (40ft Dry Container / Reefer)',
    moq: '1 x 40ft HC Container (~2000 Bags / 28 MT)',
    seasonality: 'Round the Year',
    applicablePorts: ['Chennai Port', 'Krishnapatnam Port', 'Visakhapatnam Port', 'Cochin Port'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'Kuwait', 'Oman', 'Qatar', 'Malaysia'],
    freightMethod: 'Ocean Freight (40ft High Cube Dry/Vent Container at 12-14°C)',
    shelfLife: '60 - 75 Days in ventilated conditions',
    loadability: '27 - 28 Metric Tons per 40ft HC Container (Approx. 45,000 to 50,000 Coconuts)',
    image: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specifications: [
      { key: 'Product', value: 'Semi-Husked Mature Coconut' },
      { key: 'Weight per Piece', value: '500g to 650g' },
      { key: 'Copra Thickness', value: '11mm to 13mm' },
      { key: 'Water Volume', value: '150ml to 250ml per nut' },
      { key: 'Color', value: 'Natural Light Brown' }
    ],
    qualityAssurance: [
      'Sound testing for full water volume inside each nut',
      'Defibred and cleaned of residual soil or loose fiber',
      'Phytosanitary inspection and fumigation certified'
    ],
    exportDocuments: [
      'Commercial Invoice & Packing List',
      'Certificate of Origin',
      'Phytosanitary & Fumigation Certificate',
      'Bill of Lading'
    ]
  },
  {
    id: 'fresh-drumstick',
    slug: 'drumstick',
    name: 'Fresh Drumstick (Moringa)',
    category: 'Fresh Vegetables',
    categoryBadge: 'Year Round',
    shortDescription: 'Tender, dark green, straight moringa pods rich in nutrients, packed with moisture liners.',
    description: 'Fresh moringa drumsticks harvested from dedicated orchards in Andhra Pradesh and Tamil Nadu. Graded for uniform thickness, straight shape, and tender pulp without stringy fibers. Shipped primarily via Air Cargo for optimal market crispness.',
    origin: 'Andhra Pradesh, Tamil Nadu, Karnataka (India)',
    availableGrades: ['Length 45cm - 60cm', 'Length 60cm - 75cm (Tender Grade A)'],
    packagingOptions: ['5 kg / 10 kg Ventilated Export Cartons with moisture liners'],
    supplyType: 'Air Cargo & Sea Reefer FCL',
    moq: '500 kg (Air) / 1 x 20ft Reefer Container (4 - 5 MT)',
    seasonality: 'Round the Year',
    applicablePorts: ['Hyderabad / Chennai / Mumbai International Airport (Air Cargo)', 'Chennai Port (Sea)'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'Qatar', 'Malaysia', 'Singapore', 'Canada', 'UK'],
    freightMethod: 'Air Cargo (Primary) or 20ft Reefer Container',
    shelfLife: '12 - 15 Days under cold chain (8-10°C)',
    loadability: 'Air pallets or 8 MT in 40ft Reefer',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    featured: false,
    specifications: [
      { key: 'Variety', value: 'PKM-1 / ODC High-Yield Moringa' },
      { key: 'Length', value: '45 cm to 70 cm' },
      { key: 'Color', value: 'Uniform Dark Green' },
      { key: 'Tenderness', value: 'High (Soft inner seeds, fiber-free)' }
    ],
    qualityAssurance: ['Pre-cooled post harvest', 'Graded for zero bend and scarring', 'Phytosanitary cleared'],
    exportDocuments: ['Invoice, Packing List, Phytosanitary, Certificate of Origin, Air Waybill']
  },
  {
    id: 'fresh-okra',
    slug: 'okra',
    name: "Fresh Okra (Lady's Finger)",
    category: 'Fresh Vegetables',
    categoryBadge: 'Year Round',
    shortDescription: 'Bright green, tender, fiber-free fresh bhindi pods harvested early morning for maximum export freshness.',
    description: 'Export-grade fresh Okra hand-picked at optimal tenderness. Cleaned, graded by length (6-9 cm), and packed in aerated corrugated cartons with moisture-absorbing sheets.',
    origin: 'Andhra Pradesh, Maharashtra, Gujarat (India)',
    availableGrades: ['Small: 5cm - 7cm', 'Medium: 7cm - 9cm (Grade A Tender)'],
    packagingOptions: ['4 kg / 5 kg / 10 kg Export Cartons with air vents'],
    supplyType: 'Air Cargo & Sea Reefer',
    moq: '500 kg (Air) / 1 x 40ft Reefer Container (7 - 8 MT)',
    seasonality: 'Round the Year',
    applicablePorts: ['Hyderabad / Mumbai / Chennai Airport', 'JNPT Mumbai'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'UK', 'Germany', 'Canada', 'Qatar'],
    freightMethod: 'Air Cargo or 40ft Reefer at 8-10°C',
    shelfLife: '10 - 14 Days at 8-10°C',
    loadability: '7 - 8 MT in 40ft Reefer Container',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80',
    featured: false,
    specifications: [
      { key: 'Length', value: '6 cm to 9 cm' },
      { key: 'Color', value: 'Vibrant Green' },
      { key: 'Defects', value: 'Nil (Zero fiber, tip snap-fresh)' }
    ],
    qualityAssurance: ['Snap-test for tenderness', 'Zero pest infestation', 'APEDA export cleared'],
    exportDocuments: ['Commercial Invoice, Packing List, Phytosanitary, Certificate of Origin, AWB/BL']
  },
  {
    id: 'turmeric-finger-powder',
    slug: 'turmeric',
    name: 'Indian Turmeric (Salem / Nizamabad / Duggirala)',
    category: 'Spices',
    categoryBadge: 'Export Grade',
    shortDescription: 'High Curcumin (3.5% to 5.0%), deep golden-yellow natural Indian turmeric whole fingers and fine powder.',
    description: 'Directly sourced from prime Andhra Pradesh (Duggirala / Nizamabad) and Tamil Nadu (Salem) growing centers. Double-polished, sortex-cleaned whole fingers and fine ground turmeric with superior natural aroma and rich curcumin potency.',
    origin: 'Andhra Pradesh (Guntur/Duggirala), Telangana (Nizamabad), Tamil Nadu (Salem)',
    availableGrades: ['Double Polished Finger', 'Single Polished Finger', 'Bulb / Gattha', 'Fine Ground Powder (Curcumin 3.5% - 5.0%+)'],
    packagingOptions: ['25 kg / 50 kg Jute Bags, PP Woven Bags, or 25 kg Craft Paper Bags with inner liner'],
    supplyType: 'Bulk Export (20ft FCL / 40ft HC)',
    moq: '1 x 20ft FCL (approx. 18 - 19 MT in bags)',
    seasonality: 'Round the Year (Peak: February to May)',
    applicablePorts: ['Chennai Port', 'Krishnapatnam Port', 'Visakhapatnam Port', 'JNPT Mumbai'],
    targetMarkets: ['UAE', 'Saudi Arabia', 'USA', 'Canada', 'Germany', 'Malaysia', 'Sri Lanka'],
    freightMethod: 'Ocean Freight (20ft / 40ft Dry Containers)',
    shelfLife: '24 Months in cool, dry storage',
    loadability: '18 - 19 MT in 20ft FCL; 26 - 27 MT in 40ft HC',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    featured: false,
    specifications: [
      { key: 'Curcumin Content', value: '3.0% to 5.0%+ (As per buyer specification)' },
      { key: 'Moisture', value: 'Max 10.0%' },
      { key: 'Total Ash', value: 'Max 7.0%' },
      { key: 'Lead / Chromate', value: '100% Negative (Guaranteed pure and natural)' }
    ],
    qualityAssurance: ['Spices Board tested for Curcumin and zero chemical adulteration', 'Sortex cleaned'],
    exportDocuments: ['Invoice, Packing List, Certificate of Origin, Phytosanitary, Fumigation, Spices Board Lab Test']
  },
  {
    id: 'ir64-non-basmati-rice',
    slug: 'ir64-rice',
    name: 'IR64 Non-Basmati Rice (Raw / Parboiled)',
    category: 'Rice & Grains',
    categoryBadge: 'Bulk Available',
    shortDescription: 'Long grain non-basmati rice with 5% / 25% broken options, high grain integrity and bulk export viability.',
    description: 'Long grain IR64 non-basmati rice grown extensively across Andhra Pradesh and West Bengal. Highly popular for commercial food service, government tenders, and bulk distribution due to high yield, strong grain structure, and competitive pricing.',
    origin: 'Andhra Pradesh, Telangana, Chhattisgarh, West Bengal (India)',
    availableGrades: ['IR64 Parboiled 5% Broken', 'IR64 Raw 5% Broken', 'IR64 25% Broken Sortex Clean'],
    packagingOptions: ['25 kg / 50 kg PP Bags or 1 MT Jumbo Bulk Bags'],
    supplyType: 'Bulk Export (20ft FCL or Break-Bulk Vessels)',
    moq: '1 x 20ft FCL (approx. 26 - 27 MT)',
    seasonality: 'Round the Year',
    applicablePorts: ['Kakinada Port', 'Visakhapatnam Port', 'Chennai Port', 'Krishnapatnam Port'],
    targetMarkets: ['Bangladesh', 'Sri Lanka', 'Malaysia', 'Benin', 'Togo', 'Senegal', 'UAE'],
    freightMethod: 'Ocean Freight (20ft Dry FCL) or Vessel Break Bulk',
    shelfLife: '24 Months',
    loadability: '26 - 27 MT per 20ft Container',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    specifications: [
      { key: 'Grain Length', value: '6.0 mm - 6.2 mm' },
      { key: 'Broken', value: '5% Max / 25% Max (As per contract)' },
      { key: 'Moisture', value: 'Max 13.5%' },
      { key: 'Sortex Clean', value: '100% Optical Sortex' }
    ],
    qualityAssurance: ['Pre-loading SGS/Geo-Chem inspection for broken percentage and moisture'],
    exportDocuments: ['Invoice, Packing List, Certificate of Origin, Phytosanitary, Fumigation, BL']
  },
  {
    id: 'premium-makhana',
    slug: 'makhana',
    name: 'Premium Makhana (Fox Nut / Lotus Seeds)',
    category: 'Other Agro Products',
    categoryBadge: 'Expanding',
    shortDescription: '100% natural, hand-picked puffed lotus seeds with crunchy texture, high protein, and zero cholesterol.',
    description: 'Premium organic grade Makhana (Fox Nuts) sourced directly from Bihar. Hand-graded for large puff diameter (5-6 suta), spotless white appearance, and crispness. Ideal for healthy snacking, supermarket retail packaging, and culinary applications.',
    origin: 'Bihar (Mithila Region, India)',
    availableGrades: ['5-6 Suta (10mm - 12mm+ Hand-picked Super)', '4-5 Suta (8mm - 10mm)', 'Commercial Grade'],
    packagingOptions: ['100g / 250g / 500g / 1kg Retail Nitrogen Pouches', '10 kg PP Master Bags'],
    supplyType: 'Bulk Export (40ft High Cube Container / Air Cargo)',
    moq: '500 kg (Air) / 1 x 40ft HC Container (approx. 4 - 5 MT due to volumetric bulk)',
    seasonality: 'Round the Year',
    applicablePorts: ['Kolkata Port', 'JNPT Mumbai', 'Delhi / Kolkata Airport'],
    targetMarkets: ['USA', 'Canada', 'UK', 'UAE', 'Australia', 'Singapore'],
    freightMethod: 'Ocean Freight (40ft HC) or Air Cargo',
    shelfLife: '12 Months in airtight packing',
    loadability: '4 - 5 Metric Tons per 40ft HC Container',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    featured: false,
    specifications: [
      { key: 'Size Calibration', value: '10mm to 13mm diameter' },
      { key: 'Color', value: 'Natural Bright White' },
      { key: 'Moisture', value: 'Max 8.0%' },
      { key: 'Foreign Matter', value: 'Nil' }
    ],
    qualityAssurance: ['Hand-sorted for dark spots and unpopped kernels', 'Food grade fumigated'],
    exportDocuments: ['Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary, BL/AWB']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);
}
