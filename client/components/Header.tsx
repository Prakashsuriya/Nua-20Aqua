import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-navy-800/95 backdrop-blur-md border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F17404965b7254d8e8f0aee73b8a1600a?format=webp&width=800"
                alt="Nua Aqua Logo"
                className="w-full h-full object-contain group-hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Nua</span>
              <span className="text-xs text-teal-400 font-light">Aqua</span>
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
              to="/distribution"
              className="text-white/70 hover:text-teal-400 transition-colors font-light"
            >
              Distribution
            </Link>
            <Link
              to="/contact"
              className="text-white/70 hover:text-teal-400 transition-colors font-light"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
