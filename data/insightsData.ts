export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  tags: string[];
  content: string[];
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'how-to-import-indian-onions',
    slug: 'how-to-import-indian-onions-from-india',
    title: 'How to Import Indian Onions from India: Complete B2B Buyer Guide',
    category: 'Import Guides',
    readTime: '6 min read',
    date: 'September 2026',
    summary: 'A step-by-step guide for international buyers on sourcing Nashik & Andhra red onions, understanding grade calibrations (45mm+ to 55mm+), reefer container settings, and export documentation.',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
    tags: ['Red Onions', 'Agro Export', 'JNPT Port', 'Reefer Logistics'],
    content: [
      'India is one of the world\'s largest producers and exporters of high-pungency red onions. Known for their deep red color, firm bulb structure, high dry matter, and long shelf life, Indian red onions are in strong demand across the UAE, Saudi Arabia, Sri Lanka, Malaysia, Bangladesh, and Nepal.',
      'Key Growing Regions: The primary export hubs are Nashik, Pune, and Ahmednagar in Maharashtra, alongside Kurnool and Guntur in Andhra Pradesh and parts of Gujarat.',
      'Standard Export Calibrations: International buyers typically import sizes calibrated as 45mm+ (medium salad size), 50mm+ (standard retail/wholesale), and 55mm+ to 60mm+ (jumbo catering size). Proper curing and drying of outer papery skins are essential to avoid sprouting during transit.',
      'Containerization & Temperature: Fresh red onions are shipped in 28-29 MT loads inside 40ft High Cube Reefer containers set at 0°C to 2°C with 65-70% Relative Humidity and 15-20% fresh air ventilation. For short-distance regional voyages (e.g., Dubai or Colombo), ventilated dry containers are also utilized.',
      'Required Documentation: Commercial Invoice, Packing List, Phytosanitary Certificate issued by Plant Quarantine, Certificate of Origin, and Bill of Lading are standard requirements for smooth customs clearance at destination ports.'
    ]
  },
  {
    id: 'indian-g9-banana-export-guide',
    slug: 'indian-g9-banana-export-guide',
    title: 'Indian G9 Banana Export Guide: Harvesting, MAP Packaging & Cold Chain',
    category: 'Product Focus',
    readTime: '7 min read',
    date: 'September 2026',
    summary: 'Discover the technical specifications behind India\'s Grand Nain (G9) Cavendish banana exports, from calibration standards (39-44mm) to modified atmosphere packing and 13.5°C reefer transit.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
    tags: ['G9 Banana', 'Cold Chain', 'Middle East Export', 'APEDA Packhouse'],
    content: [
      'The Grand Nain (G9) Cavendish banana has revolutionized Indian fruit exports, positioning India as a reliable alternative to traditional Central American and Southeast Asian suppliers.',
      'Harvest Calibration & De-handing: Bananas are harvested at Stage 1 (deep emerald green) at 75-80% maturity when finger thickness measures between 39mm and 44mm. Bunches are de-handed in sanitary water baths with food-grade treatment to eliminate crown rot.',
      'Modified Atmosphere Packaging (MAP): Export cartons (13.0 kg / 13.5 kg net weight) utilize micro-perforated vacuum liners with ethylene absorbing sachets to suspend ripening for up to 35-45 days.',
      'Reefer Container Precision: Container pulp temperature is maintained at strictly 13.5°C ± 0.5°C with controlled air exchange to prevent chilling injury or premature ripening.',
      'T Group ensures end-to-end packhouse quality management, delivering flawless bananas ready for uniform ripening rooms across the GCC and international markets.'
    ]
  },
  {
    id: 'indian-agricultural-products-in-uae',
    slug: 'indian-agricultural-products-in-uae',
    title: 'Indian Agricultural Products in UAE & GCC: Demand Trends and Sourcing Strategies',
    category: 'Market Intelligence',
    readTime: '5 min read',
    date: 'September 2026',
    summary: 'An analysis of import requirements for Dubai (Jebel Ali) and Saudi Arabia, covering fast-moving fresh produce, 1121 Basmati rice, and food-service spices.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
    tags: ['UAE Market', 'Jebel Ali Port', 'Dubai Importers', 'GCC Food Security'],
    content: [
      'The UAE and broader GCC region represent one of the most dynamic import corridors for Indian agricultural products due to geographic proximity (3-5 days sea transit from JNPT/Mundra to Jebel Ali) and high consumption demand.',
      'High-Velocity Commodities: Indian Fresh Red Onions, G4 Green Chillies, Bhagwa Pomegranates, 1121 Steam Basmati Rice, and Guntur Teja Red Chillies represent staple lines across UAE supermarkets, hypermarket distribution centers, and HORECA suppliers.',
      'Customs & Municipal Approvals: UAE food safety guidelines mandate Arabic/English bilingual labeling for packaged retail goods, FSSAI health certification, and strict pesticide maximum residue limit (MRL) compliance.',
      'T Group coordinates direct FCL container dispatches and weekly air freight deliveries directly into Dubai, Sharjah, and Abu Dhabi.'
    ]
  },
  {
    id: 'fob-vs-cif-vs-cfr-agricultural-exports',
    slug: 'fob-vs-cif-vs-cfr-for-agricultural-exports',
    title: 'FOB vs CIF vs CFR for Agricultural Exports: Which Incoterm Should Importers Choose?',
    category: 'Export Logistics',
    readTime: '6 min read',
    date: 'September 2026',
    summary: 'A clear breakdown of Incoterms 2020 for agricultural commodity buyers, comparing risk transfer points, freight rates, container demurrage, and marine insurance responsibilities.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    tags: ['Incoterms', 'FOB', 'CIF', 'CFR', 'Ocean Freight'],
    content: [
      'Choosing the right Incoterm is critical for international agricultural commodity trade, directly affecting total landed cost, freight risk, and logistics control.',
      'FOB (Free On Board - Indian Port): Under FOB (e.g., FOB JNPT or FOB Mundra), T Group manages domestic sourcing, grading, packing, customs clearance, and loading onto the buyer\'s designated shipping vessel. The buyer controls ocean freight rates and destination arrival timing.',
      'CFR (Cost and Freight - Destination Port): T Group books and prepays the ocean freight up to the buyer\'s destination seaport (e.g., CFR Jebel Ali or CFR Port Klang). Risk transfers once containers pass the ship\'s rail at the Indian port.',
      'CIF (Cost, Insurance and Freight): Similar to CFR, but T Group also provides marine cargo insurance covering transit risks. This is the preferred turnkey option for many supermarket chains and wholesale distributors.',
      'T Group provides competitive price quotations across FOB, CFR, and CIF based on your supply chain preferences.'
    ]
  },
  {
    id: 'how-to-source-indian-agricultural-products',
    slug: 'how-to-source-indian-agricultural-products',
    title: 'How to Source Indian Agricultural Products: Overcoming Quality and Compliance Challenges',
    category: 'Procurement Strategy',
    readTime: '8 min read',
    date: 'September 2026',
    summary: 'Best practices for global procurement managers looking to establish reliable, direct-from-source agricultural supply chains in India without middleman markups or quality variance.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    tags: ['Direct Sourcing', 'Quality Assurance', 'B2B Procurement', 'India Exporter'],
    content: [
      'India\'s vast agro-climatic diversity enables year-round production of fruits, vegetables, grains, and spices. However, international buyers often face hurdles with inconsistent sorting, non-standard packaging, and communication gaps.',
      '1. Direct Farmer & Packhouse Alliances: Partnering with an organized export partner like T Group ensures products are contracted at source in specialized agricultural belts (e.g., Guntur for chillies, Nashik for onions, Jalgaon for bananas).',
      '2. Standardized Grading & Sorting: Clear specification sheets defining minimum millimeters, Brix sweetness, moisture percentages, and tolerance levels ensure zero surprises upon container de-stuffing.',
      '3. Independent Pre-Shipment Inspection: For large bulk consignments, third-party agencies such as SGS, Geo-Chem, or Bureau Veritas can inspect and verify cargo before container sealing.',
      '4. Transparent Export Execution: T Group provides container stuffing photographs, temperature data logger certificates, and draft document reviews before vessel departure.'
    ]
  }
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHTS_DATA.find((a) => a.slug === slug || a.id === slug);
}
