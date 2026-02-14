import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const whatsappNumber = "919880725880";
    const message = "Hi! I'm interested in Nua Aqua products. Can you help me?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-6 text-white relative">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <WhatsAppIcon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Start a Conversation...</h3>
                                    <p className="text-sm opacity-90">Hi! Click one of our member below to chat on WhatsApp</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 hover:bg-black/10 p-1 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="p-4 bg-[#f0f2f5] min-h-[100px]">
                            <p className="text-[11px] text-gray-400 text-center mb-4 uppercase tracking-wider font-semibold">The team typically replies in a few hours.</p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white p-4 rounded-xl border-l-4 border-[#25D366] hover:bg-gray-50 transition-all shadow-sm group"
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
                                        <WhatsAppIcon className="w-6 h-6" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 group-hover:text-[#25D366] transition-colors">Nua Aqua Customer Support</h4>
                                    <p className="text-xs text-gray-500">Nua Aqua Customer Support</p>
                                </div>
                                <div className="text-[#25D366]">
                                    <MessageCircle className="w-5 h-5 fill-current" />
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative group">
                <AnimatePresence>
                    {showTooltip && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-[#F8F9FA] px-5 py-3 rounded-xl shadow-xl border border-gray-100 whitespace-nowrap hidden md:block"
                        >
                            <p className="text-[15px] font-medium text-gray-700">
                                Need Help? <span className="font-bold text-gray-900 border-l border-gray-300 ml-2 pl-2">Chat with us</span>
                            </p>
                            <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-[#F8F9FA]"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setShowTooltip(false);
                    }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? "bg-white text-gray-800 rotate-90" : "bg-[#25D366] text-white"
                        }`}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <WhatsAppIcon className="w-8 h-8" />}
                </motion.button>
            </div>
        </div>
    );
}
