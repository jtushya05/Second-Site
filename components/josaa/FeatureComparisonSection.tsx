import React from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const FeatureComparisonSection: React.FC = () => {
  const features = [
    {
      name: "Personalized College Recommendations",
      withUs: true,
      diy: false,
      highlight: true,
    },
    {
      name: "Complete Branch Analysis Based on Career Goals",
      withUs: true,
      diy: false,
      highlight: true,
    },
    {
      name: "Seat Matrix Analysis from Previous Years",
      withUs: true,
      diy: true,
      highlight: false,
    },
    {
      name: "Strategic Choice Filling to Maximize Chances",
      withUs: true,
      diy: false,
      highlight: true,
    },
    {
      name: "Real-time Assistance During All Rounds",
      withUs: true,
      diy: false,
      highlight: false,
    },
    {
      name: "Course & Career Roadmap Based on Interests",
      withUs: true,
      diy: false,
      highlight: true,
    },    {
      name: "Document Verification Assistance",
      withUs: true,
      diy: false,
      highlight: false,
    },
    {
      name: "Future Academic & Career Planning",
      withUs: true,
      diy: false,
      highlight: false,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="bg-[#ffca00]/20 text-[#212070] text-sm font-medium px-4 py-2 rounded-full">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mt-4 mb-4">Expert Guidance vs. DIY Approach</h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            How our professional counselling services compare to managing JoSAA counselling on your own.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#212070] text-white font-semibold">
            <div className="p-4 md:p-6 border-r border-[#ffffff30]">Features</div>
            <div className="p-4 md:p-6 text-center border-r border-[#ffffff30]">With EA Global</div>
            <div className="p-4 md:p-6 text-center">DIY Approach</div>
          </div>

          {/* Table Body */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 border-b border-gray-200 ${feature.highlight ? 'bg-[#ffca00]/5' : ''}`}
            >
              <div className="p-4 md:px-6 md:py-5 border-r border-gray-200 flex items-center">
                <span className={feature.highlight ? 'font-medium' : ''}>{feature.name}</span>
              </div>
              <div className="p-4 md:px-6 md:py-5 flex justify-center items-center border-r border-gray-200">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <div className="p-4 md:px-6 md:py-5 flex justify-center items-center">
                {feature.diy ? (
                  <Check className="w-6 h-6 text-gray-400" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/get-started?serviceName=JoSAA%20Counselling&fromPage=JoSAA_Comparison" 
            className="inline-flex items-center justify-center bg-[#212070] hover:bg-[#212070]/90 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Expert Guidance
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Make an informed choice for your future. Our experts are ready to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonSection;
