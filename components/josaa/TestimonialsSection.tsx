import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  institute: string;
  rank: string;
  year: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      institute: "IIIT Delhi - Computer Science & AI",
      rank: "JEE Advanced Qualified",
      year: "2024",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I qualified JEE Advanced but missed IIT CS by a narrow margin. EA Global's counsellors showed me how IIIT Delhi's specialized AI program aligned with my interests.\n\nTheir college-specific insights about placements and research opportunities helped me make a confident choice despite the pressure.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      institute: "DTU Delhi - Computer Engineering",
      rank: "JEE Main Qualified",
      year: "2024",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "After qualifying JEE Main but not Advanced, I was worried about missing out on quality education. EA Global showed me how DTU's strong industry connections make it comparable to top NITs.\n\nTheir guidance through all JoSAA rounds was crucial in securing my preferred branch.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Kumar",
      institute: "BITS Pilani - Electronics & Instrumentation",
      rank: "JEE Advanced Qualified",
      year: "2023",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I was conflicted between a lower-ranked IIT and BITS Pilani. EA Global provided detailed comparisons of academics, campus life, and placement statistics.\n\nTheir dual admission strategy for JoSAA and BITS helped me keep all options open until the final round.",
      rating: 5
    },
    {
      id: 4,
      name: "Sneha Reddy",
      institute: "NIT Warangal - Computer Science",
      rank: "JEE Main Qualified",
      year: "2024",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "EA Global's detailed analysis of previous years' cutoffs and their real-time guidance during each counselling round was invaluable.\n\nThey helped me navigate the complex decision between newer IITs and established NITs, considering factors beyond just college brands. Their strategy helped me secure CS at NIT Warangal.",
      rating: 5
    },
    {
      id: 5,
      name: "Varun Mehta",
      institute: "NSIT Delhi - Computer Engineering",
      rank: "JEE Main Qualified",
      year: "2024",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "With the overwhelming number of options and college combinations in JoSAA, I was completely lost. EA Global's counsellors helped me understand the value of NSIT's excellent placements and Delhi location. Their algorithm for prioritizing branches based on my interests and career goals was eye-opening.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">Real Student Success Stories</h2>
          <p className="text-gray-600">
            Hear from students who navigated their JEE results with our JoSAA counselling services to find their best-fit engineering colleges.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#212070]">{testimonial.name}</h3>
                        <p className="text-[#ffca00] font-medium">{testimonial.institute}</p>
                        <p className="text-gray-600">JEE {testimonial.rank} | {testimonial.year}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#ffca00] fill-[#ffca00]' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-600 border-l-4 border-[#ffca00] pl-4 py-2 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#212070]" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#212070]" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-[#212070]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;