'use client';

import { Container } from '@/components/ui/container';
import { features, scheduleItems } from '@/lib/test-prep/celpip-data';
import CELPIPHeroSection from './CELPIPHeroSection';
import TestFormat from './TestFormat';
import FeatureCard from '../shared/FeatureCard';
import ScheduleCard from '../shared/ScheduleCard';
import PreparationTips from '../shared/PreparationTips';
import FAQ from '../shared/FAQ';
import CTASection from './CTASection';

const celpipFaqs = [
  {
    question: 'What is CELPIP?',
    answer: 'CELPIP (Canadian English Language Proficiency Index Program) is a fully computer-delivered English language testing program that enables test takers to demonstrate their ability to function in English.'
  },
  {
    question: 'Who accepts CELPIP?',
    answer: 'CELPIP is accepted by Immigration, Refugees and Citizenship Canada (IRCC) for permanent residence applications and citizenship applications. It\'s also accepted by various professional organizations across Canada.'
  },
  {
    question: 'What is the test format?',
    answer: 'CELPIP consists of four components: Listening (47-55 minutes), Reading (55-60 minutes), Writing (53-60 minutes), and Speaking (15-20 minutes).'
  },
  {
    question: 'How is CELPIP scored?',
    answer: 'CELPIP uses a 12-point scoring system, from M (minimal) to 12 (advanced). Most immigration programs require scores between 7 and 9.'
  },
  {
    question: 'How long is CELPIP valid?',
    answer: 'CELPIP test results are valid for a period of 2 years from the date of the test.'
  },
  {
    question: 'What\'s the difference between CELPIP and IELTS?',
    answer: 'While both tests assess English proficiency, CELPIP is fully computer-delivered and focuses on Canadian English, while IELTS is partially paper-based and accepts all English varieties.'
  }
];

export default function CELPIPPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <CELPIPHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is CELPIP?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              The Canadian English Language Proficiency Index Program (CELPIP) is a fully computer-delivered English language testing program that enables test takers to demonstrate their ability to function in English in Canada.
            </p>
            <p>
              Designated by Immigration, Refugees and Citizenship Canada (IRCC), CELPIP is accepted as proof of English language proficiency for permanent residence applications and citizenship applications, making it a crucial step in your Canadian immigration journey.
            </p>
          </div>
        </section>

        <TestFormat />
        <PreparationTips />

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for CELPIP Preparation?</h2>
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

        <FAQ faqs={celpipFaqs} />
        <CTASection />
      </Container>
    </div>
  );
}