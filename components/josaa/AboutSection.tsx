import React from 'react';
import { CheckCircle, BookOpen, BarChart2, Award, GraduationCap, Building } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">Comprehensive JoSAA Counselling & Engineering Admission Guidance</h2>
          <p className="text-gray-600">
            From JEE Main/Advanced counselling through JoSAA to direct admissions in top private institutions like BITS and VIT, we provide end-to-end support for securing the best engineering seat based on your rank.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-[#ffca00]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-[#212070]" />
            </div>
            <h3 className="text-xl font-semibold text-[#212070] mb-3">JoSAA Counselling</h3>
            <p className="text-gray-600">
              Expert guidance for IITs, NITs, IIITs, and GFTIs through the Joint Seat Allocation Authority (JoSAA) process.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-[#ffca00]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-[#212070]" />
            </div>
            <h3 className="text-xl font-semibold text-[#212070] mb-3">Private Universities</h3>
            <p className="text-gray-600">
              Admission assistance for top private institutions including BITS, VIT, SRM, and other leading engineering colleges.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-[#ffca00]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="h-8 w-8 text-[#212070]" />
            </div>
            <h3 className="text-xl font-semibold text-[#212070] mb-3">Career Planning</h3>
            <p className="text-gray-600">
              Comprehensive career guidance to help you choose the right engineering branch and institution aligned with your goals.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-[#212070] to-[#2a2a8e] rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Professional Counselling is Essential</h3>
              <p className="text-gray-200 mb-6">
                Make informed decisions about your engineering career with expert guidance tailored to your profile and aspirations.
              </p>
              <ul className="space-y-4">
                {[
                  'Step-by-step guidance for JoSAA counselling process',
                  'Expert advice on college and branch selection',
                  'Alternative options beyond JEE-based admissions',
                  'Personalized roadmap for your engineering journey',
                  'Access to comprehensive college database and cutoff analysis'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#ffca00] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg"
                alt="Career counselling session" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#212070]/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;