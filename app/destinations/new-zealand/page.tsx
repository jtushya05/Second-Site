'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import NewZealandHero from '@/components/destinations/new-zealand/NewZealandHero';
import WhyStudyNewZealand from '@/components/destinations/new-zealand/WhyStudyNewZealand';
import PopularCourses from '@/components/destinations/new-zealand/PopularCourses';
import TopUniversities from '@/components/destinations/new-zealand/TopUniversities';
import AdmissionRequirements from '@/components/destinations/new-zealand/AdmissionRequirements';
import StudentLife from '@/components/destinations/new-zealand/StudentLife';
import CostCalculator from '@/components/destinations/new-zealand/CostCalculator';
import ApplicationProcess from '@/components/destinations/new-zealand/ApplicationProcess';
import FAQ from '@/components/destinations/new-zealand/FAQ';
import CTASection from '@/components/destinations/new-zealand/CTASection';
import FixedBanner from '@/components/destinations/new-zealand/FixedBanner';

export default function NewZealandDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <NewZealandHero />
        <WhyStudyNewZealand />
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