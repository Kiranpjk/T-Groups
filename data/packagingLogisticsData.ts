export interface PackagingItem {
  id: string;
  name: string;
  capacity: string;
  materials: string;
  suitableFor: string;
  image: string;
  features: string[];
}

export const PACKAGING_ITEMS: PackagingItem[] = [
  {
    id: '10kg-carton',
    name: '10 KG Corrugated Carton',
    capacity: '10.0 KG Net Weight',
    materials: '5-Ply High-Burst Heavy Duty Corrugated Board',
    suitableFor: 'Fresh Red Onions, Drumsticks, Okra, Vegetables',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    features: ['Ventilated air punch holes', 'Customized artwork branding', 'Moisture resistant coating']
  },
  {
    id: '13kg-carton',
    name: '13 KG / 13.5 KG Banana Carton',
    capacity: '13.0 - 13.5 KG Net Weight',
    materials: 'Telescopic Top-Bottom Kraft Box (24-28 ECT)',
    suitableFor: 'G9 Cavendish Bananas, Bhagwa Pomegranates',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    features: ['Supports 4-6 hands per carton', 'Foam sheet cushioning', 'MAP vacuum bag compatible']
  },
  {
    id: '20kg-bag',
    name: '20 KG Ventilated Mesh Bag',
    capacity: '20.0 KG Net Weight',
    materials: 'Lenox / Monofilament Polypropylene Mesh',
    suitableFor: 'Fresh Red Onions, Garlic, Heavy Produce',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80',
    features: ['Maximum air circulation', 'Heavy-duty drawstring tie', 'Red / Purple / Yellow mesh colors']
  },
  {
    id: '25kg-bag',
    name: '25 KG Woven PP / BOPP Bag',
    capacity: '25.0 KG Net Weight',
    materials: 'Virgin Woven PP with Glossy BOPP Lamination',
    suitableFor: '1121 Basmati Rice, Sona Masoori, IR64 Rice, Turmeric',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    features: ['Multi-color photo quality print', 'Moisture-proof inner layer', 'Strong anti-slip weave']
  },
  {
    id: '50kg-pp-bag',
    name: '50 KG Heavy-Duty PP Bag',
    capacity: '50.0 KG Net Weight',
    materials: 'High-Tensile Woven Polypropylene',
    suitableFor: 'Bulk Non-Basmati Rice, Dry Chillies, Grains, Animal Feed',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80',
    features: ['Double-stitched bottom seam', 'Bulk container load density', 'Economic export packaging']
  },
  {
    id: 'custom-packaging',
    name: 'Custom Private-Label Packaging',
    capacity: '100g, 500g, 1kg, 5kg to 1 MT Jumbo',
    materials: 'BOPP, Non-Woven, Standup Zipper Pouches, Master Cartons',
    suitableFor: 'Supermarket Brands, Importer Private Label Lines',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    features: ['Complete buyer branding & barcodes', 'Multilingual regulatory labeling', 'Retail shelf-ready packaging']
  }
];

export const INDIAN_PORTS = [
  {
    name: 'JNPT / Nhava Sheva (Mumbai)',
    state: 'Maharashtra',
    type: 'Premier Container Seaport',
    connectivity: 'Direct container liner routes to Middle East (3-5 days), Europe & Americas',
    handledCargo: 'Reefer Containers, Dry FCL, Fresh Produce, Spices, Grains'
  },
  {
    name: 'Mundra Port',
    state: 'Gujarat',
    type: 'Major Deep-Water Port',
    connectivity: 'Fastest turnaround to GCC, Red Sea, Europe & Africa',
    handledCargo: 'Onions, Basmati Rice, Spices, Grains, Bulk Cargo'
  },
  {
    name: 'Chennai Port',
    state: 'Tamil Nadu',
    type: 'East Coast Gateway Port',
    connectivity: 'Direct sailings to Southeast Asia, Malaysia, Singapore, Sri Lanka, Far East',
    handledCargo: 'Rice, Chillies, Coconuts, Fresh Produce'
  },
  {
    name: 'Krishnapatnam & Visakhapatnam Ports',
    state: 'Andhra Pradesh',
    type: 'Primary Agro Export Corridor Ports',
    connectivity: 'Closest proximity to Guntur spice mandis & Andhra agricultural belts',
    handledCargo: 'Dry Red Chillies, Turmeric, Sona Masoori Rice, Tobacco, Maize'
  },
  {
    name: 'Kolkata / Haldia Port',
    state: 'West Bengal',
    type: 'Riverine & Deep Water Hub',
    connectivity: 'Gateway to Bangladesh, Nepal, Southeast Asia',
    handledCargo: 'Non-Basmati Rice, Fox Nuts (Makhana), Grains'
  }
];

export const SHIPPING_MODES = [
  {
    mode: 'FCL (Full Container Load)',
    type: '20ft & 40ft High Cube Dry / Reefer Containers',
    description: 'Dedicated container loading for maximum cost-efficiency, safety, and temperature control from packhouse to destination.',
    idealFor: 'Bulk rice, onions, bananas, pomegranates, chillies'
  },
  {
    mode: 'LCL (Less than Container Load)',
    type: 'Consolidated Sea Freight Cargo',
    description: 'Cost-effective consolidated ocean freight for smaller trial orders, specialized spices, and non-perishable superfoods.',
    idealFor: 'Specialty spices, makhana, trial orders'
  },
  {
    mode: 'Air Cargo Freight',
    type: 'Scheduled International Cargo Aircraft',
    description: 'Rapid 4 to 24-hour delivery for delicate, highly perishable fresh vegetables and seasonal fresh fruits requiring maximum crispness.',
    idealFor: 'Green chillies, fresh drumsticks, okra, exotic mangoes'
  }
];

export const INCOTERMS_DATA = [
  {
    term: 'FOB (Free On Board)',
    location: 'Designated Indian Port (e.g., FOB JNPT / FOB Mundra / FOB Chennai)',
    responsibility: 'T Group manages domestic sourcing, packing, customs clearance, and vessel loading. Buyer pays ocean freight and marine insurance.'
  },
  {
    term: 'CFR (Cost and Freight)',
    location: 'Designated Buyer Destination Seaport (e.g., CFR Jebel Ali / CFR Port Klang)',
    responsibility: 'T Group arranges and prepays ocean freight up to your destination port. Risk transfers upon vessel loading.'
  },
  {
    term: 'CIF (Cost, Insurance & Freight)',
    location: 'Designated Buyer Destination Seaport',
    responsibility: 'Turnkey shipping solution where T Group pays ocean freight and full marine cargo insurance covering transit risks up to your seaport.'
  },
  {
    term: 'FCA / Other Terms',
    location: 'Designated Inland Container Depot / Airport (e.g., FCA Hyderabad)',
    responsibility: 'Flexible delivery to designated carrier at specified export terminal.'
  }
];

export const EXPORT_DOCUMENTS_LIST = [
  { name: 'Commercial Invoice', description: 'Certified commercial valuation and shipment breakdown' },
  { name: 'Packing List', description: 'Detailed carton count, gross weight, tare weight, and net weight' },
  { name: 'Certificate of Origin', description: 'Official origin verification issued by authorized Chamber of Commerce' },
  { name: 'Phytosanitary Certificate', description: 'Government plant health and pest-free clearance' },
  { name: 'Shipping Bill & Customs Clearance', description: 'Official Indian Customs export clearance document' },
  { name: 'Bill of Lading (B/L) / Air Waybill (AWB)', description: 'Negotiable title of ownership and freight receipt' },
  { name: 'Fumigation Certificate', description: 'NSPM-15 compliant methyl bromide / aluminum phosphide fumigation' },
  { name: 'Third-Party Inspection Certificate', description: 'Independent inspection by SGS / Geo-Chem / Intertek upon request' }
];
