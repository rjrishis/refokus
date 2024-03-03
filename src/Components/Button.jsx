import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Get Started"}) {
  return (
    <div className=''>
        <button className='w-36 h-8 px-3 py-2 text-sm bg-zinc-100 text-black font-medium rounded-full flex items-center justify-between'>{title}
        <BsArrowReturnRight/>
        
        </button>
    </div>
  )
}

export default Button