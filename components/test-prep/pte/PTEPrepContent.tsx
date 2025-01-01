'use client';

import { Container } from 'components/ui/container';
import { BookOpen, Users } from 'lucide-react';
import { features, scheduleItems } from 'lib/test-prep/pte-data'; // Placeholder for PTE data
import PTEHeroSection from './PTEHeroSection'; // Placeholder for PTE hero section
import ModuleCard from './ModuleCard'; // Reuse ModuleCard from IELTS
import FeatureCard from './FeatureCard'; // Reuse FeatureCard from IELTS
import ScheduleCard from './ScheduleCard'; // Reuse ScheduleCard from IELTS
import PreparationTips from './PreparationTips'; // Reuse PreparationTips from IELTS
import FAQ from './FAQ'; // Reuse FAQ from IELTS

export default function PTEPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <PTEHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is PTE?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              PTE stands for Pearson Test of English. It is a computer-based English language test that assesses the four skills of listening, reading, speaking, and writing.
            </p>
            <p>
              The PTE is widely accepted by universities and colleges around the world for admissions and visa purposes.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">PTE Modules</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ModuleCard
              title="PTE Academic"
              description="Designed for students seeking to study abroad. This test assesses your English language skills in an academic context."
              features={[
                { icon: BookOpen, text: 'Maximum Score: 90' },
                { icon: Users, text: 'Four comprehensive sections' }
              ]}
            />
            <ModuleCard
              title="PTE General"
              description="A test for those who wish to demonstrate their English language proficiency in a general context."
              features={[
                { icon: BookOpen, text: 'Maximum Score: 90' },
                { icon: Users, text: 'Focus on everyday English' }
              ]}
            />
          </div>
        </section>

        <PreparationTips />
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for PTE Preparation?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Course Schedule</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {scheduleItems.map((item) => (
              <ScheduleCard
                key={item.title}
                title={item.title}
                detail={item.detail}
                icon={item.icon}
              />
            ))}
          </div>
        </section>

        <FAQ />
      </Container>
    </div>
  );
}
