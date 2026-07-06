const leaders = [
  { name: 'Chirag Parekh', title: 'Managing Director' },
  { name: 'Darshan Patel', title: 'Managing Director' },
  { name: 'Chetan Mojidra', title: 'Managing Director' },
]

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Leadership() {
  return (
    <section className="bg-surface-container-low">
      <div className="max-w-(--container-max) mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-600 leading-9 sm:leading-10 text-on-surface mb-4">
            Guided by Experience
          </h2>
          <p className="font-body text-base leading-6 text-on-surface-variant">
            Our leadership team brings decades of engineering and
            manufacturing expertise, driving Urja Industries toward
            continuous innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 text-center"
            >
              <span className="flex items-center justify-center w-20 h-20 rounded-md bg-surface-container-highest text-on-surface-variant mx-auto mb-5">
                <PersonIcon />
              </span>
              <p className="font-body text-base font-600 text-on-surface mb-1">
                {leader.name}
              </p>
              <p className="font-body text-sm font-600 text-primary">
                {leader.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
