import React from 'react'

const Button = (props: any) => {
  return (
    <button className='bg-indigo-600 text-white py-2 w-48 px-6 rounded-full border-white md:ml-8 hover:bg-indigo-400 
    duration-500 '>
      {props.children}
    </button>
  )
}

export default Button