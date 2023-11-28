import React from 'react'

const Button = (props:any) => {
  return (
    <button className='bg-[#e90000] px-3 w-[10rem] pb-2 pt-2 font-medium leading-none rounded-full border-white border-[1px]'>
      {props.children}
    </button>
  )
}

export default Button