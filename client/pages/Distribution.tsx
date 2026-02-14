import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

type DistributorshipFormData = {
  name: string;
  email: string;
  mobile: string;
  interest: "Distribution" | "White Labeling";
  city: string;
  pinCode: string;
  agreeTerms: boolean;
};

export default function Distribution() {
  const formRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DistributorshipFormData>();

  const onSubmit = (data: DistributorshipFormData) => {
    console.log("Distribution Form Submitted:", data);
    toast.success("Application submitted successfully!", {
      description: "Our marketing team (marketing@nuaaqua.com) will contact you shortly.",
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
    <div className="bg-white min-h-screen">
      <Header />

      {/* Form Section */}
      <section ref={formRef} className="pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 font-primary mb-4">
              Nua Aqua Distributorship Application
            </h1>
            <p className="text-blue-900/70 font-light max-w-4xl text-lg leading-relaxed">
              Are you an entrepreneur seeking a lucrative and rewarding partnership? Look no further than becoming a Nua Aqua distributor. We offer the opportunity to deliver exceptional bottled water experiences to a wider audience while building a successful and profitable business.
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
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b border-gray-100 pb-2">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <label className={labelClasses}>Your Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className={inputClasses}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label className={labelClasses}>Your Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    placeholder="Enter your email"
                    className={inputClasses}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>
                <div>
                  <label className={labelClasses}>Mobile Number</label>
                  <input
                    {...register("mobile", { required: "Mobile number is required" })}
                    placeholder="Enter mobile number"
                    className={inputClasses}
                  />
                  {errors.mobile && <span className="text-red-500 text-xs mt-1">{errors.mobile.message}</span>}
                </div>
                <div>
                  <label className={labelClasses}>Are you interested in distribution or white labeling?</label>
                  <select
                    {...register("interest", { required: true })}
                    className={inputClasses}
                  >
                    <option value="Distribution">Yes, Distribution</option>
                    <option value="White Labeling">Yes, White Labeling</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Your City</label>
                  <input
                    {...register("city", { required: "City is required" })}
                    placeholder="Enter your city"
                    className={inputClasses}
                  />
                  {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
                </div>
                <div>
                  <label className={labelClasses}>Pin Code</label>
                  <input
                    {...register("pinCode", { required: "Pin Code is required" })}
                    placeholder="Enter pin code"
                    className={inputClasses}
                  />
                  {errors.pinCode && <span className="text-red-500 text-xs mt-1">{errors.pinCode.message}</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="agreeTerms"
                {...register("agreeTerms", { required: true })}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="agreeTerms" className="text-sm text-blue-900/70">
                I agree to Terms & Conditions
              </label>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-[#F2B52B] hover:bg-[#D9A226] text-blue-900 font-bold py-3 px-12 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
              >
                SUBMIT
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
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

            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-primary uppercase tracking-tight">
                WHY PARTNER WITH NUA AQUA?
              </h2>

              <div className="space-y-6 text-blue-50 text-base md:text-lg font-light leading-relaxed">
                <div className="space-y-4">
                  <p>
                    <strong>Distribute Unmatched Quality:</strong> Offer water renowned for its purity and exceptional taste, exceeding industry standards with a rigorous 13-stage filtration process.
                  </p>
                  <p>
                    <strong>Leverage a Strong Brand:</strong> Benefit from Nua Aqua’s established presence and positive reputation, ensuring customer trust and recognition for your distribution network.
                  </p>
                  <p>
                    <strong>Cater to Diverse Needs:</strong> Provide a comprehensive range of Nua Aqua products including mineral water, alkaline water, and Vitamin B12 water, satisfying varied consumer preferences.
                  </p>
                  <p>
                    <strong>Unlock Lucrative Potential:</strong> Enjoy attractive margins and a fast-growing market, ensuring a solid return on your investment.
                  </p>
                  <p>
                    <strong>Receive Ongoing Support:</strong> Gain access to dedicated training, marketing assistance, and operational guidance to help you thrive.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={scrollToForm}
                  className="bg-[#F2B52B] hover:bg-[#D9A226] text-blue-900 font-bold py-4 px-12 rounded shadow-xl transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
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
