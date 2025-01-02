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
    description: 'Research and shortlist Canadian universities based on your preferences',
    timeline: '12-18 months before',
    tips: [
      'Compare university rankings',
      'Check program requirements',
      'Research location and climate',
      'Consider cost of living'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Meet Requirements',
    description: 'Ensure you meet academic and language requirements',
    timeline: '12-15 months before',
    tips: [
      'Take required English tests',
      'Prepare academic documents',
      'Get transcripts evaluated',
      'Check specific program requirements'
    ]
  },
  {
    icon: FileText,
    title: 'Prepare Documents',
    description: 'Gather and prepare all required application documents',
    timeline: '10-12 months before',
    tips: [
      'Academic certificates',
      'English test scores',
      'Statement of Purpose',
      'Letters of Recommendation'
    ]
  },
  {
    icon: Send,
    title: 'Apply to Universities',
    description: 'Submit applications to chosen universities',
    timeline: '8-12 months before',
    tips: [
      'Meet application deadlines',
      'Pay application fees',
      'Submit complete documentation',
      'Track applications'
    ]
  },
  {
    icon: CreditCard,
    title: 'Financial Planning',
    description: 'Arrange funding and prepare for GIC',
    timeline: '4-6 months before',
    tips: [
      'Secure funding sources',
      'Open GIC account',
      'Prepare financial documents',
      'Apply for scholarships'
    ]
  },
  {
    icon: Passport,
    title: 'Study Permit',
    description: 'Apply for your Canadian study permit',
    timeline: '3-4 months before',
    tips: [
      'Gather permit documents',
      'Complete medical exam',
      'Submit biometrics',
      'Track application'
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
            A comprehensive guide to applying to Canadian universities
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