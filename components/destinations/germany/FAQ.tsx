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
    question: 'Are German universities really tuition-free?',
    answer: 'Most public universities in Germany are tuition-free for both domestic and international students. However, students need to pay semester fees (around €100-350) which usually include public transportation passes and other student services.'
  },
  {
    question: 'Do I need to know German to study in Germany?',
    answer: 'While many programs, especially at the Master\'s level, are offered in English, knowing German is beneficial for daily life. For German-taught programs, you\'ll need to prove German proficiency through TestDaF or DSH certificates.'
  },
  {
    question: 'What are the living costs in Germany?',
    answer: 'Monthly living costs typically range from €800-1,200, depending on the city. This includes accommodation (€300-600), food (€200-300), health insurance (€110), and other expenses.'
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students can work up to 120 full days or 240 half days per year. This helps many students cover their living expenses.'
  },
  {
    question: 'What is a blocked account and why do I need it?',
    answer: 'A blocked account (Sperrkonto) is required for the student visa. You need to deposit at least €11,208 (as of 2024) to prove you can support yourself for one year.'
  },
  {
    question: 'What are the post-study work opportunities?',
    answer: 'Graduates can stay in Germany for 18 months to seek employment related to their studies. Once you find a job, you can apply for an EU Blue Card or other work permits.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about studying in Germany
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