import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#e90000] py-2 w-48 rounded-full border-white border-[1px]'>
      {props.children}
    </button>
  )
}

export default Button