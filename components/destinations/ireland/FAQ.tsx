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
    question: 'What are the popular courses to study in Ireland?',
    answer: 'Popular courses include Business, Computer Science, Engineering, Medicine, and Arts. Irish universities are globally recognized for their quality education.',
  },
  {
    question: 'What are the living expenses in Ireland?',
    answer: 'Living costs depend on the city. On average, students spend €800-1,500 per month on accommodation, food, and other essentials.',
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, students can work up to 20 hours per week during term and full-time during breaks. It’s a great way to support your living expenses and gain experience.',
  },
  {
    question: 'What is the application timeline?',
    answer: 'Most universities in Ireland have intakes in September and January. Submit applications 6-9 months before your desired intake.',
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Yes, many scholarships are available, including those offered by the Irish government and universities. These often cover tuition and living costs.',
  },
  {
    question: 'What is the Third Level Graduate Scheme?',
    answer: 'Graduates from Irish universities can stay and work in Ireland for up to two years after completing their degree under this scheme.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-700">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Find answers to common questions about studying in Ireland
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-green-700">
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
