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
    question: 'What are the popular courses to study in France?',
    answer: 'Popular courses include Business, Arts, Engineering, Political Science, and Hospitality Management. French universities are renowned for their quality education.',
  },
  {
    question: 'What are the living expenses in France?',
    answer: 'Living costs depend on the city. On average, students spend €800-1,500 per month on accommodation, food, and other essentials. Paris tends to be more expensive.',
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students can work up to 20 hours per week during term and full-time during breaks. A work permit may be required for internships or specific jobs.',
  },
  {
    question: 'What is the application timeline?',
    answer: 'Most universities have intakes in September and January. Submit applications 6-9 months before the intake. Some programs may also have rolling admissions.',
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Yes, several scholarships are available for international students, including the Eiffel Scholarship, Erasmus+, and university-specific funding opportunities.',
  },
  {
    question: 'What is Campus France, and how does it help?',
    answer: 'Campus France is a French government agency that supports international students by helping them with admissions, visa applications, and orientation.',
  },
  {
    question: 'Do I need to learn French to study in France?',
    answer: 'Many programs are offered in English. However, learning French can enhance your experience and improve employment opportunities in France.',
  },
  {
    question: 'What is the Post-Study Work visa?',
    answer: 'Graduates can apply for a Temporary Resident Permit (APS) to stay and work in France for up to two years, depending on their qualification and employment status.',
  },
  {
    question: 'How can I prepare for my stay in France?',
    answer: 'Research cultural norms, learn basic French phrases, and prepare financial proof and health insurance before arriving in France.',
  },
  {
    question: 'Is healthcare accessible for international students in France?',
    answer: 'Yes, students are required to have health insurance. France offers affordable and high-quality healthcare services for residents and international students.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-red-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-800">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-red-600">
            Find answers to common questions about studying in France.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-red-800">
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
