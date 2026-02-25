import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  visit: [
    { label: 'Plan Your Visit', href: '/plan-your-visit' },
    { label: 'Information & Prices', href: '/informationprices' },
    { label: 'Parking', href: '/parking' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Buy Tickets', href: 'https://www.etix.com/ticket/p/3675680/the-musicians-hall-of-fame-and-museum-admission-nashville-the-musicians-hall-of-fame-and-museum', external: true },
  ],
  explore: [
    { label: 'Museum Exhibits', href: '/museum' },
    { label: 'GRAMMY Gallery', href: '/grammy-museum-gallery' },
    { label: 'Backstage Series', href: '/backstage' },
    { label: 'Vault Series', href: '/vault-series' },
    { label: 'Inductees', href: '/inductees' },
  ],
  connect: [
    { label: 'Private Events', href: '/private-events' },
    { label: 'Group Tours', href: '/group-tour-request' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Donations', href: '/donations' },
    { label: 'News', href: '/news' },
    { label: 'Store', href: 'https://shop.musicianshalloffame.com/', external: true },
  ],
}

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/musicianshalloffame/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/musicianshalloffame/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/mhfm',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCBXToOcRzuguJlulf0xsSHw',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@musicianshalloffame',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800/50" role="contentinfo">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo/mhof-logo.svg"
              alt="Musicians Hall of Fame and Museum"
              width={200}
              height={53}
              className="h-12 w-auto mb-6"
            />
            <p className="font-body text-sm text-cream-400/60 leading-relaxed max-w-sm">
              The only museum in the world honoring the talented musicians who actually played on
              the greatest recordings of all time. Located in the historic Nashville Municipal
              Auditorium.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-charcoal-800/50 border border-charcoal-600/30 
                    flex items-center justify-center text-cream-400/60
                    transition-all duration-300 hover:bg-gold-500/10 hover:border-gold-500/40 hover:text-gold-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Visit Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-cream-200 uppercase tracking-[0.1em] mb-5">
              Visit
            </h3>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-cream-400/60 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-cream-400/60 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-cream-200 uppercase tracking-[0.1em] mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream-400/60 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-cream-200 uppercase tracking-[0.1em] mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-cream-400/60 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-cream-400/60 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 aspect-[3/1] md:aspect-[4/1] w-full overflow-hidden border border-charcoal-600/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.9!2d-86.7765!3d36.1672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864669db3bfffff%3A0x8d51df6cb1a0f8a0!2sMusicians%20Hall%20of%20Fame%20and%20Museum!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Musicians Hall of Fame and Museum location"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800/50">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream-500/40">
            &copy; {new Date().getFullYear()} Musicians Hall of Fame &amp; Museum. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="font-body text-xs text-cream-500/40 hover:text-cream-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/mission-statement" className="font-body text-xs text-cream-500/40 hover:text-cream-400 transition-colors">
              Mission Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
