import React from "react";
import { TiTick } from "react-icons/ti";

const cards = [
  {
    name: "Customized SEO Services",
    description:
      "We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.",
  },
  {
    name: "On-Page SEO Services",
    description:
      "We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.",
  },
  {
    name: "Off-Page SEO Services",
    description:
      "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.",
  },
  {
    name: "Mobile SEO Services",
    description:
      "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.",
  },
  {
    name: "Free Website Audit and Strategies",
    description:
      "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.",
  },
];

const SeoService = () => {
  return (
    <div className="h-auto w-full py-10 md:px-16 px-10">
      <div className="h-full w-full rounded-xl md:bg-gradient-to-b from-[#FEFEFE] to-transparent py-1">
        <h1 className="text-center text-2xl font-bold mt-10 text-[#E68F50]">
          SEO Services
        </h1>
        <div className="md:grid grid-cols-2 mt-10 md:px-10 gap-10">
          {cards.map((service, index) => (
            <div className="flex gap-4 md:mt-0 mt-6" key={index}>
              <div className="h-5 w-5 rounded-full bg-[#36454F] flex items-center justify-center text-white shrink-0">
                <TiTick />
              </div>
              <div>
                <h1 className="font-semibold text-[#0A56F1] mb-3">
                  {service.name}
                </h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoService;
