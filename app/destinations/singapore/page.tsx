'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import SingaporeHero from '@/components/destinations/singapore/SingaporeHero';
import WhyStudySingapore from '@/components/destinations/singapore/WhyStudySingapore';
import PopularCourses from '@/components/destinations/singapore/PopularCourses';
import TopUniversities from '@/components/destinations/singapore/TopUniversities';
import AdmissionRequirements from '@/components/destinations/singapore/AdmissionRequirements';
import StudentLife from '@/components/destinations/singapore/StudentLife';
import CostCalculator from '@/components/destinations/singapore/CostCalculator';
import ApplicationProcess from '@/components/destinations/singapore/ApplicationProcess';
import FAQ from '@/components/destinations/singapore/FAQ';
import CTASection from '@/components/destinations/singapore/CTASection';
import FixedBanner from '@/components/destinations/singapore/FixedBanner';

export default function SingaporeDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <SingaporeHero />
        <WhyStudySingapore />
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