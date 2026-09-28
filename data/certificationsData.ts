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
    id: 'iec',
    code: 'IEC',
    name: 'Import Export Code (DGFT)',
    authority: 'Directorate General of Foreign Trade, Govt of India',
    category: 'Statutory Export License',
    registrationNumber: 'Registered Exporter Entity',
    validity: 'Active Statutory Status',
    scope: 'All-India Commodity Export Clearance for Agricultural & Food Products',
    description: 'Mandatory statutory trade identification issued by the Directorate General of Foreign Trade (DGFT) allowing official customs clearance and export shipments across Indian seaports, dry ports, and international air cargo terminals.',
    iconName: 'ShieldCheck',
    badgeColor: 'from-emerald-700 to-teal-800',
    verified: true
  },
  {
    id: 'gst',
    code: 'GST',
    name: 'Goods & Services Tax Registration',
    authority: 'Department of Revenue, Ministry of Finance, Govt of India',
    category: 'Taxation & Entity Registration',
    registrationNumber: 'GST Registered Entity (Andhra Pradesh)',
    validity: 'Active Regular Taxpayer',
    scope: 'LUT Registered Zero-Rated Exporter (B2B Global Trade)',
    description: 'Official corporate tax registration under Andhra Pradesh jurisdiction ensuring complete statutory documentation, Letter of Undertaking (LUT) zero-rated export billing, and compliant banking/FIRC processes.',
    iconName: 'FileCheck',
    badgeColor: 'from-cyan-800 to-blue-900',
    verified: true
  },
  {
    id: 'apeda-rcmc',
    code: 'APEDA / RCMC',
    name: 'APEDA Registration-cum-Membership',
    authority: 'Agricultural & Processed Food Products Export Development Authority',
    category: 'Export Promotion Board',
    registrationNumber: 'APEDA RCMC Registered',
    validity: 'Active & Verified',
    scope: 'Fresh Fruits, Fresh Vegetables, Basmati & Non-Basmati Rice',
    description: 'Statutory registration with the apex Indian government export authority certifying compliance with international agricultural quality norms, authorized packhouses, and destination-market traceability.',
    iconName: 'Sprout',
    badgeColor: 'from-green-700 to-emerald-900',
    verified: true
  },
  {
    id: 'fssai',
    code: 'FSSAI',
    name: 'FSSAI Food Safety & Standards Authority of India',
    authority: 'Food Safety and Standards Authority of India',
    category: 'Food Safety Compliance',
    registrationNumber: 'FSSAI Compliant Operator',
    validity: 'Active Regulatory Compliance',
    scope: 'Food Business Operator (FBO) - Exporter / Wholesaler',
    description: 'Statutory compliance ensuring all agricultural and food exports meet strict quality thresholds, hygienic sorting/packaging protocols, and international maximum residue limit (MRL) standards.',
    iconName: 'CheckCircle2',
    badgeColor: 'from-amber-700 to-orange-800',
    verified: true
  }
];
