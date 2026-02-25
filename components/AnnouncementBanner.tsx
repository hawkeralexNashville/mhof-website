'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export default function AnnouncementBanner() {
  const { ref, isVisible } = useReveal()

  return (
    <section ref={ref} className="py-12 md:py-16" aria-label="Announcements">
      <div className="section-container">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
          {/* 9th Induction Ceremony Banner */}
          <a
            href="https://www.thefishercenter.com/2026/02/04/musicians-hall-of-fame/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden group"
          >
            <div className="relative w-full aspect-[4.5/1] md:aspect-[4.5/1]">
              <Image
                src="/images/banners/9th_ConcertAndInduction_1512x336px.jpg"
                alt="9th Musicians Hall of Fame Concert and Induction Ceremony"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="100vw"
              />
            </div>
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />
          </a>
        </div>
      </div>
    </section>
  )
}
