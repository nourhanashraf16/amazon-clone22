import React from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Products from "./Products";
const Home = () => {
  return (
    <>
      <Header />
      <Header2 />
      <div className="my-home">
        <Swiper
          // install Swiper modules
          freeMode={true}
          navigation={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation]}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide
            style={{ backgroundImage: "url('img/71tIrZqybrL._SX3000_.jpg')" }}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: "url('img/61DUO0NqyyL._SX3000_.jpg')" }}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: "url('img/61TD5JLGhIL._SX3000_.jpg')" }}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: "url('img/711Y9Al9RNL._SX3000_.jpg')" }}
          ></SwiperSlide>
        </Swiper>
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default Home;
