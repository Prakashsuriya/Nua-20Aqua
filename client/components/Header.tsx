import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-navy-800/95 backdrop-blur-md border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg
                className="w-full h-full text-teal-500 group-hover:text-teal-400 transition-colors"
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized wave logo for NEVAS */}
                <circle cx="50" cy="35" r="8" />
                <path
                  d="M35 50C35 45 40 42 50 42C60 42 65 45 65 50C65 58 58 65 50 70C42 65 35 58 35 50Z"
                  fill="currentColor"
                />
                <path
                  d="M30 70C28 70 26 72 26 75C26 78 28 80 30 80L70 80C72 80 74 78 74 75C74 72 72 70 70 70Z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">NEVAS</span>
              <span className="text-xs text-teal-400 font-light">Premium Water</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white/70 hover:text-teal-400 transition-colors font-light"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white/70 hover:text-teal-400 transition-colors font-light"
            >
              Products
            </Link>
            <Link
              to="/team"
              className="text-white/70 hover:text-teal-400 transition-colors font-light"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="text-white/70 hover:text-teal-400 transition-colors font-light"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden sm:block px-6 py-2 bg-teal-500 text-navy-800 font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
}
