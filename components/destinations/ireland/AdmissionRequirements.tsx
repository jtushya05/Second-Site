'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, GraduationCap, Languages, DollarSign } from 'lucide-react';

const requirements = [
  {
    icon: FileText,
    title: 'Academic Documents',
    items: [
      "Bachelor's degree with a minimum 60-65%",
      'Official academic transcripts',
      'Statement of Purpose (SOP)',
      'Two Letters of Recommendation (LOR)',
    ],
  },
  {
    icon: Languages,
    title: 'English Proficiency',
    items: [
      'IELTS: 6.5 overall (min 6.0 per band)',
      'TOEFL iBT: 90+',
      'PTE Academic: 63',
    ],
  },
  {
    icon: DollarSign,
    title: 'Financial Requirements',
    items: [
      'Proof of tuition fees payment',
      'Minimum €7,000 for living expenses',
      'Health insurance proof',
      'Return airfare evidence',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Additional Requirements',
    items: [
      'Updated CV/Resume',
      'Portfolio (for design & creative courses)',
      'Research proposal (for postgraduate/PhD)',
    ],
  },
];

export default function AdmissionRequirements() {
  return (
    <section className="py-24 bg-orange-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-700">Admission Requirements</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Key requirements for admission to top Irish universities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <Card key={req.title} className="border-2 border-green-100 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-700">{req.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {req.items.map((item) => (
                      <li key={item} className="text-green-600">
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
