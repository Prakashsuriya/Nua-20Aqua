import { Header } from "@/components/Header";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "NUA AQUA Pure",
      description: "Crystal Clear Premium Water",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "NUA AQUA Mineral",
      description: "Enriched with Essential Minerals",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1559839734033-6461d227b9ee?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "NUA AQUA Alkaline",
      description: "pH Balanced Wellness Water",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1600788148184-289e360cc8d6?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "NUA AQUA Spark",
      description: "Refreshing Sparkling Water",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "NUA AQUA Premium",
      description: "Luxury Water Experience",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1609590466014-e2edaa309baa?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "NUA AQUA Detox",
      description: "Cleansing Mineral Water",
      price: "$6.49",
      image: "https://images.unsplash.com/photo-1534038802500-c8e0ebc0a699?w=400&h=400&fit=crop",
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
                className="group rounded-lg border border-gold-500/20 hover:border-gold-500/50 bg-gradient-to-br from-navy-700 to-navy-800 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/20"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-navy-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-60"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gold-400 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold-400">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-gold-500/20 text-gold-400 border border-gold-500/50 rounded-lg hover:bg-gold-500 hover:text-navy-800 transition-all duration-300 text-sm font-semibold">
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
      <footer className="bg-navy-950 border-t border-gold-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gold-500/20 pt-8">
            <p className="text-white/60 text-center font-light">
              © 2024 NUA AQUA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
