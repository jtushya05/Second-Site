'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import IrelandHero from '@/components/destinations/ireland/IrelandHero';
import WhyStudyIreland from '@/components/destinations/ireland/WhyStudyIreland';
import PopularCourses from '@/components/destinations/ireland/PopularCourses';
import TopUniversities from '@/components/destinations/ireland/TopUniversities';
import AdmissionRequirements from '@/components/destinations/ireland/AdmissionRequirements';
import StudentLife from '@/components/destinations/ireland/StudentLife';
import CostCalculator from '@/components/destinations/ireland/CostCalculator';
import ApplicationProcess from '@/components/destinations/ireland/ApplicationProcess';
import FAQ from '@/components/destinations/ireland/FAQ';
import CTASection from '@/components/destinations/ireland/CTASection';
import FixedBanner from '@/components/destinations/ireland/FixedBanner';

export default function IrelandDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <IrelandHero />
        <WhyStudyIreland />
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
