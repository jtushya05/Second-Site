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
      institute: "IIT Bombay - Computer Science",
      rank: "AIR 245",
      year: "2023",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "The counselling team at EA Global was exceptional. Their detailed insights into various IITs and branches helped me make an informed decision. I wouldn't have secured my seat at IIT Bombay without their guidance.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      institute: "IIT Delhi - Electrical Engineering",
      rank: "AIR 578",
      year: "2023",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I was confused about my branch preferences until I consulted with EA Global. Their counsellors provided clear explanations about career prospects for each option, which made my decision much easier.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Kumar",
      institute: "NIT Trichy - Mechanical Engineering",
      rank: "AIR 1205",
      year: "2022",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "The 24/7 support during the JoSAA rounds was a lifesaver. When I had doubts at 11 PM before the choice filling deadline, their team was available to help me. Highly recommend their services!",
      rating: 4
    },
    {
      id: 4,
      name: "Sneha Reddy",
      institute: "IIIT Hyderabad - CSE",
      rank: "AIR 892",
      year: "2023",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "EA Global's counsellors helped me weigh the pros and cons of choosing IIIT over an NIT. Their data-driven approach and honest feedback helped me make the right choice for my career goals.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">Success Stories</h2>
          <p className="text-gray-600">
            Hear from students who secured their dream institutions with our JoSAA counselling services.
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
                    <blockquote className="italic text-gray-600 border-l-4 border-[#ffca00] pl-4 py-2">
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