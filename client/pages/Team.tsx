import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";

export default function Team() {
  const fadeIn: Variants = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageFadeIn: Variants = {
    initial: { opacity: 0, scale: 0.98 },
    whileInView: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section - About Us */}
      <section className="relative w-full pt-44 pb-16 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-left mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 font-primary tracking-tight">
              About Us
            </h1>
          </motion.div>

          {/* Left-aligned Story Content */}
          <div className="space-y-6 text-[17px] md:text-lg text-blue-900/80 leading-relaxed font-light text-left max-w-5xl">
            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Nua Aqua is more than just water; it’s an experience. Born from the vision of Budhia Beverages, a family-owned company built on passion and dedication, Nua Aqua embodies the essence of premium bottled water. In 2022, young entrepreneur Keshav Budhia embarked on a quest to create a global brand that redefined the bottled water experience. Driven by a love for beverages and a commitment to quality, he founded Budhia Beverages and introduced Nua Aqua to the market.
            </motion.p>

            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nua Aqua water is made with great care, using high-quality sources known for their excellent minerals. Beyond its intrinsic quality, Nua Aqua prioritizes purity from source to bottle. Our production process ensures no human contact with the water, guaranteeing its untouched nature. Additionally, our fully BIS-compliant plant operates under the watchful eye of dedicated professionals who continuously monitor quality at every stage. This unwavering commitment sets Nua Aqua apart.
            </motion.p>

            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Presented in elegantly designed bottles and cans, available in three convenient sizes: 250ml, 330ml, and 750ml, Nua Aqua elevates any occasion. Whether you are seeking a personal indulgence or an elevated addition to your table, Nua Aqua Premium water complements your desire for both quality and style.
            </motion.p>

            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Nua Aqua is the first and only Indian company to offer this unique and luxurious water experience. But our journey doesn’t end here. At Budhia Beverages, we are committed to innovation and plan to expand our offerings with more delicious and exciting beverages in the future. Ready to experience the Nua Aqua difference? Explore our bottle sizes to find the perfect fit for your lifestyle. Visit our website or find us at your nearest luxury retailer to elevate your hydration today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Animated Image - Nevas.jpg */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={imageFadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-50 border-4 border-white"
          >
            <img
              src="/Images/nevas.jpg"
              alt="Nua Aqua Premium Hydration"
              className="w-full h-auto brightness-[0.98] hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
