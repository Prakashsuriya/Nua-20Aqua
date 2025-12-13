import { Header } from "@/components/Header";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Keshav Budhia",
      role: "Founder & Chief Executive Officer",
      description:
        "A visionary entrepreneur with a passion for wellness and innovation. Keshav Budhia founded Nevas Water with a singular goal to transform how people experience hydration. His leadership drives the brand's premium positioning and bold expansion into luxury and wellness markets.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Avinash Jagnani",
      role: "Chief Marketing Officer",
      description:
        "The creative engine behind Nevas' branding and market strategy. With a deep understanding of consumer psychology and modern aesthetics, Avinash crafts compelling narratives and campaigns that position Nevas as the water of choice for discerning and health-focused consumers.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Ritesh Budhia",
      role: "Director",
      description:
        "Bringing strategic rigor and operational excellence to Nevas. Ritesh ensures that every drop of Nevas Water reaches its destination with unmatched quality and efficiency. His focus on scalability, distribution, and strategic partnerships shapes the future of premium hydration in Surat.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
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
              Meet Our Founders
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Visionaries committed to raising the standard of hydration through
              elegance, wellness, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {team.map((member, index) => (
              <div
                key={member.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-96 rounded-lg overflow-hidden border-2 border-teal-500/30 bg-gradient-to-br from-navy-700 to-navy-800 group ${
                    index % 2 === 1 ? "md:order-last" : ""
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-first" : ""}>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-teal-400 text-lg font-semibold mb-6">
                    {member.role}
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                    {member.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-teal-500 text-navy-800 font-bold rounded-lg hover:bg-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-teal-500/20 bg-navy-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be a global leader in premium water, recognized for excellence
                in product quality, innovation, and sustainable practices.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-teal-500/20 bg-navy-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To deliver premium water that elevates hydration experiences while
                maintaining the highest standards of purity and environmental
                responsibility.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-teal-500/20 bg-navy-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Values</h3>
              <p className="text-white/70 leading-relaxed">
                Premium Quality, Health-Focused Innovation, Environmental
                Consciousness, and Integrity in every interaction.
              </p>
            </div>
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
