// components/CountrySelection.tsx
import { useEffect, useState, ChangeEvent } from 'react';

type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
};

const CountrySelection = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry1, setSelectedCountry1] = useState<string>('');
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCountry2, setSelectedCountry2] = useState<string>('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleCountry1Change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry1(e.target.value);
  };

  const handleCountry2Change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry2(e.target.value);
  };

  return (
    <>
  <form className="flex flex-col md:flex-row gap-4 -mb-14">
    {/* Country 1 Selection */}
    <div className="selection w-full bg-white p-5 shadow-md flex items-center">
      <img
        className={`flag w-11 h-11 ${selectedCountry1 ? 'rounded-full' : 'rounded-none'} mr-2`}
        src={selectedCountry1 === '' ? 'nationality.svg' : countries.find((c) => c.name.common === selectedCountry1)?.flags.png || 'nationality.svg'}
        alt="Flag"
      />
      <select
        id="countrySelect1"
        className="select flex-grow outline-none bg-transparent border-none w-full lg:w-[300px]" 
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
        className={`flag w-11 h-11 ${selectedCountry2 ? 'rounded-full' : 'rounded-none'} mr-2`}
        src={selectedCountry2 === '' ? 'country.svg' : countries.find((c) => c.name.common === selectedCountry2)?.flags.png || 'nationality.svg'}
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
  <button className="bg-[#888888] px-12 text-md ml-[640px] relative top-[154px] font-light pb-[9px] pt-[9px] uppercase">Start</button>
  </>
  );
};

export default CountrySelection;
