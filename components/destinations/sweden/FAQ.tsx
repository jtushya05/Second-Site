'use client';

import { Container } from '@/components/ui/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What are the popular courses to study in Sweden?',
    answer: 'Popular programs include Engineering, Business Administration, IT, Environmental Sciences, and Design. Sweden is known for its innovative and research-driven education.',
  },
  {
    question: 'What are the living expenses in Sweden?',
    answer: 'Living expenses vary based on location, but students typically spend SEK 8,000–12,000 per month on housing, food, transportation, and other essentials.',
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students can work while studying without specific work permits. However, balancing work with studies is crucial.',
  },
  {
    question: 'What is the application timeline?',
    answer: 'Most Swedish universities have two main intakes: January and August. Applications should be submitted 8-12 months before the intended start date.',
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Yes, several scholarships are available, such as the Swedish Institute Scholarships and university-specific funding, often covering tuition fees and living expenses.',
  },
  {
    question: 'What is the Post-Study Work visa?',
    answer: 'Graduates can apply for an extension of their residence permit for up to 6 months to look for work or start a business in Sweden.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-yellow-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Find answers to common questions about studying in Sweden.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-blue-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
