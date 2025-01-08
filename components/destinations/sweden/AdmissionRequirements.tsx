'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, GraduationCap, Languages, DollarSign } from 'lucide-react';

const requirements = [
  {
    icon: FileText,
    title: 'Academic Documents',
    items: [
      "Bachelor's degree with a minimum of 60%",
      'Academic transcripts',
      'Statement of Purpose',
      'Letters of Recommendation',
    ],
  },
  {
    icon: Languages,
    title: 'English Proficiency',
    items: [
      'IELTS: 6.5 overall (min 6.0 per band)',
      'TOEFL iBT: 90',
      'PTE Academic: 62',
    ],
  },
  {
    icon: DollarSign,
    title: 'Financial Requirements',
    items: [
      'Proof of tuition fees for the first year',
      'Living expenses of at least SEK 85,000 per year',
      'Health insurance',
      'Return airfare funds',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Additional Requirements',
    items: [
      'Updated CV/Resume',
      'Portfolio (for design courses)',
      'Research proposal (for PhD)',
    ],
  },
];

export default function AdmissionRequirements() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Admission Requirements</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Essential requirements for studying at Swedish universities.
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
                    <h3 className="text-xl font-semibold text-blue-800">{req.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {req.items.map((item) => (
                      <li key={item} className="text-gray-700">
                        • {item}
                      </li>
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
