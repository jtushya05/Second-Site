'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  FileText, 
  Send, 
  MessageSquare, 
  CreditCard, 
  CheckCircle,
  GraduationCap,
  Passport
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Research Universities',
    description: 'Research and shortlist UK universities based on your academic goals, budget, and course preferences.',
    timeline: '12-18 months before',
    tips: [
      'Compare university rankings',
      'Check course content and requirements',
      'Research location and living costs',
      'Consider university facilities'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Meet Entry Requirements',
    description: 'Ensure you meet academic and English language requirements for your chosen courses.',
    timeline: '12-15 months before',
    tips: [
      'Prepare academic transcripts',
      'Take required English tests (IELTS/PTE)',
      'Check specific course requirements',
      'Gather references'
    ]
  },
  {
    icon: FileText,
    title: 'Prepare Documents',
    description: 'Gather and prepare all required application documents.',
    timeline: '10-12 months before',
    tips: [
      'Academic certificates and transcripts',
      'English test scores',
      'Statement of Purpose',
      'Letters of Recommendation',
      'CV/Resume'
    ]
  },
  {
    icon: Send,
    title: 'Submit Applications',
    description: 'Apply through UCAS for undergraduate courses or directly to universities for postgraduate programs.',
    timeline: '8-12 months before',
    tips: [
      'Meet application deadlines',
      'Pay application fees',
      'Submit complete documentation',
      'Track your applications'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Interview Process',
    description: 'Prepare for and attend interviews if required by your chosen universities.',
    timeline: '6-8 months before',
    tips: [
      'Research common interview questions',
      'Prepare course-specific knowledge',
      'Practice with mock interviews',
      'Prepare questions to ask'
    ]
  },
  {
    icon: CreditCard,
    title: 'Financial Planning',
    description: 'Arrange funding and prepare financial documentation for visa purposes.',
    timeline: '4-6 months before',
    tips: [
      'Secure funding sources',
      'Prepare bank statements',
      'Apply for scholarships',
      'Plan living expenses'
    ]
  },
  {
    icon: Passport,
    title: 'Visa Application',
    description: 'Apply for your Student visa (formerly Tier 4) after receiving your CAS.',
    timeline: '2-3 months before',
    tips: [
      'Gather visa documents',
      'Book biometrics appointment',
      'Pay visa fees and health surcharge',
      'Track application status'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Pre-departure',
    description: 'Make final preparations for your journey to the UK.',
    timeline: '1-2 months before',
    tips: [
      'Book accommodation',
      'Arrange travel insurance',
      'Book flights',
      'Plan airport pickup'
    ]
  }
];

export default function ApplicationProcess() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Application Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A comprehensive guide to applying to UK universities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-red-600">Step {index + 1}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2 text-gray-600">{step.description}</p>
                    <p className="text-sm font-medium text-red-600">{step.timeline}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Key Points:</p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                      {step.tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}