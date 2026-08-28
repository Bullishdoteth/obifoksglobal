export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  heroImage?: string;
  keyFeatures: string[];
  specs: { label: string; value: string }[];
  targetAudience: string[];
  benefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "residential-solar",
    slug: "residential-solar",
    title: "Residential Solar",
    subtitle: "24/7 Clean Energy for Your Home & Family",
    shortDesc: "Uninterrupted, noiseless, cost-saving solar power systems custom-sized for homes and residential estates.",
    fullDesc: "Eliminate reliance on unreliable grid power and noisy fuel generators. Our residential solar solutions are engineered with premium high-efficiency solar panels, hybrid smart inverters, and long-lasting lithium batteries to provide continuous, clean power for all your household appliances.",
    iconName: "Home",
    badge: "Popular for Homes",
    keyFeatures: [
      "Zero noise & zero fuel expenses",
      "Seamless auto-switching (under 10ms transfer time)",
      "High-efficiency Tier-1 Mono PERC / N-Type solar panels",
      "Modular LiFePO4 battery storage expandable anytime",
      "Smart mobile app monitoring for real-time power metrics",
      "Surge protection and voltage stabilization for sensitive home electronics",
    ],
    specs: [
      { label: "Recommended Capacity", value: "3.5kVA - 15kVA Systems" },
      { label: "Battery Technology", value: "Lithium Iron Phosphate (LiFePO4)" },
      { label: "Expected Lifespan", value: "25+ Years (Panels) / 10+ Years (Batteries)" },
      { label: "Typical Payback Period", value: "2 - 3 Years vs Diesel/Petrol" },
    ],
    targetAudience: [
      "Single-family houses & duplexes",
      "Residential estates & gated communities",
      "Apartments & rented flats",
      "Home offices & remote workers",
    ],
    benefits: [
      {
        title: "Substantial Cost Savings",
        desc: "Save up to 80% on monthly generator fuel costs and electricity tariffs.",
      },
      {
        title: "Peace & Tranquility",
        desc: "Enjoy quiet nights with silent inverter operation and zero toxic generator fumes.",
      },
      {
        title: "Property Value Increase",
        desc: "Equipping your property with solar power instantly boosts its rental and resale market value.",
      },
    ],
    faqs: [
      {
        question: "Can a residential solar system power my air conditioner and refrigerator?",
        answer: "Yes! Our 5kVA to 10kVA residential systems are specifically calibrated to power heavy load appliances including inverter air conditioners, refrigerators, water pumps, washing machines, and home entertainment setups.",
      },
      {
        question: "How long will the lithium battery backup last at night?",
        answer: "Depending on your battery capacity sizing (e.g. 5kWh to 15kWh), our LiFePO4 batteries are designed to comfortably power your essential home loads through the night.",
      },
    ],
  },
  {
    id: "commercial-solar",
    slug: "commercial-solar",
    title: "Commercial Solar",
    subtitle: "Scale Business Operations & Cut Overhead Costs",
    shortDesc: "High-efficiency commercial PV setups designed to slash utility bills and fuel costs for offices, shops, and plazas.",
    fullDesc: "Power your business profitability with Obifoks Global commercial solar infrastructure. Unreliable electricity leads to lost productivity and exorbitant generator fuel expenses. Our commercial systems provide guaranteed uptime, predictable energy costs, and a greener brand footprint.",
    iconName: "Building2",
    badge: "Business Growth",
    keyFeatures: [
      "Daytime load offsetting to maximize solar self-consumption",
      "Three-phase and single-phase heavy commercial inverter options",
      "Peak shaving & intelligent load management to lower demand charges",
      "Remote fleet monitoring & enterprise maintenance SLAs",
      "Scalable roof & ground mount solar racking",
    ],
    specs: [
      { label: "Recommended Capacity", value: "15kVA - 100kVA setups" },
      { label: "Inverter Topology", value: "Three-Phase Hybrid & Grid-Tied Inverters" },
      { label: "System Efficiency", value: "98.4% Peak Inverter Efficiency" },
      { label: "Warranty", value: "10-Year Workmanship & 25-Year Panel Output" },
    ],
    targetAudience: [
      "Commercial office buildings & business hubs",
      "Shopping plazas, supermarkets & retail stores",
      "Hospitals, clinics & diagnostic centers",
      "Schools, universities & training institutes",
      "Hotels, lounges & event centers",
    ],
    benefits: [
      {
        title: "Operational Cost Reduction",
        desc: "Dramatically lower your daily operational expenditure by cutting diesel consumption by up to 85%.",
      },
      {
        title: "Uninterrupted Business Continuity",
        desc: "Ensure continuous office productivity without downtime or computer reboots during power grid outages.",
      },
      {
        title: "Sustainability & ESG Compliance",
        desc: "Demonstrate environmental responsibility and meet corporate sustainability targets with clean solar energy.",
      },
    ],
    faqs: [
      {
        question: "Can we install commercial solar without disrupting our daily operations?",
        answer: "Absolutely. Our engineering team conducts installation during scheduled low-traffic hours or weekends, ensuring seamless cutovers with zero operational downtime.",
      },
      {
        question: "What is the return on investment (ROI) for commercial solar?",
        answer: "Most commercial clients achieve full capital ROI within 18 to 28 months through direct fuel savings and grid tariff avoidance.",
      },
    ],
  },
  {
    id: "industrial-solar",
    slug: "industrial-solar",
    title: "Industrial Solar",
    subtitle: "Heavy-Duty Power Microgrids for Manufacturing & Agro-Plants",
    shortDesc: "Megawatt-capacity solar microgrids engineered for factories, processing plants, cold storage, and heavy industrial facilities.",
    fullDesc: "Industrial production demands robust, uninterrupted heavy power. Obifoks Global engineers bespoke high-voltage industrial solar systems and hybrid microgrids. Engineered to handle high inductive motor loads, heavy machinery, and continuous 24/7 manufacturing shifts.",
    iconName: "Factory",
    badge: "Heavy Duty Megawatts",
    keyFeatures: [
      "High-voltage DC architecture for low transmission losses",
      "Containerized battery energy storage systems (BESS)",
      "Automated generator synchronization & fuel saver controllers",
      "Harmonic suppression & power factor correction",
      "24/7 SOC monitoring and predictive maintenance analytics",
    ],
    specs: [
      { label: "Recommended Capacity", value: "100kVA - 1MW+ Microgrids" },
      { label: "Storage Capacity", value: "Up to 2MWh BESS Containers" },
      { label: "Grid Integration", value: "Grid-Tied, Off-Grid, & Generator Hybrid" },
      { label: "Monitoring", value: "SCADA & Industrial IoT Cloud Dashboard" },
    ],
    targetAudience: [
      "Factories & manufacturing plants",
      "Agricultural processing plants & cold rooms",
      "Mining & quarrying facilities",
      "Water treatment facilities",
      "Logistics warehouses & industrial parks",
    ],
    benefits: [
      {
        title: "Predictable Power Expenses",
        desc: "Lock in fixed energy costs for 25+ years and insulate your business from rising diesel prices.",
      },
      {
        title: "Generator Lifespan Extension",
        desc: "Reduce heavy generator run-hours by over 70%, drastically extending generator maintenance intervals.",
      },
      {
        title: "Custom Industrial Engineering",
        desc: "Designed specifically to absorb high motor in-rush currents without voltage sags or trips.",
      },
    ],
    faqs: [
      {
        question: "Can your industrial solar handle heavy motor startup currents?",
        answer: "Yes. We utilize high-surge industrial inverters and smart soft-starters designed specifically to handle heavy inductive motor starting currents.",
      },
      {
        question: "Do you offer energy audits before designing industrial systems?",
        answer: "Yes, our certified power engineers perform comprehensive site load logging, power quality audits, and roof structure assessments prior to system design.",
      },
    ],
  },
  {
    id: "energy-storage",
    slug: "energy-storage",
    title: "Energy Storage",
    subtitle: "High-Density Lithium-Ion & LiFePO4 Storage Systems",
    shortDesc: "Next-generation Lithium Iron Phosphate battery banks offering high depth of discharge and 6,000+ lifecycle guarantees.",
    fullDesc: "Unlock full energy independence with Obifoks Global advanced energy storage solutions. Featuring premium Lithium Iron Phosphate (LiFePO4) chemistry, smart Battery Management Systems (BMS), and wall/rack mounted modular expansion for home, commercial, and utility applications.",
    iconName: "BatteryCharging",
    badge: "LiFePO4 Tech",
    keyFeatures: [
      "6,000+ Deep Cycle lifecycles at 80%+ Depth of Discharge (DoD)",
      "Built-in Intelligent BMS with multi-layer temperature & voltage protection",
      "Modular design for easy rack and wall-mount expansion",
      "High thermal stability & zero risk of thermal runaway",
      "Compatible with major hybrid inverter brands (Felicity, Victron, Deye, Growatt, Luxpower)",
    ],
    specs: [
      { label: "Chemistry", value: "Lithium Iron Phosphate (LiFePO4)" },
      { label: "Nominal Voltages", value: "25.6V, 51.2V, 102.4V, 512V High-Voltage" },
      { label: "Cycle Life", value: "6,000 Cycles @ 25°C" },
      { label: "BMS Protection", value: "Overcharge, Overdischarge, Short Circuit, Thermal" },
    ],
    targetAudience: [
      "Solar system upgrades replacing old gel/tubular batteries",
      "Off-grid homes & telecommunication towers",
      "Commercial backup power infrastructure",
      "Emergency power backup for server rooms & datacenters",
    ],
    benefits: [
      {
        title: "Longest Lifespan in Class",
        desc: "Lasts 3x to 5x longer than traditional tubular or gel batteries, offering unmatched lifetime value.",
      },
      {
        title: "Rapid Charging Speed",
        desc: "Fully recharges in 2 to 3 hours under solar power or grid AC supply.",
      },
      {
        title: "Space-Saving & Clean",
        desc: "Compact, sleek wall-mountable and rack cabinet enclosures with no acid fumes or maintenance.",
      },
    ],
    faqs: [
      {
        question: "Can I replace my old lead-acid/gel batteries with LiFePO4 lithium batteries?",
        answer: "Yes! LiFePO4 batteries seamlessly retrofit existing solar installations, dramatically increasing usable energy and system efficiency.",
      },
      {
        question: "What warranty comes with Obifoks Global lithium energy storage systems?",
        answer: "Our lithium battery solutions come with up to 5-Year to 10-Year manufacturer warranties and dedicated local technical support.",
      },
    ],
  },
  {
    id: "security-and-cctv",
    slug: "security-and-cctv",
    title: "Security & CCTV",
    subtitle: "24/7 Off-Grid Security Surveillance & Smart Cameras",
    shortDesc: "Solar-powered IP CCTV systems, 4G PTZ smart cameras, and continuous remote security monitoring for all locations.",
    fullDesc: "Protect your property and assets 24/7 without worrying about power cuts or internet availability. Obifoks Global delivers self-powered solar CCTV surveillance setups equipped with HD night vision, human motion detection, 4G cellular data connectivity, and remote mobile viewing.",
    iconName: "ShieldCheck",
    badge: "Smart Security",
    keyFeatures: [
      "Independent solar powered camera poles with integrated lithium battery",
      "4G LTE SIM card capability for remote areas without Wi-Fi",
      "High Definition (4MP/8MP 4K) resolution with color night vision",
      "AI human & vehicle detection with instant mobile push notifications",
      "Two-way audio intercom and strobe light deterrence alarm",
      "Weatherproof IP66/IP67 rated enclosures built for harsh environments",
    ],
    specs: [
      { label: "Camera Resolutions", value: "1080p, 4MP, 8MP 4K Ultra HD" },
      { label: "Connectivity Options", value: "4G LTE Cellular, Wi-Fi, Ethernet, Solar Mesh" },
      { label: "Night Vision", value: "Full-Color IR LED & Laser Spotlight up to 50m" },
      { label: "Battery Autonomy", value: "3 - 5 Rainy Days Continuous Operation" },
    ],
    targetAudience: [
      "Residential estates & private compounds",
      "Remote farm lands & agricultural sites",
      "Construction sites & industrial yards",
      "Highways, street security & remote infrastructure",
      "Commercial plazas & parking lots",
    ],
    benefits: [
      {
        title: "Zero Electrical Wiring Required",
        desc: "Deploy cameras anywhere—even in remote fields—without running expensive power cables.",
      },
      {
        title: "Continuous 24/7 Recording",
        desc: "Solar and built-in lithium backup ensure surveillance never stops during grid blackouts.",
      },
      {
        title: "Real-Time Mobile Monitoring",
        desc: "Watch live feeds, play back recorded video, and receive alert notifications anywhere on your phone.",
      },
    ],
    faqs: [
      {
        question: "Do the solar cameras work when it rains or during cloudy weather?",
        answer: "Yes, our solar cameras include high-capacity internal batteries engineered to operate continuously for up to 5 cloudy/rainy days without direct sunlight.",
      },
      {
        question: "Can I view camera feeds remotely on my smartphone?",
        answer: "Yes! Using our Android/iOS mobile application, you can view live video feeds, control PTZ camera movement, and receive motion triggers worldwide.",
      },
    ],
  },
  {
    id: "solar-lighting",
    slug: "solar-lighting",
    title: "Solar Lighting",
    subtitle: "High-Lumen Street Lights, Perimeter & Outdoor Lighting",
    shortDesc: "All-in-one and split solar street lights, floodlights, and autonomous perimeter illumination for public & private spaces.",
    fullDesc: "Illuminate streets, compounds, walkways, and industrial perimeters with zero electricity bills. Obifoks Global supplies high-lumen solar outdoor lighting solutions engineered with high-efficiency monocrystalline panels, dusk-to-dawn sensors, microwave motion detectors, and durable IP65+ enclosures.",
    iconName: "SunMedium",
    badge: "Eco Lighting",
    keyFeatures: [
      "All-in-One integrated and Split-Type high lumen street lights",
      "Automatic dusk-to-dawn sensor with intelligent dimming control",
      "Microwave radar motion sensor for energy conservation",
      "High-lumen Bridgelux / Philips LED chips with 180lm/W efficacy",
      "Die-cast aluminum alloy housing with IP65 water & dust proofing",
    ],
    specs: [
      { label: "Power Ratings", value: "60W, 100W, 200W, 300W, 500W LED" },
      { label: "Lumen Output", value: "Up to 15,000+ Lumens" },
      { label: "Battery Autonomy", value: "12-14 Hours Per Night (3+ Rainy Days Autonomy)" },
      { label: "Mounting Heights", value: "4m to 12m Poles" },
    ],
    targetAudience: [
      "Municipalities, state roads & highway lighting",
      "Residential estates & street developments",
      "Schools, hospitals & university campuses",
      "Factory perimeters & parking lots",
      "Private gardens, parks & walkways",
    ],
    benefits: [
      {
        title: "Zero Electricity Bills",
        desc: "100% solar powered outdoor lighting eliminates monthly electricity tariffs completely.",
      },
      {
        title: "Automated Hands-Free Operation",
        desc: "Turns on automatically at sunset and switches off at dawn with dynamic radar dimming.",
      },
      {
        title: "Rapid Installation",
        desc: "Mount directly onto poles or walls without trenching, wiring, or electrical connections.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between All-in-One and Split Solar Street Lights?",
        answer: "All-in-One lights integrate the panel, battery, LED lamp, and controller into a single compact fixture. Split lights have separate, larger solar panels mounted on top for maximum sun harvesting in heavy wattage requirements.",
      },
      {
        question: "How long do the LEDs and solar batteries last?",
        answer: "Our LED chips have a rating of 50,000+ hours, and the built-in LiFePO4 batteries provide over 5-8 years of reliable nightly operation.",
      },
    ],
  },
];
