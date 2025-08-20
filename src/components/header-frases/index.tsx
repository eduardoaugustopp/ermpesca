'use client'

import React, { useEffect, useState } from 'react';

const HeaderFrases: React.FC = () => {
  const phrases = [
    'DESTINOS ÁGUA DOCE',
    'DESTINOS ÁGUA SALGADA',
  ];

  const [currentPhrase, setCurrentPhrase] = useState<string>(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-4 text-center md:py-2">
      <p className="text-white text-sm md:text-sm m-0">
        {currentPhrase}
      </p>
    </div>
  );
};

export default HeaderFrases;
