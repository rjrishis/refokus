import React from 'react'
import { ImIcoMoon } from "react-icons/im";
function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight text-white'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h1 className='mb-10 text-zinc-500 capitalize'>socials</h1>
                    {["instagram","twitter (x?","LinkedIn"].map((item,index)=><a className='block mt-2 text-zinc-500' key={index}>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h1 className='mb-10 text-zinc-500 capitalize'>socials</h1>
                    {["instagram","twitter (x?","LinkedIn"].map((item,index)=><a className='block mt-2 text-zinc-500' key={index}>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-right text-zinc-100'>Refokus is a pioneering digital agency driven by design empowered by technology. </p>
                    <button className='px-6 py-3 mt-5 bg-blue-500'>Enterprise</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer