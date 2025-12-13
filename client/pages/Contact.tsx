import { Header } from "@/components/Header";
import { Mail, Phone, MapPin, Globe, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-navy-800 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Whether you're a hospitality partner, distributor, health conscious
              consumer, or event planner, we'd love to connect with you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                For partnerships, inquiries, or general information about NEVAS
                Premium Water, please reach out using any of the contact methods
                below.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Corporate Office
                  </h3>
                  <p className="text-white/70 font-light">
                    NEVAS Premium Water
                  </p>
                  <p className="text-white/70 font-light">
                    Palsana, Surat, Gujarat – 394315
                  </p>
                  <p className="text-white/70 font-light">India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                  <a
                    href="tel:+919033003147"
                    className="text-teal-400 hover:text-teal-300 transition-colors font-light"
                  >
                    +91 90330 03147
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:info@nevas.in"
                    className="text-teal-400 hover:text-teal-300 transition-colors font-light"
                  >
                    info@nevas.in
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Website</h3>
                  <a
                    href="https://www.nevas.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 transition-colors font-light"
                  >
                    www.nevas.in
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Instagram
                  </h3>
                  <a
                    href="https://instagram.com/nevas.water"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 transition-colors font-light"
                  >
                    @nevas.water
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="rounded-lg overflow-hidden border-2 border-teal-500/30 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0267267267267!2d72.78!3d21.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d97ab5ab5ab5%3A0x5ab5ab5ab5ab5ab5!2sPalsana%2C%20Surat%2C%20Gujarat%20394315!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NEVAS Corporate Office Location"
            ></iframe>
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
