import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ProductMarquee } from "@/components/ProductMarquee";
import { Footer } from "@/components/Footer";
import { ArrowRight, Droplet, Award, Leaf, Users, Lightbulb, MapPin, Filter, ShieldCheck, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

const bannerImages = [
  "/Images/WhatsApp Image 2026-02-07 at 2.43.39 PM.jpeg",
  "/Images/nevas.jpg",
];

const FAQItem = ({ faq }: { faq: { q: string, a: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-blue-50/30 transition-colors"
      >
        <span className="text-lg font-bold text-blue-900 pr-8">{faq.q}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-900/40 flex-shrink-0" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 text-blue-900/60 leading-relaxed font-light border-t border-blue-50/50">
          {faq.a}
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] md:h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Banner Images with Cross-fade */}
        <div className="absolute inset-0 w-full h-full">
          {bannerImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={image}
                alt={`Nua Aqua Banner ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Premium Overlay - Refined for Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-white"></div>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? "bg-blue-600 w-8"
                : "bg-blue-900/30 hover:bg-blue-900/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* Welcome to Nua Aqua Section (Inspired by Nevas.in) */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Wavy Background Element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120C240 120 480 320 720 320C960 320 1200 120 1440 120V800H0V120Z" fill="#1E40AF" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual Element - Tilted Bottle */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative transform -rotate-12 transition-transform duration-700 hover:rotate-0">
                <img
                  src="/Images/Welcome.jpg"
                  alt="NUA AQUA Bottle"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Content Element */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2 font-primary">
                Welcome to NUA AQUA
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>

              <div className="space-y-6">
                <p className="text-xl text-blue-900/90 leading-relaxed font-medium">
                  Crafted for those who value purity as much as prestige, NUA AQUA is more than just water—it's a statement of refined living.
                </p>
                <p className="text-lg text-blue-900/70 leading-relaxed font-light">
                  We bring you the world's most exceptional hydration, curated from the rarest sources and perfected through master craftsmanship. Our collection embodies the pinnacle of luxury, ensuring that every sip is an experience of unparalleled freshness and sophistication.
                </p>
                <p className="text-lg text-blue-900/80 leading-relaxed font-semibold italic">
                  Welcome to the true luxury of pure water.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  to="/about"
                  className="inline-flex items-center px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:-translate-y-1 tracking-widest uppercase text-sm"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Packaged Drinking Water Section */}
      <section className="py-24 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-16 text-center font-primary">
            Trusted Packaged Drinking Water Delivered Worldwide
          </h2>

          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-blue-100/50">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Content */}
              <div className="space-y-8">
                <h3 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight font-primary">
                  Our Premium Clients <br /> We Proudly Serve
                </h3>
                <p className="text-blue-900/60 text-lg leading-relaxed font-light max-w-lg">
                  Stay refreshed with our premium packaged drinking water pure, safe, and perfectly balanced for everyday hydration.
                </p>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-[#F2B52B] text-blue-900 font-bold rounded-xl hover:bg-[#E2A51B] transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:-translate-y-1 text-sm tracking-wide"
                  >
                    Become a Premium Client
                  </Link>
                </div>
              </div>

              {/* Right Side: Logo Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {[
                  { name: "Treat", logo: "/Images/Treat.png" },
                  { name: "The Fern", logo: "/Images/The Fern.webp" },
                  { name: "Waves", logo: "/Images/Waves.png" },
                  { name: "The Cube", logo: "/Images/The Cube.jpeg" }
                ].map((client) => (
                  <div key={client.name} className="aspect-square bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Esteemed Clients Marquee Section */}
      <section className="py-20 bg-blue-50/50 overflow-hidden border-y border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 text-center font-primary uppercase tracking-widest">
            Our Esteemed Clients
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
            {[
              "/Images/airtel.jpg", "/Images/Ajmera.jpg", "/Images/Bhavanta.png",
              "/Images/Bipin.png", "/Images/Bonzai.jpg", "/Images/DDG.jpg",
              "/Images/Devka.png", "/Images/DGGI.png", "/Images/Falafel.png",
              "/Images/Fosttta.jpg", "/Images/Gujarat Police.png", "/Images/ICIC.png",
              "/Images/Jainam.jpg", "/Images/Jainam.png", "/Images/Loop.jpg",
              "/Images/Nescafe.png", "/Images/Nest.png", "/Images/Social Blend.webp",
              "/Images/The Fern.webp", "/Images/Waves.png", "/Images/Zent House.jpg",
              "/Images/The Cube.jpeg"
            ].map((logo, index) => (
              <div key={index} className="mx-8 w-32 md:w-40 h-20 flex items-center justify-center">
                <img src={logo} alt="Client Logo" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
            {[
              "/Images/airtel.jpg", "/Images/Ajmera.jpg", "/Images/Bhavanta.png",
              "/Images/Bipin.png", "/Images/Bonzai.jpg", "/Images/DDG.jpg",
              "/Images/Devka.png", "/Images/DGGI.png", "/Images/Falafel.png",
              "/Images/Fosttta.jpg", "/Images/Gujarat Police.png", "/Images/ICIC.png",
              "/Images/Jainam.jpg", "/Images/Jainam.png", "/Images/Loop.jpg",
              "/Images/Nescafe.png", "/Images/Nest.png", "/Images/Social Blend.webp",
              "/Images/The Fern.webp", "/Images/Waves.png", "/Images/Zent House.jpg",
              "/Images/The Cube.jpeg"
            ].map((logo, index) => (
              <div key={index} className="mx-8 w-32 md:w-40 h-20 flex items-center justify-center">
                <img src={logo} alt="Client Logo" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 font-primary">
              Our Core Values
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Side: Values List */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                {[
                  {
                    title: "Purity Uncompromised",
                    desc: "We believe in the inherent power of pure, untouched water. From pristine sources to rigorous production processes, we guarantee quality you can trust.",
                    icon: Droplet
                  },
                  {
                    title: "Artisanal Excellence",
                    desc: "We craft NUA AQUA with meticulous care, from sourcing to bottling. Attention to detail and a commitment to quality are at the heart of everything we do.",
                    icon: Award
                  },
                  {
                    title: "Sustainable Indulgence",
                    desc: "We are committed to responsible practices that minimize our environmental impact. From sustainable sourcing to eco-conscious packaging, we strive to protect the resources that nourish us.",
                    icon: Leaf
                  },
                  {
                    title: "Community-focused",
                    desc: "We believe in building a community around shared values of wellness and sustainability. We actively engage with our customers and partners, fostering a sense of belonging and shared purpose.",
                    icon: Users
                  },
                  {
                    title: "Constant Innovation",
                    desc: "We are never satisfied with the status quo. We are constantly exploring new ways to innovate, improve, and push the boundaries of the bottled water experience.",
                    icon: Lightbulb
                  }
                ].map((value, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-1">{value.title}</h4>
                      <p className="text-blue-900/60 leading-relaxed font-light">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] rotate-3 -z-10"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/Images/nevas.jpg"
                  alt="NUA AQUA Lifestyle"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-blue-50 hidden md:block">
                <div className="text-blue-600 font-bold text-4xl mb-1">100%</div>
                <div className="text-blue-900/40 text-xs font-bold uppercase tracking-widest">Natural Purity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-primary">
            Key Highlights
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-start">
            {[
              { label: "Premium Client", value: "200 +", icon: Users },
              { label: "Water Purity", value: "100 %", icon: Sparkles },
              { label: "Serviced Cities", value: "10 +", icon: MapPin },
              { label: "Stage Filtrations", value: "13 - 20", icon: Filter },
              { label: "Countries FDA Approved", value: "3 +", icon: ShieldCheck }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-blue-900 mb-6 transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-blue-50/70 font-light tracking-wide max-w-[120px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nua Aqua Section */}
      {/* FAQ Section */}
      <section className="py-24 bg-blue-50/30 border-t border-blue-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 font-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What makes NUA AQUA packaged drinking water unique?",
                a: "NUA AQUA packaged drinking water is manufactured using state-of-the-art technology and rigorous quality control measures, ensuring purity and freshness in every bottle."
              },
              {
                q: "Are NUA AQUA packaged drinking water bottles BIS certified?",
                a: "Yes, NUA AQUA packaged drinking water bottles meet all relevant BIS standards and regulations, ensuring the highest quality and safety."
              },
              {
                q: "Why should I choose NUA AQUA for packaged drinking water?",
                a: "NUA AQUA is one of the leading packaged drinking water suppliers in India, committed to delivering pure, safe, and refreshing drinking water. As trusted bottled water suppliers, we maintain strict quality controls and offer a wide range of bottle sizes to meet your needs."
              },
              {
                q: "Do you supply water bottles in bulk?",
                a: "Yes, NUA AQUA is a reliable choice for bulk orders. We are renowned water bottle manufacturers and suppliers, offering bulk packaged drinking water for events, offices, and businesses. Our competitive pricing and dependable delivery make us a preferred partner."
              },
              {
                q: "What is the shelf life of NUA AQUA packaged drinking water?",
                a: "NUA AQUA packaged drinking water has a shelf life of 12 months from the date of manufacturing."
              },
              {
                q: "How does NUA AQUA ensure the quality of its bottled water?",
                a: "As top-tier bottled water suppliers, we adhere to stringent purification and testing processes. Our water undergoes multiple filtration stages, including reverse osmosis and UV sterilization, to ensure it meets the highest safety standards."
              },
              {
                q: "Can I get customized water bottles for my business?",
                a: "Yes, NUA AQUA, as experienced water bottle manufacturers, provides options for customized branding on bottled water. This is perfect for promotional events, corporate gatherings, or enhancing brand visibility."
              },
              {
                q: "What sizes of packaged drinking water bottles do you offer?",
                a: "NUA AQUA offers a variety of sizes, including 250ml, 500ml, 750ml, and 20L water bottles, catering to individual needs and bulk requirements. Whether you need bottled water for personal use or large-scale supply, we’ve got you covered."
              },
              {
                q: "Where does NUA AQUA deliver packaged drinking water?",
                a: "As one of the most reliable packaged drinking water suppliers, NUA AQUA delivers across various locations in India. Our efficient supply chain ensures timely and hassle-free delivery for both retail and wholesale customers."
              },
              {
                q: "Are your water bottles environmentally friendly?",
                a: "At NUA AQUA, we prioritize sustainability. Our bottles are made from recyclable materials, ensuring that while we provide you with safe drinking water, we also contribute to environmental conservation."
              },
              {
                q: "How can I place an order with NUA AQUA?",
                a: "Placing an order with NUA AQUA is simple. Visit our website, select your preferred packaged drinking water size, and contact us for bulk orders. Our team will guide you through the process and ensure smooth delivery."
              },
              {
                q: "What makes NUA AQUA different from other bottled water suppliers?",
                a: "NUA AQUA stands out due to its unwavering commitment to quality, timely delivery, and customer satisfaction. As one of the leading packaged drinking water suppliers and water bottle manufacturers, we ensure you receive premium-quality bottled water at competitive prices."
              }
            ].map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
