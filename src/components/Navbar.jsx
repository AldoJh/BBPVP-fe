import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-green-600/80 backdrop-blur-md text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/matahari.jpg" 
            alt="Logo" 
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span className="text-2xl font-bold tracking-wide hover:text-gray-200 transition">
            WISATA KU
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {[
            { name: "Beranda", path: "/" },
            { name: "Galery", path: "/gallery" },
            { name: "Home", path: "/home" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="relative group transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-600/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-6 p-6 text-center font-medium">
          {[
            { name: "Beranda", path: "/" },
            { name: "Profil", path: "/profil" },
            { name: "Program", path: "/program" },
            { name: "Galeri", path: "/gallery" },
            { name: "Berita", path: "/news" },
            { name: "Kontak", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link to={item.path} onClick={toggleMenu} className="hover:text-gray-200 transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}