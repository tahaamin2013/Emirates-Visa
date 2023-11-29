import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between bg-white w-full text-center pt-16">
        <div className="lg:text-start sm:text-center lg:mx-24 mx-0">
          <h1 className="text-xl flex text-center justify-center items-center lg:w-0 lg:text-2xl font-medium">Want a Visa by Thursday, 30 Nov 2023?</h1>
          <p className="text-[#ef1810] text-xl font-normal lg:font-medium" >Apply within 3 Hrs 58 Mins</p>
        </div>
        <a href="/" className="mr-0 lg:mr-24">
          APPLY NOW
        </a>
      <hr />
    </div>
  );
};

export default Footer;
