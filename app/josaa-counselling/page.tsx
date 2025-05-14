    'use client';

import './josaa.css';
import { NextSeo } from 'next-seo';
import BaseNavigation from '@/components/navigation/BaseNavigation';
import HeroSection from '@/components/josaa/HeroSection';
import AboutSection from '@/components/josaa/AboutSection';
import ServicesSection from '@/components/josaa/ServicesSection';
import WhyChooseUsSection from '@/components/josaa/WhyChooseUsSection';
import TestimonialsSection from '@/components/josaa/TestimonialsSection';
import FAQSection from '@/components/josaa/FAQSection';
import CTASection from '@/components/josaa/CTASection';
import FloatingContactWidgets from '@/components/FloatingContactWidgets';

export default function JoSAALandingPage() {
  return (
    <>      <NextSeo
        title="JoSAA Counselling | Expert Guidance for IIT & NIT Admissions"
        description="Get expert JoSAA counselling for IIT, NIT and other top engineering colleges in India. Personalized guidance for seat allocation and admission process."
        openGraph={{
          type: 'website',
          url: 'https://studyabroad.englisharenaglobal.com/josaa-counselling',
          title: 'JoSAA Counselling | Expert Guidance for IIT & NIT Admissions',
          description: 'Get expert JoSAA counselling for IIT, NIT and other top engineering colleges in India. Personalized guidance for seat allocation and admission process.'
        }}
      />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FloatingContactWidgets />
    </>
  );
}