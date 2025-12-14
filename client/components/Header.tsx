import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-navy-800/95 backdrop-blur-md border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F17404965b7254d8e8f0aee73b8a1600a?format=webp&width=800"
                  alt="Nua Aqua Logo"
                  className="w-full h-full object-contain group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-white">Nua</span>
                <span className="text-xs text-teal-400 font-light">Aqua</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
              <Link
                to="/"
                className={`${location.pathname === '/' ? 'text-teal-400' : 'text-white/70'} hover:text-teal-400 transition-colors font-light`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`${location.pathname === '/products' ? 'text-teal-400' : 'text-white/70'} hover:text-teal-400 transition-colors font-light`}
              >
                Products
              </Link>
              <Link
                to="/distribution"
                className={`${location.pathname === '/distribution' ? 'text-teal-400' : 'text-white/70'} hover:text-teal-400 transition-colors font-light`}
              >
                Distribution
              </Link>
              <Link
                to="/contact"
                className={`${location.pathname === '/contact' ? 'text-teal-400' : 'text-white/70'} hover:text-teal-400 transition-colors font-light`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-teal-500 text-navy-800 font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                NEVAS
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hamburger-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6 text-white" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6 text-white" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden mobile-menu transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy-800/95 backdrop-blur-md">
            <Link
              to="/"
              className={`${location.pathname === '/' ? 'bg-navy-700 text-teal-400' : 'text-white/70 hover:bg-navy-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${location.pathname === '/products' ? 'bg-navy-700 text-teal-400' : 'text-white/70 hover:bg-navy-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Products
            </Link>
            <Link
              to="/distribution"
              className={`${location.pathname === '/distribution' ? 'bg-navy-700 text-teal-400' : 'text-white/70 hover:bg-navy-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Distribution
            </Link>
            <Link
              to="/contact"
              className={`${location.pathname === '/contact' ? 'bg-navy-700 text-teal-400' : 'text-white/70 hover:bg-navy-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Contact
            </Link>
            <div className="pt-2">
              <button className="w-full px-4 py-2 bg-teal-500 text-navy-800 font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300">
                NEVAS
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Add padding to the top of the page content to account for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
