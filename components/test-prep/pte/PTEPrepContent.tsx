'use client';

import { Container } from '@/components/ui/container';
import { features, scheduleItems } from '@/lib/test-prep/pte-data';
import PTEHeroSection from './PTEHeroSection';
import TestFormat from './TestFormat';
import FeatureCard from '../shared/FeatureCard';
import ScheduleCard from '../shared/ScheduleCard';
import PreparationTips from '../shared/PreparationTips';
import FAQ from '../shared/FAQ';
import CTASection from './CTASection';

const pteFaqs = [
  {
    question: 'What is PTE Academic?',
    answer: 'PTE Academic is a computer-based English language test that assesses speaking, writing, reading and listening abilities of non-native English speakers.'
  },
  {
    question: 'How long is the PTE test valid?',
    answer: 'PTE Academic scores are valid for two years from the date of test.'
  },
  {
    question: 'What is the test format?',
    answer: 'The test has three main parts: Speaking & Writing (77-93 minutes), Reading (32-41 minutes), and Listening (45-57 minutes).'
  },
  {
    question: 'What is a good PTE score?',
    answer: 'PTE Academic is scored on a scale of 10-90. Most universities require a score between 50-65, though requirements vary by institution.'
  }
];

export default function PTEPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <PTEHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is PTE Academic?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              PTE Academic is a computer-based English language test that assesses the speaking, writing, reading and listening abilities of non-native English speakers who want to study abroad or immigrate.
            </p>
            <p>
              Widely accepted by thousands of universities worldwide, PTE Academic offers fast results with flexible test dates and locations.
            </p>
          </div>
        </section>

        <TestFormat />
        <PreparationTips />

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for PTE Preparation?</h2>
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

        <FAQ faqs={pteFaqs} />
        <CTASection />
      </Container>
    </div>
  );
}