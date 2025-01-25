'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const IndependenceDayCelebration = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0.5);
  const [popupOpacity, setPopupOpacity] = useState(1);

  useEffect(() => {
    const today = new Date();
    const indiaTime = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const isIndependenceDay = indiaTime.getDate() === 15 && indiaTime.getMonth() === 8;

    if (isIndependenceDay) {
      setShowCelebration(true);
      launchConfettiSequence();
      
//timeout defined here
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 6000);

      const handleScroll = () => {
        setShowCelebration(false);
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const launchConfettiSequence = () => {
    const colors = ['#FF9933', '#FFFFFF', '#000080', '#128807']; // Saffron, White, Blue, Green
    let index = 0;
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 200,
        spread: 300,
        startVelocity: 60,
        colors: [colors[index % colors.length]],
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
      index++;
    }, 400);

    // General burst with all tricolor colors
    setTimeout(() => {
      confetti({
        particleCount: 400,
        spread: 360,
        startVelocity: 80,
        colors: ['#FF9933', '#FFFFFF', '#128807'],
        origin: { x: 0.5, y: 0.5 },
      });
    }, 2500);
  };

  if (!showCelebration) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div 
        className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 w-11/12 max-w-lg relative"
        style={{ opacity: popupOpacity }}
      >
        <button onClick={() => setShowCelebration(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl">✖</button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-orange-600 text-center">Happy Independence Day!</h2>
        </div>
        
        <h3 className="mt-4 text-xl font-bold text-green-600 text-center">✨ Free Mock Test Offer! ✨</h3>
        
        <p className="mt-2 text-base text-gray-800 text-center">
          Celebrate Independence Day with a <span className="font-semibold text-green-600">free mock test</span>. 
          Offer valid <strong>only today</strong>!
        </p>
        
        <div className="mt-6 text-center">
          <a href="/get-started?fromPage=Independence%20Day%20Banner&serviceName=Independence%20Day%20Free%20Mocktest" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndependenceDayCelebration;
