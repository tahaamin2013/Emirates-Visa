import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Step1 from "./Step 1";
type Country = { name: { common: string }; flags: { png: string } };
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
  const [selectedCountry2, setSelectedCountry2] = useState<string>("");
  const [showPreviousContent, setShowPreviousContent] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const close = () => {
    window.location.reload();
  };
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
      setShowPreviousContent(false);
      setShowContent(true);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`bg-white cursor-pointer pt-10 pb-60 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 w-[330px] h-[275px] border-b border-gray-300 text-center align-middle flex flex-col items-center`}
          onClick={handleDialogToggle}
        >
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
              className="select flex-grow bg-transparent outline-none border-none w-full lg:w-[300px]"
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
            <button
              className="border bg-transparent rounded-none border-black/50 px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase"
              onClick={close}
              type="button"
            >
              Cancel
            </button>
          </DialogClose>
          <Step1
            handleStartButtonClick={handleStartButtonClick}
            isStartButtonEnabledf={!isStartButtonEnabled()}
            isStartButtonEnabledg={isStartButtonEnabled()}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FinalSingleVisaPricess;
