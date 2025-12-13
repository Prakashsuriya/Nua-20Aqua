import { Header } from "@/components/Header";
import { ProductMarquee } from "@/components/ProductMarquee";
import { ArrowRight, Droplet, Award, Leaf } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-navy-800 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase px-4 py-2 bg-gold-500/10 rounded-full border border-gold-500/30">
                ✨ Premium Water Experience
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Discover Pure
            <span className="block text-gold-400 mt-2">Luxury Hydration</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in font-light">
            NUA AQUA brings you premium water sourced from the purest springs,
            blended with nature's finest minerals for the ultimate hydration
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="px-8 py-4 bg-gold-500 text-navy-800 font-bold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 flex items-center justify-center gap-2 group">
              Explore Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gold-500 text-gold-400 font-bold rounded-lg hover:bg-gold-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative SVG Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full text-gold-500"
          >
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* Product Marquee */}
      <ProductMarquee />

      {/* Features Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Why Choose NUA AQUA
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Excellence in Every Drop
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-lg border border-gold-500/20 hover:border-gold-500/50 bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-sm hover:bg-navy-700/80 transition-all duration-300 transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/40 transition-colors">
                <Droplet className="w-7 h-7 text-gold-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Pure Source</h4>
              <p className="text-white/70 leading-relaxed">
                Sourced from pristine natural springs, ensuring the highest
                purity standards with rigorous quality testing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-lg border border-gold-500/20 hover:border-gold-500/50 bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-sm hover:bg-navy-700/80 transition-all duration-300 transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/40 transition-colors">
                <Award className="w-7 h-7 text-gold-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Award Winning</h4>
              <p className="text-white/70 leading-relaxed">
                Recognized globally for excellence in taste, purity, and
                sustainability. Trusted by thousands.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-lg border border-gold-500/20 hover:border-gold-500/50 bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-sm hover:bg-navy-700/80 transition-all duration-300 transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/40 transition-colors">
                <Leaf className="w-7 h-7 text-gold-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Eco-Friendly</h4>
              <p className="text-white/70 leading-relaxed">
                Committed to sustainability with eco-conscious packaging and
                responsible water sourcing practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Our Story
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Refined for the Discerning Palate
              </h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed font-light">
                NUA AQUA represents the pinnacle of premium water. Sourced from
                the world's most pristine locations, our water is carefully
                filtered and enriched with essential minerals to provide the
                ultimate hydration experience.
              </p>
              <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
                Every bottle tells a story of purity, elegance, and commitment
                to excellence. We believe that hydration should be an experience,
                not just a necessity.
              </p>
              <button className="px-8 py-3 bg-gold-500 text-navy-800 font-bold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30">
                Discover More
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-gold-500/30 bg-gradient-to-br from-navy-700 to-navy-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Droplet className="w-24 h-24 text-gold-500/30 mx-auto mb-4" />
                  <p className="text-white/50 font-light">Premium Water Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 border-t border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-white/80 mb-8 font-light">
            Join thousands of satisfied customers who have made NUA AQUA their
            premium hydration choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gold-500 text-navy-800 font-bold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30">
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-gold-500 text-gold-400 font-bold rounded-lg hover:bg-gold-500/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-gold-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-gold-400 font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-400 font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Premium Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Wellness Range
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Bulk Orders
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-400 font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-400 font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-light">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gold-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 font-light">
                © 2024 NUA AQUA. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-gold-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-gold-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
