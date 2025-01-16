'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';

const stats = [
  { number: 21, label: 'Years of Experience', suffix: '+' },
  { number: 10000, label: 'Successful Students', suffix: '+' },
  { number: 850, label: 'University Connects', suffix: '+' },
  { number: 99, label: 'Success Rate', suffix: '%' }
];

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 900, suffix = '' }: AnimatedCounterProps) {
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