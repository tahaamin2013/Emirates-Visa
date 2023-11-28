import React, { useState } from "react";

const VisaType = () => {
  const [selectedOption, setSelectedOption] = useState("singleEntry");
  const [isChecked, setIsChecked] = useState(false);

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.id);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center flex-col text-center items-center">
      <h1 className="text-2xl font-medium">Select a visa type</h1>
      <p className="text-lg text-gray-600">
        No hidden fees! All taxes included.
      </p>
      <div className="p-2 py-4 shadow-md w-fit flex bg-white justify-between mt-4 sm:flex-row flex-col">
        <div className="flex">
          <div className="flex items-center">
            <input
              type="radio"
              value=""
              id="singleEntry"
              name="entry"
              required
              className="mr-2 hidden-input appearance-none rounded-full border-[1.4px] bg-[#d3d3d3] border-[#ebb6b6] w-8 h-8 checked:bg-[#e90000] checked:border-gray-300 checked:border-[3px]"
              checked={selectedOption === "singleEntry"}
              onChange={handleOptionChange}
            />
            <label className="mr-5">Single Entry</label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="multipleEntry"
              name="entry"
              value="fs"
              className="mr-2 hidden-input appearance-none rounded-full border-[1.4px] bg-[#d3d3d3] border-[#ebb6b6] w-8 h-8 checked:bg-[#e90000] checked:border-gray-300 checked:border-[3px]"
              checked={selectedOption === "multipleEntry"}
              onChange={handleOptionChange}
              required
            />
            <label className="lg:mr-28 mr-0">Multiple Entry</label>
          </div>
        </div>
        <div className="flex lg:ml-0 ml-[55px] items-center lg:pl-[400px] mt-8 lg:mt-0">
          <p className="mr-4">USD</p>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div className="h-[8px] w-[80px] rounded-full bg-[#e90000] shadow-inner"></div>
              <div
                className={`shadow-switch-1 absolute left-0 -top-[17px] flex h-10 w-10 items-center justify-center rounded-full transition transform ${
                  isChecked ? "-translate-x-[-40px]" : "-translate-x-0"
                } bg-[#e90000]`}
              ></div>
            </div>
          </label>
          <p className="ml-4">AED</p>
        </div>
      </div>
    </div>
  );
};

export default VisaType;
