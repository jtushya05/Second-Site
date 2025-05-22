import React from 'react';
import { Trophy, Map, Book, BadgeCheck, Landmark, Users, LineChart, Star, BriefcaseBusiness } from 'lucide-react';

const CollegeGuideSection: React.FC = () => {
  const factors = [
    {
      title: "NIRF Ranking",
      description: "Consider the National Institutional Ranking Framework scores for overall quality assessment.",
      icon: Trophy,
      color: "#4299E1" // blue
    },
    {
      title: "Location & Climate",
      description: "Evaluate the campus location, surrounding environment, and weather conditions.",
      icon: Map,
      color: "#48BB78" // green
    },
    {
      title: "Course Curriculum",
      description: "Review the curriculum, specializations offered, and alignment with industry standards.",
      icon: Book,
      color: "#ED8936" // orange
    },
    {
      title: "Accreditation",
      description: "Check for NBA, NAAC, and other relevant accreditations for quality assurance.",
      icon: BadgeCheck,
      color: "#9F7AEA" // purple
    },
    {
      title: "Infrastructure",
      description: "Assess laboratories, libraries, hostels, sports facilities, and internet connectivity.",
      icon: Landmark,
      color: "#F56565" // red
    },
    {
      title: "Faculty Profile",
      description: "Research the qualifications, experience, and student-faculty ratio.",
      icon: Users,
      color: "#38B2AC" // teal
    },
    {
      title: "Placement Records",
      description: "Analyze placement statistics, recruiting companies, and average salary packages.",
      icon: LineChart,
      color: "#ECC94B" // yellow
    },
    {
      title: "Campus Culture",
      description: "Consider the college environment, student clubs, and extracurricular activities.",
      icon: Star,
      color: "#E53E3E" // red
    },
    {
      title: "Industry Connections",
      description: "Evaluate industry partnerships, internship opportunities, and collaborative projects.",
      icon: BriefcaseBusiness,
      color: "#805AD5" // purple
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="bg-[#ffca00]/20 text-[#212070] text-sm font-medium px-4 py-2 rounded-full">SMART CHOICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mt-4 mb-4">College Selection Guide</h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Key factors to consider when prioritizing your college and branch preferences during JoSAA counselling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {factors.map((factor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4"
              style={{ borderColor: factor.color }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                style={{ backgroundColor: `${factor.color}15` }}
              >
                <factor.icon className="w-6 h-6" style={{ color: factor.color }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 font-medium max-w-3xl mx-auto">
            Our counsellors help you weigh these factors based on your personal preferences, career goals, and rank to create an optimal choice list.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeGuideSection;
