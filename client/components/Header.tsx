import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-navy-800/95 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg
                className="w-full h-full text-gold-500 group-hover:text-gold-400 transition-colors"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized wave logo */}
                <path
                  d="M30 50C30 40 40 35 50 35C60 35 70 40 70 50"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M25 60C25 48 37 40 50 40C63 40 75 48 75 60"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M35 70C35 58 42 50 50 50C58 50 65 58 65 70"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">NUA</span>
              <span className="text-xs text-gold-400 font-light">AQUA</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white/70 hover:text-gold-400 transition-colors font-light"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white/70 hover:text-gold-400 transition-colors font-light"
            >
              Products
            </Link>
            <a
              href="#about"
              className="text-white/70 hover:text-gold-400 transition-colors font-light"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-gold-400 transition-colors font-light"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden sm:block px-6 py-2 bg-gold-500 text-navy-800 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20">
            Explore Now
          </button>
        </div>
      </div>
    </header>
  );
}
