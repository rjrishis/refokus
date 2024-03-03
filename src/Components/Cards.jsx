import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full mt-[10%]'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-3'>
            <Card width={"basis-1/3"} start={false} para={true} hover={"hover:bg-zinc-700"}/>
            <Card width={"basis-2/3"} start={true} para={false} hover={"hover:bg-violet-600"}/>
        </div>
    </div>
  )
}

export default Cards