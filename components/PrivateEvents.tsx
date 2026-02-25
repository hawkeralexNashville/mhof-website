'use client'

import { useReveal } from '@/hooks/useReveal'

export default function PrivateEvents() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" aria-labelledby="events-heading">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/images/events/private-events-venue.jpg')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal-950/75" />
      {/* Gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-transparent" />

      <div ref={ref} className="section-container relative z-10 text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">
            Private Events
          </p>
          <h2
            id="events-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 font-bold leading-tight"
          >
            Host Your Event in<br />Music History
          </h2>
          <p className="font-body text-cream-300/80 text-base md:text-lg mt-8 leading-relaxed max-w-2xl mx-auto">
            A world-class, versatile, and unique venue fully equipped to accommodate anywhere from 50
            to 2,000 people. Your guests will love this true Nashville experience, steeped in music
            history both past and present.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
            {[
              { value: '2,000', label: 'Capacity' },
              { value: '68K', label: 'Sq. Ft.' },
              { value: '★★★★★', label: 'Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl md:text-3xl text-gold-400 font-bold">{stat.value}</p>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-cream-400/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href="/private-events" className="btn-gold">
              Inquire Now
            </a>
            <a href="/group-tour-request" className="btn-outline">
              Group Tours
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
