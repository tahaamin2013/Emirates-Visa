'use client';
import React, { useState, useEffect } from "react";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import styles from "./Country-Selection.module.css";
import { useRouter } from "next/navigation";
import VisaType from "../visa-type-section/VisaType";
import SingleVisaPriceo from "../Single-Visa-price/SingleVisaPriceo";
import Countries from "../countries/Coutries";

const CountrySelection = () => {
  const [countries, setCountries] = useState<any[]>([]); // Adjust 'any[]' to match your country data type
  const [isSelected, setIsSelected] = useState(false);
  const [showHeading, setShowHeading] = useState(false); // New state for controlling h1 tag
  const [isSearchIcon, setIsSearchIcon] = useState(true);
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State to manage button disabled status
  const [showContent, setShowContent] = useState(true);

  const router = useRouter()
  const SearchtheVisa = () => {
    setShowHeading(true); // Set showHeading to true when Search Button is pressed
    setIsSearchIcon((prevState) => !prevState);

    // Hide content when search button is clicked
    setShowContent(false);
  };

  const ResettheVisa = () => {
    setCountry1('');
    setCountry2('');
    setIsSelected(false);
    setShowHeading(false);
    setIsSearchIcon(true);

    const countrySelect1 = document.getElementById('countrySelect1') as HTMLSelectElement;
    const countrySelect2 = document.getElementById('countrySelect2') as HTMLSelectElement;
    const flagImage1 = document.querySelectorAll('.flag')[0] as HTMLImageElement;
    const flagImage2 = document.querySelectorAll('.flag')[1] as HTMLImageElement;

    if (countrySelect1 && countrySelect2 && flagImage1 && flagImage2) {
      countrySelect1.selectedIndex = 0; // Resetting select field to default option
      countrySelect2.selectedIndex = 0; // Resetting select field to default option
      flagImage1.src = '/nationality.svg'; // Resetting image source
      flagImage2.src = '/country.svg'; // Resetting image source
    }
    setShowContent(true);
  };


  useEffect(() => {
    console.log('Country 1:', country1);
    console.log('Country 2:', country2);
    setIsButtonDisabled(country1.trim() === '' || country2.trim() === '');

    const updateFlagImage = (
      selectElement: HTMLSelectElement,
      flagImage: HTMLImageElement
    ) => {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const flagURL = selectedOption.getAttribute("data-flag");

      if (flagURL) {
        flagImage.src = flagURL;
        setIsSelected(true);
      } else {
        flagImage.src = "nationality.svg";
        setIsSelected(false);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        setCountries(data);

        data.forEach((country: any) => {
          const option1 = document.createElement("option");
          option1.value = country.name.common;
          option1.textContent = country.name.common;
          option1.setAttribute("data-flag", country.flags.png);
          const countrySelect1 = document.getElementById(
            "countrySelect1"
          ) as HTMLSelectElement;
          countrySelect1.appendChild(option1.cloneNode(true));

          const option2 = document.createElement("option");
          option2.value = country.name.common;
          option2.textContent = country.name.common;
          option2.setAttribute("data-flag", country.flags.png);
          const countrySelect2 = document.getElementById(
            "countrySelect2"
          ) as HTMLSelectElement;
          countrySelect2.appendChild(option2.cloneNode(true));
        });
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();

    const countrySelect1 = document.getElementById(
      "countrySelect1"
    ) as HTMLSelectElement;
    const countrySelect2 = document.getElementById(
      "countrySelect2"
    ) as HTMLSelectElement;

    const flagImage1 = document.querySelectorAll(
      ".flag"
    )[0] as HTMLImageElement;
    const flagImage2 = document.querySelectorAll(
      ".flag"
    )[1] as HTMLImageElement;

    countrySelect1.addEventListener("change", function () {
      updateFlagImage(this, flagImage1);
    });

    countrySelect2.addEventListener("change", function () {
      updateFlagImage(this, flagImage2);
    });
  }, [country1, country2]);

  return (
    <div>

      <form
        action=""
        className="confirm flex p-5 flex-col md:flex-row gap-4 justify-center items-center"
      >
        <div className="selection flex-1 w-full md:max-w-[470px] bg-white p-2 py-4 shadow-md flex items-center">
          <img
            className={`flag w-11 h-11 ${isSelected ? "rounded-full" : "rounded-none"
              } mr-2`}
            src="/nationality.svg"
            alt="Nationality Flag"
          />
          <select
            id="countrySelect1"
            className="select cursor-text flex appearance-none w-14 flex-1 outline-none bg-transparent"
            onChange={(e) => {
              setCountry1(e.target.value);
            }}
          >
            {/* field2 */}
            <option value="" disabled selected>
              I am from
            </option>
            {/* Rest of your options */}
          </select>

        </div>
        <div className="selection flex-1 w-full md:max-w-[470px] bg-white p-2 py-4 shadow-md flex items-center">
          <img
            className={`flag w-11 h-11 ${isSelected ? "rounded-full" : "rounded-none"
              } mr-2`}
            src="/country.svg"
            alt="Country Flag"
          />
          <select
            id="countrySelect2"
            className="select cursor-text flex appearance-none outline-none w-14 flex-1 bg-transparent"
            onChange={(e) => {
              setCountry2(e.target.value);
            }}
          >
            {/* field1 */}
            <option value="" disabled selected>
              I live in
            </option>
            {/* Rest of your options */}
          </select>

        </div>
        <div className="flex justify-center">

          {isSearchIcon ? (
            <button /* Search Button 182 */
              type="button"
              disabled={isButtonDisabled} // Add this line
              className={`bg-white shadow-md transition-all ease-in hover:bg-gray-100 text-red-600 ${styles.button}`}
              onClick={SearchtheVisa}
            >
              <IoSearchSharp size={40} />
            </button>
          ) : (
            <button /* Search Button 345 */
              type="button"
              className={`bg-white transition-all ease-in hover:bg-gray-100 shadow-md text-red-600 ${styles.button}`}
              onClick={ResettheVisa}

            >
              <IoClose size={40} />
            </button>
          )}
        </div>
      </form>

      {showContent && (
      <div>
      <div className="flex mt-14 mb-8 flex-col justify-center items-center">
        <h1 className="text-lg lg:text-2xl font-normal lg:font-medium">
        Choose from a range of UAE Visa options
        </h1>
        <p className="text-sm lg:text-lg text-gray-600">
        to suit your needs!
        </p>
      </div>
      <SingleVisaPriceo />
    </div>
    )}



      <div>{showHeading && <div className="mt-10"><VisaType /></div>}</div>
    </div>
  );
};

export default CountrySelection;
