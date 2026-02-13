import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Terms() {
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
                        <h1 className="text-4xl font-bold text-blue-900 mb-8 font-primary">Terms & Conditions</h1>

                        <div className="prose prose-blue max-w-none text-blue-900/80 space-y-6 text-lg font-light leading-relaxed">
                            <p>
                                Welcome to Nua Aqua! By accessing and using our website, purchasing our products, or engaging with us in any other way, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.
                            </p>

                            <p>
                                These Terms and Conditions govern your use of our website and all related services and products offered by Nua Aqua. By accessing or using any of these, you acknowledge and agree to be bound by these Terms and Conditions and any separate agreements or guidelines we may provide regarding specific services or products.
                            </p>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">User Conduct</h2>
                                <p>You agree to use our website and services by all applicable laws and regulations. You are prohibited from:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Engaging in any illegal or unauthorized activity</li>
                                    <li>Infringing on the intellectual property rights of others</li>
                                    <li>Disrupting or damaging our website or services</li>
                                    <li>Impersonating any person or entity</li>
                                    <li>Violating the privacy of others</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">User Submissions</h2>
                                <p>
                                    You may submit reviews, comments, photos, or other content. By doing so, you grant Nua Aqua a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content. You represent that you own all rights to such content.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">Intellectual Property</h2>
                                <p>
                                    All content on our website and services, including trademarks, logos, copyrights, and other intellectual property, belongs to Nua Aqua or its licensors.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">Termination & Amendments</h2>
                                <p>
                                    We may terminate your access at any time if you violate these terms. We may amend these Terms and Conditions at any time by posting the updated terms on our website. Your continued use constitutes acceptance.
                                </p>
                            </div>

                            <p>
                                If you have any questions about these Terms and Conditions, please contact us at +91 8160072337.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
