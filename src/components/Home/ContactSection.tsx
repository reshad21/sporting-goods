import contactUsImage from "@/assets/Contact-get-tuch.webp";
import { motion } from "framer-motion";
import { FaPhoneSquareAlt, FaRegEnvelope } from "react-icons/fa";
import ContactUsForm from "./ContactUsForm";
const ContactSection = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            src={contactUsImage}
            className="w-full md:w-[676px] h-auto object-fill"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 md:mt-0"
          >
            <h1 className="text-3xl font-bold mb-4">
              Get In <span className="text-[#e21b70]">Touch</span>
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-green-500">
                  <FaPhoneSquareAlt />
                </span>
                <span className="text-[13px] text-slate-500">
                  +91-1234567890
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-rose-600">
                  <FaRegEnvelope />
                </span>
                <span className="text-[13px] text-slate-500">
                  info@sportszone.com
                </span>
              </div>
            </div>
            <ContactUsForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
