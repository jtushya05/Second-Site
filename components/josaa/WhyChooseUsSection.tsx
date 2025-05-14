import React from 'react';
import { Medal, Users, BookOpen, TrendingUp, ThumbsUp, Clock } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
    <div className="bg-[#ffca00]/20 p-3 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-[#212070] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <Medal className="h-6 w-6 text-[#212070]" />,
      title: "Expertise & Experience",
      description: "Our counsellors have over 10 years of experience in guiding students through the JoSAA process."
    },
    {
      icon: <Users className="h-6 w-6 text-[#212070]" />,
      title: "Proven Track Record",
      description: "We've helped 500+ students secure admissions in IITs, NITs, and other top institutions."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#212070]" />,
      title: "Comprehensive Knowledge",
      description: "Our team stays updated with the latest trends, cutoffs, and changes in the JoSAA process."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#212070]" />,
      title: "Data-Driven Approach",
      description: "We use historical data and advanced analytics to provide accurate predictions and advice."
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-[#212070]" />,
      title: "Personalized Guidance",
      description: "Every student receives tailored advice based on their rank, preferences, and career goals."
    },
    {
      icon: <Clock className="h-6 w-6 text-[#212070]" />,
      title: "Timely Support",
      description: "We provide round-the-clock assistance during the critical counselling period."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-6">Why Choose EA Global for JoSAA Counselling?</h2>
            <p className="text-gray-600 mb-8">
              At EA Global, we combine expertise, technology, and personalized attention to ensure you make the best choices during the JoSAA counselling process.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="relative lg:sticky lg:top-24 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students discussing with counselor" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#212070]/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg z-20 w-max">
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#212070]">99%</span>
                  <span className="text-sm text-gray-600">Success Rate</span>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#212070]">1000+</span>
                  <span className="text-sm text-gray-600">Students Guided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;