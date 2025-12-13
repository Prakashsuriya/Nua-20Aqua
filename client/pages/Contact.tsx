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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  For partnerships, inquiries, or general information about NEVAS
                  Premium Water, please reach out using any of the contact methods
                  below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
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

            {/* Contact Form / CTA */}
            <div className="rounded-lg border-2 border-teal-500/30 bg-gradient-to-br from-navy-700 to-navy-800 p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-navy-800 border border-teal-500/30 rounded-lg text-white placeholder-white/50 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-navy-800 border border-teal-500/30 rounded-lg text-white placeholder-white/50 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-navy-800 border border-teal-500/30 rounded-lg text-white placeholder-white/50 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-3 bg-navy-800 border border-teal-500/30 rounded-lg text-white placeholder-white/50 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-teal-500 text-navy-800 font-bold rounded-lg hover:bg-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30"
                >
                  Send Message
                </button>
              </form>

              <p className="text-white/60 text-sm mt-6 font-light">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden border-2 border-teal-500/30 h-96 bg-navy-800 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-teal-500/50 mx-auto mb-4" />
              <p className="text-white/50 font-light">
                Map integration coming soon
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
