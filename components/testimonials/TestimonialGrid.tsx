'use client';

import { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialData } from '@/src/data/testimonial-data';

export default function TestimonialGrid() {
  const [filter, setFilter] = useState('all');

  const filteredTestimonials = testimonialData.filter(testimonial => 
    filter === 'all' || testimonial.type === filter
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`rounded-full px-6 py-2 ${
            filter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('text')}
          className={`rounded-full px-6 py-2 ${
            filter === 'text' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Written
        </button>
        <button
          onClick={() => setFilter('video')}
          className={`rounded-full px-6 py-2 ${
            filter === 'video' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Video
        </button>
        <button
          onClick={() => setFilter('text+video')}
          className={`rounded-full px-6 py-2 ${
            filter === 'text+video' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Text + Video
        </button>
      </div>

      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="mb-6 break-inside-avoid">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}