import React from "react";
import Service from "./Service";

const ServicesSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-lg lg:text-2xl font-normal lg:font-medium">
        Apply for a visa with peace of mind
      </h1>
      <p className=" text-sm lg:text-lg text-gray-600">
        Application in minutes - 24/7 help & support
      </p>
      <hr className=" border-b-[rgb(233,0,0)] border-transparent border-2 w-[200px] mt-6 rounded-full mb-28" />
      <div className="flex flex-col items-center mt-[-30px] gap-3 lg:flex-row">
        <Service
          title="Apply online anywhere anytime"
          description="We make it easy and secure to apply online. We take your privacy seriously, data is encrypted with industry-leading 256-bit encryption."
        />
        <Service
          title="Get out-standing 24x7 customer service"
          description="Our team is available for you to get you visa hassle free. You choose from 1 of 6 communication channel of your choice."
        />
        <Service
          title="Enjoy 24 hours express visa service"
          description="Enjoy 24 hours express service as standard without paying extra. No hidden charges with us and you get full tracking."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
