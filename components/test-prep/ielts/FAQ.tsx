'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long is the IELTS test valid for?',
    answer: 'IELTS test results are valid for 2 years from the date of the test. After this period, you would need to retake the test if required by your institution or organization.'
  },
  {
    question: 'What is the minimum IELTS score required for university admission?',
    answer: 'The required IELTS score varies by institution and program. Generally, undergraduate programs require a minimum score of 6.0-6.5, while postgraduate programs often require 6.5-7.0. Some prestigious universities may require higher scores.'
  },
  {
    question: 'How long does it take to prepare for IELTS?',
    answer: 'The preparation time varies depending on your current English level and target score. On average, students need 2-3 months of dedicated preparation. Our 8-week program is designed to provide comprehensive preparation for most candidates.'
  },
  {
    question: 'Can I take IELTS online?',
    answer: 'Yes, you can take IELTS online through IELTS Indicator (for Academic) or IELTS Online. However, not all institutions accept these versions, so it\'s important to check with your intended organization first.'
  },
  {
    question: 'What materials are provided in your IELTS preparation course?',
    answer: 'Our course includes comprehensive study materials, practice tests, online resources, writing and speaking feedback, and access to our learning management system. Students also receive Cambridge IELTS preparation books and supplementary materials.'
  },
  {
    question: 'How are the IELTS band scores calculated?',
    answer: 'IELTS scores are reported on a 9-band scale. You receive individual scores for Listening, Reading, Writing, and Speaking, and an Overall Band Score that is the average of these four. Scores are reported in whole and half bands (e.g., 6.0, 6.5, 7.0).'
  }
];

export default function FAQ() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}