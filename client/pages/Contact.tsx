import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact Form Submitted:", data);
    toast.success("Message sent successfully!", {
      description: "Our team at sales@nuaaqua.com will get back to you soon.",
    });
    reset();
  };

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const infoIconClasses = "w-12 h-12 rounded-full border border-blue-900/10 flex items-center justify-center bg-blue-900 text-white flex-shrink-0";

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <section className="pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-0 lg:gap-12 min-h-[600px]">

            {/* Left Col: Brand Info */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-12 text-center lg:text-right flex flex-col items-center lg:items-end order-2 lg:order-1 mt-12 lg:mt-0"
            >
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 font-primary leading-tight">
                  Nua Aqua <br /> Premium Water
                </h1>
              </div>

              <div className="space-y-6 max-w-sm">
                {/* Address */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-end gap-4 group">
                  <div className="text-blue-900/60 font-light text-sm lg:text-right order-2 lg:order-1">
                    <p className="font-semibold text-blue-900 mb-1">Budhia beverages Plot no D-17,18,19,20</p>
                    <p>Govindji industrial park 2 Near sabar hotel</p>
                    <p>Makhinga, palsana Surat - 394315</p>
                  </div>
                  <div className={infoIconClasses + " order-1 lg:order-2 group-hover:bg-[#F2B52B] transition-colors"}>
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-end gap-4 group">
                  <div className="text-blue-900/60 font-light text-sm lg:text-right order-2 lg:order-1">
                    <a href="tel:+918160072337" className="text-lg font-bold text-blue-900 hover:text-blue-600 transition-colors">+91 8160072337</a>
                  </div>
                  <div className={infoIconClasses + " order-1 lg:order-2 group-hover:bg-[#F2B52B] transition-colors"}>
                    <Phone className="w-5 h-5" />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-end gap-4 group">
                  <div className="text-blue-900/60 font-light text-sm lg:text-right order-2 lg:order-1">
                    <a href="mailto:sales@nuaaqua.com" className="text-blue-900 hover:text-blue-600 transition-colors font-semibold">sales@nuaaqua.com</a>
                  </div>
                  <div className={infoIconClasses + " order-1 lg:order-2 group-hover:bg-[#F2B52B] transition-colors"}>
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Col: Map */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/3 relative z-10 order-1 lg:order-2"
            >
              <div className="relative p-2 lg:p-4 bg-[#F2B52B] rounded-2xl shadow-2xl transform lg:-translate-y-8">
                <div className="h-[400px] md:h-[500px] w-full bg-white rounded-xl overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431249.4762033616!2d72.3739630890625!3d21.071980800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04faa3a38cc29%3A0xfee95d725fa30883!2sNevas%20Water!5e1!3m2!1sen!2sus!4v1770917625399!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Form */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/3 bg-blue-900 text-white p-8 md:p-12 self-stretch flex flex-col justify-center order-3"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#F2B52B]">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#F2B52B] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#F2B52B]">Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#F2B52B] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#F2B52B]">Phone number</label>
                  <input
                    {...register("phone", { required: true })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#F2B52B] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#F2B52B]">Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#F2B52B] transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 space-y-6">
                  {/* CAPTCHA Placeholder */}
                  <div className="bg-white p-4 flex items-center gap-4 rounded overflow-hidden">
                    <input type="checkbox" className="w-5 h-5" readOnly />
                    <span className="text-gray-700 text-sm">I'm not a robot</span>
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="ml-auto w-6 h-6 grayscale opacity-80" alt="reCAPTCHA" />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-[#004246] font-bold py-4 rounded hover:bg-[#F2B52B] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send —&gt;
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
