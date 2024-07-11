import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
const Contactus = () => {
  return (
    <div className="flex justify-between gap-4 my-20">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: "2",
          delay: 0.7,
        }}
        className="card w-full bg-base-100 shadow-xl"
      >
        <div className="card-body items-center">
          <span className="">
            <FiPhoneCall size={42} className="text-blue-800" />
          </span>
          <p className="text-lg">+880 1787170612</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: "2",
          delay: 0.5,
        }}
        className="card w-full bg-base-100 shadow-xl"
      >
        <div className="card-body items-center">
          <span className="">
            <TiMessages size={42} className="text-blue-800" />
          </span>
          <p className="text-lg">info@sportszone.com</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: "2",
          delay: 0.3,
        }}
        className="card w-full bg-base-100 shadow-xl"
      >
        <div className="card-body items-center">
          <span className="">
            <TfiLocationPin size={42} className="text-blue-800" />
          </span>
          <p className="text-lg">
            Indo-Bangla Road, Barishal, 8200, Bangladesh
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contactus;
