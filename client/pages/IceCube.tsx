import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function IceCube() {
    return (
        <div className="bg-[#D1E5F4] min-h-screen">
            <Header />

            <main className="pt-48 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight font-primary">
                                    Start Your Own <br />
                                    Ice Cube in ₹15 Lakh
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-900/80 font-medium leading-relaxed">
                                    Earn up to ₹3 Lakh/Month with India’s First <br className="hidden md:block" />
                                    Alkaline Ice Cubes
                                </p>
                            </div>

                            <div className="pt-6">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-10 py-5 bg-blue-900 text-white font-bold text-lg rounded-md hover:bg-blue-800 transition-all duration-300 shadow-xl uppercase tracking-wider group"
                                >
                                    LOCK YOUR TERRITORY TODAY!
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/20">
                                <img
                                    src="/Images/Ice cube.png"
                                    alt="Nua Aqua Alkaline Ice Cubes"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Floating Ice Orbs/Effects can be added here if needed to match the vibe */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
                        </motion.div>

                    </div>
                </div>
            </main>

            {/* Decorative Ice Elements at the bottom */}
            <div className="w-full overflow-hidden h-64 relative -mt-32 pointer-events-none">
                <img
                    src="/Images/Ice cube.png"
                    className="absolute -bottom-20 left-10 w-64 opacity-20 blur-sm rotate-12"
                    alt=""
                />
                <img
                    src="/Images/Ice cube.png"
                    className="absolute bottom-10 right-20 w-48 opacity-10 blur-sm -rotate-45"
                    alt=""
                />
            </div>

            <Footer />
        </div>
    );
}
