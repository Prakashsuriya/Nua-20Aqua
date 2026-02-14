interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Mineral Water",
    description: "750 ML - Enriched with Essential Minerals",
    image: "/Images/Nevas_Mineral-water-Bottle-750-ML-2-1024x1024.jpg",
  },
  {
    id: "2",
    name: "Vitamin B12",
    description: "750 ML - Energy & Wellness Water",
    image: "/Images/Nevas_B12-Bottle-750-ML-without-Shadow-1024x1024.jpg",
  },
  {
    id: "3",
    name: "Sparkling Water",
    description: "330 ML - Refined Mineral Richness",
    image: "/Images/unnamed-1-1024x1024 copy.png",
  },
  {
    id: "4",
    name: "Himalayan Water",
    description: "330 ML - Pure Himalayan Spring Water",
    image: "/Images/unnamed-1-1024x1024.jpg",
  },
  {
    id: "5",
    name: "Still Water",
    description: "750 ML - Premium Frosted Glass Bottle",
    image: "/Images/unnamed-1024x1024.jpg",
  },
];

export function ProductMarquee() {
  return (
    <div className="w-full bg-navy-900 py-16 border-y border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-teal-400 text-sm font-semibold tracking-widest uppercase">
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
              <div className="relative bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-teal-500/20">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-navy-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-40"></div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-teal-400 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm text-white/70">{product.description}</p>
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
              <div className="relative bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-teal-500/20">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-navy-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-40"></div>
                </div>

                {/* Product Info */}
                <div className="p-5 pb-6">
                  <h4 className="text-lg font-bold text-teal-400 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm text-white/70">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
