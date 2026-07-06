function ProductApplications({ heading, description, applications }) {
  return (
    <section className="bg-surface-container-low">
      <div className="max-w-(--container-max) mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-600 leading-9 sm:leading-10 text-on-surface mb-4">
            {heading}
          </h2>
          <p className="font-body text-base leading-6 text-on-surface-variant">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <div
              key={application.name}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest overflow-hidden"
            >
              <img
                src={application.image}
                alt={application.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-primary">{application.icon}</span>
                  <p className="font-body text-base font-600 text-on-surface">
                    {application.name}
                  </p>
                </div>
                <p className="font-body text-sm leading-5 text-on-surface-variant">
                  {application.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductApplications
