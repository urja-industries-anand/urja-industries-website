import productsPhoto from '../assets/photos/products.jpeg'
import buildingPhoto from '../assets/photos/urja_building.jpeg'

function HeatPumpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function HeaterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <path
        d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 12h4M4 8h2M4 16h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SolarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CoreExpertise() {
  return (
    <section className="bg-surface-container-lowest">
      <div className="max-w-(--container-max) mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-600 leading-9 sm:leading-10 text-on-surface mb-4">
            Our Core Expertise
          </h2>
          <p className="font-body text-base leading-6 text-on-surface-variant">
            Precision engineering across three key thermal technology
            sectors, delivering uncompromising performance and energy
            savings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-outline-variant bg-surface-container-low overflow-hidden">
            <img
              src={productsPhoto}
              alt="Industrial heat pump equipment"
              className="w-full h-44 object-cover"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-9 h-9 rounded bg-primary text-on-primary">
                  <HeatPumpIcon />
                </span>
                <h3 className="font-heading text-lg font-600 text-on-surface">
                  Industrial Heat Pumps
                </h3>
              </div>
              <p className="font-body text-sm leading-5 text-on-surface-variant">
                High-COP systems designed for large-scale commercial heating
                and cooling, maximizing energy recovery.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-outline-variant bg-surface-container-low overflow-hidden">
            <img
              src={buildingPhoto}
              alt="Heavy-duty industrial heaters"
              className="w-full h-44 object-cover"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-9 h-9 rounded bg-tertiary text-on-tertiary">
                  <HeaterIcon />
                </span>
                <h3 className="font-heading text-lg font-600 text-on-surface">
                  Heavy-Duty Heaters
                </h3>
              </div>
              <p className="font-body text-sm leading-5 text-on-surface-variant">
                Robust heating solutions engineered for extreme industrial
                environments.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-outline-variant bg-surface-container-low p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded bg-primary text-on-primary">
                <SolarIcon />
              </span>
              <h3 className="font-heading text-lg font-600 text-on-surface">
                Solar Thermal
              </h3>
            </div>
            <p className="font-body text-sm leading-5 text-on-surface-variant mb-6">
              Sustainable water heating systems.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <p className="font-heading text-xl font-700 text-primary">
                  300&deg;C
                </p>
                <p className="font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant">
                  Max Temp
                </p>
              </div>
              <div className="w-px self-stretch bg-outline-variant" />
              <div>
                <p className="font-heading text-xl font-700 text-secondary">
                  A++
                </p>
                <p className="font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant">
                  Efficiency Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreExpertise
