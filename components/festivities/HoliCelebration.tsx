'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const HoliCelebration = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0.5); // Variable to control overlay opacity
  const [popupOpacity, setPopupOpacity] = useState(1); // Variable to control popup opacity

  useEffect(() => {
    const today = new Date();
    const indiaTime = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const isHoli = indiaTime.getMonth() === 3 && (indiaTime.getDate() === 14 || indiaTime.getDate() === 13); // Holi dates (March 7-8, varies yearly)

    if (isHoli) {
      setShowCelebration(true);
      launchConfetti();

      // Auto dismiss after 7 seconds
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 7000);

      // Dismiss on scroll
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

  const launchConfetti = () => {
    const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#FF33F6', '#33FF57']; // Vibrant Holi colors
    confetti({
      particleCount: 300,
      spread: 200,
      colors,
      origin: { y: 0.6 },
    });
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
          <h2 className="text-2xl font-bold text-purple-600 text-center">🎨 Happy Holi! 🎨</h2>
        </div>
        
        <h3 className="mt-4 text-xl font-bold text-green-600 text-center">🌟 Special Holi Offer! 🌟</h3>
        
        <p className="mt-2 text-base text-gray-800 text-center">
          Celebrate Holi with a <span className="font-semibold text-red-600">free special discount</span> on our courses. 
          Offer valid <strong>only today</strong>!
        </p>
        
        <div className="mt-6 text-center">
          <a href="/get-started?fromPage=Holi%20Banner&serviceName=Holi%20Special%20Offer" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition">
            Claim Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoliCelebration;
