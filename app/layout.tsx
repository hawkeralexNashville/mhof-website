import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.musicianshalloffame.com'),
  title: {
    default: 'Musicians Hall of Fame and Museum | Nashville, TN',
    template: '%s | Musicians Hall of Fame and Museum',
  },
  description:
    'Experience the stories, history, and memorabilia of recorded music. The only museum in the world honoring the musicians who played on the greatest recordings of all time. Home of the GRAMMY Museum Gallery in Nashville, Tennessee.',
  keywords: [
    'Musicians Hall of Fame',
    'Nashville museum',
    'music museum Nashville',
    'GRAMMY Museum Gallery',
    'Nashville attractions',
    'session musicians',
    'Wrecking Crew',
    'Nashville A-Team',
    'Muscle Shoals',
    'music history',
    'Nashville things to do',
    'private events Nashville',
    'Jimi Hendrix guitar',
    'Elvis Presley memorabilia',
  ],
  authors: [{ name: 'Musicians Hall of Fame and Museum' }],
  openGraph: {
    title: 'Musicians Hall of Fame and Museum | Nashville, TN',
    description:
      'The only museum in the world honoring the musicians who played on the greatest recordings of all time. Home of the GRAMMY Museum Gallery.',
    url: 'https://www.musicianshalloffame.com',
    siteName: 'Musicians Hall of Fame and Museum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Musicians Hall of Fame and Museum in Nashville, Tennessee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musicians Hall of Fame and Museum | Nashville, TN',
    description:
      'The only museum in the world honoring the musicians who played on the greatest recordings of all time.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.musicianshalloffame.com',
  },
}

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Museum',
      '@id': 'https://www.musicianshalloffame.com/#museum',
      name: 'Musicians Hall of Fame and Museum',
      alternateName: 'MHOF',
      description:
        'The only museum in the world honoring the musicians who played on the greatest recordings of all time. Home of the GRAMMY Museum Gallery.',
      url: 'https://www.musicianshalloffame.com',
      telephone: '+1-615-244-3263',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '401 Gay Street',
        addressLocality: 'Nashville',
        addressRegion: 'TN',
        postalCode: '37201',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.1672,
        longitude: -86.7743,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '17:00',
        },
      ],
      image: 'https://www.musicianshalloffame.com/images/og-image.jpg',
      sameAs: [
        'https://www.facebook.com/musicianshalloffame/',
        'https://twitter.com/mhfm',
        'https://www.instagram.com/musicianshalloffame/',
        'https://www.youtube.com/channel/UCBXToOcRzuguJlulf0xsSHw',
        'https://www.tiktok.com/@musicianshalloffame',
      ],
      priceRange: '$$',
      isAccessibleForFree: false,
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.musicianshalloffame.com/#website',
      url: 'https://www.musicianshalloffame.com',
      name: 'Musicians Hall of Fame and Museum',
      publisher: {
        '@id': 'https://www.musicianshalloffame.com/#museum',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
