'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const exhibits = [
  {
    title: 'Los Angeles',
    subtitle: 'The Wrecking Crew',
    description: 'Instruments from Simon & Garfunkel, The Beach Boys, The Mamas and Papas, and The Carpenters.',
    image: '/images/exhibits/exhibit-la-wrecking-crew.jpg',
  },
  {
    title: 'Nashville',
    subtitle: 'The A-Team',
    description: 'The session musicians behind the Nashville Sound that defined country music.',
    image: '/images/exhibits/exhibit-nashville-a-team.jpg',
  },
  {
    title: 'Memphis',
    subtitle: 'American Sound Studio',
    description: 'Where Elvis Presley recorded "Suspicious Minds," "In the Ghetto," and more.',
    image: '/images/exhibits/exhibit-memphis-american-sound.jpg',
  },
  {
    title: 'Muscle Shoals',
    subtitle: 'The Swampers',
    description: 'The rhythm section behind Aretha Franklin, Wilson Pickett, and The Rolling Stones.',
    image: '/images/exhibits/exhibit-muscle-shoals.jpg',
  },
  {
    title: 'Jimi Hendrix',
    subtitle: 'Nashville to Woodstock',
    description: 'One of Hendrix\'s Stratocaster guitars and the stage he performed on at The Jolly Roger.',
    image: '/images/exhibits/exhibit-jimi-hendrix.jpg',
  },
  {
    title: 'Detroit',
    subtitle: 'The Funk Brothers',
    description: 'The uncredited musicians behind Motown\'s greatest hits from Hitsville U.S.A.',
    image: '/images/exhibits/exhibit-detroit-funk-brothers.jpg',
  },
]

export default function Exhibits() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal()
  const { ref: gridRef, isVisible: gridVisible } = useReveal(0.1)

  return (
    <section className="py-24 md:py-32 grain-overlay" aria-labelledby="exhibits-heading">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 md:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">
            What You&apos;ll Discover
          </p>
          <h2
            id="exhibits-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 font-bold heading-accent heading-accent-center"
          >
            Every Genre. Every City.
          </h2>
          <p className="font-body text-cream-400/70 text-base md:text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
            Each exhibit tells the story of a musician you may have heard but never seen — the
            session players, engineers, and producers behind the greatest recordings of all time.
          </p>
        </div>

        {/* Exhibit Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {exhibits.map((exhibit, i) => (
            <div
              key={exhibit.title}
              className={`group relative overflow-hidden bg-charcoal-800/50 border border-charcoal-600/20 
                transition-all duration-700 hover:border-gold-500/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={exhibit.image}
                  alt={`${exhibit.title} - ${exhibit.subtitle} exhibit`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
                
                {/* City label */}
                <div className="absolute top-4 left-4">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold-400 bg-charcoal-950/70 backdrop-blur-sm px-3 py-1.5">
                    {exhibit.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-cream-100 font-semibold group-hover:text-gold-400 transition-colors">
                  {exhibit.subtitle}
                </h3>
                <p className="font-body text-sm text-cream-400/70 mt-2 leading-relaxed">
                  {exhibit.description}
                </p>
              </div>

              {/* Gold bottom border on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="/museum" className="btn-outline">
            Explore All Exhibits
          </a>
        </div>
      </div>
    </section>
  )
}
