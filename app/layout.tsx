import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/seo/json-ld'
import { CartProvider } from '@/context/cart-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://estonoesensalada.com'),
  title: {
    default: 'Esto No Es Ensalada | Platos 100% Plantas',
    template: '%s | Esto No Es Ensalada'
  },
  description: 'Acá no hay ensalada. Solo platos con personalidad, sabor intenso y 100% plantas. Viandas veganas y naturales en Buenos Aires.',
  keywords: ['comida vegana', 'plant based', 'viandas veganas', 'comida saludable', 'delivery vegano', 'buenos aires', 'seitán', 'chorizo vegano'],
  authors: [{ name: 'Esto No Es Ensalada' }],
  creator: 'Esto No Es Ensalada',
  publisher: 'Esto No Es Ensalada',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    title: 'Esto No Es Ensalada | Platos 100% Plantas',
    description: 'Acá no hay ensalada. Solo platos con personalidad, sabor intenso y 100% plantas.',
    siteName: 'Esto No Es Ensalada',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Esto No Es Ensalada - Platos 100% Plantas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esto No Es Ensalada | Platos 100% Plantas',
    description: 'Acá no hay ensalada. Solo platos con personalidad, sabor intenso y 100% plantas.',
    images: ['/logo.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <JsonLd />
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
