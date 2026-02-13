import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <div className="pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-blue-50/20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold text-blue-900 mb-8 font-primary">Privacy & Policy</h1>

                        <div className="prose prose-blue max-w-none text-blue-900/80 space-y-6 text-lg font-light leading-relaxed">
                            <p>
                                At Nua Aqua, we understand how important your privacy is. This Privacy Policy outlines how we collect, use, and share your personal information when you visit our website, purchase our products, or interact with us in any other way.
                            </p>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">Data Collection</h2>
                                <p>We collect two types of information:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li><strong>Website Usage:</strong> When you visit our website, we automatically collect information about your browsing experience, such as your browser type, operating system, and the pages you visit. This information helps us improve the functionality and user experience of our website.</li>
                                    <li><strong>Personal Information:</strong> We may collect personal information from you in several instances, such as when you place an order, subscribe to our newsletter, enter a contest, or contact our customer service team. This may include your name, email address, mailing address, and phone number.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">How We Use Your Information</h2>
                                <p>We use your information for various purposes, including:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li><strong>Fulfilling your requests:</strong> To process orders, answer questions, and provide customer service.</li>
                                    <li><strong>Enhancing our products and services:</strong> To analyze needs and preferences to improve our offerings.</li>
                                    <li><strong>Sending marketing communications:</strong> Occasional emails about products (you can opt out at any time).</li>
                                    <li><strong>Meeting legal requirements:</strong> Sharing information with legal authorities if required by law.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">Data Security</h2>
                                <p>
                                    We take all necessary steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of online transmission or storage is completely secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Choices</h2>
                                <p>You can choose to:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li><strong>Opt out of marketing:</strong> Click "unsubscribe" in any marketing email.</li>
                                    <li><strong>Access/Update/Delete information:</strong> Contact us to request changes.</li>
                                </ul>
                            </div>

                            <p>
                                We may occasionally update this Privacy Policy. We’ll notify you of any changes by posting the updated policy on our website. If you have any questions, please contact us at +91 8160072337.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
