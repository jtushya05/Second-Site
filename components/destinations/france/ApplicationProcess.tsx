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
  FileSearch,
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Research Universities',
    description: 'Shortlist French universities based on your preferences and program availability.',
    timeline: '12-18 months before',
    tips: [
      'Check university rankings',
      'Explore campus facilities',
      'Understand admission requirements',
      'Consider location and living costs',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Meet Entry Requirements',
    description: 'Ensure you meet academic and language proficiency criteria.',
    timeline: '12-15 months before',
    tips: [
      'Prepare transcripts and certificates',
      'Take required language tests (English or French)',
      'Collect letters of recommendation',
    ],
  },
  {
    icon: FileText,
    title: 'Prepare Documents',
    description: 'Gather all necessary documents for your application.',
    timeline: '10-12 months before',
    tips: [
      'Prepare SOPs and CVs',
      'Ensure certified translations of documents (if required)',
      'Collect financial proof',
    ],
  },
  {
    icon: Send,
    title: 'Submit Applications',
    description: 'Apply through Campus France or directly via university portals.',
    timeline: '8-12 months before',
    tips: [
      'Submit complete documents',
      'Adhere to application deadlines',
      'Track application status',
    ],
  },
  {
    icon: CreditCard,
    title: 'Financial Planning',
    description: 'Arrange funding and ensure financial documents are in order.',
    timeline: '4-6 months before',
    tips: [
      'Secure education loans',
      'Apply for scholarships',
      'Budget living expenses',
    ],
  },
  {
    icon: FileSearch,
    title: 'Student Visa',
    description: 'Apply for a long-stay student visa.',
    timeline: '3-4 months before',
    tips: [
      'Prepare visa documents',
      'Schedule a visa appointment',
      'Attend the Campus France interview',
    ],
  },
];

export default function ApplicationProcess() {
  return (
    <section className="py-24 bg-blue-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">Application Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-700">
            A comprehensive guide to applying to French universities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600">Step {index + 1}</span>
                      <h3 className="text-xl font-semibold text-blue-800">{step.title}</h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2 text-gray-700">{step.description}</p>
                    <p className="text-sm font-medium text-blue-600">{step.timeline}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-800">Key Points:</p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
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
