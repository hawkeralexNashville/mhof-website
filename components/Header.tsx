'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const mainNavLinks = [
  { label: 'Museum', href: '/museum' },
  { label: 'Experiences', href: '/grammy-museum-gallery' },
  { label: 'Visit', href: '/plan-your-visit' },
  { label: 'Inductees', href: '/inductees' },
  { label: 'Watch & Listen', href: '/backstage' },
  { label: 'Private Events', href: '/private-events' },
  { label: 'Shop', href: 'https://shop.musicianshalloffame.com/', external: true },
]

const topBarLinks = [
  { label: 'About', href: '/mission-statement' },
  { label: 'News', href: '/news' },
  { label: 'Donate', href: '/donations' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* ========== TOP BAR (secondary links) ========== */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-charcoal-950 border-b border-charcoal-700/50 transition-all duration-500 ${
          isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="section-container flex items-center justify-between py-2">
          <nav className="hidden lg:flex items-center gap-6">
            {topBarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-body font-medium text-cream-400/50 uppercase tracking-[0.12em] transition-colors duration-300 hover:text-gold-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+16152443263" className="text-[11px] font-body text-cream-400/50 hover:text-gold-400 transition-colors">
              (615) 244-3263
            </a>
            <span className="text-charcoal-600">|</span>
            <div className="flex items-center gap-3">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/musicianshalloffame/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label: 'Instagram', href: 'https://www.instagram.com/musicianshalloffame/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { label: 'TikTok', href: 'https://www.tiktok.com/@musicianshalloffame', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
                { label: 'YouTube', href: 'https://www.youtube.com/channel/UCBXToOcRzuguJlulf0xsSHw', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-cream-400/40 hover:text-gold-400 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========== MAIN NAVIGATION ========== */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-charcoal-950/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
            : 'top-0 lg:top-[36px] bg-charcoal-900/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0">
            <Image
              src="/images/logo/mhof-logo.svg"
              alt="Musicians Hall of Fame and Museum"
              width={240}
              height={64}
              className={`transition-all duration-500 ${isScrolled ? 'h-12 w-auto' : 'h-16 md:h-20 w-auto'}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2">
            {mainNavLinks.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-body font-medium text-cream-200/80 tracking-[0.04em] transition-colors duration-300 hover:text-gold-400 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-3/4" />
                </a>
              ) : (
                <Link key={link.href} href={link.href}
                  className="px-4 py-2 text-sm font-body font-medium text-cream-200/80 tracking-[0.04em] transition-colors duration-300 hover:text-gold-400 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-3/4" />
                </Link>
              )
            )}
          </nav>

          {/* Tickets CTA */}
          <a href="https://www.etix.com/ticket/p/3675680/the-musicians-hall-of-fame-and-museum-admission-nashville-the-musicians-hall-of-fame-and-museum"
            target="_blank" rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 px-7 py-3 bg-gold-500 text-charcoal-950 font-body font-bold text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] active:scale-[0.98]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
            </svg>
            Museum Tickets
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle navigation menu" aria-expanded={isMobileMenuOpen}>
            <span className={`block w-6 h-[2px] bg-cream-200 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cream-200 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cream-200 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* ========== MOBILE MENU ========== */}
      <div className={`fixed inset-0 z-30 bg-charcoal-950/98 backdrop-blur-xl transition-all duration-500 xl:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-1 pt-24">
          {mainNavLinks.map((link, i) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-display font-medium text-cream-200 py-3 transition-all duration-300 hover:text-gold-400 ${isMobileMenuOpen ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 60}ms` }}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-display font-medium text-cream-200 py-3 transition-all duration-300 hover:text-gold-400 ${isMobileMenuOpen ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 60}ms` }}>
                {link.label}
              </Link>
            )
          )}
          <div className="divider-gold w-32 my-5" />
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {topBarLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-body text-cream-400/60 hover:text-gold-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <a href="https://www.etix.com/ticket/p/3675680/the-musicians-hall-of-fame-and-museum-admission-nashville-the-musicians-hall-of-fame-and-museum"
            target="_blank" rel="noopener noreferrer" className="btn-gold mt-2">
            Museum Tickets
          </a>
        </div>
      </div>
    </>
  )
}
