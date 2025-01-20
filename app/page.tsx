'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import Services from '@/components/Services';
import PopularDestinations from '@/components/PopularDestinations';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FloatingContactWidgets from '@/components/FloatingContactWidgets';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
    <NextSeo
        title="EA Global - Your Gateway to International Education"
        description="EA Global is Chennai's best educational consultancy specializing in study abroad services and English proficiency test preparation."
        openGraph={{
          type: 'website',
          url: 'https://studyoverseas.netlify.app',
          title: 'EA Global - Your Gateway to International Education',
          description:
            "EA Global is Chennai's best educational consultancy specializing in study abroad services and English proficiency test preparation.",
          images: [
            {
              url: 'https://studyoverseas.netlify.app/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'EA Global',
            },
          ],
        }}
        twitter={{
          handle: '@eaglobal',
          site: '@eaglobal',
          cardType: 'summary_large_image',
        }}
      />


      <BaseNavigation variant="transparent" />
      <main className="flex flex-col">
        <HeroSection />
        <div className="bg-white">
          <AboutSection />
        </div>
        <div className="bg-gray-50">
          <Services />
        </div>
        <div className="bg-white">
          <PopularDestinations />
        </div>
        <div className="bg-gray-50">
          <Testimonials />
        </div>
        <div className="bg-white">
          <ContactSection />
        </div>
      </main>
      <FloatingContactWidgets />
    </>
  );
}