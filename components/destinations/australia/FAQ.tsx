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
    question: 'What are the popular courses to study in Australia?',
    answer: 'The most popular courses among international students include Business, Engineering, Information Technology, Health Sciences, and Environmental Studies. Australian universities are particularly known for their research opportunities and practical training programs.'
  },
  {
    question: 'What are the living expenses in Australia?',
    answer: 'Living expenses vary by city and lifestyle. In major cities like Sydney and Melbourne, expect to spend AUD 1,800-2,500 per month, while regional areas may cost AUD 1,200-1,700 monthly. This includes accommodation, food, transport, and other essentials.'
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students can work up to 48 hours per fortnight during term time and unlimited hours during scheduled breaks. After graduation, you can apply for a Post-Study Work visa for 2-4 years depending on your qualification.'
  },
  {
    question: 'What is the application timeline?',
    answer: 'Australian universities typically have two main intakes: February (Semester 1) and July (Semester 2). Applications should be submitted 8-12 months before the intended start date. Some programs may also offer mid-semester intakes.'
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Yes, various scholarships are available including the Australia Awards, university-specific scholarships, and government-funded research scholarships. Many cover tuition fees and living expenses.'
  },
  {
    question: 'What is the Post-Study Work visa?',
    answer: 'The Post-Study Work visa (subclass 485) allows international graduates to work in Australia for 2-4 years after completing their studies. The duration depends on your qualification level and location of study.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about studying in Australia
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