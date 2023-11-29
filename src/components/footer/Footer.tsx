import React from "react";
import { FaCheck } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-white w-full text-center pt-20">
        <div className="lg:text-start flex flex-col xl:flex-row justify-between sm:text-center lg:mx-20 mx-0">
          <div>
          <h1 className="text-xl flex text-center justify-center items-center lg:text-2xl font-medium">Want a Visa by Thursday, 30 Nov 2023?</h1>
          <p className="text-[#ef1810] text-xl font-normal lg:font-medium" >Apply within 3 Hrs 58 Mins</p>
          </div>
       

        <a href="/" className="bg-[#ef1810] py-4 px-10 w-[210px] flex transition-all duration-500 ease-out text-white hover:bg-[#e90000]">
          APPLY NOW
          <FaCheck className=" mt-0 ml-4 text-2xl" />
        </a>
        </div>
      <hr />
      <div className=" p-48"></div>
    </div>
  );
};

export default Footer;
