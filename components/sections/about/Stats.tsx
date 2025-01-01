'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';

const stats = [
  { number: 13, label: 'Years of Experience', suffix: '+' },
  { number: 10000, label: 'Students Placed', suffix: '+' },
  { number: 200, label: 'University Partners', suffix: '+' },
  { number: 95, label: 'Success Rate', suffix: '%' }
];

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`stat-${end}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div id={`stat-${end}`} className="text-4xl font-bold text-white md:text-5xl">
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-blue-600 py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter 
                end={stat.number} 
                suffix={stat.suffix}
              />
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}