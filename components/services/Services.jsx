"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const cards = [
  {
    icon: "./icon6.png",
    title: "Website Development",
    decs: "We specialize in responsive website development, ensuring optimal performance across various devices.",
  },
  {
    icon: "./icon7.png",
    title: "App Development ",
    decs: "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.",
  },
  {
    icon: "./icon8.png",
    title: "Software Development ",
    decs: " We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.",
  },
  {
    icon: "./icon9.png",
    title: "UI/UX Design ",
    decs: " We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.",
  },
  {
    icon: "./icon10.png",
    title: "Digital Marketing ",
    decs: "We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.",
  },
  {
    icon: "./icon11.png",
    title: "SEO Optimization ",
    decs: "We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10 md:px-16 px-10 h-auto w-full">
        <motion.h1
          className="text-center text-2xl font-bold mt-10 text-[#E68F50]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Stackkaroo’s Digital Services
        </motion.h1>
        <motion.p
          className="font-semibold text-center mt-5"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We excel with reliability, innovation and customer-centric approach
          for our quality products. <br />
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </motion.p>

        <div className="md:grid grid-cols-3 gap-6 mt-10 md:visible hidden">
          {cards.map((card, index) => (
            <div
              className="relative ring-[1px]  ring-[#0A56F1] rounded-xl px-6 pt-6 pb-14 hover:shadow-xl transition duration-300 ease-in-out"
              key={index}
            >
              <div className="flex items-center gap-10">
                <div className="h-12 w-12 relative">
                  <img
                    src={card.icon}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0A56F1]">
                  {card.title}
                </h3>
              </div>
              <p className="font-medium mt-5 text-center text-md">
                {card.decs}
              </p>
              <div className="h-8 w-8 flex items-center justify-center text-white text-xl rounded-full absolute bottom-4 bg-[#E68F50] cursor-pointer">
                <FaAngleRight />
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden visible mt-5">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper h-72 "
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                {" "}
                <div className="relative ring-[1px]  ring-[#0A56F1] rounded-xl px-6 pt-6 pb-14  transition duration-300 ease-in-out h-64 mt-2 mx-2">
                  <div className="flex items-center gap-10">
                    <div className="h-12 w-12 relative">
                      <img
                        src={card.icon}
                        className="h-full w-full object-contain"
                        alt=""
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A56F1]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-medium mt-5 text-center text-md">
                    {card.decs}
                  </p>
                  <div className="h-8 w-8 flex items-center justify-center text-white text-xl rounded-full absolute bottom-4 bg-[#E68F50] cursor-pointer">
                    <FaAngleRight />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
