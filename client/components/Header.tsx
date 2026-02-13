import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
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
      <header className="absolute top-0 w-full z-50 bg-blue-900 border-b border-blue-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-36">
            {/* Logo - Nua Aqua */}
            <Link to="/" className="flex flex-col items-center gap-0 group flex-shrink-0 py-2">
              <div className="relative w-16 h-16 md:w-24 md:h-24 text-white">
                <img
                  src="/Images/NQ LOGO.png"
                  alt="Nua Aqua Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[7px] md:text-[8px] text-white/50 font-medium tracking-[0.2em] uppercase whitespace-nowrap group-hover:text-white transition-colors">
                Where purity meets prestige
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8 flex-1 justify-center">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'dropdown', path: '/products', label: 'Our Products' },
                { name: 'Ice Cubes', path: '/ice-cube' },
                { name: 'Franchise', path: '/franchise' },
                { name: 'Distribution', path: '/distribution' },
                { name: 'Contact us', path: '/contact' },
              ].map((link) => (
                link.name === 'dropdown' ? (
                  <div
                    key="products-dropdown"
                    className="relative group/dropdown"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      to="/products"
                      className={`${location.pathname === '/products' ? 'text-white' : 'text-white/60'} hover:text-white transition-colors text-sm font-semibold tracking-wide whitespace-nowrap flex items-center gap-1.5 py-8`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    <div className={`absolute top-full left-0 w-64 bg-blue-900 border border-blue-800 shadow-2xl rounded-xl overflow-hidden transition-all duration-300 ${isProductsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                      <div className="py-2">
                        {[
                          { name: 'Mineral Water', id: 'mineral-water' },
                          { name: 'Alkaline Water', id: 'alkaline-water' },
                          { name: 'Vitamin B12 Water', id: 'vitamin-b12' },
                          { name: 'Himalayan Water', id: 'himalayan-water' },
                          { name: 'Sparkling Water', id: 'sparkling-water' },
                          { name: 'Glass Water Bottle', id: 'glass-bottle' }
                        ].map((product) => (
                          <Link
                            key={product.id}
                            to={`/products#${product.id}`}
                            className="block px-6 py-3 text-sm text-white/70 hover:text-white hover:bg-blue-800 transition-colors font-medium border-l-2 border-transparent hover:border-blue-400"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${location.pathname === link.path ? 'text-white' : 'text-white/60'} hover:text-white transition-colors text-sm font-semibold tracking-wide whitespace-nowrap py-8`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Desktop Logo - Nevas (Right Side) */}
            <div className="hidden md:block flex-shrink-0">
              <a
                href="https://nevas.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative w-28 h-12 md:w-40 md:h-24">
                  <img
                    src="/Images/Nevas log.png"
                    alt="Nua Aqua"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hamburger-button inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white focus:outline-none"
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

        <div className={`xl:hidden mobile-menu transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900 border-t border-blue-800">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'dropdown', path: '/products', label: 'Our Products' },
              { name: 'Ice Cubes', path: '/ice-cube' },
              { name: 'Franchise', path: '/franchise' },
              { name: 'Distribution', path: '/distribution' },
              { name: 'Contact us', path: '/contact' },
            ].map((link) => (
              link.name === 'dropdown' ? (
                <div key="mobile-products-dropdown">
                  <div className="flex items-center">
                    <Link
                      to="/products"
                      onClick={() => setIsOpen(false)}
                      className={`${location.pathname === '/products' ? 'bg-blue-800 text-white' : 'text-white/70 hover:bg-blue-800 hover:text-white'} flex-1 px-3 py-2 rounded-l-md text-base font-medium`}
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={`${location.pathname === '/products' ? 'bg-blue-800 text-white' : 'text-white/70 hover:bg-blue-800 hover:text-white'} px-3 py-2 rounded-r-md text-base font-medium border-l border-white/10`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${isProductsOpen ? 'max-h-96 opacity-100 my-2' : 'max-h-0 opacity-0'}`}>
                    {[
                      { name: 'Mineral Water', id: 'mineral-water' },
                      { name: 'Alkaline Water', id: 'alkaline-water' },
                      { name: 'Vitamin B12 Water', id: 'vitamin-b12' },
                      { name: 'Himalayan Water', id: 'himalayan-water' },
                      { name: 'Sparkling Water', id: 'sparkling-water' },
                      { name: 'Glass Water Bottle', id: 'glass-bottle' }
                    ].map((product) => (
                      <Link
                        key={product.id}
                        to={`/products#${product.id}`}
                        onClick={() => {
                          setIsOpen(false);
                          setIsProductsOpen(false);
                        }}
                        className="block px-6 py-2.5 text-[15px] text-white/60 hover:text-white hover:bg-blue-800 transition-colors font-medium border-l-2 border-white/10 ml-2"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${location.pathname === link.path ? 'bg-blue-800 text-white' : 'text-white/70 hover:bg-blue-800 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-6 px-3 border-t border-white/10 flex flex-col items-center gap-2">
              <a
                href="https://nevas.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative w-24 h-14">
                  <img
                    src="/Images/Nevas log.png"
                    alt="Nua Aqua"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Premium Partner</p>
            </div>
          </div>
        </div>
      </header>

      {/* No absolute padding needed for absolute header in this layout as hero section has its own padding/height */}
      {/* <div className="h-24 md:h-36 bg-white"></div> */}
    </>
  );
}
