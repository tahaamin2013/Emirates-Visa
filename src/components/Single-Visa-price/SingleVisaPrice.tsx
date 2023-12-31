
import React from 'react';
import { FaCheck } from "react-icons/fa6";


const SingleVisa = ({
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
  return (
    <div className={`bg-white pt-10 pb-60 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 w-[330px] h-[275px] border-b border-gray-300 text-center align-middle flex flex-col items-center`}>

        {BestPrice && (
          <button className='bg-[#e90000] text-white flex absolute px-7 py-2 mt-[-55px] rounded-sm'>
            Best Price <FaCheck className="mt-[2px] ml-2 text-xl" />
          </button>
        )}
      <p className="text-3xl mt-4">{Days}</p>
      <p className="text-gray-900 text-lg uppercase">{Single}</p>
      <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[150px] mt-3 rounded-full mb-3" />
      <div className='flex'>
        <h1 className='text-black/75 text-5xl'>{Price}</h1>
        <p className='font-extrabold text-[#e90000] text-xl ml-3'>USD</p>
      </div>
      <p className='text-sm mt-3 w-64'>{description}</p>
    </div>
  )
}

export default SingleVisa;
