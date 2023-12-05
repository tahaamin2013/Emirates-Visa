import React from "react";
import Image from "next/image";

const Steps = ({image, title, description, width, height, className}: {className: string , height: number ,width: number, image: string, title: string, description: string}) => {
  return (
    <div
      className={`bg-white cursor-pointer pt-2 px-4 transition-all ease-in-out hover:relative hover:shadow-lg hover:-translate-y-1 pb-6 border-b border-gray-300 text-center align-middle flex flex-col items-center`}
    >
      <p className="text-xl mt-4 mb-2">
        <Image src={image} alt="Card Image" className={className} width={width} height={height} />
      </p>
      <p className="text-center text-sm w-16">{title}</p>
      <hr className=" border-b-[#e90000] border-[3.4px] border-transparent w-[100px] mt-3 rounded-full mb-3" />
      <p className="text-[12px] mt-3 w-40">{description}</p>
    </div>
  );
};

export default Steps;
