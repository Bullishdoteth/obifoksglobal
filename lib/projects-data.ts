export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  location: string;
  cityState: string;
  category: "industrial" | "commercial" | "agricultural";
  categoryLabel: string;
  batteryCapacity: string;
  solarPanels: string;
  panelCount?: number;
  systemType: string;
  description: string;
  highlights: string[];
  technicalSpecs: { label: string; value: string }[];
  operationalImpact: string;
}

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "industrial", label: "Industrial & Manufacturing" },
  { id: "commercial", label: "Commercial & Fuel Stations" },
  { id: "agricultural", label: "Agricultural & Farms" },
] as const;

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "foks-water-company",
    slug: "foks-water-company-irete-owerri",
    title: "Foks Water Company Industrial Solar System",
    clientName: "Foks Water Company",
    location: "Irete, Owerri",
    cityState: "Imo State, Nigeria",
    category: "industrial",
    categoryLabel: "Industrial & Manufacturing",
    batteryCapacity: "100 kWh Battery Storage",
    solarPanels: "100 Monocrystalline Panels",
    panelCount: 100,
    systemType: "Heavy-Duty Industrial Solar & Battery System",
    description:
      "A high-capacity industrial solar power plant powering water extraction pumps, multi-stage reverse osmosis filtration units, automatic bottling lines, and cold storage operations.",
    highlights: [
      "100 kWh long-life lithium battery energy storage system",
      "100 high-efficiency monocrystalline solar panels array",
      "Zero power interruption for high-demand industrial water pumps",
      "Over 75% reduction in monthly factory energy expenses",
    ],
    technicalSpecs: [
      { label: "Battery Capacity", value: "100 kWh LiFePO4 Lithium Storage" },
      { label: "Solar Panel Array", value: "100 Monocrystalline Solar Panels" },
      { label: "Primary Application", value: "Water Extraction, Purification & Bottling" },
      { label: "Location", value: "Irete, Owerri, Imo State" },
      { label: "Operational Mode", value: "24/7 Uninterrupted Industrial Supply" },
    ],
    operationalImpact:
      "Eliminated daytime generator reliance for heavy water processing machinery while maintaining constant voltage protection for sensitive filtration equipment.",
  },
  {
    id: "foks-nylon-company",
    slug: "foks-nylon-company-irete-owerri",
    title: "Foks Nylon Factory Heavy Industrial Solar Plant",
    clientName: "Foks Nylon Company",
    location: "Irete, Owerri",
    cityState: "Imo State, Nigeria",
    category: "industrial",
    categoryLabel: "Industrial & Manufacturing",
    batteryCapacity: "100 kWh Battery Storage",
    solarPanels: "100 Monocrystalline Panels",
    panelCount: 100,
    systemType: "Heavy Industrial Solar & Lithium Storage",
    description:
      "Engineered off-grid solar power plant powering polymer extrusion machines, blow-molding equipment, automatic cutters, and factory floor operations.",
    highlights: [
      "100 kWh high-discharge industrial lithium battery bank",
      "100 high-wattage solar panel roof installation",
      "Instantaneous auto-switch preventing machine thermal dropouts",
      "Substantial reduction in factory diesel fuel consumption",
    ],
    technicalSpecs: [
      { label: "Battery Capacity", value: "100 kWh Industrial Lithium Battery" },
      { label: "Solar Panel Array", value: "100 Monocrystalline Panels" },
      { label: "Primary Application", value: "Nylon Extrusion & Plastic Manufacturing" },
      { label: "Location", value: "Irete, Owerri, Imo State" },
      { label: "Inverter Topology", value: "Heavy-Duty Hybrid Industrial Inverters" },
    ],
    operationalImpact:
      "Prevents raw material wastage caused by sudden grid failure during plastic extrusion processes, ensuring continuous high-output manufacturing.",
  },
  {
    id: "mrs-fuelling-station",
    slug: "mrs-fuelling-station-owerri",
    title: "MRS Fuelling Station Solar Backup Project",
    clientName: "MRS Fuelling Station",
    location: "Owerri",
    cityState: "Imo State, Nigeria",
    category: "commercial",
    categoryLabel: "Commercial & Fuel Stations",
    batteryCapacity: "15 kWh Battery Storage",
    solarPanels: "Commercial Solar Array",
    systemType: "Commercial Fueling Station Backup System",
    description:
      "Commercial-grade solar and lithium battery storage system providing uninterrupted power for fuel dispensing pumps, POS terminals, canopy illumination, and security infrastructure.",
    highlights: [
      "15 kWh high-performance lithium battery storage",
      "High-efficiency commercial solar roof array",
      "Under 10ms seamless auto-switching transfer time",
      "Silent, fume-free night shift energy solution",
    ],
    technicalSpecs: [
      { label: "Battery Capacity", value: "15 kWh Lithium Storage Unit" },
      { label: "Protected Systems", value: "Fuel Dispensers, POS, Canopy & Security" },
      { label: "Location", value: "Owerri, Imo State" },
      { label: "System Response", value: "Instantaneous Auto-Transfer" },
    ],
    operationalImpact:
      "Ensures zero customer downtime at fuel pumps during grid outages while protecting digital billing systems from voltage surges.",
  },
  {
    id: "mint-fueling-station",
    slug: "mint-fueling-station-owerri",
    title: "Mint Fueling Station Solar System",
    clientName: "Mint Fueling Station",
    location: "Owerri",
    cityState: "Imo State, Nigeria",
    category: "commercial",
    categoryLabel: "Commercial & Fuel Stations",
    batteryCapacity: "20 kWh Battery Storage",
    solarPanels: "Commercial Solar Array",
    systemType: "High-Output Commercial Solar Solution",
    description:
      "Custom 20 kWh commercial energy storage and solar system built for continuous petroleum dispensing, office administration, and retail convenience operations.",
    highlights: [
      "20 kWh advanced lithium energy storage bank",
      "High-output commercial solar panel array",
      "Powers station pumps, air compressors & office hubs",
      "Drastic reduction in daily generator running hours",
    ],
    technicalSpecs: [
      { label: "Battery Capacity", value: "20 kWh Lithium Energy Storage" },
      { label: "Solar System", value: "Commercial Roof-Mounted Solar Panels" },
      { label: "Primary Application", value: "Fuel Dispensing & Retail Store Operations" },
      { label: "Location", value: "Owerri, Imo State" },
    ],
    operationalImpact:
      "Maintains uninterrupted cashier services and dispensing speed during high-volume rush hours regardless of local grid instability.",
  },
  {
    id: "gigas-fueling-station",
    slug: "gigas-fueling-station-owerri",
    title: "Gigas Fueling Station Commercial Solar Setup",
    clientName: "Gigas Fueling Station",
    location: "Owerri",
    cityState: "Imo State, Nigeria",
    category: "commercial",
    categoryLabel: "Commercial & Fuel Stations",
    batteryCapacity: "15 kWh Battery Storage",
    solarPanels: "Commercial Solar Array",
    systemType: "Commercial Solar Power Installation",
    description:
      "Reliable clean energy installation empowering station pumps, electronic payment systems, and safety lighting with 24/7 continuous electricity.",
    highlights: [
      "15 kWh long-cycle lithium battery module",
      "Robust commercial solar collector array",
      "Constant power for station lighting and pumps",
      "Eliminates noisy generator operation during business hours",
    ],
    technicalSpecs: [
      { label: "Battery Capacity", value: "15 kWh Lithium Battery System" },
      { label: "Solar Setup", value: "Commercial High-Efficiency Solar Panel Array" },
      { label: "Location", value: "Owerri, Imo State" },
      { label: "Applications", value: "Petroleum Dispensers & Station Infrastructure" },
    ],
    operationalImpact:
      "Delivers clean, reliable energy for daily commercial operations, lowering maintenance costs and extending pump lifespan.",
  },
  {
    id: "chuk-poultry-farm",
    slug: "chuk-poultry-farm-owerri",
    title: "Chuk Poultry Farm Solar Power System",
    clientName: "Chuk Poultry Farm",
    location: "Owerri",
    cityState: "Imo State, Nigeria",
    category: "agricultural",
    categoryLabel: "Agricultural & Farms",
    batteryCapacity: "15 kWh Battery Storage",
    solarPanels: "Agricultural Solar Array",
    systemType: "Agricultural Clean Energy Installation",
    description:
      "Specialised solar power system engineered to run automated feed distribution lines, climate ventilation fans, water delivery pumps, and egg preservation units.",
    highlights: [
      "15 kWh heavy-duty lithium energy storage unit",
      "High-durability solar panel installation",
      "Constant climate regulation & cooling protection for livestock",
      "100% quiet green power for farm environment",
    ],
    technicalSpecs: [
      { label: "Battery Capacity", value: "15 kWh Lithium Iron Phosphate Unit" },
      { label: "Primary Application", value: "Automated Feeding, Ventilation & Water Pumping" },
      { label: "Location", value: "Owerri, Imo State" },
      { label: "Target Sector", value: "Poultry & Agricultural Infrastructure" },
    ],
    operationalImpact:
      "Guarantees unbroken ventilation and water supply to protect poultry stock from extreme heat stress during prolonged power outages.",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug || p.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS_DATA.map((p) => p.slug);
}

