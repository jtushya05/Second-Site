'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import UKHero from '@/components/destinations/united-kingdom/UKHero';
import WhyStudyUK from '@/components/destinations/united-kingdom/WhyStudyUK';
import PopularCourses from '@/components/destinations/united-kingdom/PopularCourses';
import TopUniversities from '@/components/destinations/united-kingdom/TopUniversities';
import AdmissionRequirements from '@/components/destinations/united-kingdom/AdmissionRequirements';
import StudentLife from '@/components/destinations/united-kingdom/StudentLife';
import CostCalculator from '@/components/destinations/united-kingdom/CostCalculator';
import ApplicationProcess from '@/components/destinations/united-kingdom/ApplicationProcess';
import FAQ from '@/components/destinations/united-kingdom/FAQ';
import CTASection from '@/components/destinations/united-kingdom/CTASection';
import FixedBanner from '@/components/destinations/united-kingdom/FixedBanner';

export default function UKDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <UKHero />
        <WhyStudyUK />
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