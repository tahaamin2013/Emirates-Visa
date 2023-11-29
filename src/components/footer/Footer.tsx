"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const scrollToTop = () => {
  window.scrollTo({
    top: 400,
    behavior: "smooth", // Optional: Use smooth scrolling
  });
};

const Footer = () => {
  return (
    <div className=" bg-white w-full pt-20">
      <div className="lg:text-start mb-24 flex flex-col xl:flex-row justify-between sm:text-center lg:mx-20 mx-0">
        <div>
          <h1 className="text-xl flex text-center justify-center items-center lg:text-2xl font-medium">
            Want a Visa by Thursday, 30 Nov 2023?
          </h1>
          <p className="text-[#ef1810] xl:ml-0 ml-12 text-xl font-normal lg:font-medium">
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

      <footer className="bg-white dark:bg-gray-900">
        <div className="w-full ml-[0px]">
          <div className="grid grid-cols-1 text-left gap-8 px-4 py-6 lg:py-8 md:text-left md:grid-cols-4">

            {/* Get in touch */}
            <div className="ml-20 ">
              <h2 className="mb-6 text-black">Get in touch</h2>
              <ul className="text-gray-700 font-light">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    support@emiratesvisa.com
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    WhatsApp
                  </Link>
                </li>
                <li className="mb-4">+971 50 803 8472</li>
                <li className="mb-4">Down Town Dubai</li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h2 className="mb-6 text-black">Help & Support</h2>
              <ul className="text-gray-700 font-light">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    support@emiratesvisa.com
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hangout with Us */}
            <div>
              <h2 className="mb-6 text-black">Hangout with Us</h2>
              <ul className="text-gray-700 font-light">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>

            {/* About us */}
            <div>
              <h2 className="mb-6 text-black">About us</h2>
              <ul className="text-gray-700 font-light">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Term of use
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
