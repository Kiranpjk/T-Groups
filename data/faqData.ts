export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Products',
    question: 'What products do you export?',
    answer: 'T Group Imports & Exports specializes in premium Indian agricultural commodities across five core categories: Fresh Fruits (Mangoes, G9 Cavendish Bananas, Bhagwa Pomegranates, Table Grapes), Fresh Vegetables (Red Onions, G4 Green Chillies, Tomatoes, Drumsticks, Okra), Rice & Grains (1121 Basmati Rice, Sona Masoori, IR64, Swarna), Spices (Guntur Dry Red Chillies, Turmeric, Cumin, Coriander), and Other Agro Products (Semi-Husked Coconuts, Makhana/Fox Nuts, seasonal commodities).'
  },
  {
    id: 'faq-2',
    category: 'Ordering',
    question: 'What is your MOQ (Minimum Order Quantity)?',
    answer: 'Our MOQ is structured for commercial B2B buyers. For ocean shipments, the standard MOQ is 1 x 20ft FCL (approx. 25-26 MT for rice/grains or 6.5-7 MT for dry chillies) or 1 x 40ft High Cube Reefer container (approx. 20-29 MT depending on produce like onions, bananas, or pomegranates). For temperature-sensitive perishable vegetables shipped via Air Cargo, our MOQ starts from 500 kg to 1,000 kg.'
  },
  {
    id: 'faq-3',
    category: 'Packaging',
    question: 'Do you offer private-label packaging?',
    answer: 'Yes. We offer customized buyer-specific and private-label packaging. Depending on the product, we provide customized branding on 1kg, 5kg, 10kg, 20kg, 25kg, and 50kg BOPP bags, non-woven bags, corrugated master cartons with custom print artwork, mesh bags with buyer tags, and barcoded retail pouches.'
  },
  {
    id: 'faq-4',
    category: 'Logistics',
    question: 'Which ports do you ship from?',
    answer: 'We dispatch shipments from major Indian seaports and international air cargo terminals based on product origin and shipping efficiency: Mundra Port (Gujarat), Nhava Sheva / JNPT (Mumbai), Chennai Port, Krishnapatnam Port, Visakhapatnam Port, and Kolkata Port. Air cargo consignments are routed through Hyderabad (HYD), Mumbai (BOM), and Chennai (MAA) International Airports.'
  },
  {
    id: 'faq-5',
    category: 'Trade Terms',
    question: 'Do you offer CIF shipments?',
    answer: 'Yes. We quote on FOB (Free on Board), CFR (Cost and Freight), CIF (Cost, Insurance and Freight), and FCA terms according to Incoterms 2020. Our export team coordinates ocean/air freight booking and marine cargo insurance up to your designated destination port.'
  },
  {
    id: 'faq-6',
    category: 'Logistics',
    question: 'Can you arrange air cargo?',
    answer: 'Yes. For time-sensitive and highly perishable commodities such as Fresh Green Chillies, Tender Drumsticks, Okra, and seasonal produce, we coordinate scheduled cold-chain air freight dispatch with airlines to Middle Eastern, European, and North American airports.'
  },
  {
    id: 'faq-7',
    category: 'Commercials',
    question: 'What payment terms do you accept?',
    answer: 'We work on standard international trade settlement terms including Irrevocable Letter of Credit at Sight (L/C at sight from prime international banks) and Telegraphic Transfer (Advance TT / DP terms against shipping documents) based on contract volume and mutually agreed trade terms.'
  },
  {
    id: 'faq-8',
    category: 'Documentation',
    question: 'Do you provide export documentation?',
    answer: 'Yes. Every consignment is supported by a complete, verified export documentation set including Commercial Invoice, Packing List, Certificate of Origin (Chamber of Commerce / Preferential), Phytosanitary Certificate (Plant Quarantine Department), Bill of Lading (B/L) / Air Waybill (AWB), Fumigation Certificate, and third-party inspection reports (e.g., SGS / Geo-Chem) when requested.'
  },
  {
    id: 'faq-9',
    category: 'Sourcing',
    question: 'Can you source products according to our specifications?',
    answer: 'Absolutely. Our direct sourcing network allows us to calibrate size, variety, moisture level, broken percentage, pesticide tolerance (MRL levels), and packing dimensions according to the regulatory standards of your destination country and specific supermarket or institutional buyer requirements.'
  },
  {
    id: 'faq-10',
    category: 'Markets',
    question: 'Which countries do you supply?',
    answer: 'We serve active export corridors and target international markets across the Middle East (UAE, Saudi Arabia), South Asia (Sri Lanka, Nepal, Bangladesh), Southeast Asia (Malaysia), North America (Canada), South America (Guyana), and other global destinations.'
  }
];
