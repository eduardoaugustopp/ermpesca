'use client'

import { useCallback, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const feedbacks = [
  {
    nome: "Carlos M.",
    comentario: "Experiência incrível! Peguei meu primeiro tucunaré gigante!",
    estrelas: 5,
  },
  {
    nome: "Fernanda R.",
    comentario: "Equipe super atenciosa e lugar maravilhoso.",
    estrelas: 4,
  },
  {
    nome: "João P.",
    comentario: "Tudo muito bem organizado, recomendo demais!",
    estrelas: 5,
  },
  {
    nome: "Luciana T.",
    comentario: "A pescaria foi boa, mas o barco poderia ser mais confortável.",
    estrelas: 3,
  },
  {
    nome: "Rafael D.",
    comentario: "Melhor agência de pesca que já conheci!",
    estrelas: 5,
  },
];

const Feedback = () => {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(feedbacks.slice(0, 3));
  const [startIndex, setStartIndex] = useState(0);

  const rotateFeedbacks = useCallback(() => {
    const nextIndex = (startIndex + 1) % feedbacks.length;
    const newFeedbacks = feedbacks.slice(nextIndex, nextIndex + 3);
    if (newFeedbacks.length < 3) {
      newFeedbacks.push(...feedbacks.slice(0, 3 - newFeedbacks.length));
    }
    setVisibleFeedbacks(newFeedbacks);
    setStartIndex(nextIndex);
  }, [startIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateFeedbacks();
    }, 4000);
    return () => clearInterval(interval);
  }, [rotateFeedbacks]);

  return (
    <div className="bg-white text-gray-900 px-8 pt-2 pb-8 text-center">
      <h2 className="text-xl font-bold mb-4">FEEDBACK DOS CLIENTES ★★★★★</h2>
      <p className="text-base mb-6">+ de 500 clientes satisfeitos!</p>
      <div className="flex gap-6 justify-center flex-wrap">
        {visibleFeedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-sm w-64 h-52 flex flex-col justify-between"
          >
            <div>
              <p className="text-lg font-semibold mb-1">{feedback.nome}</p>
              <p className="text-sm italic">&quot;{feedback.comentario}&quot;</p>
            </div>
            <div className="flex justify-center text-yellow-500 mt-2">
              {[...Array(feedback.estrelas)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
