//'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import AboutHero from '@/components/sections/about/AboutHero';
import OurMission from '@/components/sections/about/OurMission';
import OurTeam from '@/components/sections/about/OurTeam';
import WhyChooseUs from '@/components/sections/about/WhyChooseUs';
import OurValues from '@/components/sections/about/OurValues';
import Stats from '@/components/sections/about/Stats';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about EA Global, Chennai\'s best educational consultancy specializing in study abroad services and English proficiency test preparation.',
};

export default function AboutPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <AboutHero />
      <OurMission />
      <WhyChooseUs />
      <Stats />
      <OurValues />
      <OurTeam />
    </>
  );
}