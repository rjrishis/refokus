import React from 'react'

function stripe({val}) {
  return (
    <div className='w-[16.66%] px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex items-center justify-between mt-20'>
        <img  src={val.url} alt="" />
        <span className='text-white'>{val.number}</span>
    </div>
  )
}

export default stripe