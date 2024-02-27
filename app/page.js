import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurStory from "@/components/ourStory/OurStory";
import SeoService from "@/components/seoService/SeoService";
import Services from "@/components/services/Services";
import WhyChooseUs from "@/components/whychooseus/WhyChooseUs";
import React from "react";
import PlacementService from "@/components/placementService/PlacementService";


const page = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-[#E9EFFC] to-[#FCF4EE]">
        <Hero />
        <OurStory />
        <WhyChooseUs />
        <Services />
        <SeoService />
        <PlacementService />
      </main>
    </>
  );
};

export default page;
