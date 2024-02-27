import React from "react";
import { IoCall } from "react-icons/io5";
import Content from "../Content";

const Hero = () => {
  return (
    <div className="md:h-[83vh] w-full py-10 md:px-16 px-10">
      <Content
        head={
          'Diversifying the Designs of Digital World'
        }
        
        text1={
          "Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients."
        }
        text2={
          " EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing."
        }
        btnIcon={<IoCall />}
        btnText="Book a Call"
        img="./hero.png"
      />
    </div>
  );
};

export default Hero;
