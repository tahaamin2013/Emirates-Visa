import React from "react";

const Step1 = () => {
    const handleDialogToggle = () => {
        window.location.reload(); // Refresh the page
      };
  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center">
      <div className="bg-[#efefef] rounded shadow-md p-6 w-full h-full">
        <div className=" flex justify-between flex-col xl:flex-row text-center">
          <h1 className="text-[#e90000] text-xl">MAIN APPLICANT</h1>
          <div>
            Order Total: <span className="text-xl font-bold">280 USD</span>
          </div>
        </div>
        <div>
          <p className="text-center mt-16 text-xl">
            Please Upload the Following Documents
          </p>
          <div className="flex mt-10 text-sm text-center justify-between xl:flex-row flex-col px-0 xl:px-80">
            <div>
              Accepted Formats:{" "}
              <span className="text-[#e90000]">PDF, JPG or PNG</span>
            </div>
            <div>
              Maximum File Size:{" "}
              <span className="text-[#e90000]">4 MB per upload</span>
            </div>
          </div>
        </div>

       <div className="text-center mt-12">
       <button
          onClick={handleDialogToggle}
          className="border border-black px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase"
        >
          Cancel
        </button>
       </div>
      </div>
    </div>
  );
};

export default Step1;
