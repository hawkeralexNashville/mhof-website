'use client'

import { useReveal } from '@/hooks/useReveal'

const inductionYears = [
  { year: '2022', highlight: '7th Induction Ceremony at Nashville Municipal Auditorium' },
  { year: '2019', highlight: '6th Induction at Schermerhorn Symphony Center' },
  { year: '2016', highlight: 'Featuring Kenny G, Bruce Hornsby, Steve Wariner, Peter Frampton' },
  { year: '2014', highlight: 'Roy Orbison honored with the "Iconic Riff" Award' },
  { year: '2009', highlight: 'Garth Brooks, Vince Gill, Peter Frampton perform' },
  { year: '2008', highlight: 'Inaugural class of inductees honored' },
  { year: '2007', highlight: 'First Induction Ceremony' },
]

export default function Inductees() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="py-24 md:py-32" aria-labelledby="inductees-heading">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">
              Honoring the Greats
            </p>
            <h2
              id="inductees-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 font-bold heading-accent heading-accent-center"
            >
              Hall of Fame Inductees
            </h2>
            <p className="font-body text-cream-400/70 text-base md:text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
              Inductees have included stars like Chet Atkins, Charlie Daniels, Barbara Mandrell, Roy
              Orbison, Garth Brooks, and Peter Frampton — as well as the unsung heroes like the
              Nashville A-Team, the Wrecking Crew, and the Muscle Shoals Rhythm Section.
            </p>
          </div>

          {/* Year Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent" />

            {inductionYears.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-8 last:mb-0 
                  ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                  md:text-${i % 2 === 0 ? 'right' : 'left'}`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 border-2 border-charcoal-950 z-10 mt-1.5" />

                {/* Content - mobile always right, desktop alternates */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <span className="font-display text-2xl text-gold-400 font-bold">{item.year}</span>
                  <p className="font-body text-sm text-cream-400/70 mt-1 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a href="/inductees" className="btn-outline">
              View All Inductees
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
