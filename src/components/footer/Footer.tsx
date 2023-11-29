"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";

const scrollToTop = () => {
  window.scrollTo({
    top: 400,
    behavior: "smooth", // Optional: Use smooth scrolling
  });
};

const Footer = () => {
  return (
    <div className=" bg-white w-full text-center pt-20">
      <div className="lg:text-start mb-24 flex flex-col xl:flex-row justify-between sm:text-center lg:mx-20 mx-0">
        <div>
          <h1 className="text-xl flex text-center justify-center items-center lg:text-2xl font-medium">
            Want a Visa by Thursday, 30 Nov 2023?
          </h1>
          <p className="text-[#ef1810] text-xl font-normal lg:font-medium">
            Apply within 3 Hrs 58 Mins
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="bg-[#ef1810] ml-20 mt-4 lg:mt-0 lg:ml-0 py-4 px-5 w-[210px] transition-all duration-500 ease-out text-white hover:bg-[#e90000]"
        >
          <p className="flex ml-6">
            {" "}
            APPLY NOW
            <FaCheck className=" mt-0 ml-4 text-2xl" />
          </p>
        </button>
      </div>
      <hr />
      <div>
        <div>
          <h1>Get in touch </h1>
          <a href="">support@emiratesvisa.com</a>
          <a href="">WhatsApp</a>
          <a href="">+971 50 803 8472</a>
          <a href="">Down Town Dubai</a>
        </div>
        <div>
          <h1>Help & Support</h1>
          <a href="">support@emiratesvisa.com</a>
          <a href="">FAQ</a>
        </div>
        <div>
          <h1>Hangout with Us</h1>
          <p>Facebook</p>
        </div>
        <div>
          <h1>About us</h1>
          <a href="">About Us</a>
          <a href="">Term of use</a>
          <a href="">Privacy Policy</a>
          <a href="">Careers</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
