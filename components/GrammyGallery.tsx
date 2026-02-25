'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export default function GrammyGallery() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="py-24 md:py-32 bg-charcoal-900/50" aria-labelledby="grammy-heading">
      <div className="section-container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/gallery/grammy-gallery-interactive.jpg"
                alt="Interactive GRAMMY Museum Gallery - visitors can play instruments and mix music"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal-950/30" />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/20 -z-10 hidden lg:block" />
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">
              Included with Admission
            </p>
            <h2
              id="grammy-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 font-bold leading-tight heading-accent"
            >
              GRAMMY Museum Gallery
            </h2>
            <p className="font-body text-cream-400/70 text-base md:text-lg mt-8 leading-relaxed">
              Perform on a stage singing backup for Ray Charles. Mix your own music in an actual sound
              booth. Play the piano, guitar, or drums. See for yourself what goes on behind the
              scenes in the studio.
            </p>
            <p className="font-body text-cream-400/70 text-base md:text-lg mt-4 leading-relaxed">
              Experience the songwriting, engineering, and producing process. See for yourself what
              it takes to cut a record. Fun for the entire family, adults and children alike.
            </p>

            {/* Interactive features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: '🎤', label: 'Sing Backup' },
                { icon: '🎛️', label: 'Mix Music' },
                { icon: '🎸', label: 'Play Instruments' },
                { icon: '🎧', label: 'Studio Experience' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 bg-charcoal-800/50 border border-charcoal-600/20 px-4 py-3"
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span className="font-body text-sm text-cream-300">{feature.label}</span>
                </div>
              ))}
            </div>

            <a href="/grammy-museum-gallery" className="btn-gold mt-10 inline-flex">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
