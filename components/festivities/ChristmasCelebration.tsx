'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const ChristmasCelebration = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const today = new Date();
    const indiaTime = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const isChristmas = indiaTime.getDate() === 25 && indiaTime.getMonth() === 12;

    if (isChristmas) {
      setShowCelebration(true);
      launchConfetti();

      //timeout to close the celebration after 6 seconds
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

  const launchConfetti = () => {
    const colors = ['#FF0000', '#00FF00', '#FFFFFF']; // Red, Green, White
    confetti({
      particleCount: 300,
      spread: 360,
      startVelocity: 80,
      colors,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  if (!showCelebration) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 w-11/12 max-w-lg relative">
        <button onClick={() => setShowCelebration(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl">✖</button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-red-600 text-center">🎄 Merry Christmas! 🎄</h2>
        </div>
        
        <h3 className="mt-4 text-xl font-bold text-green-600 text-center">✨ Special Holiday Offer! ✨</h3>
        
        <p className="mt-2 text-base text-gray-800 text-center">
          Celebrate the holiday season with a <span className="font-semibold text-green-600">special surprise</span>.
          Offer valid <strong>only today</strong>!
        </p>
        
        <div className="mt-6 text-center">
          <a href="/get-started?fromPage=Christmas%20Banner&serviceName=Christmas%20Special%20Offer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition">
            Claim Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChristmasCelebration;
