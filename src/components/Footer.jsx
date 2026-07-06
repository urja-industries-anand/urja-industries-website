import logo from '../assets/photos/urjaindustries_logo.jpeg'

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Installation Support', href: '#' },
  { label: 'Technical Specifications', href: '#' },
]

function Footer() {
  return (
    <footer className="bg-tertiary text-on-tertiary">
      <div className="max-w-(--container-max) mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-16 py-10 lg:py-12">
        <div>
          <img
            src={logo}
            alt="Urja Industries"
            className="h-9 w-auto mb-4 rounded"
          />
          <p className="font-body text-sm text-on-tertiary-container max-w-xs">
            Engineering reliable, energy-efficient industrial heating
            solutions since 2000.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-start">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-on-tertiary-container hover:text-on-tertiary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="sm:col-span-2 lg:col-span-1 lg:text-right">
          <p className="font-body text-sm text-on-tertiary-container">
            &copy; 2024 Urja Industries.
            <br />
            GIDC, Anand, Gujarat.
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
