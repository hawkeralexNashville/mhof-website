'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const highlights = [
  {
    name: 'Elvis Presley',
    detail: 'American Sound Studio where he recorded "Suspicious Minds" and "In the Ghetto"',
    image: '/images/exhibits/highlight-elvis-american-sound.jpg',
  },
  {
    name: 'Jimi Hendrix',
    detail: 'One of his Stratocaster guitars and the Nashville stage from The Jolly Roger',
    image: '/images/exhibits/highlight-hendrix-strat.jpg',
  },
  {
    name: 'Glen Campbell',
    detail: 'Guitars from his nationally broadcast TV show and early session work',
    image: '/images/exhibits/highlight-glen-campbell.jpg',
  },
  {
    name: 'Johnny Cash',
    detail: 'Instruments and memorabilia from the Man in Black',
    image: '/images/exhibits/highlight-johnny-cash.jpg',
  },
]

export default function Highlights() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="py-24 md:py-32 bg-charcoal-900/50" aria-labelledby="highlights-heading">
      <div className="section-container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">
              Instruments &amp; Memorabilia
            </p>
            <h2
              id="highlights-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 font-bold leading-tight heading-accent"
            >
              It&apos;s Possible to Spend Days Here
            </h2>
            <p className="font-body text-cream-400/70 text-base md:text-lg mt-8 leading-relaxed">
              From Elvis Presley&apos;s recording studio to one of Jimi Hendrix&apos;s Stratocaster guitars,
              James Jamerson&apos;s legendary Fender P-Bass to Steve Lukather&apos;s original Les Paul —
              the museum houses the actual instruments that shaped the soundtrack of our lives.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Garth Brooks', 'Elton John', 'Peter Frampton', 'Roy Orbison', 'Chet Atkins'].map((name) => (
                <span
                  key={name}
                  className="font-body text-xs uppercase tracking-[0.1em] text-cream-400/60 border border-charcoal-600/40 px-4 py-2"
                >
                  {name}
                </span>
              ))}
              <span className="font-body text-xs uppercase tracking-[0.1em] text-gold-500/70 border border-gold-500/30 px-4 py-2">
                + Many More
              </span>
            </div>
            <a href="/museum" className="btn-gold mt-10 inline-flex">
              View the Collection
            </a>
          </div>

          {/* Right: Image grid */}
          <div className={`grid grid-cols-2 gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {highlights.map((item, i) => (
              <div
                key={item.name}
                className={`group relative overflow-hidden ${i === 0 ? 'row-span-2' : ''}`}
              >
                <div className={`relative ${i === 0 ? 'h-full min-h-[400px]' : 'aspect-square'} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={`${item.name} - ${item.detail}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-display text-sm font-semibold text-cream-100">{item.name}</p>
                    <p className="font-body text-[11px] text-cream-400/70 mt-0.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
