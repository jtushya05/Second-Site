'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import Services from '@/components/Services';
import PopularDestinations from '@/components/PopularDestinations';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
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
    </>
  );
}