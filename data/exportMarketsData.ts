export interface ExportCountry {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: 'Middle East' | 'Asia' | 'North America' | 'Europe' | 'Others';
  ports: string[];
  topProducts: string[];
  transitTimeSea: string;
  transitTimeAir: string;
  highlighted: boolean;
  mapCoords: { x: number; y: number }; // Percentage coords on world map (0-100)
}

export const EXPORT_STATS = [
  { value: "50+", label: "Countries Served", desc: "Across 5 Continents" },
  { value: "100+", label: "Monthly Shipments", desc: "FCL & Air Charters" },
  { value: "500+", label: "Happy Importers", desc: "Long-term Partnerships" },
  { value: "5000+", label: "MT Exported", desc: "Annual Volume" },
  { value: "100%", label: "Quality Compliant", desc: "APEDA & FSSAI Certified" },
];

export const EXPORT_COUNTRIES: ExportCountry[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    code: "AE",
    flag: "https://flagcdn.com/w80/ae.png",
    region: "Middle East",
    ports: ["Jebel Ali (Dubai)", "Port Rashid", "Sharjah Port"],
    topProducts: ["Red Onions", "G9 Bananas", "Green Chilli", "Basmati Rice"],
    transitTimeSea: "3 - 5 Days from JNPT Mumbai",
    transitTimeAir: "4 Hours",
    highlighted: true,
    mapCoords: { x: 61, y: 44 }
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    code: "SA",
    flag: "https://flagcdn.com/w80/sa.png",
    region: "Middle East",
    ports: ["Jeddah Islamic Port", "King Abdulaziz Port (Dammam)"],
    topProducts: ["1121 Basmati Rice", "Pomegranates", "Red Onions", "Spices"],
    transitTimeSea: "6 - 9 Days from JNPT",
    transitTimeAir: "5 Hours",
    highlighted: true,
    mapCoords: { x: 57, y: 46 }
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    code: "LK",
    flag: "https://flagcdn.com/w80/lk.png",
    region: "Asia",
    ports: ["Port of Colombo"],
    topProducts: ["Red Onions", "Dry Red Chilli", "IR64 Rice"],
    transitTimeSea: "2 - 3 Days from Tuticorin/JNPT",
    transitTimeAir: "2 Hours",
    highlighted: true,
    mapCoords: { x: 69, y: 55 }
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    code: "BD",
    flag: "https://flagcdn.com/w80/bd.png",
    region: "Asia",
    ports: ["Chittagong Port", "Mongla Port", "Benapole Land Border"],
    topProducts: ["Red Onions", "IR64 Rice", "Green Chilli", "Fresh Fruits"],
    transitTimeSea: "4 - 6 Days (or Overland)",
    transitTimeAir: "2.5 Hours",
    highlighted: true,
    mapCoords: { x: 72, y: 45 }
  },
  {
    id: "nepal",
    name: "Nepal",
    code: "NP",
    flag: "https://flagcdn.com/w80/np.png",
    region: "Asia",
    ports: ["Birgunj ICP", "Bhairahawa ICP (Land Port)"],
    topProducts: ["Rice & Grains", "Fresh Vegetables", "Pomegranates"],
    transitTimeSea: "Overland Logistics (2-4 Days)",
    transitTimeAir: "1.5 Hours",
    highlighted: true,
    mapCoords: { x: 70, y: 41 }
  },
  {
    id: "malaysia",
    name: "Malaysia",
    code: "MY",
    flag: "https://flagcdn.com/w80/my.png",
    region: "Asia",
    ports: ["Port Klang (Westport/Northport)", "Penang Port", "Tanjung Pelepas"],
    topProducts: ["Red Onions", "G9 Bananas", "Okra", "Basmati Rice"],
    transitTimeSea: "6 - 8 Days from Chennai/JNPT",
    transitTimeAir: "4.5 Hours",
    highlighted: true,
    mapCoords: { x: 77, y: 54 }
  },
  {
    id: "indonesia",
    name: "Indonesia",
    code: "ID",
    flag: "https://flagcdn.com/w80/id.png",
    region: "Asia",
    ports: ["Tanjung Priok (Jakarta)", "Tanjung Perak (Surabaya)"],
    topProducts: ["Dry Red Chilli", "Rice & Grains", "Onions"],
    transitTimeSea: "8 - 11 Days",
    transitTimeAir: "6 Hours",
    highlighted: true,
    mapCoords: { x: 81, y: 60 }
  },
  {
    id: "oman",
    name: "Oman",
    code: "OM",
    flag: "https://flagcdn.com/w80/om.png",
    region: "Middle East",
    ports: ["Port of Sohar", "Port of Salalah", "Sultan Qaboos"],
    topProducts: ["Fresh Vegetables", "G9 Bananas", "Basmati Rice"],
    transitTimeSea: "3 - 5 Days",
    transitTimeAir: "3.5 Hours",
    highlighted: true,
    mapCoords: { x: 62, y: 46 }
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "https://flagcdn.com/w80/ca.png",
    region: "North America",
    ports: ["Port of Vancouver", "Port of Montreal", "Halifax"],
    topProducts: ["Premium 1121 Basmati Rice", "Makhana (Fox Nut)", "G4 Chilli", "Drumsticks"],
    transitTimeSea: "22 - 28 Days",
    transitTimeAir: "18 - 24 Hours",
    highlighted: true,
    mapCoords: { x: 23, y: 27 }
  },
  {
    id: "usa",
    name: "United States of America",
    code: "US",
    flag: "https://flagcdn.com/w80/us.png",
    region: "North America",
    ports: ["Port of New York / New Jersey", "Port of Los Angeles", "Port of Houston", "Savannah"],
    topProducts: ["Basmati Rice (Aged)", "Fox Nuts (Makhana)", "Organic Spices", "Air Shipped Veggies"],
    transitTimeSea: "24 - 30 Days",
    transitTimeAir: "18 - 22 Hours",
    highlighted: true,
    mapCoords: { x: 22, y: 36 }
  },
  {
    id: "guyana",
    name: "Guyana",
    code: "GY",
    flag: "https://flagcdn.com/w80/gy.png",
    region: "Others",
    ports: ["Port of Georgetown"],
    topProducts: ["Rice & Grains", "Spices", "Processed Agrico"],
    transitTimeSea: "30 - 35 Days",
    transitTimeAir: "26 Hours",
    highlighted: true,
    mapCoords: { x: 34, y: 52 }
  },
  {
    id: "qatar",
    name: "Qatar",
    code: "QA",
    flag: "https://flagcdn.com/w80/qa.png",
    region: "Middle East",
    ports: ["Hamad Port (Doha)"],
    topProducts: ["Fresh Fruits & Vegetables", "Basmati Rice", "Table Grapes"],
    transitTimeSea: "4 - 6 Days",
    transitTimeAir: "4 Hours",
    highlighted: true,
    mapCoords: { x: 60, y: 44 }
  },
  {
    id: "kuwait",
    name: "Kuwait",
    code: "KW",
    flag: "https://flagcdn.com/w80/kw.png",
    region: "Middle East",
    ports: ["Shuwaikh Port", "Shuaiba Port"],
    topProducts: ["Basmati Rice", "Red Onions", "Bhagwa Pomegranates"],
    transitTimeSea: "5 - 7 Days",
    transitTimeAir: "4.5 Hours",
    highlighted: true,
    mapCoords: { x: 59, y: 42 }
  },
  {
    id: "bahrain",
    name: "Bahrain",
    code: "BH",
    flag: "https://flagcdn.com/w80/bh.png",
    region: "Middle East",
    ports: ["Khalifa Bin Salman Port (KBSP)"],
    topProducts: ["Fresh Vegetables", "Bananas", "Rice & Grains"],
    transitTimeSea: "4 - 6 Days",
    transitTimeAir: "4 Hours",
    highlighted: true,
    mapCoords: { x: 60, y: 43 }
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "https://flagcdn.com/w80/sg.png",
    region: "Asia",
    ports: ["Port of Singapore (PSA / Jurong)"],
    topProducts: ["Air Cargo Fresh Veggies", "G9 Bananas", "Basmati Rice"],
    transitTimeSea: "5 - 7 Days",
    transitTimeAir: "5 Hours",
    highlighted: true,
    mapCoords: { x: 78, y: 56 }
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    flag: "https://flagcdn.com/w80/gb.png",
    region: "Europe",
    ports: ["Port of Felixstowe", "London Gateway", "Southampton"],
    topProducts: ["Table Grapes", "Basmati Rice", "Makhana", "Fresh Chillies"],
    transitTimeSea: "18 - 22 Days",
    transitTimeAir: "10 Hours",
    highlighted: true,
    mapCoords: { x: 47, y: 27 }
  },
  {
    id: "netherlands",
    name: "Netherlands",
    code: "NL",
    flag: "https://flagcdn.com/w80/nl.png",
    region: "Europe",
    ports: ["Port of Rotterdam (Gateway to Europe)"],
    topProducts: ["Table Grapes", "Pomegranates", "G9 Bananas", "Spices"],
    transitTimeSea: "19 - 23 Days",
    transitTimeAir: "10.5 Hours",
    highlighted: true,
    mapCoords: { x: 49, y: 27 }
  },
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    flag: "https://flagcdn.com/w80/de.png",
    region: "Europe",
    ports: ["Port of Hamburg", "Bremerhaven"],
    topProducts: ["Organic Spices", "Basmati Rice", "Superfoods"],
    transitTimeSea: "20 - 24 Days",
    transitTimeAir: "11 Hours",
    highlighted: true,
    mapCoords: { x: 51, y: 28 }
  }
];

/** JNPT / Nhava Sheva (Mumbai) — primary export hub */
export const INDIA_ORIGIN: [number, number] = [72.948, 18.949];

/** Natural Earth ISO numeric id + main seaport [lng, lat] */
export const COUNTRY_GEO: Record<string, { iso: string; lngLat: [number, number] }> = {
  uae: { iso: '784', lngLat: [55.027, 24.987] },
  'saudi-arabia': { iso: '682', lngLat: [39.163, 21.485] },
  'sri-lanka': { iso: '144', lngLat: [79.851, 6.941] },
  bangladesh: { iso: '050', lngLat: [91.797, 22.326] },
  nepal: { iso: '524', lngLat: [85.324, 27.012] },
  malaysia: { iso: '458', lngLat: [101.392, 2.999] },
  indonesia: { iso: '360', lngLat: [106.891, -6.104] },
  oman: { iso: '512', lngLat: [56.745, 24.364] },
  canada: { iso: '124', lngLat: [-123.111, 49.289] },
  usa: { iso: '840', lngLat: [-74.141, 40.668] },
  guyana: { iso: '328', lngLat: [-58.167, 6.807] },
  qatar: { iso: '634', lngLat: [51.608, 25.017] },
  kuwait: { iso: '414', lngLat: [47.936, 29.352] },
  bahrain: { iso: '048', lngLat: [50.615, 26.198] },
  singapore: { iso: '702', lngLat: [103.754, 1.264] },
  'united-kingdom': { iso: '826', lngLat: [1.351, 51.964] },
  netherlands: { iso: '528', lngLat: [4.482, 51.904] },
  germany: { iso: '276', lngLat: [9.966, 53.546] },
};

export const INDIA_ISO = '356';
