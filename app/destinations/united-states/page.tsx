'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import USHero from '@/components/destinations/united-states/USHero';
import WhyStudyUS from '@/components/destinations/united-states/WhyStudyUS';
import TopUniversities from '@/components/destinations/united-states/TopUniversities';
import AdmissionRequirements from '@/components/destinations/united-states/AdmissionRequirements';
import StudentLife from '@/components/destinations/united-states/StudentLife';
import CostCalculator from '@/components/destinations/united-states/CostCalculator';
import ApplicationProcess from '@/components/destinations/united-states/ApplicationProcess';
import FAQ from '@/components/destinations/united-states/FAQ';
import CTASection from '@/components/destinations/united-states/CTASection';
import FixedBanner from '@/components/destinations/united-states/FixedBanner';

export default function USDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <USHero />
        <WhyStudyUS />
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