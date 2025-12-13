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
    image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F854aff88eb3c4cd9a9af335d191d70ab?format=webp&width=300",
  },
  {
    id: "2",
    name: "Vitamin B12",
    description: "750 ML - Energy & Wellness Water",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F9546ce597c0246a39cf18eeb5092f4ea?format=webp&width=300",
  },
  {
    id: "3",
    name: "Sparkling Water",
    description: "330 ML - Refined Mineral Richness",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F3b3ebc1a240d43c5a6580e94604e9c5e?format=webp&width=300",
  },
  {
    id: "4",
    name: "Himalayan Water",
    description: "330 ML - Pure Himalayan Spring Water",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F2bb62d09343b4046aaa49bc4bded9bb9?format=webp&width=300",
  },
  {
    id: "5",
    name: "Still Water",
    description: "750 ML - Premium Glass Bottle",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fabff378595fe4f11bccbd9aca6c5c3ea%2F78ff0755f2c34c85b6ddb8c664a72a51?format=webp&width=300",
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

                {/* Hover CTA */}
                <div className="px-5 pb-5">
                  <button className="w-full py-2 bg-teal-500/20 text-teal-400 border border-teal-500/50 rounded-lg hover:bg-teal-500 hover:text-navy-800 transition-all duration-300 text-sm font-semibold">
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
