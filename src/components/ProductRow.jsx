import SpecTable from './SpecTable'
import TechnicalChip from './TechnicalChip'

function ProductRow({ image, reverse, badge, title, description, chips, specRows, cta }) {
  return (
    <div className="max-w-(--container-max) mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div
          className={`rounded-lg border border-outline-variant overflow-hidden transition-shadow transition-colors hover:shadow-md hover:border-primary ${
            image.fit === 'cover' ? '' : 'bg-surface-container-low'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-[280px] sm:h-[340px] lg:h-[380px] ${
              image.fit === 'cover' ? 'object-cover' : 'object-contain p-6'
            }`}
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-1 font-technical text-xs tracking-[0.05em] uppercase mb-4">
            {badge}
          </span>

          <h2 className="font-heading text-2xl sm:text-[28px] font-600 text-on-surface mb-3 sm:mb-4">
            {title}
          </h2>

          <p className="font-body text-base leading-6 text-on-surface-variant mb-4 sm:mb-5">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {chips.map((chip) => (
              <TechnicalChip key={chip.label} label={chip.label} tone={chip.tone} />
            ))}
          </div>

          <SpecTable rows={specRows} />

          {cta && (
            <a
              href={cta.href}
              className="inline-block mt-6 rounded bg-secondary text-on-secondary font-body text-sm font-600 px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductRow
