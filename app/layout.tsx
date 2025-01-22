//'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@/components/Analytics';
import { Container } from '@/components/ui/container';
import { DefaultSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.englisharenaglobal.com'),
  title: {
    default: 'EA Global - Your Gateway to International Education',
    template: '%s | EA Global - Your Gateway to International Education',
  },
  description: 'EA Global is Chennai\'s best educational consultancy specializing in study abroad services and English proficiency test preparation.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%230008ff\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\'/><path d=\'M22 10v6\'/><path d=\'M6 12.5V16a6 3 0 0 0 12 0v-3.5\'/></svg>',
      },
      {
        url: '/favicon.ico',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://studyoverseas.netlify.app',
    title: 'EA Global - Your Gateway to International Education',
    description: 'EA Global (formerly English Arena Global) is Chennai\'s best educational consultancy specializing in study abroad services and English proficiency test preparation, including IELTS, PTE, CELPIP, and OET. Get personalized coaching, mock tests, and expert guidance to achieve your academic and career goals.',
    images: [
      {
        //url: '/images/og-image.png',
        url: 'https://opengraph.b-cdn.net/production/images/0f8d4b4c-da0f-4e28-84bc-c642dc2e41b6.png?token=OQ87ZR3zcb1YGR2iPejzaCgoovTxRM2CfwEKolnz7mk&height=632&width=1200&expires=33273557911',
        width: 1200,
        height: 632,
        alt: 'EA Global Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'englisharenaglobal.com',
    url: 'https://www.englisharenaglobal.com/',
    title: 'EA Global - Your Gateway to International Education',
    description: 'EA Global is Chennai\'s best educational consultancy specializing in study abroad services and English proficiency test preparation.',
    //image: '/images/og-image.png',
    image: 'https://opengraph.b-cdn.net/production/images/0f8d4b4c-da0f-4e28-84bc-c642dc2e41b6.png?token=OQ87ZR3zcb1YGR2iPejzaCgoovTxRM2CfwEKolnz7mk&height=632&width=1200&expires=33273557911',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>EA Global - Your Gateway to International Education</title>
        <meta
          name="description"
          content="EA Global is Chennai's best educational consultancy specializing in study abroad services and English proficiency test preparation."
        />
        {/* Favicon setup */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230008ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z'/><path d='M22 10v6'/><path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5'/></svg>"
        />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}