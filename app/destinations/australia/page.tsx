'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import AustraliaHero from '@/components/destinations/australia/AustraliaHero';
import WhyStudyAustralia from '@/components/destinations/australia/WhyStudyAustralia';
import PopularCourses from '@/components/destinations/australia/PopularCourses';
import TopUniversities from '@/components/destinations/australia/TopUniversities';
import AdmissionRequirements from '@/components/destinations/australia/AdmissionRequirements';
import StudentLife from '@/components/destinations/australia/StudentLife';
import CostCalculator from '@/components/destinations/australia/CostCalculator';
import ApplicationProcess from '@/components/destinations/australia/ApplicationProcess';
import FAQ from '@/components/destinations/australia/FAQ';
import CTASection from '@/components/destinations/australia/CTASection';
import FixedBanner from '@/components/destinations/australia/FixedBanner';

export default function AustraliaDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <AustraliaHero />
        <WhyStudyAustralia />
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