"use client";
import React from "react";
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
    icon: "./icon12.png",
    title: "Unleashing Top Talent Globally",
    description:
      "We offer 5% top talents and supports companies hiring from various time zones.",
  },
  {
    icon: "./icon13.png",
    title: "Securing Success",
    description:
      "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.",
  },
  {
    icon: "./icon14.png",
    title: "Beyond Borders",
    description: "We provide both, flexible full-time and part-time jobs",
  },
  {
    icon: "./icon15.png",
    title: "End-to-End Excellence",
    description:
      "In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.",
  },
  {
    icon: "./icon16.png",
    title: "Efficiency Redefined",
    description:
      "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.",
  },
  {
    icon: "./icon17.png",
    title: "Simplified Contracts Satisfied Partnerships",
    description:
      "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.",
  },
];

const PlacementService = () => {
  return (
    <div className="h-auto w-full py-10 md:px-16 px-10">
      <motion.h1
        className="text-center text-2xl font-bold mt-10 text-[#E68F50]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Stackkaroo’s Talent Hiring & Job Placement Services
      </motion.h1>
      <motion.p
        className="font-semibold text-center mt-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        We are a talent searching platform that redesigns how companies hire
        talents. It is a cost-effective solution for industries. <br /> We also
        provide global job opportunities with good salaries, support, and
        professional development.
      </motion.p>

      <div className="md:grid grid-cols-3 gap-4 mt-10 md:visible hidden">
        {cards.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white shadow-xl py-5 px-5 flex flex-col items-center hover:scale-95 transition duration-300 ease-in-out"
          >
            <img
              src={c.icon}
              className="h-14 mb-5 w-14 object-contain"
              alt=""
            />
            <h3 className="text-left font-semibold text-[#0A56F1] mb-2">
              {c.title}
            </h3>
            <p className="text-center">{c.description}</p>
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
          {cards.map((c, i) => (
            <SwiperSlide key={i}>
              <div
                key={i}
                className="rounded-2xl bg-white md:shadow-xl py-5 px-5 h-72 flex flex-col items-center"
              >
                <img
                  src={c.icon}
                  className="h-14 mb-5 w-14 object-contain"
                  alt=""
                />
                <h3 className="text-left font-semibold text-[#0A56F1] mb-2">
                  {c.title}
                </h3>
                <p className="text-center">{c.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlacementService;
