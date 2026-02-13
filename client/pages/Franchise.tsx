import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRef } from "react";

type FranchiseFormData = {
    name: string;
    email: string;
    mobile: string;
    businessName: string;
    investmentType: string;
    state: string;
    district: string;
    city: string;
    pinCode: string;
};

export default function Franchise() {
    const formRef = useRef<HTMLDivElement>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FranchiseFormData>();

    const onSubmit = (data: FranchiseFormData) => {
        console.log("Form Data Submitted:", data);
        toast.success("Application submitted successfully! Our team will contact you soon.", {
            description: "Data sent to sales@nuaaqua.com (simulated)",
        });
        reset();
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const fadeIn: Variants = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const inputClasses = "w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-blue-700 transition-colors placeholder:text-gray-400 text-blue-900";
    const labelClasses = "block text-sm font-semibold text-blue-900 mb-1";

    return (
        <div className="bg-white min-h-screen">
            <Header />

            {/* Hero / Form Section */}
            <section ref={formRef} className="pt-44 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 font-primary mb-4">
                            Nua Aqua Franchise Application
                        </h1>
                        <p className="text-blue-900/70 font-light max-w-4xl text-lg leading-relaxed">
                            Are you driven by success, passionate about quality, and ready to be a part of something extraordinary? Then consider owning a Nua Aqua franchise — your gateway to a rewarding business venture in the booming bottled water industry.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        variants={fadeIn}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-10"
                    >
                        {/* Personal Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b border-gray-100 pb-2">Personal Information</h2>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                <div>
                                    <label className={labelClasses}>Enter Your Name</label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="John Doe"
                                        className={inputClasses}
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <label className={labelClasses}>Enter Your Email</label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                        })}
                                        placeholder="john@example.com"
                                        className={inputClasses}
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                                </div>
                                <div>
                                    <label className={labelClasses}>Enter Your Mobile Number</label>
                                    <input
                                        {...register("mobile", { required: "Mobile number is required" })}
                                        placeholder="+91 XXXXX XXXXX"
                                        className={inputClasses}
                                    />
                                    {errors.mobile && <span className="text-red-500 text-xs mt-1">{errors.mobile.message}</span>}
                                </div>
                                <div>
                                    <label className={labelClasses}>Current Business Name</label>
                                    <input
                                        {...register("businessName")}
                                        placeholder="Your Company Ltd."
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Investment Type */}
                        <div>
                            <label className={labelClasses}>Investment Type</label>
                            <select
                                {...register("investmentType", { required: true })}
                                className={inputClasses}
                            >
                                <option value="2.5 lakhs Outlet">2.5 lakhs Outlet</option>
                                <option value="5 lakhs Outlet">5 lakhs Outlet</option>
                                <option value="10 lakhs Outlet">10 lakhs Outlet</option>
                                <option value="25 lakhs Outlet">25 lakhs Outlet</option>
                            </select>
                        </div>

                        {/* Applying Area */}
                        <div>
                            <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b border-gray-100 pb-2">Applying Area</h2>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                <div>
                                    <label className={labelClasses}>State</label>
                                    <input
                                        {...register("state", { required: "State is required" })}
                                        placeholder="Gujarat"
                                        className={inputClasses}
                                    />
                                    {errors.state && <span className="text-red-500 text-xs mt-1">{errors.state.message}</span>}
                                </div>
                                <div>
                                    <label className={labelClasses}>District</label>
                                    <input
                                        {...register("district", { required: "District is required" })}
                                        placeholder="Surat"
                                        className={inputClasses}
                                    />
                                    {errors.district && <span className="text-red-500 text-xs mt-1">{errors.district.message}</span>}
                                </div>
                                <div>
                                    <label className={labelClasses}>City</label>
                                    <input
                                        {...register("city", { required: "City is required" })}
                                        placeholder="Surat"
                                        className={inputClasses}
                                    />
                                    {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
                                </div>
                                <div>
                                    <label className={labelClasses}>Pin Code</label>
                                    <input
                                        {...register("pinCode", { required: "Pin Code is required" })}
                                        placeholder="395001"
                                        className={inputClasses}
                                    />
                                    {errors.pinCode && <span className="text-red-500 text-xs mt-1">{errors.pinCode.message}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="bg-[#F2B52B] hover:bg-[#D9A226] text-[#2B545A] font-bold py-3 px-12 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </motion.form>
                </div>
            </section>

            {/* Brand Info Section */}
            <section className="py-24 bg-gray-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Image */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white p-4">
                                <img
                                    src="/Images/All images.jpg"
                                    alt="Nua Aqua Product Range"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:w-1/2 space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 font-primary uppercase tracking-tight">
                                NUA AQUA FRANCHISE IN INDIA
                            </h2>

                            <div className="space-y-6 text-blue-900/80 text-lg font-light leading-relaxed">
                                <p>
                                    Nua Aqua Premium Water is an Indian brand of bottled water that offers a unique and refreshing drinking experience. Nua Aqua offers high mineral content water, premium alkaline water and Vitamin b12 enriched water.
                                </p>
                                <p className="font-medium text-blue-900">
                                    Nua Aqua water comes in elegant and distinctive bottles.
                                </p>
                                <p>
                                    Nua Aqua water is the perfect choice for customers who appreciate quality, naturalness, and luxury.
                                </p>
                                <p>
                                    By becoming a franchise partner of Nua Aqua Premium Water, you will join a network of successful entrepreneurs who share the same vision and passion for fine water. You will also contribute to the growth and expansion of Nua Aqua water in the global market. To learn more about Nua Aqua water and the franchise opportunities, please click on Apply Now button to register.
                                </p>
                            </div>

                            <div className="pt-6">
                                <button
                                    onClick={scrollToForm}
                                    className="bg-[#F2B52B] hover:bg-[#D9A226] text-[#2B545A] font-bold py-4 px-12 rounded shadow-xl transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
                                >
                                    APPLY NOW
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
