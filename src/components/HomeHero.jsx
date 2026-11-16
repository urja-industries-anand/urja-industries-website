import { Link } from 'react-router-dom'
import buildingPhoto from '../assets/photos/urja_building.jpeg'

function HomeHero() {
  return (
    <section className="relative bg-tertiary">
      <div className="h-[420px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden">
        <img
          src={buildingPhoto}
          alt="Urja Industries facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 via-inverse-surface/50 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-(--container-max) mx-auto w-full px-4 sm:px-6 lg:px-16">
          <div className="max-w-xl">

            <h1 className="hero-heading-enter font-heading text-[28px] sm:text-[36px] lg:text-[48px] font-700 leading-[36px] sm:leading-[44px] lg:leading-[56px] tracking-[-0.02em] text-inverse-on-surface mb-4 sm:mb-6">
              Powering Efficiency through Advanced Water Heating Solutions.
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products/industrial-heat-pump-water-heaters"
                className="rounded bg-secondary text-on-secondary font-body text-sm font-600 px-5 py-2.5 hover:opacity-90 transition-opacity"
              >
                Explore Products
              </Link>
              <a
                href="#"
                className="rounded border border-inverse-on-surface text-inverse-on-surface font-body text-sm font-600 px-5 py-2.5 hover:bg-inverse-on-surface/10 transition-colors"
              >
                Technical Specs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
