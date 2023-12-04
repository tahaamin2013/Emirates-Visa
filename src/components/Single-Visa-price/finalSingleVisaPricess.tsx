import React, { ChangeEvent, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import TermsAndCondition from "../Terms-and-condition/TermsAndCondition";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
};

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
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry1, setSelectedCountry1] = useState<string>("");
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCountry2, setSelectedCountry2] = useState<string>("");
  const [showParagraph, setShowParagraph] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleCountry1Change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry1(e.target.value);
  };

  const handleCountry2Change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry2(e.target.value);
  };

  const isStartButtonEnabled = () => {
    return selectedCountry1 !== "" && selectedCountry2 !== "";
  };

  const handleStartButtonClick = () => {
    if (isStartButtonEnabled()) {
      // Show content when the button is clicked
      setShowContent(true);
    }
  };
  const reset = () => {
    window.location.reload();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`bg-white cursor-pointer pt-10 pb-60 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 w-[330px] h-[275px] border-b border-gray-300 text-center align-middle flex flex-col items-center`}
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
      </DialogTrigger>
      <DialogContent className="w-full lg:h-fit h-full lg:max-w-max bg-[#efefef]">
        <DialogHeader className="mt-4">
          <DialogDescription className="text-lg text-center mb-8">
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col md:flex-row gap-4">
          {/* Country 1 Selection */}
          <div className="w-full bg-white p-5 shadow-md flex items-center">
            <img
              className={`flag w-11 h-11 ${
                selectedCountry1 ? "rounded-full" : "rounded-none"
              } mr-2`}
              src={
                selectedCountry1 === ""
                  ? "nationality.svg"
                  : countries.find((c) => c.name.common === selectedCountry1)
                      ?.flags.png || "nationality.svg"
              }
              alt="Flag"
            />

            <select
              id="countrySelect1"
              className="flex-grow outline-none bg-transparent border-none w-full lg:w-[300px]"
              placeholder="Select a country"
              value={selectedCountry1}
              onChange={handleCountry1Change}
            >
              <option value="" disabled selected>
                Select country
              </option>
              {countries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>

          {/* Country 2 Selection */}
          <div className="selection w-full bg-white p-5 shadow-md flex items-center">
            <img
              className={`flag w-11 h-11 ${
                selectedCountry2 ? "rounded-full" : "rounded-none"
              } mr-2`}
              src={
                selectedCountry2 === ""
                  ? "country.svg"
                  : countries.find((c) => c.name.common === selectedCountry2)
                      ?.flags.png || "nationality.svg"
              }
              alt="Flag"
            />
            <select
              id="countrySelect2"
              className="select flex-grow bg-transparent outline-none border-none w-full lg:w-[300px]" // Added flex-grow to expand the select element
              placeholder="Select a country"
              value={selectedCountry2}
              onChange={handleCountry2Change}
            >
              <option value="" disabled selected>
                Select country
              </option>
              {countries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
        </form>

        <DialogFooter className="sm:justify-end mt-20 flex gap-5">
          <DialogClose asChild>
            <Button className="border bg-transparent rounded-none border-black/50 px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase" onClick={reset} type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          {!showContent ? (
            <div>
              <Button
                onClick={handleStartButtonClick}
                disabled={!isStartButtonEnabled()}
                className={`bg-[#e90000] hover:bg-[#e90000] rounded-none w-full text-white text-md font-light uppercase flex text-center ${
                  isStartButtonEnabled() ? "" : "opacity-50 cursor-not-allowed"
                }`}
              >
                <span className="ml-6">Start</span>
                <IoIosArrowForward className="text-2xl ml-[20px] text-white" />
              </Button>
            </div>
          ) : (
            <TermsAndCondition />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FinalSingleVisaPricess;

// {isDialogOpen && (
//   <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center">
//     <div className="bg-[#efefef] rounded shadow-md p-6 xl:w-fit xl:h-fit w-full h-full">
//       {/* Dialog Content */}
//       <h2 className="text-center text-black/70 mb-10">
//         Please tell us where you are from and where you live
//       </h2>

//       <form className="flex flex-col md:flex-row gap-4 -mb-14">
//         {/* Country 1 Selection */}
//         <div className="selection w-full bg-white p-5 shadow-md flex items-center">
//           <img
//             className={`flag w-11 h-11 ${
//               selectedCountry1 ? "rounded-full" : "rounded-none"
//             } mr-2`}
//             src={
//               selectedCountry1 === ""
//                 ? "nationality.svg"
//                 : countries.find(
//                     (c) => c.name.common === selectedCountry1
//                   )?.flags.png || "nationality.svg"
//             }
//             alt="Flag"
//           />
//           <select
//             id="countrySelect1"
//             className="select flex-grow outline-none bg-transparent border-none w-full lg:w-[300px]"
//             placeholder="Select a country"
//             value={selectedCountry1}
//             onChange={handleCountry1Change}
//           >
//             <option value="" disabled selected>
//               Select country
//             </option>
//             {countries.map((country) => (
//               <option
//                 key={country.name.common}
//                 value={country.name.common}
//               >
//                 {country.name.common}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Country 2 Selection */}
//         <div className="selection w-full bg-white p-5 shadow-md flex items-center">
//           <img
//             className={`flag w-11 h-11 ${
//               selectedCountry2 ? "rounded-full" : "rounded-none"
//             } mr-2`}
//             src={
//               selectedCountry2 === ""
//                 ? "country.svg"
//                 : countries.find(
//                     (c) => c.name.common === selectedCountry2
//                   )?.flags.png || "nationality.svg"
//             }
//             alt="Flag"
//           />
//           <select
//             id="countrySelect2"
//             className="select flex-grow bg-transparent outline-none border-none w-full lg:w-[300px]" // Added flex-grow to expand the select element
//             placeholder="Select a country"
//             value={selectedCountry2}
//             onChange={handleCountry2Change}
//           >
//             <option value="" disabled selected>
//               Select country
//             </option>
//             {countries.map((country) => (
//               <option
//                 key={country.name.common}
//                 value={country.name.common}
//               >
//                 {country.name.common}
//               </option>
//             ))}
//           </select>
//         </div>
//       </form>

//       <div className="flex gap-6 xl:flex-row flex-col mt-28 ml-0 xl:ml-[450px]">
//         <button
//           onClick={handleDialogToggle}
//           className="border border-black px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase"
//         >
//           Cancel
//         </button>

//         {!showContent ? (
//           <div>
//             {/* Your initial content */}
//             {/* ... (your existing content) */}
//             <button
//               onClick={handleStartButtonClick}
//               className={`bg-[#e90000] text-white pl-32 pr-[17px] xl:pl-12 xl:pr-3 text-md font-light pb-[9px] pt-[9px] uppercase flex text-center ${
//                 isStartButtonEnabled()
//                   ? ""
//                   : "opacity-50 cursor-not-allowed"
//               }`}
//               disabled={!isStartButtonEnabled()}
//             >
//               Start{" "}
//               <IoIosArrowForward className="text-2xl ml-[90px] xl:ml-8 text-white" />
//             </button>
//           </div>
//         ) : (
//           <TermsAndCondition />
//         )}
//       </div>
//     </div>
//   </div>
// )}
