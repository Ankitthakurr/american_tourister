import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../assets/autoOne.jpg";
import Two from "../assets/autoTwo.jpg";
import Three from "../assets/autoThree.jpg";
import Four from "../assets/autoFour.jpg";
import Five from "../assets/autoFive.jpg";
import Six from "../assets/autoSix.jpg";
import Seven from "../assets/autoSeven.jpeg";
import Eight from "../assets/autoEight.jpg";
import Nine from "../assets/autoNine.jpg";
import Ten from "../assets/autoTen.jpg";
import Eleven from "../assets/autoEleven.jpg";
import Twelve from "../assets/autoTwelve.jpeg";
import ig from "../assets/igImg.png";
import fb from "../assets/fbImg.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const ImageComponent = ({ image }) => {
  return (
    <div className="thirdSlideImg rounded-2xl cursor-pointer">
      <img className="rounded-2xl w-full" src={image} alt="Your Image" />
      <div className="thirdSlideText ">
        {" "}
        <p className="text-sm">amtouristeirn</p>
      </div>
    </div>
  );
};

const Heading = ({ heading, headingTwo }) => {
  return (
    <>
      <div className="px-4 flex flex-col justify-center  max-md:items-center py-3">
        <h3 className="text-3xl font-bold max-md:text-center max-md:text-2xl text-gray-700">
          {heading}
          <br />
          {headingTwo && headingTwo}
        </h3>
        <div className="underLine mt-4"></div>
      </div>
    </>
  );
};

const SliderThird = () => {
  const [arr] = useState([
    one,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
  ]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 850) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <div className="flex justify-around">
          <Heading heading={"Stay Social!"} headingTwo={"#AMERICANTOURISTER"} />
          <div className="flex gap-6 items-center max-md:hidden">
            <strong>Follow us on :</strong>
            <img src={ig} alt="" />
            <img src={fb} alt="" />
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={8}
            slidesPerView={slidesPerView}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            navigation={
            {
                nextEl: '.swiper-button-next ',
                prevEl: '.swiper-button-prev ',
                }
            }

            modules={[Autoplay, Navigation]}
            className="mySwiper w-4/6 max-lg:w-3/4 max-md:w-5/6 my-10"
          >
            <div className="swiper-button-next moveBtn">&gt;</div>
            <div className="swiper-button-prev moveBtn">&lt;</div>
            {arr.map((image, i) => (
              <SwiperSlide key={i}>
                <ImageComponent image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-6 items-center md:hidden justify-center m-6">
          <strong>Follow us on :</strong>
          <img src={ig} alt="" />
          <img src={fb} alt="" />
        </div>
      </section>
    </>
  );
};

export default SliderThird;
