import React from "react";

const HomeImage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start bg-white text-black p-0">
      <img
        src="/imagens/home-image/barco.png"
        alt="Imagem ilustrativa"
        className="w-full h-auto max-h-[90vh] object-contain mb-4 md:mb-0 md:w-[60vw] md:h-auto"
      />
      <div className="p-5 text-sm text-center md:text-left md:p-4 md:w-[40vw]">
        <h1 className="text-black text-xl font-light mb-6">LUGARES ESPECIAIS</h1>
        <p className="text-base md:text-base mb-2">
          Levamos você para pescar em lugares escolhidos, em rios e no mar.
        </p>
        <p className="text-base md:text-base mb-2">
          Queremos que você viva momentos de verdade, com aventura, calma e contato com os costumes da região.
        </p>
        <p className="text-base md:text-base mb-2">
          Cuidamos de tudo na sua viagem, do começo ao fim.
        </p>
        <p className="text-base md:text-base">
          Trabalhamos com pessoas de confiança e moradores locais, para garantir segurança, conforto e uma experiência única.
        </p>
      </div>
    </div>
  );
};

export default HomeImage;
