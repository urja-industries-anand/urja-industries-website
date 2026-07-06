import productsPhoto from "../assets/photos/products.jpeg";
import buildingPhoto from "../assets/photos/urja_building.jpeg";
import teamPhoto from "../assets/photos/team.jpeg";
import heatPumpPhoto from "../assets/photos/heat-pump.png";
import gasFiredPhoto from "../assets/photos/gas-fired-wh.jpeg";
import woodFiredPhoto from "../assets/photos/wood-fired-wh.png";
import commercialHpPhoto from "../assets/photos/Commercial-hp.png";
import ProductHero from "../components/ProductHero";
import ProductRow from "../components/ProductRow";
import ProductApplications from "../components/ProductApplications";
import manufacturingPhoto from "../assets/photos/manufacturing.jpeg";
import hotelPhoto from "../assets/photos/hotels-and-resorts.jpeg";
import healthcarePhoto from "../assets/photos/hospital-and-healthcare.jpg";
function ManufacturingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <path
        d="M3 21V10l6 4v-4l6 4v-4l6 4v7H3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HotelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HealthcareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 8v8M8 12h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// NOTE: specs below are real manufacturer data for Heat Pump WH only.
// Gas-Fired, Wood-Fired, and Commercial Heat Pump specs are realistic
// placeholders — replace with actual data sheets before launch.

const heatPumpSpecs = [
  {
    parameter: "Heating Capacity",
    value: "10 kW – 150 kW (Customizable per industrial requirement)",
  },
  {
    parameter: "Coefficient of Performance (COP)",
    value: "Up to 4.5 (Highly Energy Efficient)",
    highlight: true,
  },
  { parameter: "Max Output Temperature", value: "60°C to 80°C" },
  {
    parameter: "Compressor Type",
    value: "Heavy-Duty Scroll / Screw (Brand specific options available)",
  },
  { parameter: "Power Supply", value: "415V / 3Ph / 50Hz" },
];

const gasFiredSpecs = [
  { parameter: "Heating Capacity", value: "5,000 – 50,000 kcal/hr" },
  { parameter: "Fuel Type", value: "LPG / PNG (dual-fuel option available)" },
  { parameter: "Thermal Efficiency", value: "Up to 90%", highlight: true },
  { parameter: "Max Output Temperature", value: "65°C to 85°C" },
  {
    parameter: "Ignition",
    value: "Automatic Electronic Ignition with Flame Failure Safety",
  },
];

const woodFiredSpecs = [
  { parameter: "Tank Capacity", value: "200 – 2,000 Litres" },
  { parameter: "Fuel Type", value: "Firewood / Agro-Waste Briquettes" },
  {
    parameter: "Heat Retention",
    value: "Double-layer insulated jacket",
    highlight: true,
  },
  { parameter: "Max Output Temperature", value: "70°C to 90°C" },
  {
    parameter: "Construction",
    value: "Stainless Steel Inner Tank, MS Outer Body",
  },
];

const commercialHpSpecs = [
  {
    parameter: "Heating Capacity",
    value: "50 kW – 500 kW (Multi-unit cascade available)",
  },
  {
    parameter: "Coefficient of Performance (COP)",
    value: "Up to 4.8 at rated conditions",
    highlight: true,
  },
  {
    parameter: "Refrigerant",
    value: "R32 / R410A (Low-GWP options available)",
  },
  { parameter: "Operating Ambient Range", value: "-15°C to 43°C" },
  { parameter: "Power Supply", value: "415V / 3Ph / 50Hz" },
];

const applications = [
  {
    name: "Manufacturing Plants",
    description:
      "Process heating, boiler feed water pre-heating, and employee facility hot water management.",
    image: manufacturingPhoto,
    icon: <ManufacturingIcon />,
  },
  {
    name: "Hotels & Resorts",
    description:
      "Centralized domestic hot water systems for guest rooms, laundry facilities, and large pool heating.",
    image: hotelPhoto,
    icon: <HotelIcon />,
  },
  {
    name: "Hospitals & Healthcare",
    description:
      "Reliable, sanitary hot water generation for sterilization processes, patient care, and general facility use.",
    image: healthcarePhoto,
    icon: <HealthcareIcon />,
  },
];

function ProductDetails() {
  return (
    <main>
      <ProductHero
        image={{ src: productsPhoto, alt: "Urja Industries product range" }}
        badge="Product Range"
        title="Industrial Heating Solutions"
        description="Four engineered product lines built for demanding industrial and commercial environments — from heat pump and gas-fired systems to wood-fired and large-scale commercial installations, each delivering reliable performance and measurable energy efficiency."
        primaryCta={{ label: "Request Pricing →", href: "#" }}
        secondaryCta={{ label: "↓ Tech Specs", href: "#" }}
      />

      <div className="bg-surface-container-lowest divide-y divide-outline-variant">
        <ProductRow
          image={{
            src: heatPumpPhoto,
            alt: "Industrial Heat Pump Water Heater",
            fit: "contain",
          }}
          badge="High Efficiency Series"
          title="Heat Pump Water Heater"
          description="Advanced heat pump technology delivers significant energy savings, providing centralized hot water with exceptional reliability and a maximized Coefficient of Performance (COP)."
          chips={[
            { label: "In Stock", tone: "stock" },
            { label: "High Efficiency", tone: "efficiency" },
          ]}
          specRows={heatPumpSpecs}
          cta={{ label: "Request Pricing →", href: "#" }}
        />

        <ProductRow
          image={{
            src: gasFiredPhoto,
            alt: "Industrial Gas-Fired Water Heater",
            fit: "contain",
          }}
          reverse
          badge="Rapid Recovery Series"
          title="Gas-Fired Water Heater"
          description="High-throughput gas combustion delivers fast recovery and consistent output temperature for facilities with high-volume, on-demand hot water needs."
          chips={[
            { label: "In Stock", tone: "stock" },
            { label: "Heavy-Duty", tone: "duty" },
          ]}
          specRows={gasFiredSpecs}
          cta={{ label: "Request Pricing →", href: "#" }}
        />

        <ProductRow
          image={{
            src: woodFiredPhoto,
            alt: "Industrial Wood-Fired Water Heater",
            fit: "contain",
          }}
          badge="Sustainable Series"
          title="Wood-Fired Water Heater"
          description="A rugged, low-operating-cost system for sites with access to firewood or agro-waste fuel — built for long service life with minimal maintenance."
          chips={[
            { label: "Heavy-Duty", tone: "duty" },
            { label: "Low Operating Cost", tone: "efficiency" },
          ]}
          specRows={woodFiredSpecs}
          cta={{ label: "Request Pricing →", href: "#" }}
        />

        <ProductRow
          image={{
            src: commercialHpPhoto,
            alt: "Commercial Heat Pump Installation",
            fit: "cover",
          }}
          reverse
          badge="Commercial Scale"
          title="Commercial Heat Pump"
          description="Engineered for large-scale commercial and multi-site deployments, with cascade-ready units that scale output while holding a high COP across a wide ambient range."
          chips={[
            { label: "High Efficiency", tone: "efficiency" },
            { label: "Scalable", tone: "stock" },
          ]}
          specRows={commercialHpSpecs}
          cta={{ label: "Request Pricing →", href: "#" }}
        />
      </div>

      <ProductApplications
        heading="Primary Applications"
        description="Designed to integrate seamlessly into large-scale commercial and industrial operations requiring consistent, high-volume hot water."
        applications={applications}
      />
    </main>
  );
}

export default ProductDetails;
