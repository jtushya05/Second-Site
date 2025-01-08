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
    description: 'Research and shortlist Swedish universities based on your preferences.',
    timeline: '12-18 months before',
    tips: [
      'Compare university rankings',
      'Check course content and requirements',
      'Research location and living costs',
      'Consider university facilities',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Meet Entry Requirements',
    description: 'Ensure you meet academic and English language requirements.',
    timeline: '12-15 months before',
    tips: [
      'Prepare academic transcripts',
      'Take required English tests',
      'Check specific course requirements',
      'Gather references',
    ],
  },
  {
    icon: FileText,
    title: 'Prepare Documents',
    description: 'Gather and prepare all required application documents.',
    timeline: '10-12 months before',
    tips: [
      'Academic certificates',
      'English test scores',
      'Statement of Purpose',
      'Letters of Recommendation',
    ],
  },
  {
    icon: Send,
    title: 'Submit Applications',
    description: 'Apply to chosen universities through their online portals.',
    timeline: '8-12 months before',
    tips: [
      'Meet application deadlines',
      'Pay application fees',
      'Submit complete documentation',
      'Track applications',
    ],
  },
  {
    icon: CreditCard,
    title: 'Financial Planning',
    description: 'Arrange funding and prepare financial documentation.',
    timeline: '4-6 months before',
    tips: [
      'Secure funding sources',
      'Prepare bank statements',
      'Apply for scholarships',
      'Plan living expenses',
    ],
  },
  {
    icon: FileSearch,
    title: 'Student Visa',
    description: 'Apply for your Swedish student visa.',
    timeline: '3-4 months before',
    tips: [
      'Gather visa documents',
      'Complete health check',
      'Arrange health insurance',
      'Submit visa application',
    ],
  },
];

export default function ApplicationProcess() {
  return (
    <section className="py-24 bg-yellow-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Application Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            A comprehensive guide to applying to Swedish universities.
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
                      <Icon className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-800">Step {index + 1}</span>
                      <h3 className="text-xl font-semibold text-blue-900">{step.title}</h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2 text-gray-700">{step.description}</p>
                    <p className="text-sm font-medium text-yellow-500">{step.timeline}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-blue-800">Key Points:</p>
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
