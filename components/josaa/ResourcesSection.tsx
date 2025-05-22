import React from 'react';
import { FileText, ChevronRight, BookOpen, VideoIcon, Download, Presentation, Newspaper } from 'lucide-react';
import Link from 'next/link';

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "JoSAA Selection Process Guide",
      description: "A comprehensive guide to understand the JoSAA selection process.",
      icon: FileText,
      link: "/resources/josaa-guide.pdf",
      type: "PDF Guide",
      new: true
    },
    {
      title: "College Comparison Tool",
      description: "Compare colleges side by side to make informed decisions.",
      icon: Presentation,
      link: "/resources/college-comparison",
      type: "Interactive Tool",
      new: false
    },
    {
      title: "Seat Matrix Analysis",
      description: "Previous years' seat allocation data across all rounds.",
      icon: BookOpen,
      link: "/resources/seat-matrix",
      type: "Spreadsheet",
      new: false
    },
    {
      title: "Closing Rank Predictor",
      description: "AI-powered tool to predict closing ranks for 2025.",
      icon: Download,
      link: "/resources/rank-predictor",
      type: "Download",
      new: true
    },
    {
      title: "JoSAA Webinar Series",
      description: "Watch recorded webinars on strategic choice filling.",
      icon: VideoIcon,
      link: "/resources/webinars",
      type: "Videos",
      new: false
    },
    {
      title: "Latest JoSAA Updates",
      description: "Stay informed with the latest announcements and changes.",
      icon: Newspaper,
      link: "/resources/updates",
      type: "News",
      new: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="bg-[#ffca00]/20 text-[#212070] text-sm font-medium px-4 py-2 rounded-full">FREE RESOURCES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mt-4 mb-4">JoSAA Preparation Resources</h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Access our curated collection of free resources to help you prepare for JoSAA counselling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group relative"
            >
              {resource.new && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="inline-block bg-[#212070] text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                </div>
              )}
            
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffca00]/15 flex items-center justify-center mr-3">
                  <resource.icon className="w-5 h-5 text-[#212070]" />
                </div>
                <span className="text-sm text-gray-500">{resource.type}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              
              <Link 
                href={resource.link} 
                className="inline-flex items-center font-medium text-[#212070] hover:text-[#ffca00] transition-colors"
              >
                Access Resource
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/resources"
            className="inline-flex items-center bg-white border-2 border-[#212070] text-[#212070] hover:bg-[#212070] hover:text-white transition-colors duration-300 font-semibold px-6 py-3 rounded-lg"
          >
            View All Resources
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
