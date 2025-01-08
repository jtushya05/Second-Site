'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import FranceHero from '@/components/destinations/france/FranceHero';
import WhyStudyFrance from '@/components/destinations/france/WhyStudyFrance';
import PopularCourses from '@/components/destinations/france/PopularCourses';
import TopUniversities from '@/components/destinations/france/TopUniversities';
import AdmissionRequirements from '@/components/destinations/france/AdmissionRequirements';
import StudentLife from '@/components/destinations/france/StudentLife';
import CostCalculator from '@/components/destinations/france/CostCalculator';
import ApplicationProcess from '@/components/destinations/france/ApplicationProcess';
import FAQ from '@/components/destinations/france/FAQ';
import CTASection from '@/components/destinations/france/CTASection';
import FixedBanner from '@/components/destinations/france/FixedBanner';

export default function FranceDestinationPage() {
  return (
    <>
      <BaseNavigation variant="transparent" />
      <main>
        <FranceHero />
        <WhyStudyFrance />
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

export default function FrancePage() {
  return <ComingSoon country="france" />;
}
*/