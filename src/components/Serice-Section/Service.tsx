import React from 'react'

const Service = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="bg-white w-[305px] lg:w-96 text-center p-[35.2px] pt-[32px] pb-[43px]">
          <p className="text-md text-gray-600">
            {title}
          </p>
          <hr className=" border-b-[#e90000] border-[3.4px] border-transparent ml-[70px] lg:ml-[88px] w-[150px] mt-3 rounded-full mb-3" />
          <p>
            {description}
          </p>
        </div>
  )
}

export default Service