import React from "react";
import SingleVisaPrice from "../Single-Visa-price/page";

const HomePrice = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg lg:text-2xl font-normal lg:font-medium">
        Choose from a range of UAE Visa options
        </h1>
        <p className="text-sm lg:text-lg text-gray-600">
        to suit your needs!
        </p>
      </div>
      <SingleVisaPrice />
    </div>
  );
};

export default HomePrice;
