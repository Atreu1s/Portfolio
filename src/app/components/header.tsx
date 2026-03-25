"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
          isScrolled ? "bg-bcolor/60" : "bg-bcolor/30"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16">


            <ul className="hidden md:flex items-center gap-2">
              <li>
                <Link 
                  href="#about" 
                  onClick={handleLinkClick}
                  className="block text-1xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
                >
                  Обо мне
                </Link>
              </li>
              <li>
                <Link 
                  href="#skills" 
                  onClick={handleLinkClick}
                  className="block text-1xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
                >
                  Навыки
                </Link>
              </li>
              <li>
                <Link 
                  href="#Projects" 
                  onClick={handleLinkClick}
                  className="block text-1xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link 
                  href="#education" 
                  onClick={handleLinkClick}
                  className="block text-1xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
                >
                  Образование
                </Link>
              </li>
              <li>
                <Link 
                  href="#contacts" 
                  onClick={handleLinkClick}
                  className="block text-1xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
                >
                  Контакты
                </Link>
              </li>
            </ul>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-accent p-2 cursor-pointer">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                {!isMenuOpen ? (
                  <svg className="h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 md:hidden bg-bcolor/90 backdrop-blur-xl flex flex-col items-center justify-center">

          <ul className="flex flex-col items-center gap-4 text-center">
            <li>
              <Link 
                href="#about" 
                onClick={handleLinkClick}
                className="block text-2xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
              >
                Обо мне
              </Link>
            </li>
            <li>
              <Link 
                href="#skills" 
                onClick={handleLinkClick}
                className="block text-2xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
              >
                Навыки
              </Link>
            </li>
            <li>
              <Link 
                href="#Projects" 
                onClick={handleLinkClick}
                className="block text-2xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
              >
                Проекты
              </Link>
            </li>
            <li>
              <Link 
                href="#education" 
                onClick={handleLinkClick}
                className="block text-2xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
              >
                Образование
              </Link>
            </li>
            <li>
              <Link 
                href="#contacts" 
                onClick={handleLinkClick}
                className="block text-2xl text-gray-300 hover:text-accent transition-colors duration-300 p-2"
              >
                Контакты
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </>
  );
}