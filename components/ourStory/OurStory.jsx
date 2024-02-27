"use client"
import React from "react";
import Content from "../Content";
import { PiCurrencyInrBold } from "react-icons/pi";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="h-auto w-full md:px-16 px-10 py-10">
      <p className="font-semibold text-center">
        In the realm of digital solutions, we offer expertise in
      </p>
      <div className="md:grid grid-cols-5 gap-6 mt-7">
        {[
          "Web Development",
          "App Development",
          "UI/UX Design",
          "Digital Marketing",
          "SEO Optimization",
        ].map((item, index) => {
          return (
            <motion.div
              key={index}
              className="text-center font-medium text-md ring-[2px] ring-[#0A56F1] rounded-full py-1 cursor-pointer md:mt-0 mt-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      <p className="font-semibold text-center mt-7">
        showcasing our proficiency across various facets of the digital platform
      </p>
      <h1 className="text-center text-2xl font-bold mt-10 text-[#E68F50]">
        Stay Ahead! <br />
        Launch Your Next Project with Stackkaroo
      </h1>
      <div className="mt-10 md:h-[83vh] w-full">
        <Content
          head={"Our Story"}
          text1={
            "Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations."
          }
          text2={
            "Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride."
          }
          btnIcon={<PiCurrencyInrBold />}
          btnText="Get Estimated Project Cost"
          img="./hero2.png"
        />
      </div>
    </div>
  );
};

export default OurStory;
