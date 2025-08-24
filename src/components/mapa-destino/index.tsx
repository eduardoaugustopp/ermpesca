'use client'

import React from "react";
import dynamic from "next/dynamic";

const MapaLeaflet = dynamic(() => import("./MapaLeaflet"), {
  ssr: false,
});

const MapaDestinos: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-xl font-bold mb-6 text-black">MAIS VISITADOS</h2>
      <div className="w-full max-w-[600px] h-[400px] rounded-lg overflow-hidden shadow-lg">
        <MapaLeaflet />
      </div>
    </div>
  );
};

export default MapaDestinos;
