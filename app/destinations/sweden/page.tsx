'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import SwedenHero from '@/components/destinations/sweden/SwedenHero';
import WhyStudySweden from '@/components/destinations/sweden/WhyStudySweden';
import PopularCourses from '@/components/destinations/sweden/PopularCourses';
import TopUniversities from '@/components/destinations/sweden/TopUniversities';
import AdmissionRequirements from '@/components/destinations/sweden/AdmissionRequirements';
import StudentLife from '@/components/destinations/sweden/StudentLife';
import CostCalculator from '@/components/destinations/sweden/CostCalculator';
import ApplicationProcess from '@/components/destinations/sweden/ApplicationProcess';
import FAQ from '@/components/destinations/sweden/FAQ';
import CTASection from '@/components/destinations/sweden/CTASection';
import FixedBanner from '@/components/destinations/sweden/FixedBanner';

export default function SwedenDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <SwedenHero />
        <WhyStudySweden />
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

/* code for coming soon
import ComingSoon from '../../../components/destinations/ComingSoon';

export default function SwedenPage() {
  return <ComingSoon country="sweden" />;
}
*/
