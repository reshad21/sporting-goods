// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";
import img1 from "../../assets/Images/slider1.jpg";
import img2 from "../../assets/Images/slider2.jpg";
import img3 from "../../assets/Images/slider5.jpg";
import img4 from "../../assets/Images/slider6.jpg";

const HeroSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} className="w-full h-[650px] object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full h-[650px] object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full h-[650px] object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full h-[650px] object-fill" />
        </SwiperSlide>
      </Swiper>
      <motion.div
        className="absolute flex flex-col gap-3 justify-center top-[50%]  left-[20%] md:left[50%] lg:left[50%] z-40 bg-orange-500 text-white text-center w-[55%] h-[45%] md:w-[35%] md:h-[25%] border-2 border-white rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
      >
        <h1 className="text-3xl font-bold">MEGA OFFER FOR NEXT 30 DAYS</h1>
        <p className="text-xl font-semibold">50% CASH BACK OFFER</p>
      </motion.div>
    </div>
  );
};

export default HeroSlider;
