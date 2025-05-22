import React from 'react';
import { CheckCircle2, Clock, Calendar, FileText, Building2, GraduationCap } from 'lucide-react';

const TimelineSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = React.useState<number[]>([]);
  const timelineRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = timelineRefs.current.findIndex(ref => ref === entry.target);
        if (entry.isIntersecting && !visibleSteps.includes(index)) {
          setVisibleSteps(prev => [...prev, index]);
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  const timelineSteps = [
    {
      title: "JEE Result Announcement",
      description: "Results for JEE Main and Advanced are announced, determining your eligibility for JoSAA counselling.",
      icon: CheckCircle2,
      date: "June 2025",
    },
    {
      title: "Registration & Choice Filling",
      description: "Register for JoSAA counselling and fill your college and branch preferences in order of priority.",
      icon: FileText,
      date: "June-July 2025",
    },
    {
      title: "Seat Allocation Rounds",
      description: "Multiple rounds of seat allocation based on ranks, preferences, and seat availability.",
      icon: Clock,
      date: "July 2025",
    },
    {
      title: "Document Verification",
      description: "Submit and verify your documents at the reporting centers to confirm your admission.",
      icon: Building2,
      date: "July 2025",
    },
    {
      title: "Final Seat Acceptance",
      description: "Confirm your seat by paying the required fees and completing the admission process.",
      icon: Calendar,
      date: "July-August 2025",
    },
    {
      title: "Begin Your College Journey",
      description: "Start your academic journey at your allocated institution.",
      icon: GraduationCap,
      date: "August 2025",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">JoSAA Counselling Process</h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            A structured roadmap to guide you through each step of the JoSAA counselling process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#212070] to-[#ffca00] rounded-full origin-top scale-y-0 animate-scale-down"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (                <div 
                  key={index}
                  ref={el => timelineRefs.current[index] = el}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 
                    ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
                    transform transition-all duration-700 ease-out
                    ${visibleSteps.includes(index) ? 'opacity-100' : 'opacity-0'}
                    ${visibleSteps.includes(index) ? 'translate-y-0' : 'translate-y-8'}`}
                >
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center border-2 border-[#ffca00] shadow-md">
                      <step.icon className="w-4 h-4 md:w-6 md:h-6 text-[#212070]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div 
                    className={`ml-12 md:ml-0 md:w-5/12 bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300
                      ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <span className="inline-block px-3 py-1 bg-[#ffca00]/10 text-[#212070] text-sm font-medium rounded-full mb-2">
                      {step.date}
                    </span>
                    <h3 className="text-xl font-bold text-[#212070] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
