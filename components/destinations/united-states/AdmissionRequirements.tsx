'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, GraduationCap, Languages, DollarSign } from 'lucide-react';

const requirements = [
  {
    icon: FileText,
    title: 'Academic Documents',
    items: [
      'High school transcripts',
      'Standardized test scores (SAT/ACT)',
      'Letters of recommendation',
      'Statement of purpose'
    ]
  },
  {
    icon: Languages,
    title: 'English Proficiency',
    items: [
      'TOEFL (min. 80-100)',
      'IELTS (min. 6.5-7.0)',
      'Duolingo English Test (min. 110-120)',
      'PTE Academic (min. 58-65)'
    ]
  },
  {
    icon: DollarSign,
    title: 'Financial Requirements',
    items: [
      'Bank statements',
      'Proof of funding',
      'Scholarship documents',
      'Financial affidavit'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Additional Requirements',
    items: [
      'Portfolio (for specific programs)',
      'Interview',
      'Writing samples',
      'Resume/CV'
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
            Essential requirements for studying at US universities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <Card key={req.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-blue-600" />
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