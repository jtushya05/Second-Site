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
    question: 'What are the popular courses to study in the UK?',
    answer: 'The most popular courses among Indian students include MSc Data Science, MBA, Engineering, Computer Science, Healthcare Management, and Business Analytics. UK universities are particularly known for their excellence in research-based programs.'
  },
  {
    question: 'What are the living expenses in the UK?',
    answer: 'Living expenses vary by location. In London, expect to spend £1,200-£1,500 per month, while other cities may cost £800-£1,000 monthly. This includes accommodation, food, transport, and other essentials.'
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students can work up to 20 hours per week during term time and full-time during holidays. After graduation, you can apply for the Graduate Route visa to work for 2 years (3 years for PhD graduates).'
  },
  {
    question: 'What is the application timeline?',
    answer: 'UK universities typically have two main intakes: September/October and January. Applications should be submitted 6-8 months before the intended start date. Some competitive courses may have earlier deadlines.'
  },
  {
    question: 'Are scholarships available for Indian students?',
    answer: 'Yes, various scholarships are available including the British Council Scholarships, Commonwealth Scholarships, and university-specific scholarships. Many cover tuition fees and living expenses.'
  },
  {
    question: 'What is the Graduate Route visa?',
    answer: 'The Graduate Route visa allows international students to stay and work in the UK for 2 years after completing their degree (3 years for PhD graduates). No sponsor is required, and there\'s no minimum salary threshold.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about studying in the United Kingdom
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