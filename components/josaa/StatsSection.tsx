import React, { useState, useEffect } from 'react';
import { PieChart, BarChart } from 'lucide-react';

const StatsSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const collegeStats = [
    { name: 'IITs', count: 23, color: '#3B82F6' },
    { name: 'NITs', count: 31, color: '#10B981' },
    { name: 'IIITs', count: 26, color: '#F59E0B' },
    { name: 'GFTIs', count: 33, color: '#8B5CF6' },
    { name: 'Other', count: 400, color: '#EC4899' }
  ];

  const branchStats = [
    { name: 'Computer Science', interest: 95, color: '#3B82F6' },
    { name: 'Electronics', interest: 80, color: '#10B981' },
    { name: 'Mechanical', interest: 65, color: '#F59E0B' },
    { name: 'Electrical', interest: 75, color: '#8B5CF6' },
    { name: 'Civil', interest: 50, color: '#EC4899' },
    { name: 'Chemical', interest: 45, color: '#EF4444' },
    { name: 'Aerospace', interest: 60, color: '#06B6D4' }
  ];

  return (
    <section id="stats-section" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">JoSAA Insights</h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Data-driven insights to help you make informed decisions during counselling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Colleges Distribution */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex items-center mb-6">
              <PieChart className="w-6 h-6 md:w-8 md:h-8 text-[#212070] mr-3" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Participating Institutions</h3>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full border-8 border-gray-100 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-[#212070]">500+</span>
                <span className="text-sm text-gray-500 block text-center">Colleges</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {collegeStats.map((stat, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{stat.name}</span>
                    <span className="text-gray-700 font-medium">{stat.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="rounded-full h-2.5 transition-all duration-1000 ease-out" 
                      style={{ 
                        backgroundColor: stat.color,
                        width: animate ? `${(stat.count / 500) * 100}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branch Popularity */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex items-center mb-6">
              <BarChart className="w-6 h-6 md:w-8 md:h-8 text-[#212070] mr-3" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Branch Popularity Index</h3>
            </div>
            
            <div className="space-y-4">
              {branchStats.map((branch, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{branch.name}</span>
                    <span className="text-gray-700 font-medium">{branch.interest}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 md:h-5">
                    <div 
                      className="rounded-full h-4 md:h-5 flex items-center transition-all duration-1000 ease-out" 
                      style={{ 
                        backgroundColor: branch.color,
                        width: animate ? `${branch.interest}%` : '0%'
                      }}
                    >
                      {branch.interest > 40 && (
                        <span className="ml-3 text-white text-xs md:text-sm font-medium whitespace-nowrap">
                          {branch.name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              *Based on student preference data from previous counselling seasons
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
