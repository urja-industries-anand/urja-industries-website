import productsPhoto from '../assets/photos/products.jpeg'
import heatpumpPhoto from '../assets/photos/Commercial-hp.png'

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

function ExpertiseCard({
  title,
  description,
  photo,
  photoAlt,
  icon,
  iconClassName,
  details,
}) {
  return (
    <article
      className="group h-80 [perspective:1000px] focus:outline-none"
      tabIndex={0}
      aria-label={`${title}. Click or touch this card to see more details.`}
    >
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] motion-reduce:transition-none">
        <div className="absolute inset-0 overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low [backface-visibility:hidden]">
          <img
            src={photo}
            alt={photoAlt}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded ${iconClassName}`}
              >
                {icon}
              </span>
              <h3 className="font-heading text-lg font-600 text-on-surface">
                {title}
              </h3>
            </div>
            <p className="mt-3 font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant">
              Touch for details
            </p>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-lg border border-primary/30 bg-primary p-6 text-on-primary [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
          <div className="flex h-full flex-col">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-on-primary/15">
              {icon}
            </span>
            <h3 className="mt-5 font-heading text-xl font-600">{title}</h3>
            <p className="mt-3 font-body text-sm leading-6 text-on-primary/85">
              {description}
            </p>
            <ul className="mt-5 space-y-2 border-t border-on-primary/20 pt-5">
              {details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-2 font-body text-sm leading-5 text-on-primary/90"
                >
                  <span aria-hidden="true">&bull;</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
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
          <ExpertiseCard
            title="Heat Pumps"
            description="Efficient system designed for industrial and residential heating applications."
            photo={heatpumpPhoto}
            photoAlt="Industrial heat pump equipment"
            icon={<HeatPumpIcon />}
            iconClassName="bg-primary text-on-primary"
            details={[
              'High-efficiency heat recovery',
              'Optimized and efficient design',
              'Scaleable upto large and complex applications',
            ]}
          />

          <ExpertiseCard
            title="Gas Geysers and Water Heaters"
            description="Reliable water heating solutions for residential and commercial applications."
            photo={productsPhoto}
            photoAlt="Gas geyser and water heaters"
            icon={<HeaterIcon />}
            iconClassName="bg-tertiary text-on-tertiary"
            details={[
              'Dependable hot-water delivery',
              'Residential and commercial use',
              'Solutions tailored to each application',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default CoreExpertise
