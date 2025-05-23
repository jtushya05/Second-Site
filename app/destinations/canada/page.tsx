'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import canadaHero from '@/components/destinations/canada/CanadaHero';
import WhyStudycanada from '@/components/destinations/canada/WhyStudyCanada';
import PopularCourses from '@/components/destinations/canada/PopularCourses';
import TopUniversities from '@/components/destinations/canada/TopUniversities';
import AdmissionRequirements from '@/components/destinations/canada/AdmissionRequirements';
import StudentLife from '@/components/destinations/canada/StudentLife';
import CostCalculator from '@/components/destinations/canada/CostCalculator';
import ApplicationProcess from '@/components/destinations/canada/ApplicationProcess';
import FAQ from '@/components/destinations/canada/FAQ';
import CTASection from '@/components/destinations/canada/CTASection';
import FixedBanner from '@/components/destinations/canada/FixedBanner';
import CanadaHero from '@/components/destinations/canada/CanadaHero';

export default function canadaDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <CanadaHero />
        <WhyStudycanada />
        <PopularCourses />
        <TopUniversities />
        <AdmissionRequirements />
        <StudentLife />
        <CostCalculator />
        <ApplicationProcess />
        <FAQ />
        <CTASection />
        <FixedBanner />
      </main>
    </>
  );
}