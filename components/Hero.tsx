'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden" aria-label="Hero">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage: `url('/images/hero/home-hero-slide-01.jpg')`,
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/40 to-charcoal-950" />
        {/* Vignette effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Decorative top line */}
        <div
          className={`w-px h-16 bg-gradient-to-b from-transparent to-gold-500/60 mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'
          }`}
        />

        {/* Tagline */}
        <p
          className={`font-body text-gold-400 text-sm uppercase tracking-[0.3em] mb-6 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Come See What You Hear
        </p>

        {/* Main Heading */}
        <h1
          className={`font-display text-cream-50 text-shadow transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
            Musicians Hall of Fame
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-cream-300 mt-2">
            &amp; Museum
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`font-body text-cream-300/80 text-base md:text-lg max-w-2xl mt-6 leading-relaxed transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Experience the stories, history, and memorabilia of recorded music. The only museum in the
          world honoring the talented musicians who played on the greatest recordings of all time.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mt-10 transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a href="/plan-your-visit" className="btn-gold">
            Plan Your Visit
          </a>
          <a
            href="https://www.etix.com/ticket/p/3675680/the-musicians-hall-of-fame-and-museum-admission-nashville-the-musicians-hall-of-fame-and-museum"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Buy Tickets
          </a>
        </div>

        {/* Decorative bottom line */}
        <div
          className={`w-px h-16 bg-gradient-to-b from-gold-500/60 to-transparent mt-12 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse-subtle">
        <div className="flex flex-col items-center gap-2">
          <span className="text-cream-400/50 text-[10px] uppercase tracking-[0.3em] font-body">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-cream-400/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
