'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const products = [
  {
    name: 'Hats',
    image: '/images/merchandise/merch-hats.jpg',
  },
  {
    name: 'T-Shirts',
    image: '/images/merchandise/merch-tshirts.jpg',
  },
  {
    name: 'Youth Shirts',
    image: '/images/merchandise/merch-youth.jpg',
  },
]

export default function Merchandise() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="py-24 md:py-32 bg-charcoal-900/50" aria-labelledby="merch-heading">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-14">
            <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-4">
              Take a Piece Home
            </p>
            <h2
              id="merch-heading"
              className="font-display text-3xl md:text-4xl text-cream-50 font-bold heading-accent heading-accent-center"
            >
              MHOF Merchandise
            </h2>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.map((product, i) => (
              <a
                key={product.name}
                href="https://shop.musicianshalloffame.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-charcoal-800 border border-charcoal-600/20 group-hover:border-gold-500/30 transition-colors duration-500">
                  <Image
                    src={product.image}
                    alt={`MHOF ${product.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-lg text-cream-100 font-semibold group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://shop.musicianshalloffame.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
