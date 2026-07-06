const contacts = [
  { name: 'Chirag Parekh', title: 'Managing Director', phone: '+91 98XXX XXXXX' },
  { name: 'Darshan Patel', title: 'Managing Director', phone: '+91 98XXX XXXXX' },
  { name: 'Chetan Mojidra', title: 'Managing Director', phone: '+91 98XXX XXXXX' },
]

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ContactInfo() {
  return (
    <section id="contact" className="bg-surface-container-lowest scroll-mt-20">
      <div className="max-w-(--container-max) mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-600 leading-9 sm:leading-10 text-on-surface mb-4">
            Contact Info
          </h2>
          <p className="font-body text-base leading-6 text-on-surface-variant">
            Reach out to our leadership team directly for enquiries, quotes,
            or support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="rounded-lg border border-outline-variant bg-surface-container-low p-6 sm:p-8 text-center"
            >
              <p className="font-body text-base font-600 text-on-surface mb-1">
                {contact.name}
              </p>
              <p className="font-body text-sm font-600 text-primary mb-4">
                {contact.title}
              </p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 font-technical text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <PhoneIcon />
                {contact.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
