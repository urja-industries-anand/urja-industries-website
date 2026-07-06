import { useEffect, useState } from 'react'

function Carousel({ slides, interval = 4000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-sm">
      {slides.map((slide, i) => (
        <img
          key={slide.alt}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.alt}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${slide.alt}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-on-primary' : 'w-2 bg-on-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
