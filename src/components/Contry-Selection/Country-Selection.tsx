import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import styles from './Country-Selection.module.css';

const CountrySelection = () => {
  const [countries, setCountries] = useState<any[]>([]); // Adjust 'any[]' to match your country data type 
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const updateFlagImage = (selectElement: HTMLSelectElement, flagImage: HTMLImageElement) => {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const flagURL = selectedOption.getAttribute('data-flag');

      if (flagURL) {
        flagImage.src = flagURL;
        setIsSelected(true);
      } else {
        flagImage.src = 'nationality.svg';
        setIsSelected(false);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        setCountries(data);

        data.forEach((country: any) => {
          const option1 = document.createElement('option');
          option1.value = country.name.common;
          option1.textContent = country.name.common;
          option1.setAttribute('data-flag', country.flags.png);
          const countrySelect1 = document.getElementById('countrySelect1') as HTMLSelectElement;
          countrySelect1.appendChild(option1.cloneNode(true));

          const option2 = document.createElement('option');
          option2.value = country.name.common;
          option2.textContent = country.name.common;
          option2.setAttribute('data-flag', country.flags.png);
          const countrySelect2 = document.getElementById('countrySelect2') as HTMLSelectElement;
          countrySelect2.appendChild(option2.cloneNode(true));
        });
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();

    const countrySelect1 = document.getElementById('countrySelect1') as HTMLSelectElement;
    const countrySelect2 = document.getElementById('countrySelect2') as HTMLSelectElement;

    const flagImage1 = document.querySelectorAll('.flag')[0] as HTMLImageElement;
    const flagImage2 = document.querySelectorAll('.flag')[1] as HTMLImageElement;

    countrySelect1.addEventListener('change', function () {
      updateFlagImage(this, flagImage1);
    });

    countrySelect2.addEventListener('change', function () {
      updateFlagImage(this, flagImage2);
    });
  }, []);

  return (
      <form action="" className="confirm flex p-5 flex-col md:flex-row gap-4 justify-center items-center">
        <div className="selection flex-1 w-full md:max-w-[430px] bg-white p-2 py-4 shadow-md flex items-center">
          <img className={`flag w-11 h-11 ${isSelected ? 'rounded-full' : 'rounded-none'} mr-2`} src="/nationality.svg" alt="Nationality Flag" />
          <select id="countrySelect1" className="select cursor-text flex appearance-none w-14 flex-1 outline-none bg-transparent">
            <option value="" disabled selected>
              I am from
            </option>
          </select>
        </div>
        <div className="selection flex-1 w-full md:max-w-[430px] bg-white p-2 py-4 shadow-md flex items-center">
          <img className={`flag w-11 h-11 ${isSelected ? 'rounded-full' : 'rounded-none'} mr-2`} src="/country.svg" alt="Country Flag" />
          <select id="countrySelect2" className="select cursor-text flex appearance-none outline-none w-14 flex-1">
            <option value="" disabled selected>
              I live in
            </option>
          </select>
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            className={`bg-white shadow-md text-red-600 ${styles.button}`}

          >
            <IoSearchSharp size={35} />
          </button>
        </div>
      </form>
  );
};

export default CountrySelection;
