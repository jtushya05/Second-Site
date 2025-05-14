import React, { useEffect } from 'react';
import { GraduationCap, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center py-8 pt-12 md:pt-20 lg:pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#ffca00]/5"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#ffca00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#212070]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Content Section - Always First */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-item mb-4 md:mb-6 opacity-0 translate-y-4">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#ffca00]/10 text-[#212070]">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                <span className="font-medium text-sm sm:text-base">Your Gateway to Top Engineering Colleges</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="animate-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#212070] leading-tight mb-4 md:mb-6 opacity-0 translate-y-4">
              Shape Your Future with{' '}
              <span className="relative inline-block">
                Expert Guidance
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#ffca00] rounded-full"></div>
              </span>
            </h1>

            {/* Description */}
            <p className="animate-item text-gray-600 text-base sm:text-lg md:text-xl mb-5 sm:mb-6 md:mb-8 opacity-0 translate-y-4">
              Navigate JoSAA counselling with confidence. Get personalized guidance for 
              IITs, NITs, and top engineering institutions.
            </p>

            {/* CTA Buttons */}
            <div className="animate-item flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-12 opacity-0 translate-y-4">
              <Button variant="josaa" size="josaa_md" className="group flex items-center text-sm md:text-base whitespace-normal h-auto py-2.5" asChild>
                <Link href="/get-started?serviceName=JoSAA%20Counselling&fromPage=JoSAA_Hero">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="josaa_outline" size="josaa_md" className="text-sm md:text-base whitespace-normal h-auto py-2.5" asChild>
                <Link href="/get-started?serviceName=JoSAA%20Counselling%20Programs&fromPage=JoSAA_Hero_Explore">
                  Explore Programs
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-item grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 opacity-0 translate-y-4">
              {[
                { icon: Users, value: '1000+', label: 'Students Guided' },
                { icon: Award, value: '99%', label: 'Satisfaction Rate' },
                { icon: GraduationCap, value: '10+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg md:rounded-xl p-2 md:p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-[#ffca00] mb-0.5 md:mb-1" />
                  <span className="block text-lg md:text-2xl font-bold text-[#212070] leading-tight">{stat.value}</span>
                  <span className="text-xs md:text-sm text-gray-600 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block animate-item opacity-0 translate-x-4">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                  alt="Student counselling session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#212070]/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <p className="text-base font-semibold text-[#212070]">JoSAA 2025</p>
                <p className="text-xs text-gray-600">Counselling Starting Soon</p>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <p className="text-base font-semibold text-[#212070]">500+ Colleges</p>
                <p className="text-xs text-gray-600">Expert Guidance Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;