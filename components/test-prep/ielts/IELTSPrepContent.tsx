'use client';

import { Container } from '@/components/ui/container';
import { BookOpen, Users } from 'lucide-react';
import { features, scheduleItems } from '@/lib/test-prep/ielts-data';
import IELTSHeroSection from './IELTSHeroSection';
import ModuleCard from './ModuleCard';
import FeatureCard from './FeatureCard';
import ScheduleCard from './ScheduleCard';
import CTASection from './CTASection';
import TestFormat from './TestFormat';
import BandScoreInfo from './BandScoreInfo';
import PreparationTips from './PreparationTips';
import FAQ from './FAQ';

export default function IELTSPrepContent() {
  return (
    <div className="pt-[96px] sm:pt-[152px]">
      <IELTSHeroSection />
      
      <Container className="py-16">
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">What is IELTS?</h2>
          <div className="prose max-w-none text-lg text-gray-600">
            <p className="mb-4">
              IELTS stands for The International English Language Testing System. It is the world's most popular high-stakes English language test, with over 3.5 million tests taken annually.
            </p>
            <p>
              Whether for academic or professional purposes, taking the IELTS is often a prerequisite for studying abroad, immigration, or professional registration in an English-speaking environment.
            </p>
          </div>
        </section>

        <TestFormat />
        <BandScoreInfo />

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">IELTS Modules</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ModuleCard
              title="Academic Module"
              description="Designed for those seeking to study in foreign educational institutes. This test comprises four modules: Reading, Writing, Listening, and Speaking."
              features={[
                { icon: BookOpen, text: 'Maximum Score: 9.0 Bands' },
                { icon: BookOpen, text: 'Four comprehensive sections' }
              ]}
            />
            <ModuleCard
              title="General Module"
              description="Perfect for those who wish to go abroad for employment or immigration purposes. This module includes the same four modules as the Academic version."
              features={[
                { icon: BookOpen, text: 'Maximum Score: 9.0 Bands' },
                { icon: Users, text: 'Immigration and work focused' }
              ]}
            />
          </div>
        </section>

        <PreparationTips />

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why Choose EA Global for IELTS Preparation?</h2>
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
        <CTASection />
      </Container>
    </div>
  );
}