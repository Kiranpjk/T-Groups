export interface FAQItem {
  question: string;
  answer: string;
  category: 'Payment & Pricing' | 'Quality & Inspection' | 'Logistics & Shipping' | 'Packaging & Customization';
}

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Payment & Pricing',
    question: 'What international payment terms does T Group accept?',
    answer: 'We offer flexible, standard global trade terms: 1) 100% Irrevocable Letter of Credit (L/C) at Sight from top-tier international banks, or 2) Telegraphic Transfer (T/T) with 30% advance confirmation and 70% balance payable upon scanned copy of Bill of Lading (BL). For select established long-term partners, CAD (Cash Against Documents) can also be evaluated.'
  },
  {
    category: 'Logistics & Shipping',
    question: 'What is the Minimum Order Quantity (MOQ) for export shipments?',
    answer: 'For sea freight: 1 x 20ft FCL Container (approx. 25-26 MT for Rice, Makhana, Grains) or 1 x 40ft High Cube Reefer (approx. 20-29 MT for Fresh Red Onions, G9 Bananas, Pomegranates). For high-value perishable vegetables (G4 Chilli, Drumsticks, Okra), we support Air Cargo shipments starting from 500 kg to multi-ton air pallets.'
  },
  {
    category: 'Quality & Inspection',
    question: 'Can you facilitate third-party pre-shipment inspections like SGS or Bureau Veritas?',
    answer: 'Yes, absolutely. We welcome and routinely coordinate third-party independent inspections (such as SGS, Bureau Veritas, Intertek, or TUV) at our pack-houses and stuffing ports. Inspection certificates for weight, quality, pesticide residue, and container stuffing are issued directly to the buyer.'
  },
  {
    category: 'Quality & Inspection',
    question: 'How do you preserve product freshness and shelf life during transit?',
    answer: 'We enforce an unbroken cold-chain protocol: harvest within 24 hours of packing, rapid pre-cooling, sortex grading, moisture-absorbent lining, ethylene gas scavengers for fresh produce, and smart reefer containers equipped with real-time temperature/humidity IoT data loggers.'
  },
  {
    category: 'Packaging & Customization',
    question: 'Do you offer customized private labeling and buyer branding?',
    answer: 'Yes! We provide full OEM / Private Labeling services. You can customize packaging materials (BOPP bags, non-woven bags, multi-ply corrugated cartons, jute bags, vacuum packs) with your company logo, barcodes, nutritional information, and localized language text (Arabic, French, Spanish, etc.).'
  },
  {
    category: 'Logistics & Shipping',
    question: 'Which Incoterms do you support for international quotations?',
    answer: 'We support all major ICC Incoterms 2020: FOB (Free on Board at JNPT Mumbai, Mundra, Chennai, or Tuticorin), CIF (Cost, Insurance & Freight to your destination seaport), CFR (Cost and Freight), and CIP/CPT for air freight to international airports.'
  },
  {
    category: 'Logistics & Shipping',
    question: 'What export documents are provided with every consignment?',
    answer: 'Every shipment is accompanied by a full export documentation set: 1) Master Bill of Lading (BL) / Airway Bill (AWB), 2) Commercial Invoice & Detailed Packing List, 3) Certificate of Origin (Chamber of Commerce / Preferential Trade Agreements), 4) Phytosanitary Certificate from Govt of India NPPO, 5) FSSAI / Health Certificate, 6) Fumigation Certificate, and 7) Certificate of Analysis (COA).'
  }
];
