import { Header } from "@/components/Header";
import { useState } from "react";
import { X } from "lucide-react";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Mineral Water",
      size: "750 ML",
      description: "Enriched with Essential Minerals",
      details:
        "Our mineral water is enriched with essential minerals that support optimal health and wellness. Perfect for daily hydration. Each bottle contains naturally sourced minerals including calcium, magnesium, and potassium that support bone health and overall vitality.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F854aff88eb3c4cd9a9af335d191d70ab?format=webp&width=400",
    },
    {
      id: 2,
      name: "Vitamin B12",
      size: "750 ML",
      description: "Energy & Wellness Water",
      details:
        "Infused with Vitamin B12 to support energy and metabolism. An elevated hydration experience for those seeking enhanced wellness. Our B12-enriched formula helps combat fatigue and supports red blood cell formation, making it ideal for active individuals.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F9546ce597c0246a39cf18eeb5092f4ea?format=webp&width=400",
    },
    {
      id: 3,
      name: "Sparkling Water",
      size: "330 ML",
      description: "Refined Mineral Richness",
      details:
        "Nevas Sparkling Water offers a refined balance of fine natural mineral richness. No added salts, sugars, or preservatives. Enjoy the perfect refreshment with natural carbonation and essential minerals, delivering an elevated taste experience with every sip.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F3b3ebc1a240d43c5a6580e94604e9c5e?format=webp&width=400",
    },
    {
      id: 4,
      name: "Himalayan Water",
      size: "330 ML",
      description: "Pure Himalayan Spring Water",
      details:
        "Premium canned Himalayan water sourced directly from pristine springs. Flows through natural rock layers for pure, refreshing taste. Our proprietary sourcing ensures the highest purity standards, free from contaminants and enriched with nature's finest minerals.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F2bb62d09343b4046aaa49bc4bded9bb9?format=webp&width=400",
    },
    {
      id: 5,
      name: "Still Water",
      size: "750 ML",
      description: "Premium Glass Bottle",
      details:
        "The true luxury of pure water in elegant glass packaging. A sophisticated choice for those who appreciate refined hydration. Our still water is sourced from premium springs and delivered in environmentally-friendly glass bottles that preserve purity.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F78ff0755f2c34c85b6ddb8c664a72a51?format=webp&width=400",
    },
  ];

  const selectedProductData = selectedProduct
    ? products.find((p) => p.id === selectedProduct)
    : null;

  return (
    <div className="bg-navy-800 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Discover our premium water collection, each crafted with care for
              the most discerning palates.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-lg border border-teal-500/20 hover:border-teal-500/50 bg-gradient-to-br from-navy-700 to-navy-800 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-navy-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-40"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-teal-400 mb-1">
                      {product.name}
                    </h3>
                    <span className="text-xs text-teal-500/70 font-semibold">
                      {product.size}
                    </span>
                  </div>

                  <p className="text-white/70 mb-6 text-sm">
                    {product.description}
                  </p>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setSelectedProduct(product.id)}
                      className="px-6 py-2 bg-teal-500/20 text-teal-400 border border-teal-500/50 rounded-lg hover:bg-teal-500 hover:text-navy-800 transition-all duration-300 text-sm font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedProductData && (
        <div className="fixed inset-0 bg-navy-900 z-50 overflow-y-auto flex flex-col">
          {/* Modal Header with Close */}
          <div className="sticky top-0 flex justify-between items-center p-6 border-b border-teal-500/20 bg-navy-800 z-10">
            <h2 className="text-3xl font-bold text-white">
              {selectedProductData.name}
            </h2>
            <button
              onClick={() => setSelectedProduct(null)}
              className="p-2 hover:bg-navy-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="flex-1 p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div>
                  <img
                    src={selectedProductData.image}
                    alt={selectedProductData.name}
                    className="w-full h-auto object-cover rounded-lg border border-teal-500/20"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-8">
                  <div>
                    <p className="text-teal-400 text-sm font-semibold mb-2 uppercase tracking-widest">
                      SIZE
                    </p>
                    <p className="text-white text-2xl font-bold">
                      {selectedProductData.size}
                    </p>
                  </div>

                  <div>
                    <p className="text-teal-400 text-sm font-semibold mb-2 uppercase tracking-widest">
                      DESCRIPTION
                    </p>
                    <p className="text-white/80 text-xl leading-relaxed">
                      {selectedProductData.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-teal-400 text-sm font-semibold mb-4 uppercase tracking-widest">
                      ABOUT THIS PRODUCT
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {selectedProductData.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-teal-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-teal-500/20 pt-8">
            <p className="text-white/60 text-center font-light">
              © 2025 Nua Premium Water. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
