"use client";
import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "./icon1.png",
    title: "User-Centric Approach",
  },
  {
    icon: "./icon2.png",
    title: "Customer Satisfaction",
  },
  {
    icon: "./icon3.png",
    title: "Integrating Feedback",
  },
  {
    icon: "./icon4.png",
    title: "High Quality Products",
  },
  {
    icon: "./icon5.png",
    title: "On-Time Product Delivery",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="h-auto w-full py-10 md:px-16 px-10">
      <motion.h1
        className="text-center text-2xl font-bold mt-10 text-[#E68F50]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Why Choose Us?
      </motion.h1>
      <motion.p
        className="font-semibold text-center mt-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        We excel with reliability, innovation and customer-centric approach for
        our quality products. <br />
        Our dedicated team ensures that the solutions provided are dependable
        and long-term
      </motion.p>

      <div className="md:grid grid-cols-3 gap-8 mt-10 md:px-20">
        {cards.map((card, index) => (
          <div
            className="shadow-lg cursor-pointer bg-gradient-to-r from-[#DAE4FA] to-[#F0EFF5] ring-[2px] ring-white rounded-xl py-2 px-3 flex items-center gap-10 hover:scale-105 transition-all duration-300 ease-in-out md:mt-0 mt-5"
            key={index}
          >
            <div className="h-12 p-2 w-12 shrink-0 rounded-xl bg-white ">
              <img
                src={card.icon}
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
            <h2 className="text-[#0A56F1] text-lg font-medium">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
