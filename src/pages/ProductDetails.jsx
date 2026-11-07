import { useEffect, useRef, useState } from "react";
import productsPhoto from "../assets/photos/products.jpeg";
import gasFiredPhoto from "../assets/photos/gas-fired-wh.jpeg";
import woodFiredPhoto from "../assets/photos/wood-fired-wh.png";
import ProductHero from "../components/ProductHero";
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const products = [
  {
    id: "gas-fired-water-heater",
    name: "Gas-Fired Water Heater",
    category: "Continuous Hot Water",
    image: gasFiredPhoto,
    imageAlt: "Urja gas-fired water heater",
    summary:
      "A centralized gas-fired system engineered to keep hot water available around the clock.",
    features: [
      "24/7 hot water supply",
      "No need to install separate geysers or individual gas lines for each bathroom",
      "Hot water at a pre-set temperature, 24 hours a day",
      "No need for repeatedly firing or extinguishing the burner",
    ],
  },
  {
    id: "wood-fired-water-heater",
    name: "Wood-Fired Water Heater",
    category: "Eco-Friendly Heating",
    image: woodFiredPhoto,
    imageAlt: "Urja wood-fired water heater",
    summary:
      "A robust thermosyphon-based system that delivers efficient water heating with minimal wood.",
    features: [
      "Engineered on the thermosyphon principle for efficient heat delivery with minimal wood",
      "Eco-friendly water heating without electricity, gas, or fossil fuel",
      "Zero maintenance cost",
      "IS 2062/226 mild-steel body tank",
      "Anti-corrosive layer that helps prevent corrosion and fungal growth",
      "Honey-blanket glass-wool insulation retains heat for an extended period",
    ],
  },
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

function ProductCard({ product, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      className="group h-[430px] w-full cursor-pointer text-left [perspective:1200px] focus:outline-none"
      aria-label={`Open details for ${product.name}`}
    >
      <span className="relative block h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] motion-reduce:transition-none">
        <span
          className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-sm transition-shadow group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-4 [backface-visibility:hidden]"
          aria-hidden="true"
        >
          <span className="relative block h-64 overflow-hidden bg-surface-container-low">
            <img
              src={product.image}
              alt=""
              className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-5 top-5 rounded-sm bg-primary px-3 py-1.5 font-technical text-[11px] uppercase tracking-[0.08em] text-on-primary">
              {product.category}
            </span>
          </span>
          <span className="flex flex-1 flex-col p-6 sm:p-7">
            <span className="font-heading text-xl font-600 text-on-surface sm:text-2xl">
              {product.name}
            </span>
            <span className="mt-3 font-body text-sm leading-6 text-on-surface-variant">
              {product.summary}
            </span>
            <span className="mt-auto flex items-center gap-2 pt-4 font-body text-sm font-600 text-primary">
              Hover to preview <ArrowIcon />
            </span>
          </span>
        </span>

        <span
          className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-primary bg-primary p-6 text-on-primary shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8"
          aria-hidden="true"
        >
          <span className="font-technical text-[11px] uppercase tracking-[0.08em] text-on-primary/70">
            Product highlights
          </span>
          <span className="mt-3 font-heading text-2xl font-600">
            {product.name}
          </span>
          <span className="mt-6 flex flex-col gap-3">
            {product.features.slice(0, 4).map((feature) => (
              <span key={feature} className="flex gap-3 font-body text-sm leading-5 text-on-primary/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-fixed" />
                <span>{feature}</span>
              </span>
            ))}
          </span>
          <span className="mt-auto flex items-center justify-between border-t border-on-primary/20 pt-5 font-body text-sm font-600">
            Click for full details
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-on-primary/10">
              <ArrowIcon />
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}

function ProductModal({ product, onClose }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!product) return undefined;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/70 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${product.id}-title`}
        aria-describedby={`${product.id}-description`}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-surface-container-lowest shadow-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm transition-colors hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close product details"
        >
          <CloseIcon />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-64 items-center justify-center bg-surface-container-low p-8 sm:p-10">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="max-h-80 w-full object-contain"
            />
          </div>
          <div className="p-6 sm:p-10">
            <span className="inline-flex rounded-sm bg-primary-fixed px-2.5 py-1 font-technical text-[11px] uppercase tracking-[0.08em] text-on-primary-fixed-variant">
              {product.category}
            </span>
            <h2
              id={`${product.id}-title`}
              className="mt-4 pr-10 font-heading text-2xl font-700 leading-tight text-on-surface sm:text-3xl"
            >
              {product.name}
            </h2>
            <p
              id={`${product.id}-description`}
              className="mt-3 font-body text-sm leading-6 text-on-surface-variant sm:text-base"
            >
              {product.summary}
            </p>

            <h3 className="mt-7 font-heading text-lg font-600 text-on-surface">
              Product details
            </h3>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3 font-body text-sm leading-6 text-on-surface-variant">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/about#contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-secondary px-5 py-2.5 font-body text-sm font-600 text-on-secondary transition-opacity hover:opacity-90"
            >
              Request pricing <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main>
      <ProductHero
        image={{ src: productsPhoto, alt: "Urja Industries product range" }}
        badge="Product Range"
        title="Reliable Water Heating Solutions"
        description="Explore our gas-fired and wood-fired water heaters, engineered for dependable hot-water delivery across commercial and industrial applications."
        primaryCta={{ label: "Request Pricing →", href: "/about#contact" }}
        secondaryCta={{ label: "↓ Explore Products", href: "#product-grid" }}
      />

      <section id="product-grid" className="bg-surface-container-low py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-(--container-max) px-4 sm:px-6 lg:px-16">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <span className="font-technical text-xs uppercase tracking-[0.08em] text-primary">
              Our products
            </span>
            <h2 className="mt-3 font-heading text-2xl font-600 leading-tight text-on-surface sm:text-[28px] lg:text-[32px]">
              Built for continuous performance
            </h2>
            <p className="mt-4 font-body text-base leading-6 text-on-surface-variant">
              Hover over a product to see its key benefits, then click the card for complete details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />
            ))}
          </div>
        </div>
      </section>

      <ProductApplications
        heading="Primary Applications"
        description="Designed to integrate seamlessly into commercial and industrial operations requiring consistent, high-volume hot water."
        applications={applications}
      />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}

export default ProductDetails;
