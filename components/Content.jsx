"use client";
import React from "react";
import { motion } from "framer-motion";

const Content = ({ head, text1, text2, btnIcon, btnText, img }) => {
  return (
    <div className="h-full w-full rounded-xl md:bg-gradient-to-b from-[#FEFEFE] to-transparent md:grid grid-cols-2">
      <div className="md:pl-10 flex flex-col justify-center">
        <motion.h1
          className="md:text-3xl text-xl font-semibold text-[#0A56F1] md:text-start text-center md:w-3/4 "
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {head}
        </motion.h1>
        <motion.p
          className="font-medium my-4 md:text-start text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {text1}
        </motion.p>
        <motion.p
          className="font-medium my-4 md:text-start text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {text2}
        </motion.p>
        <motion.button
          className="flex mt-5 w-fit items-center justify-center bg-[#E68F50]  py-2 rounded-full gap-3 px-3 md:mx-0 mx-auto"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="bg-white text-[#E68F50] h-8 w-8 flex items-center justify-center rounded-full">
            {btnIcon}
          </span>
          <span className="text-white">{btnText}</span>
        </motion.button>
      </div>
      <div className="flex items-center justify-end">
        <img src={img} className="h-full w-full object-contain " alt="" />
      </div>
    </div>
  );
};

export default Content;
