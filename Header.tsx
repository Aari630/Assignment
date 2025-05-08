import React, { useState, useEffect } from 'react';
import { Sun, Moon, MonitorSmartphone } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        applyTheme('dark');
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              <span className="text-3xl">S</span>oft<span className="text-3xl">S</span>ell
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">How It Works</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">Get Started</a>
            
            <div className="ml-4 flex space-x-2 border rounded-md p-1">
              <button 
                onClick={() => toggleTheme('light')}
                className={`p-1 rounded ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Light mode"
              >
                <Sun size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button 
                onClick={() => toggleTheme('dark')}
                className={`p-1 rounded ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Dark mode"
              >
                <Moon size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button 
                onClick={() => toggleTheme('system')}
                className={`p-1 rounded ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="System mode"
              >
                <MonitorSmartphone size={18} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div className="mr-4 flex space-x-2 border rounded-md p-1">
              <button 
                onClick={() => toggleTheme('light')}
                className={`p-1 rounded ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Light mode"
              >
                <Sun size={16} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button 
                onClick={() => toggleTheme('dark')}
                className={`p-1 rounded ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Dark mode"
              >
                <Moon size={16} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#why-choose-us" 
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;