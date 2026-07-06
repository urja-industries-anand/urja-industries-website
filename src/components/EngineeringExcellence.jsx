import teamPhoto from '../assets/photos/team.jpeg'

const pillars = [
  {
    title: 'ISO Certified Manufacturing',
    description:
      'Stringent quality control protocols ensure every unit meets international safety and performance standards.',
  },
  {
    title: 'In-House R&D Team',
    description:
      'Continuous innovation driven by dedicated engineers focused on maximizing thermal efficiency.',
  },
  {
    title: '24/7 Technical Support',
    description:
      'Dedicated installation and maintenance teams ensuring minimal downtime for your operations.',
  },
]

function PillarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function EngineeringExcellence() {
  return (
    <section className="bg-surface-container-low">
      <div className="max-w-(--container-max) mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="relative rounded-lg overflow-hidden shadow-sm">
          <img
            src={teamPhoto}
            alt="The Urja Industries team"
            className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-surface-container-lowest px-4 py-3">
            <p className="font-heading text-xl font-700 text-primary">20+</p>
            <p className="font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant">
              Years of Excellence
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-600 leading-9 sm:leading-10 text-on-surface mb-4">
            Engineering Excellence as Standard
          </h2>
          <p className="font-body text-base leading-6 text-on-surface-variant mb-6 sm:mb-8">
            Since our inception, Urja Industries has been committed to
            delivering robust, efficient, and innovative thermal solutions.
            We don&apos;t just sell equipment; we engineer reliability.
          </p>

          <div className="flex flex-col gap-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-3">
                <span className="text-primary mt-0.5">
                  <PillarIcon />
                </span>
                <div>
                  <p className="font-body text-base font-600 text-on-surface mb-1">
                    {pillar.title}
                  </p>
                  <p className="font-body text-sm leading-5 text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringExcellence
