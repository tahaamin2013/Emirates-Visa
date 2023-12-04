import React from "react";
import SingleVisaPrice from "../Single-Visa-price/page";

const Service = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className: string;
}) => {
  return (
    <div
      className={`bg-white w-[290px] h-[220px] lg:h-[220px] text-center align-middle flex flex-col items-center p-[35.2px] pt-[32px] pb-[43px] ${className}`}
    >
      <p className="text-md text-gray-600 w-44">{title}</p>
      <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[150px] mt-3 rounded-full mb-3" />
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default Service;
