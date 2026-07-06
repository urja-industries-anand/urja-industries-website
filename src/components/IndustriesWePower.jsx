const industries = [
  {
    name: 'Manufacturing',
    description:
      'Process heating, boiler feed water pre-heating, and heavy-duty environmental control systems designed for continuous operation.',
  },
  {
    name: 'Healthcare',
    description:
      'Sterilization steam, precise climate control, and reliable sanitary water heating systems for hospitals and labs.',
  },
  {
    name: 'Hospitality',
    description:
      'High-volume hot water systems and energy-efficient HVAC solutions ensuring guest comfort and operational savings.',
  },
]

function IndustryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function IndustriesWePower() {
  return (
    <section className="bg-tertiary">
      <div className="max-w-(--container-max) mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-600 leading-9 sm:leading-10 text-on-tertiary mb-4">
            Industries We Power
          </h2>
          <p className="font-body text-base leading-6 text-on-tertiary-container">
            Tailored thermal solutions engineered for the specific demands of
            diverse industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-lg border border-tertiary-container bg-tertiary-container/40 p-6 sm:p-8"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded bg-primary text-on-primary mb-4">
                <IndustryIcon />
              </span>
              <p className="font-body text-base font-600 text-on-tertiary mb-2">
                {industry.name}
              </p>
              <p className="font-body text-sm leading-5 text-on-tertiary-container">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesWePower
