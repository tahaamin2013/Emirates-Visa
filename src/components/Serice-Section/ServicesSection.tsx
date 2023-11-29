import React from "react";
import Service from "./Service";

const ServicesSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg lg:text-2xl font-normal lg:font-medium">
            Apply for a visa with peace of mind
          </h1>
          <p className="text-sm lg:text-lg text-gray-600">
            Application in minutes - 24/7 help & support
          </p>
        </div>

        <div className="flex gap-5 p-10 flex-wrap justify-center">
          <Service
            title="Apply online
            anywhere anytime"
            description="We make it easy and secure to apply online. We take your privacy seriously, data is encrypted with industry-leading 256-bit encryption."
            className=""
          />
          <Service
            title="Get out-standing 24x7
            customer service"
            description="Our team is available for you to get you visa hassle free. You choose from 1 of 6 communication channel of your choice."
            className=""
          />
          <Service
            title="Enjoy 24 hours express visa service"
            description="Enjoy 24-hour express service as standard without extra charges. No hidden fees, full tracking provided."
            className=""
          />
        </div>
        <p className="text-sm xl:mt-10 mb-14 mt-1 xl:mb-20 text-center lg:text-lg text-gray-600">Exclusions apply: Applications made on weekends (Friday & Saturday) and public holidays may take longer to process.</p>
      </div>

      
    </>
  );
};

export default ServicesSection;
