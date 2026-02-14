import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail } from "lucide-react";

export function Footer() {
    const listBullet = <span className="inline-block w-2 h-2 bg-blue-600/20 mr-3 align-middle" />;

    return (
        <footer className="bg-blue-50 text-blue-900 py-20 font-light border-t border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Section */}
                    <div className="col-span-1">
                        <Link to="/" className="flex flex-col items-center lg:items-start gap-0 mb-8">
                            <img src="/Images/NQ LOGO.png" alt="Nua Aqua" className="h-24 w-auto" />
                        </Link>
                        <p className="text-sm leading-relaxed text-center lg:text-left text-blue-900/70 max-w-[280px]">
                            Nua Aqua is more than just water, it's an experience. Born from the vision of Budhia Beverages, a family owned company built on passion and dedication.
                        </p>
                    </div>

                    {/* Explore With Us */}
                    <div>
                        <h4 className="text-blue-900 text-base font-bold mb-10 tracking-wide">Explore With Us</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Products', path: '/products' },
                                { name: 'Franchise', path: '/franchise' },
                                { name: 'Distribution', path: '/distribution' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name} className="flex items-center">
                                    {listBullet}
                                    <Link to={item.path} className="text-blue-900/60 hover:text-blue-600 transition-colors">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-12">
                        <div>
                            <h4 className="text-blue-900 text-base font-bold mb-10 tracking-wide">Quick Links</h4>
                            <ul className="space-y-4 text-sm text-blue-900/60">
                                {[
                                    { name: 'Mineral Water', id: 'mineral-water' },
                                    { name: 'Alkaline Water', id: 'alkaline-water' },
                                    { name: 'Vitamin B12 Water', id: 'vitamin-b12' },
                                    { name: 'Himalayan Water', id: 'himalayan-water' },
                                    { name: 'Sparkling Water', id: 'sparkling-water' },
                                    { name: 'Frosted Glass Bottle', id: 'glass-bottle' },
                                    { name: 'Ice Cubes', path: '/ice-cube' }
                                ].map((item) => (
                                    <li key={item.name} className="flex items-center">
                                        {listBullet}
                                        <Link to={item.path || `/products${item.id ? '#' + item.id : ''}`} className="hover:text-blue-600 transition-colors uppercase tracking-wider text-[11px] font-bold">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Connect With Us & Map */}
                    <div>
                        <h4 className="text-blue-900 text-base font-bold mb-10 tracking-wide whitespace-nowrap">Connect With Us</h4>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <a href="tel:+919880725880" className="flex items-center gap-3 text-blue-900/70 hover:text-blue-600 transition-colors">
                                    <Phone className="w-4 h-4" />
                                    <span className="font-bold">+91 9880725880</span>
                                </a>
                                <a href="mailto:marketing@nuaaqua.com" className="flex items-center gap-3 text-blue-900/70 hover:text-blue-600 transition-colors">
                                    <Mail className="w-4 h-4" />
                                    <span>marketing@nuaaqua.com</span>
                                </a>
                            </div>

                            <div className="flex gap-3">
                                {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-8 h-8 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>

                            <div className="mt-8 rounded-lg overflow-hidden h-[130px] w-full border border-blue-200 group relative shadow-inner bg-white">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3521.0994496164417!2d77.76306407507323!3d12.782305987515953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ2JzU2LjMiTiA3N8KwNDUnNTYuMyJF!5e1!3m2!1sen!2sin!4v1771046821915!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <div className="absolute top-2 left-2 bg-white/95 px-2 py-1 rounded text-[8px] text-blue-900 font-bold pointer-events-none shadow-sm">
                                    View larger map
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-200 pt-8 text-center">
                    <p className="text-blue-900/60 text-sm font-bold tracking-wide mb-1">
                        Copyright © 2026 Nua Aqua – All Rights Reserved
                    </p>
                    <div className="flex justify-center gap-4 text-blue-600 text-base font-bold">
                        <Link to="/privacy" className="hover:text-blue-800 transition-colors">Privacy Policy</Link>
                        <span className="text-blue-200 font-light opacity-50">|</span>
                        <Link to="/terms" className="hover:text-blue-800 transition-colors">Terms & Conditions</Link>
                        <span className="text-blue-200 font-light opacity-50">|</span>
                        <Link to="/disclaimer" className="hover:text-blue-800 transition-colors">Legal Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
