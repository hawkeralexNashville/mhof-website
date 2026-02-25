'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Museum', href: '/museum' },
  { label: 'Backstage', href: '/backstage' },
  { label: 'Vault Series', href: '/vault-series' },
  { label: 'Plan Your Visit', href: '/plan-your-visit' },
  { label: 'Inductees', href: '/inductees' },
  { label: 'Private Events', href: '/private-events' },
  { label: 'GRAMMY Gallery', href: '/grammy-museum-gallery' },
  { label: 'News', href: '/news' },
  { label: 'Donations', href: '/donations' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/images/logo/mhof-logo.svg"
            alt="Musicians Hall of Fame and Museum"
            width={180}
            height={48}
            className={`transition-all duration-500 ${isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'}`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-[13px] font-body font-medium text-cream-300/80 
                uppercase tracking-[0.1em] transition-colors duration-300
                hover:text-gold-400 relative group"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] 
                  bg-gold-500 transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        {/* Right side: Tickets + Store */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="https://shop.musicianshalloffame.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-body font-medium text-cream-300/80 
              uppercase tracking-[0.1em] transition-colors duration-300 hover:text-gold-400"
          >
            Store
          </a>
          <a
            href="https://www.etix.com/ticket/p/3675680/the-musicians-hall-of-fame-and-museum-admission-nashville-the-musicians-hall-of-fame-and-museum"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2.5 !px-6 !text-xs"
          >
            Buy Tickets
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-cream-200 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-cream-200 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-cream-200 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal-950/98 backdrop-blur-xl transition-all duration-500 xl:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-1 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-display font-medium text-cream-200 py-2.5
                transition-all duration-300 hover:text-gold-400
                ${isMobileMenuOpen ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="divider-gold w-32 my-4" />
          <a
            href="https://shop.musicianshalloffame.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-400 font-body uppercase tracking-widest text-sm hover:text-gold-400 transition-colors"
          >
            Store
          </a>
          <a
            href="https://www.etix.com/ticket/p/3675680/the-musicians-hall-of-fame-and-museum-admission-nashville-the-musicians-hall-of-fame-and-museum"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4"
          >
            Buy Tickets
          </a>
        </div>
      </div>
    </header>
  )
}
