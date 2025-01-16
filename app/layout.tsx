'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@/components/Analytics';
import { Container } from '@/components/ui/container';
import { DefaultSeo } from 'next-seo';

// export const metadata = {
//   metadataBase: new URL('https://studyoverseas.netlify.app'),
// };

const inter = Inter({ subsets: ['latin'] });

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
