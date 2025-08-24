import React from "react";

const HomeImage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start bg-white text-black p-0">
      <img
        src="/imagens/home-image/barco.png"
        alt="Imagem ilustrativa"
        className="w-full h-auto max-h-[90vh] object-contain mt-8 mb-4 md:mb-0 md:w-[60vw] md:h-auto"
      />
      <div className="p-5 text-center md:text-left md:p-4 md:w-[40vw]">
        <h1 className="text-black text-2xl font-bold mb-6">
          LUGARES ESPECIAIS
        </h1>
        <p className="text-black text-sm mb-2">
          Levamos você para pescar em lugares bonitos, no rio e no mar.
        </p>
        <p className="text-black text-sm mb-2">
          Queremos que você aproveite cada momento, com aventura, descanso e contato com a natureza.
        </p>
        <p className="text-black text-sm mb-2">
          A gente cuida de tudo: transporte, hospedagem e guia.
        </p>
        <p className="text-black text-sm">
          Trabalhamos com pessoas locais e de confiança, para que sua viagem seja segura e tranquila.
        </p>
      </div>
    </div>
  );
};

export default HomeImage;
