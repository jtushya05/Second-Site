    'use client';

import './josaa.css';
import './custom-layout.css';
import { NextSeo } from 'next-seo';
import HeroSection from '@/components/josaa/HeroSection';
import AboutSection from '@/components/josaa/AboutSection';
import ServicesSection from '@/components/josaa/ServicesSection';
import WhyChooseUsSection from '@/components/josaa/WhyChooseUsSection';
import TestimonialsSection from '@/components/josaa/TestimonialsSection';
import FAQSection from '@/components/josaa/FAQSection';
import CTASection from '@/components/josaa/CTASection';
import TimelineSection from '@/components/josaa/TimelineSection';
import CollegeGuideSection from '@/components/josaa/CollegeGuideSection';
import StatsSection from '@/components/josaa/StatsSection';
import SuccessMetricsSection from '@/components/josaa/SuccessMetricsSection';
import FeatureComparisonSection from '@/components/josaa/FeatureComparisonSection';
import ResourcesSection from '@/components/josaa/ResourcesSection';
import FloatingContactWidgets from '@/components/FloatingContactWidgets';

export default function JoSAALandingPage() {  return (
    <>      <NextSeo
        title="JoSAA Counselling 2025 | Expert Guidance for JEE & College Admissions"
        description="Get expert JoSAA counselling for JEE Main/Advanced results. Personalized guidance for IIT, NIT, IIIT, and other top engineering colleges. Best choice filling strategies for all rank ranges."
        canonical="https://studyabroad.englisharenaglobal.com/josaa-counselling"
        openGraph={{
          type: 'website',
          url: 'https://studyabroad.englisharenaglobal.com/josaa-counselling',
          title: 'JoSAA Counselling 2025 | Expert Guidance for JEE & College Admissions',
          description: 'Get expert JoSAA counselling for JEE Main/Advanced results. Personalized guidance for IIT, NIT, IIIT, and other top engineering colleges. Best choice filling strategies for all rank ranges.',
          images: [
            {
              url: 'https://studyabroad.englisharenaglobal.com/images/josaa-counselling-banner.jpg',
              width: 1200,
              height: 630,
              alt: 'JoSAA Counselling by EA Global',
            }
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'JoSAA counselling, JEE counselling, JEE Main counselling, JEE Advanced counselling, engineering college admission, IIT admission, NIT admission, IIIT admission, college choice filling, seat allocation, CSAB Special Round'
          },
          {
            name: 'author',
            content: 'EA Global'
          },
        ]}      /><main className="pt-0 pb-0 m-0 josaa-main josaa-main-override">
        <HeroSection />
        <SuccessMetricsSection />
        <AboutSection />
        <ServicesSection />
        <TimelineSection />
        <CollegeGuideSection />
        <StatsSection />
        <WhyChooseUsSection />
        <FeatureComparisonSection />
        <ResourcesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FloatingContactWidgets />
    </>
  );
}