// 'use client'

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface FishingDestination {
//   name: string;
//   link: string;
//   image: string;
//   description: string;
//   duration: string;
//   packageType: string;
// }

// const DestinosAguaSalgada: React.FC = () => {
//   const [destinations, setDestinations] = useState<FishingDestination[]>([]);

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const response = await fetch('/api/destinos?type=aguaSalgada');
//         const data = await response.json();
//         setDestinations(data);
//       } catch (error) {
//         console.error('Erro ao buscar destinos:', error);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   return (
//     <div className="text-center p-10 bg-white pb-20">
//       <h1 className="text-black text-xl font-bold mb-10">DESTINOS EM ÁGUA SALGADA</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {destinations.map((dest) => (
//           <Link
//             key={dest.name}
//             href={dest.link}
//             className="block bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
//           >
//             <img
//               src={dest.image}
//               alt={dest.name}
//               className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
//             />
//             <div className="p-4 text-black text-left">
//               <h2 className="text-lg font-semibold mb-2">{dest.name}</h2>
//               <p className="text-sm mb-2">{dest.description}</p>
//               <p className="text-sm"><strong>Duração:</strong> {dest.duration}</p>
//               <p className="text-sm"><strong>Tipo:</strong> {dest.packageType}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinosAguaSalgada;
