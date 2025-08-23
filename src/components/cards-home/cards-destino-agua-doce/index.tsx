'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Destination {
  name: string;
  link: string;
  image: string;
  description: string;
}

const DestinosAguaDoce: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const data: Destination[] = [
      {
        name: "Registro-SP",
        link: "/destinos/registro-sp",
        image: "/imagens/destinos/registro.jpg",
        description: "Pesque em rios tranquilos de Registro-SP, perfeito para pesca em água doce."
      },
      {
        name: "Rio Ribeira",
        link: "/destinos/rio-ribeira",
        image: "/imagens/destinos/rio-ribeira.jpg",
        description: "Aprecie a natureza e a pesca no Rio Ribeira, próximo a Registro-SP."
      }
    ];
    setDestinations(data);
  }, []);

  return (
    <div className="text-center p-10 bg-white pb-20">
      <h1 className="text-black text-2xl font-bold mb-12">
        DESTINOS DE PESCA EM ÁGUAS DOCES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {destinations.map((dest) => (
          <Link
            key={dest.name}
            href={dest.link}
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-200"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <div className="p-4">
              <h2 className="text-black text-lg font-semibold">{dest.name}</h2>
              <p className="text-black text-sm mt-2">{dest.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/destinos"
        className="inline-block bg-black text-white font-semibold py-2 px-6 mt-10 border border-black hover:bg-white hover:text-black transition-all duration-300"
      >
        VER TODOS OS DESTINOS
      </Link>
    </div>
  );
};

export default DestinosAguaDoce;
