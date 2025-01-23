'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import GermanyHero from '@/components/destinations/germany/GermanyHero';
import WhyStudyGermany from '@/components/destinations/germany/WhyStudyGermany';
import PopularCourses from '@/components/destinations/germany/PopularCourses';
import TopUniversities from '@/components/destinations/germany/TopUniversities';
import AdmissionRequirements from '@/components/destinations/germany/AdmissionRequirements';
import StudentLife from '@/components/destinations/germany/StudentLife';
import CostCalculator from '@/components/destinations/germany/CostCalculator';
import ApplicationProcess from '@/components/destinations/germany/ApplicationProcess';
import FAQ from '@/components/destinations/germany/FAQ';
import CTASection from '@/components/destinations/germany/CTASection';
import FixedBanner from '@/components/destinations/germany/FixedBanner';

export default function GermanyDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <GermanyHero />
        <WhyStudyGermany />
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