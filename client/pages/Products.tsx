import { Header } from "@/components/Header";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Mineral Water",
      price: "$2.99",
      size: "750 ML",
      description: "Enriched with Essential Minerals",
      details:
        "Our mineral water is enriched with essential minerals that support optimal health and wellness. Perfect for daily hydration.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F854aff88eb3c4cd9a9af335d191d70ab?format=webp&width=400",
    },
    {
      id: 2,
      name: "Vitamin B12",
      price: "$3.49",
      size: "750 ML",
      description: "Energy & Wellness Water",
      details:
        "Infused with Vitamin B12 to support energy and metabolism. An elevated hydration experience for those seeking enhanced wellness.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F9546ce597c0246a39cf18eeb5092f4ea?format=webp&width=400",
    },
    {
      id: 3,
      name: "Sparkling Water",
      price: "$2.49",
      size: "330 ML",
      description: "Refined Mineral Richness",
      details:
        "Nevas Sparkling Water offers a refined balance of fine natural mineral richness. No added salts, sugars, or preservatives.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F3b3ebc1a240d43c5a6580e94604e9c5e?format=webp&width=400",
    },
    {
      id: 4,
      name: "Himalayan Water",
      price: "$3.99",
      size: "330 ML",
      description: "Pure Himalayan Spring Water",
      details:
        "Premium canned Himalayan water sourced directly from pristine springs. Flows through natural rock layers for pure, refreshing taste.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F2bb62d09343b4046aaa49bc4bded9bb9?format=webp&width=400",
    },
    {
      id: 5,
      name: "Still Water",
      price: "$4.99",
      size: "750 ML",
      description: "Premium Glass Bottle",
      details:
        "The true luxury of pure water in elegant glass packaging. A sophisticated choice for those who appreciate refined hydration.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F78ff0755f2c34c85b6ddb8c664a72a51?format=webp&width=400",
    },
  ];

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

                  <p className="text-white/70 mb-3 text-sm">
                    {product.description}
                  </p>

                  <p className="text-white/60 text-xs mb-4 leading-relaxed">
                    {product.details}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-teal-400">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-teal-500/20 text-teal-400 border border-teal-500/50 rounded-lg hover:bg-teal-500 hover:text-navy-800 transition-all duration-300 text-sm font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-teal-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-teal-500/20 pt-8">
            <p className="text-white/60 text-center font-light">
              © 2024 NEVAS Premium Water. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
