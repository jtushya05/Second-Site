'use client';

import { Button } from '@/components/ui/button';
import LeadForm from '@/components/LeadCaptureForm';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1)'
        }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 text-white">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Your Gateway to Global Education
              </h1>
              <p className="text-lg md:text-xl">
                Expert guidance for international education and English proficiency tests. 
                Start your journey to academic excellence with EA Global.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Programs
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white hover:bg-white/20"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
            <div className="relative z-10">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}