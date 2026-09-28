export interface ExportCountry {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: 'Middle East' | 'Asia' | 'North America' | 'Europe' | 'Others';
  status: 'active' | 'target';
  ports: string[];
  topProducts: string[];
  transitTimeSea: string;
  transitTimeAir: string;
  highlighted: boolean;
  mapCoords: { x: number; y: number };
}

export const EXPORT_STATS = [
  { value: "5+", label: "Product Categories", desc: "Fresh & Dry Commodities" },
  { value: "8+", label: "Export Markets", desc: "Active & Target Regions" },
  { value: "FCL/LCL", label: "Shipment Modes", desc: "Reefer & Dry Cargo" },
  { value: "100%", label: "Quality Inspected", desc: "APEDA & FSSAI Compliant" },
];

export const EXPORT_COUNTRIES: ExportCountry[] = [
  {
    id: "uae",
    name: "UAE",
    code: "AE",
    flag: "🇦🇪",
    region: "Middle East",
    status: "active",
    ports: ["Jebel Ali (Dubai)", "Port Rashid", "Sharjah Port"],
    topProducts: ["Fresh Red Onions", "G9 Bananas", "Green Chilli", "Basmati Rice"],
    transitTimeSea: "3 - 5 Days from JNPT Mumbai / Mundra",
    transitTimeAir: "4 Hours",
    highlighted: true,
    mapCoords: { x: 58, y: 44 }
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    region: "Middle East",
    status: "active",
    ports: ["Jeddah Islamic Port", "King Abdulaziz Port (Dammam)"],
    topProducts: ["1121 Basmati Rice", "Pomegranates", "Red Onions", "Dry Red Chilli"],
    transitTimeSea: "6 - 9 Days from JNPT / Mundra",
    transitTimeAir: "5 Hours",
    highlighted: true,
    mapCoords: { x: 54, y: 46 }
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    code: "LK",
    flag: "🇱🇰",
    region: "Asia",
    status: "active",
    ports: ["Port of Colombo"],
    topProducts: ["Fresh Red Onions", "Dry Red Chilli", "IR64 Rice"],
    transitTimeSea: "2 - 3 Days from Tuticorin / Chennai / JNPT",
    transitTimeAir: "2 Hours",
    highlighted: true,
    mapCoords: { x: 67, y: 56 }
  },
  {
    id: "nepal",
    name: "Nepal",
    code: "NP",
    flag: "🇳🇵",
    region: "Asia",
    status: "active",
    ports: ["Birgunj ICP", "Bhairahawa ICP (Land Cargo)"],
    topProducts: ["Rice & Grains", "Fresh Vegetables", "Pomegranates", "Spices"],
    transitTimeSea: "Overland Freight (2 - 4 Days)",
    transitTimeAir: "1.5 Hours",
    highlighted: true,
    mapCoords: { x: 68, y: 41 }
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    code: "BD",
    flag: "🇧🇩",
    region: "Asia",
    status: "active",
    ports: ["Chittagong Port", "Mongla Port", "Benapole Land Border"],
    topProducts: ["Fresh Red Onions", "IR64 Rice", "Green Chilli", "Fresh Produce"],
    transitTimeSea: "4 - 6 Days (or Overland)",
    transitTimeAir: "2.5 Hours",
    highlighted: true,
    mapCoords: { x: 70, y: 45 }
  },
  {
    id: "malaysia",
    name: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    region: "Asia",
    status: "target",
    ports: ["Port Klang (Westport/Northport)", "Penang Port"],
    topProducts: ["Red Onions", "G9 Bananas", "Okra", "Basmati Rice"],
    transitTimeSea: "6 - 8 Days from Chennai / JNPT",
    transitTimeAir: "4.5 Hours",
    highlighted: true,
    mapCoords: { x: 75, y: 53 }
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    region: "North America",
    status: "target",
    ports: ["Port of Vancouver", "Port of Montreal", "Halifax"],
    topProducts: ["1121 Basmati Rice", "Makhana (Fox Nut)", "G4 Chilli", "Drumsticks"],
    transitTimeSea: "22 - 28 Days",
    transitTimeAir: "18 - 24 Hours",
    highlighted: true,
    mapCoords: { x: 23, y: 27 }
  },
  {
    id: "guyana",
    name: "Guyana",
    code: "GY",
    flag: "🇬🇾",
    region: "Others",
    status: "target",
    ports: ["Port of Georgetown"],
    topProducts: ["Rice & Grains", "Spices", "Processed Agro Commodities"],
    transitTimeSea: "30 - 35 Days",
    transitTimeAir: "26 Hours",
    highlighted: true,
    mapCoords: { x: 33, y: 52 }
  }
];

export const EXPORT_CAPABILITIES_LIST = [
  {
    id: "sourcing",
    title: "Sourcing",
    icon: "Package",
    description: "Multi-state sourcing network across India connected directly to farmer clusters and primary mandis."
  },
  {
    id: "packing",
    title: "Packing",
    icon: "Briefcase",
    description: "Buyer-specific export packaging in mesh bags, corrugated boxes, jute sacks, and PP bags."
  },
  {
    id: "cold-chain",
    title: "Cold Chain",
    icon: "Snowflake",
    description: "Cold-chain coordination with pre-cooling and temperature-controlled reefers for fresh produce."
  },
  {
    id: "freight",
    title: "Freight",
    icon: "Ship",
    description: "Air and ocean freight coordination tailored to transit sensitivity, load volume, and buyer terms."
  },
  {
    id: "documentation",
    title: "Documentation",
    icon: "FileText",
    description: "Export documentation and customs coordination: Certificate of Origin, Phytosanitary, Bill of Lading."
  },
  {
    id: "containerization",
    title: "Containerization",
    icon: "Truck",
    description: "FCL / LCL / air cargo based on shipment requirements and destination port handling capabilities."
  }
];

export const INDIA_ORIGIN: [number, number] = [78.9629, 20.5937]; // Center of India / Guntur & JNPT corridor

export const COUNTRY_GEO: Record<string, { iso: string; lngLat: [number, number]; status: 'active' | 'target' }> = {
  uae: { iso: '784', lngLat: [55.027, 24.987], status: 'active' },
  'saudi-arabia': { iso: '682', lngLat: [45.079, 23.885], status: 'active' },
  'sri-lanka': { iso: '144', lngLat: [80.771, 7.873], status: 'active' },
  nepal: { iso: '524', lngLat: [84.124, 28.394], status: 'active' },
  bangladesh: { iso: '050', lngLat: [90.356, 23.684], status: 'active' },
  malaysia: { iso: '458', lngLat: [101.975, 4.210], status: 'target' },
  canada: { iso: '124', lngLat: [-106.346, 56.130], status: 'target' },
  guyana: { iso: '328', lngLat: [-58.930, 4.860], status: 'target' },
};

export const INDIA_ISO = '356';
