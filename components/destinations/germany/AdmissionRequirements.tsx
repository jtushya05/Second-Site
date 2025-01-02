'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, GraduationCap, Languages, DollarSign } from 'lucide-react';

const requirements = [
  {
    icon: FileText,
    title: 'Academic Documents',
    items: [
      'High school diploma (Abitur equivalent)',
      'Academic transcripts',
      'University entrance qualification',
      'Motivation letter'
    ]
  },
  {
    icon: Languages,
    title: 'Language Requirements',
    items: [
      'German: TestDaF (TDN 4) or DSH-2',
      'English: IELTS 6.5 or equivalent',
      'Language certificates not older than 2 years',
      'C1 level for most programs'
    ]
  },
  {
    icon: DollarSign,
    title: 'Financial Requirements',
    items: [
      'Blocked account (€11,208 per year)',
      'Proof of financial means',
      'Health insurance coverage',
      'Semester contribution fee'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Additional Requirements',
    items: [
      'CV/Resume in German format',
      'Letters of recommendation',
      'Portfolio (for specific courses)',
      'German student visa'
    ]
  }
];

export default function AdmissionRequirements() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Admission Requirements</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Essential requirements for studying at German universities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <Card key={req.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-yellow-500" />
                    <h3 className="text-xl font-semibold">{req.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {req.items.map((item) => (
                      <li key={item} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}