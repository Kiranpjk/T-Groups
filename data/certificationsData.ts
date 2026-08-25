export interface Certification {
  id: string;
  code: string;
  name: string;
  authority: string;
  category: string;
  registrationNumber: string;
  validity: string;
  scope: string;
  description: string;
  iconName: string;
  badgeColor: string;
  verified: boolean;
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'iec-code',
    code: 'IEC',
    name: 'Import Export Code (DGFT)',
    authority: 'Directorate General of Foreign Trade, Ministry of Commerce & Industry, Govt of India',
    category: 'Government Statutory License',
    registrationNumber: 'AAACT7890M / DGFT-MUM-2021',
    validity: 'Permanent / Annually Re-validated',
    scope: 'All India Export Clearance for Agricultural & Food Commodities',
    description: 'Mandatory statutory license granted by DGFT enabling seamless customs clearance and international commodity shipments through all Indian sea ports and air cargo terminals.',
    iconName: 'ShieldCheck',
    badgeColor: 'from-emerald-600 to-teal-700',
    verified: true
  },
  {
    id: 'apeda-rcmc',
    code: 'APEDA',
    name: 'APEDA RCMC Registered Exporter',
    authority: 'Agricultural and Processed Food Products Export Development Authority',
    category: 'Commodity Export Board',
    registrationNumber: 'APEDA/REG/MUM/2022/94821',
    validity: 'Active & Verified',
    scope: 'Fresh Fruits, Fresh Vegetables, Basmati & Non-Basmati Rice, Floriculture',
    description: 'APEDA Registration-cum-Membership Certificate (RCMC) certifying compliance with international agricultural quality norms, traceability guidelines, and authorized pack-house processing.',
    iconName: 'Sprout',
    badgeColor: 'from-green-600 to-emerald-800',
    verified: true
  },
  {
    id: 'fssai-central',
    code: 'FSSAI',
    name: 'FSSAI Central Food Safety License',
    authority: 'Food Safety and Standards Authority of India (Central FSSAI)',
    category: 'Food Safety & Hygiene',
    registrationNumber: '10021022003891',
    validity: 'Active / Multi-Year License',
    scope: 'Food Business Operator (FBO) - Exporter / Trader / Wholesaler',
    description: 'Highest category central statutory license ensuring all exported food items adhere to strict residue tolerances, hygienic packing, microbiological safety, and food safety standards.',
    iconName: 'CheckCircle2',
    badgeColor: 'from-amber-600 to-orange-700',
    verified: true
  },
  {
    id: 'iso-22000',
    code: 'ISO 22000:2018',
    name: 'ISO 22000:2018 FSMS Certified',
    authority: 'International Organization for Standardization / Accredited Global Registrar',
    category: 'Global Quality Management',
    registrationNumber: 'FSMS-IND-2022-77192',
    validity: 'ISO Certified Standard',
    scope: 'Supply Chain, Sorting, Grading, Packaging & Export of Agri Produce',
    description: 'Global standard for Food Safety Management Systems (HACCP principles) validating full supply chain risk controls from farm gate sourcing to container port loading.',
    iconName: 'Award',
    badgeColor: 'from-blue-600 to-indigo-800',
    verified: true
  },
  {
    id: 'gst-in',
    code: 'GST',
    name: 'Goods & Services Tax Registered',
    authority: 'CBIC, Department of Revenue, Ministry of Finance, Govt of India',
    category: 'Taxation & Legal Entity',
    registrationNumber: '27AAACT7890M1Z5',
    validity: 'Active Regular Taxpayer',
    scope: 'LUT Registered Zero-Rated Exporter (B2B Global Trade)',
    description: 'Official tax registration ensuring 100% compliant documentation, LUT filing for zero-rated export supplies, and transparent banking/FIRC processes.',
    iconName: 'FileCheck',
    badgeColor: 'from-cyan-700 to-blue-800',
    verified: true
  },
  {
    id: 'spices-board',
    code: 'SPICES BOARD',
    name: 'Spices Board of India CRES',
    authority: 'Spices Board, Ministry of Commerce & Industry, Govt of India',
    category: 'Spices Quality & Purity',
    registrationNumber: 'SB/CRES/EXP/2022/4108',
    validity: 'Active RCMC',
    scope: 'Dry Chillies, Turmeric, Cumin, Coriander & Specialty Spices',
    description: 'Mandatory export registration validating aflatoxin testing, pesticide residue limits, and moisture standards for whole and powdered spice consignments.',
    iconName: 'Flame',
    badgeColor: 'from-red-600 to-amber-700',
    verified: true
  },
  {
    id: 'phytosanitary-nppo',
    code: 'PQ / NPPO',
    name: 'Phytosanitary Certification Compliant',
    authority: 'Directorate of Plant Protection, Quarantine & Storage (Govt of India)',
    category: 'Biosecurity & Pest Freedom',
    registrationNumber: 'NPPO-IN-PSC-REG',
    validity: 'Consignment-wise Issuance',
    scope: 'Pest-Free Certification for Fresh Fruits, Vegetables & Grains',
    description: 'Every consignment undergoes pre-shipment fumigation, cold treatment or hot water dipping where required, accompanied by an official government Phytosanitary Certificate (PSC).',
    iconName: 'Leaf',
    badgeColor: 'from-emerald-700 to-green-900',
    verified: true
  }
];
