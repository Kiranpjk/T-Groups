export interface CompanyInfo {
  name: string;
  tagline: string;
  subTagline: string;
  positioning: string;
  description: string;
  founder: {
    name: string;
    title: string;
    location: string;
  };
  phoneNumbers: string[];
  primaryPhone: string;
  secondaryPhone: string;
  phone: string;
  whatsapp: string;
  whatsappSecondary: string;
  whatsappDisplay: string;
  emails: string[];
  primaryEmail: string;
  secondaryEmail: string;
  email: string;
  salesEmail: string;
  address: string;
  workingHours: string;
  location: {
    city: string;
    state: string;
    country: string;
    fullAddress: string;
    sourcingHub: string;
  };
  stats: {
    label: string;
    value: string;
    suffix: string;
  }[];
  socials: {
    linkedin: string;
    instagram: string;
    youtube: string;
    whatsapp: string;
  };
  mission: string;
  vision: string;
  values: {
    title: string;
    description: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "T Group Imports & Exports",
  tagline: "Premium Indian Agricultural Products, Delivered to the World.",
  subTagline: "Connecting international buyers with responsible Indian agricultural sourcing, strict quality control, and seamless export logistics.",
  positioning: "Premium Indian Agricultural Products, Delivered to the World.",
  description: "T Group Imports & Exports is an India-based export and trading company headquartered in Guntur, Andhra Pradesh. We specialize in connecting international buyers, supermarket chains, wholesalers, and food-service distributors with carefully sourced Indian agricultural commodities — from farm gate to destination port.",
  founder: {
    name: "Tarun Boya (Tarun B.)",
    title: "Founder & Managing Director",
    location: "Guntur, Andhra Pradesh, India"
  },
  phoneNumbers: ["+91 9550255644", "+91 7396964227"],
  primaryPhone: "+91 9550255644",
  secondaryPhone: "+91 7396964227",
  phone: "+91 9550255644",
  whatsapp: "919550255644",
  whatsappSecondary: "917396964227",
  whatsappDisplay: "+91 95502 55644 / +91 73969 64227",
  emails: [
    "tgroupimportsandexports@gmail.com",
    "tarun11816@gmail.com"
  ],
  primaryEmail: "tgroupimportsandexports@gmail.com",
  secondaryEmail: "tarun11816@gmail.com",
  email: "tgroupimportsandexports@gmail.com",
  salesEmail: "tarun11816@gmail.com",
  address: "Guntur, Andhra Pradesh, India",
  workingHours: "Mon - Sat: 9:00 AM - 8:00 PM (IST)",
  location: {
    city: "Guntur",
    state: "Andhra Pradesh",
    country: "India",
    fullAddress: "Guntur, Andhra Pradesh, India",
    sourcingHub: "Primary Agro & Spice Sourcing Corridor (Andhra Pradesh, Telangana, Maharashtra, Karnataka, Tamil Nadu, North India)"
  },
  stats: [
    { label: "Product Categories", value: "5+", suffix: "Fresh & Dry Lines" },
    { label: "Export Markets", value: "8+", suffix: "Active & Target Regions" },
    { label: "Shipment Modes", value: "FCL/LCL", suffix: "Reefer & Air Freight" },
    { label: "Quality Inspected", value: "100%", suffix: "Batch-Graded at Source" }
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/t-group-imports-exports",
    instagram: "https://www.instagram.com/tgroupimpex",
    youtube: "https://www.youtube.com/@tgroupimpex",
    whatsapp: "https://wa.me/919550255644?text=Hello%20T%20Group%20Export%20Team%2C%20I%20would%20like%20to%20request%20an%20export%20quotation."
  },
  mission: "To build reliable international supply relationships by combining responsible sourcing, quality control and efficient export logistics.",
  vision: "To become a trusted Indian sourcing partner for agricultural products in global markets.",
  values: [
    {
      title: "Direct Sourcing Integrity",
      description: "Working directly with trusted farmers and packhouses across major Indian growing hubs."
    },
    {
      title: "Strict Quality Control",
      description: "Pre-shipment grading, cleaning, phytosanitary compliance, and export packaging tailored to buyer standards."
    },
    {
      title: "Logistical Reliability",
      description: "Prompt port coordination across Mundra, Nhava Sheva (JNPT), Chennai, and Kolkata with transparent tracking."
    },
    {
      title: "Consistent Communication",
      description: "From quotation to arrival, buyers receive clear documentation, shipment updates, and professional support."
    }
  ]
};
