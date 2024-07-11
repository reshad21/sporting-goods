// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

import img1 from "../../assets/Images/slider1.jpg";
import img2 from "../../assets/Images/slider2.jpg";
import img3 from "../../assets/Images/slider3.jpg";
import img4 from "../../assets/Images/slider4.jpg";

const HeroSlider = () => {
  return (
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
        <img src={img1} className="w-full h-[400px] object-fill" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} className="w-full h-[400px] object-fill" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} className="w-full h-[400px] object-fill" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} className="w-full h-[400px] object-fill" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
