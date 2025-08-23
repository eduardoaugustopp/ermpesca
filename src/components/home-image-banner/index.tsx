'use client'

import React, { useEffect, useState } from "react";

type Pin = {
  id: number;
  top: string;
  left: string;
};

const pins: Pin[] = [
  { id: 1, top: "20%", left: "30%" },
  { id: 2, top: "25%", left: "50%" },
  { id: 3, top: "30%", left: "70%" },
  { id: 4, top: "40%", left: "20%" },
  { id: 5, top: "45%", left: "60%" },
  { id: 6, top: "50%", left: "80%" },
  { id: 7, top: "60%", left: "40%" },
  { id: 8, top: "65%", left: "55%" },
  { id: 9, top: "70%", left: "35%" },
  { id: 10, top: "75%", left: "65%" },
];

const Banner: React.FC = () => {
  const [visiblePins, setVisiblePins] = useState<Pin[]>([]);

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const startAnimation = () => {
      setVisiblePins([]);
      index = 0;

      interval = setInterval(() => {
        if (index < pins.length) {
          setVisiblePins((prev) => [...prev, pins[index]]);
          index++;
        } else {
          clearInterval(interval);
          timeout = setTimeout(startAnimation, 2000);
        }
      }, 500);
    };

    startAnimation();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full h-auto">
      <img
        src="/imagens/home-image-banner/mar-rio.png"
        alt="Imagem de mar-rio com pontos turísticos destacados"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs md:text-3xl font-bold text-center drop-shadow-lg whitespace-nowrap">
        ENTRE ÁGUAS DOCES E SALGADAS, EXPLORE DESTINOS
      </div>

      {visiblePins.map((pin) =>
        pin ? (
          <div
            key={pin.id}
            className="absolute animate-bounce"
            style={{ top: pin.top, left: pin.left }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-600 drop-shadow-md"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Banner;
