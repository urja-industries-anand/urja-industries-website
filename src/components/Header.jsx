import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/photos/urjaindustries_logo.jpeg'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/about#contact' },
]

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="border-b border-outline-variant bg-surface-container-lowest">
      <div className="max-w-(--container-max) mx-auto flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 lg:px-16 py-3">
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Urja Industries"
            className="h-11 sm:h-14 lg:h-16 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={
                pathname === link.href
                  ? 'font-body text-sm font-600 text-primary border-b-2 border-primary pb-1'
                  : 'font-body text-sm font-400 text-on-surface-variant hover:text-primary transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/about#contact"
          className="hidden lg:inline-block shrink-0 rounded bg-secondary text-on-secondary font-body text-sm font-600 px-5 py-2.5 hover:opacity-90 transition-opacity"
        >
          Get Quote
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden shrink-0 flex items-center justify-center w-10 h-10 rounded text-on-surface"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-outline-variant px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === link.href
                  ? 'font-body text-sm font-600 text-primary'
                  : 'font-body text-sm font-400 text-on-surface-variant hover:text-primary transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/about#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block text-center rounded bg-secondary text-on-secondary font-body text-sm font-600 px-5 py-2.5 hover:opacity-90 transition-opacity"
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
