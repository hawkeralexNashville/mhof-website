'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const videos = [
  {
    title: 'The Brooks & Dunn Story',
    subtitle: 'As Told by Kix Brooks',
    // Replace with actual YouTube video IDs from the current site
    videoId: 'BROOKS_DUNN_VIDEO_ID',
    thumbnail: '/images/hero/backstage-brooks-dunn.jpg',
  },
  {
    title: 'Booker T & The M.G.\'s',
    subtitle: 'As Told by Steve Cropper',
    videoId: 'BOOKER_T_VIDEO_ID',
    thumbnail: '/images/hero/backstage-booker-t.jpg',
  },
  {
    title: 'The Garth Brooks Story',
    subtitle: 'Musicians Hall of Fame Backstage',
    videoId: 'GARTH_BROOKS_VIDEO_ID',
    thumbnail: '/images/hero/backstage-garth-brooks.jpg',
  },
]

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useReveal()
  const { ref: gridRef, isVisible: gridVisible } = useReveal(0.1)

  return (
    <section className="py-24 md:py-32 relative" aria-labelledby="backstage-heading">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.03)_0%,_transparent_70%)]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">
            Watch &amp; Listen
          </p>
          <h2
            id="backstage-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 font-bold heading-accent heading-accent-center"
          >
            MHOF Backstage
          </h2>
          <p className="font-body text-cream-400/70 text-base md:text-lg max-w-xl mx-auto mt-8 leading-relaxed">
            Exclusive interviews with the musicians who made music history. Stories you won&apos;t hear anywhere else.
          </p>
        </div>

        {/* Video Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={video.title}
              className={`group cursor-pointer transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
              onClick={() => setActiveVideo(activeVideo === video.videoId ? null : video.videoId)}
            >
              {/* Thumbnail / Player */}
              <div className="relative aspect-video overflow-hidden bg-charcoal-800">
                {activeVideo === video.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${video.thumbnail}')` }}
                    />
                    <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-charcoal-950/20 transition-colors duration-500" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-cream-200/60 flex items-center justify-center
                        group-hover:border-gold-400 group-hover:bg-gold-500/10 group-hover:scale-110
                        transition-all duration-500">
                        <svg className="w-6 h-6 text-cream-200 ml-1 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Video info */}
              <div className="mt-4">
                <h3 className="font-display text-lg text-cream-100 font-semibold group-hover:text-gold-400 transition-colors">
                  {video.title}
                </h3>
                <p className="font-body text-sm text-cream-400/60 mt-1">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="/backstage" className="btn-outline">
            Watch the Entire Backstage Catalog
          </a>
        </div>
      </div>
    </section>
  )
}
