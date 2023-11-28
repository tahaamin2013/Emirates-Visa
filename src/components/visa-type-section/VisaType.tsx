import React from "react";

const VisaType = () => {
  return (
    <div className="flex justify-center flex-col text-center items-center">
      <h1 className="text-2xl font-medium">Select a visa type</h1>
      <p className="text-lg text-gray-600">
        No hidden fees! All taxes included.
      </p>
      <div className="p-2 py-4 shadow-md w-96 flex justify-between mt-4 sm:flex-row flex-col">
      <div className="flex">
          <div>
            <input type="radio" name="entry" value="fs" required />
            Single Entry
          </div>
          <div>
            <input type="radio" name="entry" value="fs" required />
            Multiple Entry
          </div>
        </div>
        <div>Right Content</div>
      </div>
    </div>
  );
};

export default VisaType;
