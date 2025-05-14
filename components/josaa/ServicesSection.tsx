import React from 'react';
import { Users, BarChart, ListChecks, Book, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-[#212070] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-[#ffca00]" />,
      title: "One-on-One Counselling",
      description: "Personalized guidance sessions with our expert counsellors who have years of experience with the JoSAA process."
    },
    {
      icon: <BarChart className="h-12 w-12 text-[#ffca00]" />,
      title: "Rank & College Predictor",
      description: "Access our advanced algorithms that analyze past trends to predict your potential colleges based on your JEE rank."
    },
    {
      icon: <ListChecks className="h-12 w-12 text-[#ffca00]" />,
      title: "Choice Filling Strategy",
      description: "Expert assistance in creating an optimal college and branch preference list tailored to your career goals."
    },
    {
      icon: <Book className="h-12 w-12 text-[#ffca00]" />,
      title: "Branch & College Insights",
      description: "Detailed information about various engineering branches and colleges to help you make informed decisions."
    },
    {
      icon: <Phone className="h-12 w-12 text-[#ffca00]" />,
      title: "24/7 Helpline Support",
      description: "Round-the-clock assistance during the critical counselling period to address your queries and concerns."
    },
    {
      icon: <FileText className="h-12 w-12 text-[#ffca00]" />,
      title: "Document Verification Help",
      description: "Guidance on preparing and verifying all necessary documents required during the JoSAA counselling process."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">Our JoSAA Counselling Services</h2>
          <p className="text-gray-600">
            Comprehensive support to help you secure admission in your dream institute through the JoSAA counselling process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#212070] mb-4">Ready to Secure Your Future?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Don't leave your engineering career to chance. Get expert guidance and maximize your chances of admission to top institutes.
          </p>
          <Button variant="josaa" size="josaa_md" className="text-sm md:text-base whitespace-normal h-auto py-2.5" asChild>
            <Link href="/get-started?serviceName=JoSAA%20Counselling%20Session&fromPage=JoSAA_Services">
              Book Your Counselling Session
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;