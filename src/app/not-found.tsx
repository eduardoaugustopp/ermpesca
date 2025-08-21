import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-blue-50 px-4">
      {/* Ícone de peixe em SVG */}
      <div className="w-20 h-20 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="currentColor"
          className="text-blue-600 w-full h-full"
        >
          <path d="M2 32c6-10 18-16 30-16 6 0 12 2 18 6 4-2 8-2 12 0-2 4-6 8-12 10 6 4 10 8 12 12-4 2-8 2-12 0-6 4-12 6-18 6C20 48 8 42 2 32zM32 24a8 8 0 100 16 8 8 0 000-16z" />
        </svg>
      </div>

      <h1 className="text-4xl font-bold text-blue-900">Em Construção 🐠</h1>
      <p className="text-md text-blue-600 mt-1">
        A página que você procura foi levada pela correnteza ou nunca existiu.
      </p>

      <Link href="/">
        <div className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer">
          Voltar ao Início
        </div>
      </Link>
    </div>
  );
}
