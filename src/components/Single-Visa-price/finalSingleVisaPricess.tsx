import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Countries from "../countries/Coutries";

const FinalSingleVisaPricess = ({
  Days,
  Single,
  Price,
  description,
  BestPrice,
}: {
  Days: string;
  Single: string;
  Price: string;
  description: string;
  BestPrice: boolean;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <div>
        {/* Element triggering the dialog */}
        <div
          className={`bg-white pt-10 pb-60 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 w-[330px] h-[275px] border-b border-gray-300 text-center align-middle flex flex-col items-center`}
          onClick={handleDialogToggle}
        >
          {/* Content in the trigger element */}
          {BestPrice && (
            <button className="bg-[#e90000] text-white flex px-7 py-2 mt-[-55px] rounded-sm">
              Best Price <FaCheck className="mt-[2px] ml-2 text-xl" />
            </button>
          )}
          <p className="text-3xl mt-4">{Days}</p>
          <p className="text-gray-900 text-lg uppercase">{Single}</p>
          <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[150px] mt-3 rounded-full mb-3" />
          <div className="flex">
            <h1 className="text-black/75 text-5xl">{Price}</h1>
            <p className="font-extrabold text-[#e90000] text-xl ml-3">USD</p>
          </div>
          <p className="text-sm mt-3 w-64">{description}</p>
        </div>
        
        {/* Dialog box */}
        {isDialogOpen && (
          <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center">
            <div className="bg-white rounded shadow-md p-8 xl:w-fit xl:h-fit w-full h-full">
              {/* Dialog Content */}
              <h2>Please tell us where you are from and where you live</h2>
              <Countries /> {/* Assuming this renders country inputs */}
              {/* Close button inside the dialog */}
              <button onClick={handleDialogToggle}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FinalSingleVisaPricess;
