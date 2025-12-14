import { Header } from "@/components/Header";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Distribution() {
  const distributors = [
    {
      id: 1,
      name: "Palsana Distribution Hub",
      region: "Gujarat & Rajasthan",
      contact: "+91 90330 03147",
      email: "palsana@nua-aqua.in",
      address: "Palsana, Surat, Gujarat – 394315",
      coverage: "Primary distribution hub for Western India",
    },
    {
      id: 2,
      name: "Northern Region Partners",
      region: "Delhi, Punjab & Himachal Pradesh",
      contact: "+91 90330 03148",
      email: "north@nua-aqua.in",
      address: "New Delhi, India",
      coverage: "Covering major metros and hill stations",
    },
    {
      id: 3,
      name: "Southern Distribution",
      region: "Karnataka, Tamil Nadu & Telangana",
      contact: "+91 90330 03149",
      email: "south@nua-aqua.in",
      address: "Bangalore, India",
      coverage: "Serving South Indian markets",
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
              Distribution Network
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Nua Premium Water is available through our trusted distribution
              partners across India, ensuring premium quality reaches your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution Hubs Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Our Distribution Partners</h2>
            <p className="text-white/70 text-lg font-light">
              Connecting premium water to premium destinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {distributors.map((distributor) => (
              <div
                key={distributor.id}
                className="rounded-lg border border-teal-500/20 hover:border-teal-500/50 bg-gradient-to-br from-navy-700 to-navy-800 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <h3 className="text-2xl font-bold text-teal-400 mb-2">
                  {distributor.name}
                </h3>
                <p className="text-white/70 text-sm mb-6 font-light">
                  {distributor.region}
                </p>

                <div className="space-y-4 mb-6">
                  {/* Coverage */}
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-teal-400 font-semibold mb-1">COVERAGE</p>
                      <p className="text-white/80 text-sm">{distributor.coverage}</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-teal-400 font-semibold mb-1">ADDRESS</p>
                      <p className="text-white/80 text-sm">{distributor.address}</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-teal-400 font-semibold mb-1">PHONE</p>
                      <a
                        href={`tel:${distributor.contact}`}
                        className="text-teal-400 text-sm hover:text-teal-300 transition-colors"
                      >
                        {distributor.contact}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-teal-400 font-semibold mb-1">EMAIL</p>
                      <a
                        href={`mailto:${distributor.email}`}
                        className="text-teal-400 text-sm hover:text-teal-300 transition-colors break-all"
                      >
                        {distributor.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become Our Distribution Partner
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto font-light">
              Join our growing network of distributors and be part of the premium
              water revolution. We offer comprehensive support and attractive margins
              for our partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-teal-500/20 bg-navy-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Competitive Pricing</h3>
              <p className="text-white/70 leading-relaxed">
                Attractive wholesale rates and margin structure designed to maximize
                your profitability in the premium water segment.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-teal-500/20 bg-navy-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Marketing Support</h3>
              <p className="text-white/70 leading-relaxed">
                Comprehensive marketing materials, training, and ongoing promotional
                support to ensure your success in selling Nua Premium Water.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-teal-500/20 bg-navy-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Logistics Support</h3>
              <p className="text-white/70 leading-relaxed">
                Reliable supply chain management with timely deliveries and dedicated
                logistics support to maintain stock availability.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <p className="text-white/80 text-lg mb-6 font-light">
              Interested in becoming a Nua distribution partner?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-teal-500 text-navy-800 font-bold rounded-lg hover:bg-teal-400 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

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
