import React from 'react';

type Country = 'newZealand' | 'ireland' | 'singapore' | 'france' | 'sweden';

interface ComingSoonProps {
  country: Country;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ country }) => {
  const images: Record<Country, string> = {
    newZealand: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200',
    ireland: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200',
    singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200',
    france: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200',
    sweden: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200',
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images[country]})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-white text-4xl font-bold">Coming Soon</h1>
    </div>
  );
};

export default ComingSoon;
