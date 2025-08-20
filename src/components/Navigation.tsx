'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'News & Media', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
                               {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-16 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm">
              <img 
                src="/images/logo.svg" 
                alt="Ghana First Company Limited Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}>
                Ghana First
              </h1>
              <p className={`text-xs ${
                isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200'
              }`}>
                Company Limited
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                                 className={`font-medium transition-colors duration-200 relative group ${
                   isScrolled 
                     ? 'text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400' 
                     : 'text-white hover:text-yellow-300'
                 }`}
              >
                {link.name}
                                 <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                   isScrolled ? 'bg-red-600' : 'bg-yellow-400'
                 }`}></span>
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden border-t border-gray-200 dark:border-gray-700 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md dark:bg-gray-900/95' 
              : 'bg-white dark:bg-gray-900'
          }`}>
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                                     className="block text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 font-medium py-2 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
