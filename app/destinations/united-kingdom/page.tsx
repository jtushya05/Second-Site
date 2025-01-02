'use client';

import { Container } from '@/components/ui/container';
import BaseNavigation from '@/components/navigation/BaseNavigation';
import UKHero from '@/components/destinations/united-kingdom/UKHero';
import WhyStudyUK from '@/components/destinations/united-kingdom/WhyStudyUK';
import TopUniversities from '@/components/destinations/united-kingdom/TopUniversities';
import PopularCourses from '@/components/destinations/united-kingdom/PopularCourses';
import ApplicationProcess from '@/components/destinations/united-kingdom/ApplicationProcess';
import AdmissionRequirements from '@/components/destinations/united-kingdom/AdmissionRequirements';
import CostCalculator from '@/components/destinations/united-kingdom/CostCalculator';
import StudentLife from '@/components/destinations/united-kingdom/StudentLife';
import FAQ from '@/components/destinations/united-kingdom/FAQ';
import CTASection from '@/components/destinations/united-kingdom/CTASection';
import FixedBanner from '@/components/destinations/united-kingdom/FixedBanner';

export default function UKPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <div className="min-h-screen">
        <UKHero />
        <Container className="py-12">
          <WhyStudyUK />
          <TopUniversities />
          <PopularCourses />
          <ApplicationProcess />
          <AdmissionRequirements />
          <CostCalculator />
          <StudentLife />
          <FAQ />
        </Container>
        <CTASection />
        <FixedBanner />
      </div>
      
    </>
  );
}
