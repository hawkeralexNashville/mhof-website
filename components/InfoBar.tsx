'use client'

import { useReveal } from '@/hooks/useReveal'

export default function InfoBar() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <div ref={ref} className="relative z-20 -mt-1">
      <div className={`section-container transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="bg-charcoal-800/80 backdrop-blur-md border border-charcoal-600/30 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-charcoal-600/30">
            {/* Address */}
            <a
              href="https://maps.google.com/?q=401+Gay+Street+Nashville+TN+37201"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 group transition-colors hover:bg-charcoal-700/30"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-cream-500/60 font-body mb-0.5">Location</p>
                <p className="text-sm text-cream-200 font-body group-hover:text-gold-400 transition-colors">
                  401 Gay Street, Nashville, TN
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-cream-500/60 font-body mb-0.5">Hours</p>
                <p className="text-sm text-cream-200 font-body">Mon – Sat, 10am – 5pm</p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+16152443263"
              className="flex items-center gap-4 px-6 py-5 group transition-colors hover:bg-charcoal-700/30"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-cream-500/60 font-body mb-0.5">Call Us</p>
                <p className="text-sm text-cream-200 font-body group-hover:text-gold-400 transition-colors">
                  (615) 244-3263
                </p>
              </div>
            </a>

            {/* Tickets CTA */}
            <a
              href="https://www.etix.com/ticket/p/3675680/the-musicians-hall-of-fame-and-museum-admission-nashville-the-musicians-hall-of-fame-and-museum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 bg-gold-500/10 group transition-colors hover:bg-gold-500/20"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-gold-400/80 font-body mb-0.5">Admission</p>
                <p className="text-sm text-gold-300 font-body font-semibold group-hover:text-gold-200 transition-colors">
                  Buy Tickets Online →
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
