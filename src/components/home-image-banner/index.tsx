'use client'

import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-auto">
      <img
        src="/imagens/home-image-banner/mar-rio.png"
        alt="Imagem de mar-rio com pontos turísticos destacados"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      text-white text-sm sm:text-base md:text-xl lg:text-3xl 
                      font-bold text-center drop-shadow-lg max-w-[90%] px-4">
        ENTRE ÁGUAS DOCES E SALGADAS, <br className="hidden md:inline" />EXPLORE DESTINOS
      </div>
    </div>
  );
};

export default Banner;
