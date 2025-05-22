import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, GraduationCap, Star } from 'lucide-react';

const SuccessMetricsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const metrics = [
    {
      value: 1000,
      suffix: "+",
      title: "Students Guided",
      description: "Successful admissions across IITs, NITs, IIITs and top engineering colleges",
      icon: Users,
      colorClass: "from-blue-400 to-blue-600"
    },
    {
      value: 99,
      suffix: "%",
      title: "Success Rate",
      description: "Our students secure admissions in colleges within their top 10 preferences",
      icon: Award,
      colorClass: "from-purple-400 to-purple-600"
    },
    {
      value: 10,
      suffix: "+",
      title: "Years Experience",
      description: "Decade of expertise in JoSAA counselling and engineering admissions",
      icon: GraduationCap,
      colorClass: "from-amber-400 to-amber-600"
    },    {
      value: 5,
      suffix: "",
      title: "Student Satisfaction",
      description: "Average rating from students and parents for our counselling services",
      icon: Star,
      colorClass: "from-[#ffca00] to-[#ffa000]",
      specialFormat: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation
  const Counter = ({ target, suffix, duration = 600 }: { target: number; suffix: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const stepTime = Math.floor(duration / target);
    const isDecimal = !Number.isInteger(target);
    
    useEffect(() => {
      let currentCount = 0;
      
      if (isVisible) {
        const timer = setInterval(() => {
          currentCount += isDecimal ? 0.1 : 1;
          
          if (currentCount >= target) {
            clearInterval(timer);
            setCount(target);
          } else {
            setCount(currentCount);
          }
        }, stepTime);
        
        return () => clearInterval(timer);
      }
    }, [isVisible]);    return (
      <span className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
        {isDecimal ? count.toFixed(1) : Math.floor(count)}
        {suffix && suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">Our Success Metrics</h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Guiding students toward academic excellence and dream college placements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center overflow-hidden relative group"
            >
              {/* Decorative background gradient */}
              <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${metric.colorClass} opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${metric.colorClass} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
                <div className="mb-2">                {isVisible ? (
                  <div className="flex items-center justify-center gap-2">                    
                    {metric.specialFormat ? (
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-[2.5rem] md:text-[3.5rem] font-bold leading-none mb-1">
                          <Counter target={metric.value} suffix={metric.suffix} />
                        </div>
                        <div className="flex -space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-[#ffca00] fill-[#ffca00] drop-shadow-sm" />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Counter target={metric.value} suffix={metric.suffix} />
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">                    
                    {metric.specialFormat ? (
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-[2.5rem] md:text-[3.5rem] font-bold leading-none mb-1">
                          <span>0{metric.suffix}</span>
                        </div>
                        <div className="flex -space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-[#ffca00] fill-[#ffca00] drop-shadow-sm" />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <span className="text-4xl md:text-5xl font-bold">0{metric.suffix}</span>
                    )}
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{metric.title}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetricsSection;
