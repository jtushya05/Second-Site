import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#212070] to-[#2a2a8e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffca00]/20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffca00]/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Future in Top Engineering Institutions
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't navigate the complex JoSAA counselling process alone. Let our experts guide you to make the right choice.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-left">
              <div>
                <div className="w-12 h-12 bg-[#ffca00] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#212070] font-bold text-xl">1</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Book a Free Consultation</h3>
                <p className="text-gray-200">
                  Schedule a free initial consultation with our JoSAA experts to discuss your rank and options.
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-[#ffca00] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#212070] font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Get Personalized Strategy</h3>
                <p className="text-gray-200">
                  Receive a customized choice filling strategy based on your preferences and career goals.
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-[#ffca00] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#212070] font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Secure Your Dream Seat</h3>
                <p className="text-gray-200">
                  Successfully navigate the JoSAA rounds with our continuous support until you get your final admission.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="josaa_secondary" size="josaa_md" className="text-sm md:text-base whitespace-normal h-auto py-2.5" asChild>
              <Link href="/get-started?serviceName=JoSAA%20Free%20Consultation&fromPage=JoSAA_CTA">
                Book Free Consultation
              </Link>
            </Button>
            <Button variant="josaa_outline" size="josaa_md" className="border-white text-white hover:bg-white hover:text-[#212070] text-sm md:text-base whitespace-normal h-auto py-2.5" asChild>
              <Link href="/contact?source=JoSAA_CTA">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;