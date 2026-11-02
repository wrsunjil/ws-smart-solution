import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ServiceBookingModal from '@/components/ServiceBookingModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SITE_CONFIG } from '@/data/siteConfig';
import { PRODUCTS } from '@/data/products';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Tech Store, Computer OS & Battery Service & Engineering Portfolio`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'WS Smart Solution offers genuine computer hardware, SSDs, laptop & UPS batteries, Windows/Linux OS installation, battery pack rebuilding, OpenWrt routers, and custom IoT & software engineering solutions.',
  keywords: [
    'WS Smart Solution',
    'Computer OS Installation',
    'Windows 11 Installation Service',
    'Laptop Battery Replacement',
    'UPS Battery Service',
    'OpenWrt Public WiFi Router',
    'SafePrint Linux Print Server',
    'Tech E-Commerce Store Bangladesh',
    'IoT Software Portfolio',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — Smart Tech Store, OS & Battery Lab & Portfolio`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ComputerStore', 'ComputerRepair'],
        '@id': `${SITE_CONFIG.url}/#business`,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.shortName,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        telephone: SITE_CONFIG.contact.phone,
        email: SITE_CONFIG.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_CONFIG.contact.address,
          addressCountry: 'BD',
        },
        openingHours: 'Sa-Th 09:30-21:00',
        priceRange: '৳৳',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Tech Products & Computer Services',
          itemListElement: [
            ...SERVICES.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                description: s.shortDescription,
              },
              price: s.priceBDT,
              priceCurrency: 'BDT',
            })),
            ...PRODUCTS.slice(0, 5).map((p) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: p.name,
                sku: p.sku,
                description: p.description,
              },
              price: p.priceBDT,
              priceCurrency: 'BDT',
              availability: 'https://schema.org/InStock',
            })),
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        publisher: { '@id': `${SITE_CONFIG.url}/#business` },
      },
    ],
  };

  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <StoreProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <ServiceBookingModal />
          <FloatingWhatsApp />
        </StoreProvider>
      </body>
    </html>
  );
}
