import logo from '../assets/photos/urjaindustries_logo.jpeg'
import juggerSpaceLogo from '../assets/photos/jugger-space-logo.png'

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Installation Support', href: '#' },
  { label: 'Technical Specifications', href: '#' },
]

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="bg-tertiary text-on-tertiary">
      <div className="max-w-(--container-max) mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-16 py-10 lg:py-12">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-16 w-36 shrink-0 overflow-hidden rounded bg-surface-container-lowest">
              <img
                src={logo}
                alt="Urja Industries"
                className="absolute top-1/2 left-1/2 w-full max-w-none -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <a
              href="https://www.instagram.com/urjaindustries/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Urja Industries on Instagram"
              className="inline-flex rounded text-on-tertiary-container transition-colors hover:text-on-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-tertiary"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="font-body text-sm text-on-tertiary-container max-w-xs">
            Engineering reliable, energy-efficient industrial heating
            solutions since 2001.
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
            &copy; 2026 Urja Industries. All rights reserved.
            <br />
            P.B. No. 11, Plot no.:C1-9/161-A, Fine Cast Crossing, opp. Vidhya Wires, Vithal Udyognagar, GIDC,Anand, Gujarat 388120
            <br />
          </p>
        </div>
      </div>
      <div className="max-w-(--container-max) mx-auto border-t border-on-tertiary/15 px-4 py-5 sm:px-6 lg:px-16">
        <a
          href="https://jugger.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex w-fit items-center gap-3 rounded font-body text-sm text-on-tertiary-container transition-colors hover:text-on-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-tertiary"
        >
          <img
            src={juggerSpaceLogo}
            alt=""
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span>
            Created with love ❤️ by{' '}
            <span className="font-600">jugger.space</span>
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
