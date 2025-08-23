import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Seguranca: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-black">
      <div className="mb-2">
        <FaShieldAlt size={25} color="#FFFFFF" />
      </div>
      <p className="text-white text-sm sm:text-xs md:text-base text-center mb-2">
        PLATAFORMA CONFIÁVEL
      </p>
      <p className="text-white text-sm sm:text-xs md:text-base text-center mb-2">
        Sua segurança é nossa prioridade
      </p>
    </div>
  );
};

export default Seguranca;
