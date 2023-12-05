import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai"; // Import the delete icon
import { IoIosArrowForward } from "react-icons/io";
import Steps from "../Terms-and-condition/Steps";
import { Download } from "lucide-react";
import Fileuploader from "./Fileuploader";

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
  const [selectedCountry2, setSelectedCountry2] = useState<string>("");
  const [showPreviousContent, setShowPreviousContent] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setIsLoading(true);
  //     setSelectedFile(file); // Set the selected file

  //     const interval = setInterval(() => {
  //       setUploadProgress((prevProgress) => {
  //         if (prevProgress < 100) {
  //           return prevProgress + 10;
  //         }
  //         clearInterval(interval);
  //         setIsLoading(false);
  //         return prevProgress;
  //       });
  //     }, 500);
  //   }
  // };

  const handleDialogToggle2 = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    window.location.reload();
  };

  const handleDivClick1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleDivClick2 = () => {
    setIsChecked2(!isChecked2);
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
  const isStartButtonEnabled2 = () => {
    return isChecked1 && isChecked2;
  };

  const handleStartButtonClick = () => {
    if (isStartButtonEnabled()) {
      setShowPreviousContent(false);
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
            <Button
              className="border bg-transparent rounded-none border-black/50 px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase"
              onClick={reset}
              type="button"
              variant="secondary"
            >
              Cancel
            </Button>
          </DialogClose>

          <Dialog>
            <DialogTrigger asChild>
              <div className="sm:justify-end">
                <Button
                  onClick={handleStartButtonClick}
                  className={`bg-[#e90000] hover:bg-[#e90000] rounded-none w-full text-white text-md font-light uppercase flex text-center ${
                    isStartButtonEnabled()
                      ? ""
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!isStartButtonEnabled()}
                >
                  <span className="ml-6">Start</span>
                  <IoIosArrowForward className="text-2xl ml-[20px] text-white" />
                </Button>
              </div>
            </DialogTrigger>

            <DialogContent className="w-full lg:h-fit h-full lg:max-w-max bg-[#efefef] overflow-y-auto">
              <DialogHeader className="mt-7">
                <DialogTitle className="text-center text-xl">
                  Let(s) get your Visa(s)
                </DialogTitle>
                <DialogDescription className="text-center text-lg">
                  What(s) required to make this application?
                </DialogDescription>
              </DialogHeader>

              <div className=" flex flex-col lg:flex-row gap-5 mb-9 mt-9">
                <Steps
                  image="/id-Card.svg"
                  width={40}
                  height={40}
                  title="Valid Passport"
                  description="Clear passport scan or picture with minimum of 6 months
                  validity."
                  className=""
                />
                <Steps
                  image="/Mansvg.svg"
                  width={56}
                  height={56}
                  title="Picture /
                  Headshot"
                  description="Clear passport style color photo or a selfie with white background."
                  className=""
                />
                <Steps
                  image="/linessvg.svg"
                  width={60}
                  height={60}
                  title="Personal
                  Details"
                  description="Name and contact details so we can facilitate your application."
                  className=" mt-4"
                />
                <Steps
                  image="/nationality.svg"
                  width={60}
                  height={60}
                  title="Additional
                  Documents"
                  description="In some cases additional documents may be required."
                  className=" my-2"
                />
              </div>

              <p className="text-left text-sm mb-4">
                Please confirm that you have read and agreed to the following:
              </p>

              <div className="flex flex-col text-black/80 gap-4">
                <p className="text-left text-sm flex gap-4">
                  <div
                    className={`w-14 xl:w-6 h-6 border-2 border-red-500  flex justify-center rounded cursor-pointer`}
                    onClick={handleDivClick1}
                  >
                    {isChecked1 ? (
                      <span className="text-red-500 font-bold mt-0 ">✔</span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  The decision to grant or refuse the visa(s) is the sole
                  prerogative and at the sole discretion of Government of UAE.
                </p>
                <p className="text-left text-sm flex gap-3">
                  <div
                    className={`w-14 xl:w-6 h-6 border-2 border-red-500 flex items-center justify-center rounded cursor-pointer`}
                    onClick={handleDivClick2}
                  >
                    {isChecked2 ? (
                      <span className="text-red-500 font-bold mt-0">✔</span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  I hereby confirm that no active visa application is currently
                  under processing by another agent. This could lead to a none{" "}
                  <br />
                  refundable rejection of my visa application.
                </p>
                <p className="text-left text-sm flex gap-3">
                  <Image src="/Alert.svg" alt="Alert" width={30} height={30} />{" "}
                  You may order up to 9 Visas in <br /> the same application.
                </p>
              </div>

              <DialogFooter className=" mt-0 xl:-mt-11">
                <div>
                  <div className="flex gap-6 xl:flex-row flex-col">
                    <button
                      onClick={handleDialogToggle2}
                      className="border border-black px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase"
                    >
                      Cancel
                    </button>

                    <Dialog>
                      <DialogTrigger>
                        <button
                          onClick={handleStartButtonClick}
                          className={`bg-[#e90000] text-white pl-32 pr-[17px] xl:pl-12 xl:pr-3 text-md font-light pb-[9px] pt-[9px] uppercase flex text-center ${
                            isStartButtonEnabled2()
                              ? ""
                              : "opacity-50 cursor-not-allowed"
                          }`}
                          disabled={!isStartButtonEnabled2()}
                        >
                          Start
                          <IoIosArrowForward className="text-2xl ml-[90px] xl:ml-8 text-white" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-full h-full">
                        <DialogHeader>header</DialogHeader>
                        <div className=" flex items-center flex-col">
                          {/* Top Section with Price */}
                          <div className="flex w-full flex-col justify-between items-center sm:flex-row">
                            <h1 className="text-[#e90000] text-xl">
                              MAIN APPLICANT
                            </h1>
                            <div className="flex flex-row gap-1 items-center">
                              <p>Order Total:</p>{" "}
                              <h3 className="text-xl font-bold">180 USD</h3>
                            </div>
                          </div>

                          {/* Uploading state */}
                          <div className="flex items-center flex-col">
                            <p className="mt-16 text-center  text-lg lg:text-xl">
                              Please Upload the Following Documents
                            </p>

                            <div className="gap-12 flex w-full md:flex-row flex-col md: items-center justify-between">
                              <p className="text-sm flex gap-1">
                                Accepted Formats:
                                <span className="text-[#e90000]">
                                  PDF, JPG or PNG
                                </span>
                              </p>
                              <p className="text-sm flex gap-1">
                                Maximum File Size:
                                <span className="text-[#e90000]">
                                  4 MB per upload
                                </span>
                              </p>
                            </div>

                            <div className="flex flex-col xl:flex-row justify-center gap-5 mt-6">
                              <Fileuploader />
                              {/* <div className="bg-white border hover:shadow-xl transition-all p-5 flex items-center flex-col">
                                Passport
                                <label htmlFor="file-upload">
                                  <div className="custom-file-upload relative">
                                    <input
                                      id="file-upload"
                                      type="file"
                                      onChange={handleFileChange}
                                      accept="image/*"
                                      // maxSize={4 * 1024 * 1024}
                                      style={{ display: "none" }}
                                    />
                                    {isLoading ? (
                                      <div className="status">
                                        <svg
                                          aria-hidden="true"
                                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                          viewBox="0 0 100 101"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                          />
                                        </svg>
                                      </div>
                                    ) : (
                                      <div className="flex text-red-500 items-center justify-center">
                                        <Download />
                                      </div>
                                    )}
                                  </div>
                                </label>
                                {selectedFile && !isLoading && (
                                  <p>Selected file: {selectedFile.name}</p>
                                )}
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FinalSingleVisaPricess;
