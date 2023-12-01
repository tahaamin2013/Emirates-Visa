import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import LiveTime from "../LiveTime"; // Import the LiveTime component
import moment from "moment-timezone"; // Import moment-timezone

const scrollToTop = () => {
  window.scrollTo({
    top: 400,
    behavior: "smooth", // Optional: Use smooth scrolling
  });
};

const Foo = () => {
  const [dubaiTime, setDubaiTime] = useState(moment.tz("Asia/Dubai").format("hh:mm A")); // Set initial Dubai time

  useEffect(() => {
    const interval = setInterval(() => {
      setDubaiTime(moment.tz("Asia/Dubai").format("hh:mm A")); // Update Dubai time every second
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LiveTime currentTime={dubaiTime} /> {/* Display live time component */}
      <div className="w-full h-fit bg-white-500 mb-4 border-b px-18 sm:px-28 py-24 flex flex-col text-center sm:text-left sm:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="sm:text-2xl text-xl">Want a Visa by Sunday, 3 Dec 2023?</h1>
          <p className="text-xl" style={{ color: "#e90000" }}>Apply within 3 Hrs 58 Mins</p>
        </div>
        <button className="flex w-[210px] h-[50px] items-center rounded-md justify-center border-white bg-[#e90000] font-[400] capitalize text-white" onClick={scrollToTop}>
          <p>APPLY NOW</p>
          <FaCheck className="mt-0 ml-4 text-2xl" />
        </button>
      </div>
    </>
  );
};

export default Foo;
