import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#e90000] px-5 pb-2 pt-1 font-medium leading-none rounded-full border-white border-[1px]'>
      {props.children}
    </button>
  )
}

export default Button