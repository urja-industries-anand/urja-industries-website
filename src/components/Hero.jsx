import teamPhoto from '../assets/photos/team.jpeg'
import buildingPhoto from '../assets/photos/urja_building.jpeg'
import productsPhoto from '../assets/photos/products.jpeg'
import Carousel from './Carousel'

const heroSlides = [
  { src: teamPhoto, alt: 'The Urja Industries team outside our facility' },
  { src: buildingPhoto, alt: 'The Urja Industries facility building' },
  { src: productsPhoto, alt: 'Urja Industries heating equipment on display' },
]

function Hero() {
  return (
    <section className="bg-surface-container-low">
      <div className="max-w-(--container-max) mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div>
          <span className="inline-block border border-outline-variant rounded-sm px-2.5 py-1 font-technical text-xs tracking-[0.05em] text-on-surface-variant uppercase mb-4 sm:mb-6">
            Est. 2000-2001
          </span>

          <h1 className="font-heading text-[28px] sm:text-[36px] lg:text-[48px] font-700 leading-[36px] sm:leading-[44px] lg:leading-[56px] tracking-[-0.02em] text-on-surface mb-4 sm:mb-6">
            The Power of Nature, Engineered.
          </h1>

          <p className="font-body text-base leading-6 text-on-surface-variant max-w-lg">
            Founded in the industrial hub of GIDC, Anand, Gujarat, Urja
            Industries has spent over two decades pioneering energy-efficient
            heating solutions. We combine robust manufacturing with
            innovative engineering to deliver industrial reliability.
          </p>
        </div>

        <div className="h-[280px] sm:h-[360px] lg:h-[420px]">
          <Carousel slides={heroSlides} />
        </div>
      </div>
    </section>
  )
}

export default Hero
