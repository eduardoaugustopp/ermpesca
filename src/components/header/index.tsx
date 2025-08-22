'use client'
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const categories = [
    { name: "HOME", link: "/" },
    { name: "SOBRE", link: "" },
    { name: "DESTINOS", link: "" },
    { name: "BLOG", link: "" },
    { name: "CONTATO", link: "" },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);

  return (
    <div>
      <header className="bg-white text-black shadow-md">
        <div className="container mx-auto p-4 flex items-center justify-between relative">
          {/* Menu hambúrguer (mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black text-lg focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Logo responsivo */}
          <div className="flex-1 text-center lg:text-left">
            <img
              src="/imagens/header/logo.png"
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 inline-block"
            />
          </div>

          {/* Ícones sociais */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="">
              <FaInstagram size={24} className="cursor-pointer text-black hover:text-pink-500" />
            </a>
            <a href="">
              <FaFacebookF size={24} className="cursor-pointer text-black hover:text-blue-500" />
            </a>
            <a href="">
              <FaYoutube size={24} className="cursor-pointer text-black hover:text-red-500" />
            </a>
          </div>
        </div>
      </header>

      <nav className={`bg-white ${showMenu ? "p-4" : "p-0"} relative`}>
        <ul className="hidden lg:flex justify-center gap-6">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href={category.link}
                className="text-black text-sm transition-colors duration-300 ease-in-out hover:text-blue-300"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu mobile */}
        <div
          className={`fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50 transition-all duration-300 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-3xl focus:outline-none"
          >
            x
          </button>
          <ul className="list-none text-center space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href={category.link}
                  className="text-xl hover:text-blue-300 transition-colors duration-300"
                  onClick={() => setShowMenu(false)}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
