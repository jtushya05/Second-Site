'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const DiwaliCelebration = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0.5); // Variable to control overlay opacity
  const [popupOpacity, setPopupOpacity] = useState(1); // Variable to control popup opacity

  useEffect(() => {
    const today = new Date();
    const indiaTime = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const isDiwali =
      indiaTime.getFullYear() === 2025 &&
      indiaTime.getMonth() === 9 && // October (0-indexed, 9 = October)
      indiaTime.getDate() >= 15 &&
      indiaTime.getDate() <= 25;

    if (isDiwali) {
      setShowCelebration(true);
      launchConfetti();
      launchFireworks();

      // Auto dismiss after 6 seconds
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 6000);

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
    const colors = ['#FFA500', '#FFD700', '#FF4500', '#FF6347', '#FFFF00']; // Warm Diwali colors
    confetti({
      particleCount: 300,
      spread: 200,
      colors,
      origin: { y: 0.6 },
    });
  };

  const launchFireworks = () => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 100,
        spread: 300,
        startVelocity: 50,
        colors: ['#FF4500', '#FFD700', '#FFA500', '#FFFF00'],
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    }, 500);
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
          <h2 className="text-2xl font-bold text-yellow-600 text-center">🪔 Happy Diwali! 🪔</h2>
        </div>
        
        <h3 className="mt-4 text-xl font-bold text-orange-600 text-center">✨ Special Diwali Offer! ✨</h3>
        
        <p className="mt-2 text-base text-gray-800 text-center">
          Celebrate Diwali with a <span className="font-semibold text-yellow-600">special festive discount</span> on our courses. 
          Offer valid <strong>only till 23rd October</strong>!
        </p>
        
        <div className="mt-6 text-center">
          <a href="/get-started?fromPage=Diwali%20Banner&serviceName=Diwali%20Special%20Offer" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition">
            Claim Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiwaliCelebration;
