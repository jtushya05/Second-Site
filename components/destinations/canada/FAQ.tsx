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
    question: 'What are the popular courses to study in Canada?',
    answer: 'The most popular courses among Indian students include Data Science, Business Analytics, Engineering, Computer Science, MBA, and Healthcare Management. Canadian universities are particularly known for their research opportunities and practical training programs.'
  },
  {
    question: 'What are the living expenses in Canada?',
    answer: 'Living expenses vary by city. In major cities like Toronto and Vancouver, expect to spend CAD 1,500-2,500 per month, while smaller cities may cost CAD 1,000-1,800 monthly. This includes accommodation, food, transport, and other essentials.'
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. After graduation, you can apply for a Post-Graduation Work Permit (PGWP) for up to 3 years.'
  },
  {
    question: 'What is the application timeline?',
    answer: 'Canadian universities typically have two main intakes: Fall (September) and Winter (January). Applications should be submitted 8-12 months before the intended start date. Some programs may also offer Summer (May) intake.'
  },
  {
    question: 'Are scholarships available for Indian students?',
    answer: 'Yes, various scholarships are available including the Vanier Canada Graduate Scholarships, Banting Postdoctoral Fellowships, and university-specific scholarships. Many cover tuition fees and living expenses.'
  },
  {
    question: 'What is the Post-Graduation Work Permit (PGWP)?',
    answer: 'The PGWP allows international graduates to work in Canada for up to 3 years after completing their studies. The duration depends on your program length. This can be a pathway to permanent residency through programs like Express Entry.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about studying in Canada
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