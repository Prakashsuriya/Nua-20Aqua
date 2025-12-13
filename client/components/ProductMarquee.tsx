interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "NUA AQUA Pure",
    description: "Crystal Clear Premium Water",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
  },
  {
    id: "2",
    name: "NUA AQUA Mineral",
    description: "Enriched with Essential Minerals",
    image: "https://images.unsplash.com/photo-1559839734033-6461d227b9ee?w=300&h=300&fit=crop",
  },
  {
    id: "3",
    name: "NUA AQUA Alkaline",
    description: "pH Balanced Wellness Water",
    image: "https://images.unsplash.com/photo-1600788148184-289e360cc8d6?w=300&h=300&fit=crop",
  },
  {
    id: "4",
    name: "NUA AQUA Spark",
    description: "Refreshing Sparkling Water",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=300&h=300&fit=crop",
  },
  {
    id: "5",
    name: "NUA AQUA Premium",
    description: "Luxury Water Experience",
    image: "https://images.unsplash.com/photo-1609590466014-e2edaa309baa?w=300&h=300&fit=crop",
  },
];

export function ProductMarquee() {
  return (
    <div className="w-full bg-navy-900 py-16 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-gold-400 text-sm font-semibold tracking-widest uppercase">
          Our Collection
        </h2>
        <h3 className="text-center text-3xl md:text-4xl font-bold text-white mt-2">
          Premium Water Selection
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {/* First set of products */}
          {products.map((product) => (
            <div
              key={`first-${product.id}`}
              className="flex-shrink-0 w-72 group"
            >
              <div className="relative bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gold-500/20">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-navy-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-60"></div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gold-400 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm text-white/70">{product.description}</p>
                </div>

                {/* Hover CTA */}
                <div className="px-5 pb-5">
                  <button className="w-full py-2 bg-gold-500/20 text-gold-400 border border-gold-500/50 rounded-lg hover:bg-gold-500 hover:text-navy-800 transition-all duration-300 text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {products.map((product) => (
            <div
              key={`second-${product.id}`}
              className="flex-shrink-0 w-72 group"
            >
              <div className="relative bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gold-500/20">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-navy-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-60"></div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gold-400 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm text-white/70">{product.description}</p>
                </div>

                {/* Hover CTA */}
                <div className="px-5 pb-5">
                  <button className="w-full py-2 bg-gold-500/20 text-gold-400 border border-gold-500/50 rounded-lg hover:bg-gold-500 hover:text-navy-800 transition-all duration-300 text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
