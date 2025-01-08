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
    question: 'What are the popular courses to study in New Zealand?',
    answer: 'Popular courses include Business, Information Technology, Engineering, Environmental Science, and Tourism. Universities in New Zealand are globally recognized for their high standards.',
  },
  {
    question: 'What are the living expenses in New Zealand?',
    answer: 'Living costs depend on the city. On average, students spend NZD 1,200-2,000 per month on accommodation, food, and other essentials.',
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, students can work up to 20 hours per week during term and full-time during breaks. Work experience is a great way to support your living expenses.',
  },
  {
    question: 'What is the application timeline?',
    answer: 'Most universities have two intakes: February and July. Submit applications 6-9 months before your desired intake. Some programs may offer rolling admissions.',
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Yes, several scholarships are available for international students, including government and university-specific scholarships that often cover tuition and living costs.',
  },
  {
    question: 'What is the Post-Study Work visa?',
    answer: 'Graduates can apply for a Post-Study Work visa to stay and work in New Zealand for up to 3 years depending on their qualification level and region of study.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about studying in New Zealand
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
