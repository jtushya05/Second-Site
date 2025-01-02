'use client';

import { Container } from '@/components/ui/container';
import { features, scheduleItems } from '@/lib/test-prep/toefl-data';
import TOEFLHeroSection from './TOEFLHeroSection';
import TestFormat from './TestFormat';
import FeatureCard from '../shared/FeatureCard';
import ScheduleCard from '../shared/ScheduleCard';
import PreparationTips from '../shared/PreparationTips';
import FAQ from '../shared/FAQ';
import CTASection from './CTASection';

const toeflFaqs = [
  {
    question: 'What is TOEFL iBT?',
    answer: 'TOEFL iBT (Internet-Based Test) is a standardized test that measures English language proficiency for academic purposes, specifically for non-native speakers planning to enroll in English-speaking universities.'
  },
  {
    question: 'How long is the TOEFL test valid?',
    answer: 'TOEFL test scores are valid for 2 years from the test date.'
  },
  {
    question: 'What is the test format?',
    answer: 'The TOEFL iBT test consists of 4 sections: Reading (54-72 minutes), Listening (41-57 minutes), Speaking (17 minutes), and Writing (50 minutes).'
  },
  {
    question: 'What is a good TOEFL score?',
    answer: 'A good TOEFL score typically ranges from 80 to 100 out of 120. However, requirements vary by institution and program.'
  },
  {
    question: 'How long does it take to prepare for TOEFL?',
    answer: 'Most students need 2-3 months of dedicated preparation. Our 8-week program is designed to provide comprehensive preparation for most candidates.'
  },
  {
    question: 'Is TOEFL accepted worldwide?',
    answer: 'Yes, TOEFL is accepted by over 11,500 universities and institutions in more than 160 countries, including top universities in the US, UK, Canada, and Australia.'
  }
];

export default function TOEFLPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <TOEFLHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is TOEFL?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              The Test of English as a Foreign Language (TOEFL) is one of the most widely respected English-language tests in the world, recognized by more than 11,500 universities and institutions in over 160 countries.
            </p>
            <p>
              Particularly popular for academic admissions, TOEFL iBT measures your ability to use and understand English at the university level and evaluates how well you combine your listening, reading, speaking, and writing skills to perform academic tasks.
            </p>
          </div>
        </section>

        <TestFormat />
        <PreparationTips />

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for TOEFL Preparation?</h2>
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

        <FAQ faqs={toeflFaqs} />
        <CTASection />
      </Container>
    </div>
  );
}