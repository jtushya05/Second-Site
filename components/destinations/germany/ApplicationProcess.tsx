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
  User
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Research Programs',
    description: 'Research universities and programs that match your interests',
    timeline: '12-15 months before',
    tips: [
      'Use uni-assist.de to find programs',
      'Check language requirements',
      'Verify admission requirements',
      'Research program costs'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Language Preparation',
    description: 'Prepare for and take required language tests',
    timeline: '10-12 months before',
    tips: [
      'Take TestDaF or DSH for German',
      'IELTS/TOEFL for English programs',
      'Attend language courses',
      'Practice with native speakers'
    ]
  },
  {
    icon: FileText,
    title: 'Document Preparation',
    description: 'Gather and authenticate all required documents',
    timeline: '8-10 months before',
    tips: [
      'Get documents translated',
      'Obtain authentication/apostille',
      'Prepare motivation letter',
      'Get recommendation letters'
    ]
  },
  {
    icon: Send,
    title: 'Submit Applications',
    description: 'Apply through uni-assist or directly to universities',
    timeline: '6-8 months before',
    tips: [
      'Meet application deadlines',
      'Pay application fees',
      'Track your applications',
      'Respond to universities promptly'
    ]
  },
  {
    icon: CreditCard,
    title: 'Financial Planning',
    description: 'Arrange funding and prepare financial documentation',
    timeline: '4-6 months before',
    tips: [
      'Open blocked account',
      'Apply for scholarships',
      'Arrange health insurance',
      'Plan living expenses'
    ]
  },
  {
    icon: User,
    title: 'Visa Application',
    description: 'Apply for German student visa',
    timeline: '3-4 months before',
    tips: [
      'Gather visa documents',
      'Book visa appointment',
      'Prepare for interview',
      'Arrange travel insurance'
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
            A comprehensive guide to applying to German universities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-yellow-600">Step {index + 1}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2 text-gray-600">{step.description}</p>
                    <p className="text-sm font-medium text-yellow-600">{step.timeline}</p>
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