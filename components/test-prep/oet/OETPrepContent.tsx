'use client';

import { Container } from '@/components/ui/container';
import { features, scheduleItems } from '@/lib/test-prep/oet-data';
import OETHeroSection from './OETHeroSection';
import TestFormat from './TestFormat';
import FeatureCard from '../shared/FeatureCard';
import ScheduleCard from '../shared/ScheduleCard';
import PreparationTips from '../shared/PreparationTips';
import FAQ from '../shared/FAQ';
import CTASection from './CTASection';

const oetFaqs = [
  {
    question: 'What is OET?',
    answer: 'The Occupational English Test (OET) is a language test that assesses the English language proficiency of healthcare professionals seeking to register and practice in an English-speaking environment.'
  },
  {
    question: 'Who accepts OET?',
    answer: 'OET is recognized by healthcare boards, councils, and hospitals in the UK, Ireland, Australia, New Zealand, Singapore, Dubai, and other countries.'
  },
  {
    question: 'What is the test format?',
    answer: 'OET has four sub-tests: Listening (45 minutes), Reading (60 minutes), Writing (45 minutes), and Speaking (20 minutes). Each test is specific to your healthcare profession.'
  },
  {
    question: 'How is OET scored?',
    answer: 'OET is scored on a scale from 0 to 500, which corresponds to grades from A (highest) to E (lowest). Most organizations require a minimum of 350 (Grade B).'
  },
  {
    question: 'How long is OET valid?',
    answer: 'OET results are valid for 2 years from the date of the test.'
  },
  {
    question: 'Is OET easier than IELTS?',
    answer: 'OET is not necessarily easier, but healthcare professionals often find it more relevant as it tests English language ability in a medical context.'
  }
];

export default function OETPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <OETHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is OET?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              The Occupational English Test (OET) is a language test specifically designed for healthcare professionals. It assesses the language communication skills of healthcare professionals who wish to register and practice in an English-speaking environment.
            </p>
            <p>
              Unlike general English tests, OET test materials are based on real healthcare scenarios, making it highly relevant for medical professionals including doctors, nurses, dentists, and other healthcare specialists.
            </p>
          </div>
        </section>

        <TestFormat />
        <PreparationTips />

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for OET Preparation?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Course Schedule</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {scheduleItems.map((item) => (
              <ScheduleCard
                key={item.title}
                title={item.title}
                detail={item.detail}
                icon={item.icon}
              />
            ))}
          </div>
        </section>

        <FAQ faqs={oetFaqs} />
        <CTASection />
      </Container>
    </div>
  );
}