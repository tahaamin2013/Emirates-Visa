import React from "react";

const ServicesSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-lg lg:text-2xl font-normal lg:font-medium">
        Apply for a visa with peace of mind
      </h1>
      <p className=" text-sm lg:text-lg text-gray-600">
        Application in minutes - 24/7 help & support
      </p>
      <hr className=" border-b-[#e90000] border-transparent border-2 w-[200px] mt-6 rounded-full mb-28" />
      <div className=" flex flex-col items-center mt-[-30px] gap-3 lg:flex-row">
        <div className="bg-white w-[305px] lg:w-96 text-center p-[27px]">
          <p className="text-md text-gray-600">
            Apply online <br />
            anywhere anytime
          </p>
          <hr className=" border-b-[#e90000] border-[3.4px] border-transparent ml-[70px] lg:ml-[88px] w-[150px] mt-3 rounded-full mb-3" />
          <p>
            We make it easy and secure to apply online. We take your privacy
            seriously, data is encrypted with industry-leading 256-bit
            encryption.
          </p>
        </div>
        <div className="bg-white w-[305px] lg:w-96 text-center pb-12 p-[27px] ">
          <p className="text-md text-gray-600">
            Get out-standing 24x7 <br />
            customer service
          </p>
          <hr className=" border-b-[#e90000] border-[3.4px] border-transparent ml-[70px] lg:ml-[88px] w-[150px] mt-3 rounded-full mb-3" />
          <p>
            Our team is available for you to get you visa hassle free. You
            choose from 1 of 6 communication channel of your choice.
          </p>
        </div>
        <div className="bg-white w-[305px] lg:w-96 text-center p-[35.2px] pt-[32px] pb-[43px]">
          <p className="text-md text-gray-600">
            Enjoy 24 hours express <br />
            visa service
          </p>
          <hr className=" border-b-[#e90000] border-[3.4px] border-transparent ml-[70px] lg:ml-[88px] w-[150px] mt-3 rounded-full mb-3" />
          <p>
            Enjoy 24 hours express service as standard without paying extra. No
            hidden charges with us and you get full tracking.
          </p>
        </div>
      </div>
      <div className=" my-44"></div>
    </div>
  );
};

export default ServicesSection;
