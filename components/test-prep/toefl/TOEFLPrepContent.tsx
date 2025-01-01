'use client';

import { Container } from 'components/ui/container';
import { BookOpen, Users } from 'lucide-react';
import { features, scheduleItems } from 'lib/test-prep/toefl-data'; // Placeholder for TOEFL data
import TOEFLHeroSection from './TOEFLHeroSection'; // Placeholder for TOEFL hero section
import ModuleCard from './ModuleCard'; // Reuse ModuleCard from IELTS
import FeatureCard from './FeatureCard'; // Reuse FeatureCard from IELTS
import ScheduleCard from './ScheduleCard'; // Reuse ScheduleCard from IELTS
import PreparationTips from './PreparationTips'; // Reuse PreparationTips from IELTS
import FAQ from './FAQ'; // Reuse FAQ from IELTS

export default function TOEFLPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <TOEFLHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is TOEFL?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              TOEFL stands for Test of English as a Foreign Language. It is a standardized test to measure the English language proficiency of non-native speakers.
            </p>
            <p>
              The TOEFL is widely accepted by universities and colleges around the world for admissions and visa purposes.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">TOEFL Modules</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ModuleCard
              title="TOEFL iBT"
              description="Designed for students seeking to study abroad. This test assesses your English language skills in an academic context."
              features={[
                { icon: BookOpen, text: 'Maximum Score: 120' },
                { icon: Users, text: 'Four comprehensive sections' }
              ]}
            />
            <ModuleCard
              title="TOEFL PBT"
              description="A paper-based test for those who wish to demonstrate their English language proficiency."
              features={[
                { icon: BookOpen, text: 'Maximum Score: 677' },
                { icon: Users, text: 'Focus on academic English' }
              ]}
            />
          </div>
        </section>

        <PreparationTips />
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for TOEFL Preparation?</h2>
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
