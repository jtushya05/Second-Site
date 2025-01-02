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
    question: 'What are the popular courses to study in the USA?',
    answer: 'The USA offers a wide range of popular courses including Computer Science, Business Administration, Engineering, Medicine, Law, and Arts. The choice of course often depends on the university\'s specialization and your career goals.'
  },
  {
    question: 'What are the admission requirements for US universities?',
    answer: 'Common requirements include academic transcripts, standardized test scores (SAT/ACT), English proficiency tests (TOEFL/IELTS), letters of recommendation, and a statement of purpose. Specific requirements vary by university and program.'
  },
  {
    question: 'How much does it cost to study in the USA?',
    answer: 'Tuition fees range from $20,000 to $60,000 per year for international students. Living expenses can add another $10,000 to $20,000 annually, depending on the location and lifestyle.'
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students on F-1 visas can work on-campus for up to 20 hours per week during academic sessions and full-time during breaks. After the first year, you may be eligible for off-campus work through CPT or OPT.'
  },
  {
    question: 'What is the application timeline?',
    answer: 'Most US universities have two main intake periods: Fall (August/September) and Spring (January). Applications typically open 8-12 months before the start date. Early applications are recommended for better chances of admission and scholarships.'
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Yes, many US universities offer scholarships for international students based on academic merit, sports, or specific talents. Additionally, there are various external scholarships and financial aid options available.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about studying in the United States
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