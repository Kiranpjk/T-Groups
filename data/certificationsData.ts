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
  certificateFile?: string;
  downloadable?: boolean;
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'iec',
    code: 'IEC',
    name: 'Importer-Exporter Code (DGFT)',
    authority: 'Directorate General of Foreign Trade (DGFT Visakhapatnam), Govt of India',
    category: 'Statutory Export License',
    registrationNumber: 'CHOPT3198K',
    validity: 'Active Statutory License (Issued 10/06/2026)',
    scope: 'All-India Commodity Export Clearance for Agricultural & Food Products',
    description: 'Mandatory statutory trade identification issued by the Joint Director General of Foreign Trade (File: VSPIECPAMEND00003825AM27) allowing official customs clearance and export shipments across Indian seaports, dry ports, and international air cargo terminals.',
    iconName: 'ShieldCheck',
    badgeColor: 'from-emerald-700 to-teal-800',
    verified: true,
    certificateFile: '/certificates/IEC-Import-Export-Code-Certificate.pdf',
    downloadable: true
  },
  {
    id: 'gst',
    code: 'GST',
    name: 'Goods & Services Tax Registration (Form GST REG-06)',
    authority: 'Department of Revenue, Ministry of Finance, Govt of India',
    category: 'Taxation & Entity Registration',
    registrationNumber: '37CHOPT3198K1ZB',
    validity: 'Active Regular Taxpayer (From 27/04/2026)',
    scope: 'LUT Registered Zero-Rated Exporter (B2B Global Trade) - Andhra Pradesh',
    description: 'Official corporate tax registration under Andhra Pradesh jurisdiction ensuring complete statutory documentation, Letter of Undertaking (LUT) zero-rated export billing, and compliant banking/FIRC processes.',
    iconName: 'FileCheck',
    badgeColor: 'from-cyan-800 to-blue-900',
    verified: true,
    certificateFile: '/certificates/GST-Registration-Certificate.pdf',
    downloadable: true
  },
  {
    id: 'apeda-rcmc',
    code: 'APEDA',
    name: 'APEDA Registration-cum-Membership (RCMC)',
    authority: 'APEDA Visakhapatnam, Ministry of Commerce & Industry, Govt of India',
    category: 'Export Promotion Board',
    registrationNumber: 'RCMC/APEDA/30749/2026-2027',
    validity: 'Active & Verified (Valid upto 10/06/2031)',
    scope: 'Fresh Onions, Fresh Vegetables, Fresh Fruits (UDIN: UDINRCMC00155815AM27)',
    description: 'Statutory registration with the apex Indian export promotion council certifying compliance with international agricultural quality norms, authorized packhouses, and destination-market traceability.',
    iconName: 'Sprout',
    badgeColor: 'from-green-700 to-emerald-900',
    verified: true,
    certificateFile: '/certificates/APEDA-RCMC-Certificate.pdf',
    downloadable: true
  },
  {
    id: 'fssai',
    code: 'FSSAI',
    name: 'FSSAI Central Food Safety License (Form C)',
    authority: 'Food Safety and Standards Authority of India (Central Licensing Authority, Chennai)',
    category: 'Central Food Safety License',
    registrationNumber: '10126999000352',
    validity: 'Active Central License (Valid upto 15/06/2027)',
    scope: 'Trader / Merchant - Exporter of Food Commodities (Central License)',
    description: 'Statutory compliance under FSS Act 2006 ensuring all agricultural and food exports meet strict quality thresholds, hygienic sorting/packaging protocols, and international maximum residue limit (MRL) standards.',
    iconName: 'CheckCircle2',
    badgeColor: 'from-amber-700 to-orange-800',
    verified: true,
    certificateFile: '/certificates/FSSAI-Central-License-Certificate.pdf',
    downloadable: true
  },
  {
    id: 'ap-establishment',
    code: 'LABOUR',
    name: 'AP Labour Dept Establishment Registration (Form C)',
    authority: 'Department of Labour, Government of Andhra Pradesh',
    category: 'Statutory Establishment License',
    registrationNumber: 'AP-26-16-047-04345001',
    validity: 'Active Statutory License (Valid upto 31/03/2029)',
    scope: 'Commercial Establishment — Export and Import (Act 1988)',
    description: 'Official establishment registration under the Andhra Pradesh Labour Laws Act, certifying registered commercial premises for export and import trade operations (Application No: IRE012605799489).',
    iconName: 'Building',
    badgeColor: 'from-teal-700 to-emerald-800',
    verified: true,
    certificateFile: '/certificates/AP-Labour-Shops-Establishment-Certificate.pdf',
    downloadable: true
  },
  {
    id: 'msme-udyam',
    code: 'MSME',
    name: 'MSME Udyam Registration',
    authority: 'Ministry of Micro, Small & Medium Enterprises, Govt of India',
    category: 'Enterprise Classification',
    registrationNumber: 'Udyam Registered Enterprise',
    validity: 'Active & Verified',
    scope: 'Micro, Small & Medium Enterprise (MSME) Classification for Export Trading',
    description: 'Official Udyam Registration under the Ministry of MSME, Government of India. Certifies the enterprise classification and enables access to government schemes, subsidies, and priority sector lending for export operations.',
    iconName: 'Building2',
    badgeColor: 'from-indigo-700 to-purple-800',
    verified: true,
    downloadable: true
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    name: 'ISO 9001:2015 — Quality Management System',
    authority: 'International Organization for Standardization (ISO)',
    category: 'Quality Management',
    registrationNumber: 'ISO 9001:2015 Certified',
    validity: 'Active Certification',
    scope: 'Quality Management System for Agricultural Export Operations',
    description: 'Internationally recognized Quality Management System (QMS) certification ensuring consistent quality standards, continuous improvement processes, and customer-focused operations across all export activities.',
    iconName: 'Award',
    badgeColor: 'from-blue-700 to-indigo-800',
    verified: true,
    downloadable: true
  },
  {
    id: 'trademark',
    code: 'TM',
    name: 'Trademark Registration Certificate',
    authority: 'Controller General of Patents, Designs and Trade Marks, Govt of India',
    category: 'Intellectual Property',
    registrationNumber: 'Registered Trademark',
    validity: 'Active & Protected',
    scope: 'T Group Imports & Exports Brand Identity Protection',
    description: 'Official trademark registration protecting the T Group Imports & Exports brand name, logo, and trade identity under Indian intellectual property law. Ensures brand authenticity and prevents unauthorized use.',
    iconName: 'Fingerprint',
    badgeColor: 'from-rose-700 to-red-800',
    verified: true,
    downloadable: true
  }
];
