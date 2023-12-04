import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
const TermsAndCondition = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false); // 
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDivClick1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleDialogToggle = () => {
    setIsChecked1(false); // Reset checkbox 1
    setIsChecked2(false); // Reset checkbox 2
    window.location.reload(); // Refresh the page
  };
  
  

  const handleDivClick2 = () => {
    setIsChecked2(!isChecked2);
  };

  const isStartButtonEnabled = () => {
    return isChecked1 && isChecked2; // Enable the button only if both checkboxes are checked
  };

  const handleStartButtonClick = () => {
    if (isStartButtonEnabled()) {
      setShowParagraph(true); // Show the paragraph when the Start button is clicked
    }
  };

  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center">
      <div className="bg-[#efefef] rounded-lg text-center shadow-md p-6 xl:w-fit xl:h-full w-full h-full">
      
        <h1 className="text-2xl">Let's get your Visa(s)</h1>
        <p className=" text-black/60">
          What's required to make this application?
        </p>
        <div className=' flex flex-col lg:flex-row gap-3 mb-9 mt-9'>
        <div
  className={`bg-white cursor-pointer pt-2 px-4 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 pb-6 border-b border-gray-300 text-center align-middle flex flex-col items-center`}
>
<p className="text-xl mt-4 mb-2"><Image src="/id-Card.svg" alt='Card' width={40} height={40}  /> </p>
  <p className="text-center text-sm">Valid <br /> Passport</p>
  <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[100px] mt-3 rounded-full mb-3" />
  <p className="text-[12px] mt-3 w-48">Clear passport scan or picture with minimum of 6 months validity.</p>

</div>

<div
  className={`bg-white pt-2 px-4 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 pb-6 border-b border-gray-300 text-center align-middle flex flex-col items-center`}
>
<p className="text-xl mt-4 mb-2"><Image src="/Mansvg.svg" alt='Card' width={60} height={60}  /> </p>
  <p className="text-center text-sm">Picture / <br /> Headshot</p>
  <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[100px] mt-3 rounded-full mb-3" />
  <p className="text-[12px] mt-3 w-44">Clear passport style color photo or a selfie with white background.</p>

</div>




<div
  className={`bg-white pt-2 px-4 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 pb-6 border-b border-gray-300 text-center align-middle flex flex-col items-center`}
>
<p className="text-xl mt-6 mb-4"><Image src="/linessvg.svg" alt='Card' width={60} height={60}  /> </p>
  <p className="text-center text-sm">Personal <br /> Details</p>
  <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[100px] my-4 rounded-full" />
  <p className="text-[12px] mt-3 w-48">Name and contact details so we can facilitate your application.</p>

</div>





<div
  className={`bg-white pt-2 px-4 transition-all duration-300 ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 pb-6 border-b border-gray-300 text-center align-middle flex flex-col items-center`}
>
<p className="text-xl mt-5 mb-3"><Image src="/nationality.svg" alt='Card' width={70} height={70}  /> </p>
  <p className="text-center text-sm">Additional <br /> Documents</p>
  <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[100px] my-4 rounded-full" />
  <p className="text-[13px] mt-3 w-48">In some cases additional documents may be required.</p>

</div>
</div>










        <p className="text-left text-sm mb-4">
          Please confirm that you have read and agreed to the following:
        </p>
        <div className="flex flex-col text-black/80 gap-4">
          <p className="text-left text-sm flex gap-3">
            <div
              className={`w-6 h-6 border-2 border-red-500 flex justify-center rounded cursor-pointer`}
              onClick={handleDivClick1}
            >
              {isChecked1 ? (
                <span className="text-red-500 font-bold mt-0">✔</span>
              ) : (
                <span></span>
              )}
            </div>{" "}
            The decision to grant or refuse the visa(s) is the sole prerogative
            and at the sole discretion of Government of UAE.
          </p>
          <p className="text-left text-sm flex gap-3">
            <div
              className={`w-6 h-6 border-2 border-red-500 flex items-center justify-center rounded cursor-pointer`}
              onClick={handleDivClick2}
            >
              {isChecked2 ? (
                <span className="text-red-500 font-bold mt-0">✔</span>
              ) : (
                <span></span>
              )}
            </div>{" "}
            I hereby confirm that no active visa application is currently under
            processing by another agent. This could lead to a none <br />{" "}
            refundable rejection of my visa application.
          </p>
          <p className="text-left text-sm flex gap-3">
            <Image src="/Alert.svg" alt="Alert" width={30} height={30} /> You
            may order up to 9 Visas in <br /> the same application.
          </p>
        </div>
        <div>
        <div className="flex gap-6 xl:flex-row flex-col ml-0 xl:ml-[490px]">
        <button
          onClick={handleDialogToggle}
          className="border border-black px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase"
        >
          Cancel
        </button>
          <button
            onClick={handleStartButtonClick}
            className={`bg-[#e90000] text-white pl-32 pr-[17px] xl:pl-12 xl:pr-3 text-md font-light pb-[9px] pt-[9px] uppercase flex text-center ${
              isStartButtonEnabled() ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isStartButtonEnabled()}
          >
            Start <IoIosArrowForward className="text-2xl ml-[90px] xl:ml-8 text-white" />
          </button>
          {showParagraph && (
            <p className="mt-4 text-sm text-gray-700">
              This is the paragraph that appears when the Start button is clicked.
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;