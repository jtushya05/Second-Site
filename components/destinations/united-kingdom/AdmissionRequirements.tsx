'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, GraduationCap, Languages, DollarSign } from 'lucide-react';

const requirements = [
  {
    icon: FileText,
    title: 'Academic Documents',
    items: [
      'Bachelor\'s degree with minimum 60%',
      'Academic transcripts',
      'Statement of Purpose',
      'Letters of Recommendation'
    ]
  },
  {
    icon: Languages,
    title: 'English Proficiency',
    items: [
      'IELTS: 6.5 overall (min 6.0 per band)',
      'TOEFL iBT: 88-100',
      'PTE Academic: 62-75',
      'Duolingo: 110-120'
    ]
  },
  {
    icon: DollarSign,
    title: 'Financial Requirements',
    items: [
      'Tuition fees for chosen course',
      'Living expenses proof',
      'Bank statements',
      'Scholarship documents (if applicable)'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Additional Requirements',
    items: [
      'Updated CV/Resume',
      'Portfolio (for specific courses)',
      'Research proposal (for PhD)',
      'Work experience (if required)'
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
            Essential requirements for studying at UK universities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <Card key={req.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-red-600" />
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