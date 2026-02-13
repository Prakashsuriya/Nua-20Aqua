import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex items-center justify-center py-32 px-4">
        <div className="text-center max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-[120px] font-bold text-blue-900/10 leading-none">404</h1>
            <div className="text-2xl font-bold text-blue-900 -mt-10 mb-4">Page Not Found</div>
          </div>
          <p className="text-blue-900/60 mb-10 text-lg font-light leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:-translate-y-1"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
