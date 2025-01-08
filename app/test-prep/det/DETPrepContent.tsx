'use client';

import { Container } from '@/components/ui/container';
import { features, scheduleItems } from '@/lib/test-prep/det-data';
import DETHeroSection from './DETHeroSection';
import TestFormat from './TestFormat';
import FeatureCard from '../../../components/test-prep/shared/FeatureCard';
import ScheduleCard from '../../../components/test-prep/shared/ScheduleCard';
import PreparationTips from '../../../components/test-prep/shared/PreparationTips';
import FAQ from '../../../components/test-prep/shared/FAQ';
import CTASection from './CTASection';

const detFaqs = [
  {
    question: 'What is the Duolingo English Test?',
    answer: 'The Duolingo English Test (DET) is a modern, computer-adaptive English proficiency test that can be taken online anytime. It\'s accepted by thousands of institutions worldwide.'
  },
  {
    question: 'How is DET different from other English tests?',
    answer: 'DET is fully computer-adaptive, meaning the difficulty adjusts based on your performance. It\'s also shorter (about 1 hour), less expensive, and provides results within 48 hours.'
  },
  {
    question: 'What is the test format?',
    answer: 'The test includes four main components: Literacy, Comprehension, Production, and Conversation. It uses adaptive technology to assess your English skills through various tasks.'
  },
  {
    question: 'How is DET scored?',
    answer: 'DET provides scores on a scale of 10-160. Most universities require scores between 100-120, though requirements vary by institution.'
  },
  {
    question: 'How long is DET valid?',
    answer: 'DET scores are valid for 2 years from the test date.'
  },
  {
    question: 'Can I retake the test?',
    answer: 'Yes, you can retake the test after a waiting period of 14 days. There\'s no limit on the number of times you can take the test.'
  }
];

export default function DETPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <DETHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is the Duolingo English Test?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              The Duolingo English Test (DET) is a modern, computer-adaptive English proficiency test that provides fast and convenient testing solutions for students worldwide. It combines cutting-edge technology with rigorous standards to measure English proficiency accurately.
            </p>
            <p>
              Accepted by over 3,000 institutions globally, DET offers a convenient and affordable way to prove your English proficiency for university admissions and other purposes.
            </p>
          </div>
        </section>

        <TestFormat />
        <PreparationTips />

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for DET Preparation?</h2>
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

        <FAQ faqs={detFaqs} />
        <CTASection />
      </Container>
    </div>
  );
}