import React from "react";
import { FaCheck } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 400,
    behavior: "smooth", // Optional: Use smooth scrolling
  });
};

const Foo = () => {
  return (
    <div className="w-full h-fit bg-white-500 shadow-md px-18 sm:px-28 py-24 flex flex-col text-center sm:text-left sm:flex-row items-center justify-between gap-6">
      <div>
        <h1 className="sm:text-2xl text-xl">Want a Visa by Sunday, 3 Dec 2023?</h1>
        <p className="text-xl text-red-500">Apply within 3 Hrs 58 Mins</p>
      </div>

        <button className="flex w-[210px] h-[50px] items-center rounded-md justify-center border-white bg-[#e90000] font-[400] capitalize text-white" onClick={scrollToTop}>
          <p>APPLY NOW</p>
          <FaCheck className="mt-0 ml-4 text-2xl" />
        </button>
    </div>

   
  );
};

export default Foo;
