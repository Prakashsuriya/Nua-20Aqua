import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Droplet, Zap, Sparkles, Box, ShieldCheck, Leaf } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "mineral-water",
      homeLabel: "Mineral Water 750ml",
      name: "Mineral Water",
      tagline: "Mineral Water 750ML – Trusted for Safe & Fresh Drinking Water",
      description: "Uncompromising Purity: Our Mineral Water undergoes a rigorous 13-stage filtration process, ensuring pristine quality and optimal taste.",
      features: [
        { title: "Mineral Replenishment", detail: "Naturally occurring Potassium and Magnesium are retained, adding essential minerals often stripped away in standard purification." },
        { title: "Enhanced Oxygenation", detail: "Ozone Booster technology infuses the water with extra oxygen, promoting freshness and vitality." },
        { title: "Spring Technology Advantage", detail: "Experience the difference! Our unique spring technology delivers a naturally smooth and subtly sweet taste." }
      ],
      availability: "Available in: 200ml, 500ml, 1000ml, and 20-liter jars for versatile hydration on the go or at home.",
      image: "/Images/Mineral Water.png",
      theme: "blue"
    },
    {
      id: "alkaline-water",
      homeLabel: "Alkaline Water 750 ml",
      name: "Alkaline Water",
      tagline: "Stay Energized with Nua Aqua Alkaline Water 750ml – Premium Hydration",
      description: "Authentic Alkalization: Platinum Plate with Electrolytes technology, the gold standard for natural alkalization, gently elevates the water's pH level.",
      features: [
        { title: "Unlock Uncountable Benefits", detail: "Enjoy the potential advantages of alkaline water, including improved digestion, enhanced mineral absorption, and antioxidant support." },
        { title: "Superior Hydration", detail: "Refresh your body and mind with the perfect blend of taste and potential health benefits." }
      ],
      availability: "Available in: 1000ml and 20-liter jars, ideal for daily consumption or larger gatherings.",
      image: "/Images/Alkaline Water.png",
      theme: "teal"
    },
    {
      id: "vitamin-b12",
      homeLabel: "Vitamin B12 Water 750ML",
      name: "Vitamin B12 Water",
      tagline: "Nua Aqua 750ml Vitamin B12 Water – Boost Your Hydration & Vitality",
      description: "Vitamin B12 Boost: Enriched with essential Vitamin B12, vital for energy production, brain function, and nervous system health.",
      features: [
        { title: "EMF Technology", detail: "This innovative technology ensures the water retains its natural ionic structure." },
        { title: "Healthy Hair & Nails", detail: "Biotin, naturally present in Vitamin B12, contributes to the health and beauty of your hair and nails." },
        { title: "Red Blood Cell Production", detail: "Vitamin B12 plays a crucial role in the formation of healthy red blood cells, essential for oxygen transport." }
      ],
      availability: "Available in: 1000ml and 20-litre jars, convenient for incorporating into your daily routine.",
      image: "/Images/Vitamin B12.png",
      theme: "indigo"
    },
    {
      id: "himalayan-water",
      homeLabel: "Himalayan Water 330ML",
      name: "Himalayan Water",
      tagline: "Naturally Pure, Naturally Yours – Rare Himalayan Spring Water",
      description: "Nua Aqua Himalayan Water stands out for its commitment to purity, sustainability, and wellness. Extracted from pure Himalayan springs, celebrated for its rich mineral content and unmatched clarity.",
      features: [
        { title: "Pristine Origins", detail: "Sourced from high-altitude springs that flow naturally through rock layers for unmatched purity." },
        { title: "Eco-Conscious Focus", detail: "Catered to those who seek more than just hydration—offering a taste of nature's finest with sustainable practices." }
      ],
      availability: "Favored by both everyday homes and high-end hospitality, redefining the concept of premium drinking water.",
      image: "/Images/Himalayan Water.png",
      theme: "sky"
    },
    {
      id: "sparkling-water",
      homeLabel: "Sparkling Water 330 ML",
      name: "Sparkling Water",
      tagline: "Naturally Healthy Drinks for Everyday Wellness",
      description: "The gold standard for luxury sparkling water. Our crisp fizz and refreshing taste represent a sophisticated alternative to sugary beverages.",
      features: [
        { title: "Sophisticated Profile", detail: "Common choice at upscale restaurants and events; redefining luxury hydration across India." },
        { title: "Surat's Premium Choice", detail: "Rapidly growing market for high-quality, locally available sparkling water that elevates dining and social occasions." }
      ],
      availability: "Perfect for hydration, mixing with drinks, or enjoying on its own.",
      image: "/Images/Sparkling Water.jpg",
      theme: "slate"
    },
    {
      id: "glass-bottle",
      homeLabel: "Frosted Glass Bottle",
      name: "Frosted Glass Bottle",
      tagline: "Premium Frosted Glass Drinking Water Bottles For Packaging And Beverage Needs",
      description: "Shop premium frosted glass water bottles that offer a clean and pure drinking experience. Designed to keep your water fresh, just like still water, without any unwanted taste or chemicals.",
      features: [
        { title: "Eco-Friendly Design", detail: "Reusable, stylish, and durable glass that preserves the natural ionic structure of the water." },
        { title: "Versatile Sizes", detail: "Available in 750ml and 300ml variants to suit both personal and hospitality needs." }
      ],
      availability: "Enjoy the benefits of safe, natural hydration with every sip from a durable, elegantly designed glass bottle.",
      image: "/Images/Glass Water Bottle.jpeg",
      theme: "zinc"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/WAVES.png')] opacity-10 bg-repeat-x bg-bottom h-64"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-primary">Our Premium Collection</h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the Nua Aqua range, where cutting-edge technology meets
            nature's purest resources for an elite hydration experience.
          </p>
        </div>
      </section>

      {/* Products Detail Sections */}
      <div className="divide-y divide-blue-50">
        {products.map((product, index) => (
          <section key={product.id} id={product.id} className={`py-24 md:py-32 scroll-mt-20 ${index % 2 === 1 ? 'bg-blue-50/30' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 mr-4 rounded">{product.homeLabel}</span>
              </div>

              <div className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] -rotate-3 blur-2xl"></div>
                  <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-blue-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700 mx-auto max-h-[500px]"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-1 text-left' : 'text-left'}`}>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 font-primary">
                      {product.name}
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-blue-600 leading-snug">
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-blue-900/70 text-lg leading-relaxed font-normal">
                    {product.description}
                  </p>

                  <div className="space-y-6 pt-4">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-blue-900 font-bold text-lg mb-1">{feature.title}</h4>
                          <p className="text-blue-900/60 leading-relaxed">{feature.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 mt-10">
                    <p className="text-blue-900/80 font-medium italic">
                      {product.availability}
                    </p>
                  </div>

                  <div className="pt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 group"
                    >
                      Contact Us
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Trust & CTA Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-primary">The Luxury of Pure Water</h2>
          <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
            Whether for your home, your business, or elite hospitality needs,
            Nua Aqua delivers unmatched purity and taste. Experience hydration
            as it was meant to be.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-white border-b-2 border-white/30 pb-2 hover:border-white transition-all font-bold text-xl"
          >
            Learn about our journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
