function ProductHero({ image, badge, title, description, primaryCta, secondaryCta }) {
  return (
    <section className="bg-surface-container-lowest">
      <div className="max-w-(--container-max) mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="rounded-lg border border-outline-variant bg-surface-container-low overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-1 font-technical text-xs tracking-[0.05em] uppercase mb-4 sm:mb-6">
            {badge}
          </span>

          <h1 className="font-heading text-[28px] sm:text-[36px] lg:text-[40px] font-700 leading-[36px] sm:leading-[44px] lg:leading-[48px] tracking-[-0.02em] text-on-surface mb-4 sm:mb-6">
            {title}
          </h1>

          <p className="font-body text-base leading-6 text-on-surface-variant max-w-lg mb-6 sm:mb-8">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={primaryCta.href}
              className="rounded bg-secondary text-on-secondary font-body text-sm font-600 px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="rounded border border-primary text-primary font-body text-sm font-600 px-5 py-2.5 hover:bg-primary-fixed transition-colors"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductHero
