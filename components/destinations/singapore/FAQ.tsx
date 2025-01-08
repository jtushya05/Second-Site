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
    question: 'What are the popular courses to study in Singapore?',
    answer: 'Popular courses include Business, Information Technology, Engineering, Sciences, Hospitality Management, and Creative Arts. Singaporean universities are globally recognized for their excellence.',
  },
  {
    question: 'What are the living expenses in Singapore?',
    answer: 'Living expenses vary depending on lifestyle and location. On average, students spend SGD 1,200–2,500 per month, which includes accommodation, food, transportation, and other essentials.',
  },
  {
    question: 'Can international students work while studying?',
    answer: 'Yes, international students can work part-time for up to 16 hours per week during term time and full-time during vacation periods. However, a work pass may be required depending on the employer.',
  },
  {
    question: 'What is the application timeline for Singaporean universities?',
    answer: 'Most universities have two intakes: January and August. It is recommended to apply 6–9 months before the intake date. Some institutions also offer rolling admissions, so check the specific deadlines for your chosen program.',
  },
  {
    question: 'Are scholarships available for international students in Singapore?',
    answer: 'Yes, scholarships are available through the Singapore government, universities, and private organizations. Examples include the Singapore International Graduate Award (SINGA) and university-specific merit-based scholarships.',
  },
  {
    question: 'What is the Student Pass, and how do I apply for it?',
    answer: 'A Student Pass is a visa required for international students to study in Singapore. After receiving an offer letter, you can apply for the pass through the Immigration and Checkpoints Authority (ICA) website. Processing typically takes 2–4 weeks.',
  },
  {
    question: 'What are the accommodation options for students in Singapore?',
    answer: 'Accommodation options include on-campus housing, private rentals, hostels, and shared apartments. On-campus housing is typically more affordable, while private rentals offer greater independence.',
  },
  {
    question: 'What is the weather like in Singapore?',
    answer: 'Singapore has a tropical climate with high humidity and temperatures ranging from 25°C to 32°C year-round. Rainfall is common, but it is usually brief and followed by sunshine.',
  },
  {
    question: 'How safe is Singapore for international students?',
    answer: 'Singapore is one of the safest countries in the world, with low crime rates and strict law enforcement. It provides a secure environment for international students to focus on their studies.',
  },
  {
    question: 'What is the transportation system like in Singapore?',
    answer: 'Singapore has a world-class public transportation system, including the MRT (Mass Rapid Transit), buses, and taxis. The EZ-Link card allows seamless travel on public transport at affordable rates.',
  },
  {
    question: 'Can I stay in Singapore after graduation?',
    answer: 'Yes, international graduates can apply for a Long-Term Visit Pass (LTVP) to stay in Singapore for up to a year to search for employment. Alternatively, you can apply for a work visa if you secure a job offer.',
  },
  {
    question: 'Are part-time or online courses available in Singapore?',
    answer: 'Yes, many universities and private institutions in Singapore offer part-time and online courses for working professionals and students who prefer flexible schedules.',
  },
  {
    question: 'What are the healthcare facilities like in Singapore?',
    answer: 'Singapore boasts world-class healthcare facilities. Students are required to have health insurance, which typically covers medical consultations and emergencies.',
  },
  {
    question: 'Do I need proficiency in any specific language to study in Singapore?',
    answer: 'Most courses in Singapore are taught in English. International students must meet English language requirements, such as a minimum score in IELTS, TOEFL, or PTE Academic.',
  },
  {
    question: 'What are the cultural aspects I should know about Singapore?',
    answer: 'Singapore is a multicultural society with a mix of Chinese, Malay, Indian, and Western cultures. Respect for cultural diversity and traditions is highly valued in Singapore.',
  },
  {
    question: 'What is the cost of studying in Singapore?',
    answer: 'Tuition fees vary by program and institution but typically range from SGD 15,000–40,000 per year for undergraduate programs and SGD 20,000–50,000 for postgraduate programs.',
  },
  {
    question: 'Are there student support services in Singapore?',
    answer: 'Yes, universities and institutions provide comprehensive student support services, including academic advising, career counseling, mental health resources, and orientation programs.',
  },
  {
    question: 'What is the food scene like for students in Singapore?',
    answer: 'Singapore is famous for its affordable and delicious hawker centers, where you can enjoy local dishes like Hainanese chicken rice, laksa, and satay. Western and vegetarian options are also widely available.',
  },
  {
    question: 'How can I network and build my career while studying in Singapore?',
    answer: 'Universities host career fairs, networking events, and workshops. Joining student organizations, internships, and part-time jobs can also help build valuable connections in Singapore’s competitive job market.',
  },
  {
    question: 'Are there recreational activities for students in Singapore?',
    answer: 'Singapore offers a variety of recreational options, from shopping and dining to visiting attractions like Marina Bay Sands, Sentosa Island, and Gardens by the Bay. Students can also explore parks and enjoy outdoor activities.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-red-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-800">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-red-600">
            Find answers to common questions about studying in Singapore.
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
