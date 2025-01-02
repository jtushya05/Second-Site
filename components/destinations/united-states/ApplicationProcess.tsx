'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  FileText, 
  Send, 
  MessageSquare, 
  CreditCard, 
  CheckCircle 
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Research Universities',
    description: 'Research and shortlist universities based on your academic goals, budget, and preferences.'
  },
  {
    icon: FileText,
    title: 'Prepare Documents',
    description: 'Gather academic transcripts, standardized test scores, and other required documents.'
  },
  {
    icon: Send,
    title: 'Submit Applications',
    description: 'Apply to your chosen universities through their online application systems.'
  },
  {
    icon: MessageSquare,
    title: 'Interview Process',
    description: 'Prepare for and attend admission interviews if required.'
  },
  {
    icon: CreditCard,
    title: 'Financial Documentation',
    description: 'Arrange financial documents and proof of funding.'
  },
  {
    icon: CheckCircle,
    title: 'Accept Offer',
    description: 'Accept admission offer and pay deposit to secure your place.'
  }
];

export default function ApplicationProcess() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Application Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A step-by-step guide to applying to US universities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}