import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Disclaimer() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <div className="pt-44 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold text-blue-900 mb-8 font-primary">Legal Disclaimer</h1>

                        <div className="prose prose-blue max-w-none text-blue-900/80 space-y-6 text-lg font-light leading-relaxed">
                            <p>
                                Please read this disclaimer carefully before accessing or using our website, purchasing our products, or engaging with Nua Aqua in any way. The information provided on this website is intended for general informational purposes only and does not constitute medical, legal, or financial advice.
                            </p>

                            <p>
                                While we strive to ensure the accuracy and completeness of the information provided, we cannot guarantee its absolute correctness or suitability for any specific use.
                            </p>

                            <p>
                                Our products are intended for human consumption as bottled water. While we adhere to strict quality standards and safety regulations during production, individual health responses may vary.
                            </p>

                            <p>
                                Any opinions, views, or statements expressed by users on our website or social media platforms do not necessarily reflect the views or opinions of Nua Aqua. We do not endorse, guarantee, or warrant the accuracy or completeness of such content. You are solely responsible for any content you submit to our platforms.
                            </p>

                            <p>
                                We reserve the right to modify this disclaimer at any time without prior notice. Your continued use of this website constitutes your acceptance of any such changes. If you have any questions about this disclaimer, please contact us at +91 8160072337.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
