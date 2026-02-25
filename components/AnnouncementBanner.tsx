'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export default function AnnouncementBanner() {
  const { ref: bannerRef, isVisible: bannerVisible } = useReveal()
  const { ref: ringoRef, isVisible: ringoVisible } = useReveal()

  return (
    <section ref={bannerRef} className="py-10 md:py-14" aria-label="Announcements">
      <div className="section-container space-y-8">
        {/* 9th Induction Ceremony Banner */}
        <div className={`transition-all duration-700 ${bannerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
          <a
            href="https://www.thefishercenter.com/2026/02/04/musicians-hall-of-fame/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden group"
          >
            <div className="relative w-full aspect-[4.5/1]">
              <Image
                src="/images/exhibits/9th_ConcertAndInduction_1512x336px.jpg"
                alt="9th Musicians Hall of Fame Concert and Induction Ceremony"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />
          </a>
        </div>

        {/* Ringo Starr Beats Billboard */}
        <div
          ref={ringoRef}
          className={`transition-all duration-700 delay-200 ${ringoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="relative overflow-hidden group">
            <div className="relative w-full">
              <Image
                src="/images/exhibits/RingoStarr_Beats_billboard.jpg"
                alt="Ringo Starr Beats exhibit at Musicians Hall of Fame and Museum"
                width={1512}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                sizes="100vw"
              />
            </div>
            {/* Subtle gold border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/20 transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
