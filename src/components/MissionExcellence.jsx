function MissionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <path
        d="M12 2C7 2 3 6 3 11c0 5.5 9 11 9 11s9-5.5 9-11c0-5-4-9-9-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3 10h18M8 3v4M16 3v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MissionExcellence() {
  return (
    <section className="bg-surface-container-lowest">
      <div className="max-w-(--container-max) mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded bg-primary text-on-primary">
              <MissionIcon />
            </span>
            <h2 className="font-heading text-xl font-600 text-on-surface">
              Our Mission
            </h2>
          </div>
          <p className="font-body text-base leading-6 text-on-surface-variant">
            To engineer and manufacture industrial heating equipment that
            maximizes thermal efficiency while minimizing environmental
            impact. We are committed to providing robust, reliable solutions
            that empower industries to reduce energy consumption and
            operational costs without compromising on performance.
          </p>
        </div>

        <div className="rounded-lg border border-outline-variant bg-surface-container-low p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded bg-tertiary text-on-tertiary">
              <CalendarIcon />
            </span>
            <h2 className="font-heading text-xl font-600 text-on-surface">
              20+ Years of Excellence
            </h2>
          </div>
          <p className="font-body text-base leading-6 text-on-surface-variant mb-6">
            From our humble beginnings in 2000, we have grown steadily by
            maintaining an unwavering focus on quality and technological
            advancement. Our journey in GIDC, Anand, reflects our dedication
            to serving the evolving needs of the industrial sector.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div>
              <p className="font-heading text-xl font-700 text-primary">2000</p>
              <p className="font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant">
                Founded
              </p>
            </div>
            <div className="w-px self-stretch bg-outline-variant" />
            <div>
              <p className="font-heading text-xl font-700 text-primary">
                Anand
              </p>
              <p className="font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant">
                Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionExcellence
