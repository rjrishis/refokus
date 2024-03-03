import React from 'react'
import Stripe from './Stripe'
function Stripes() {
    let data = [{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",number:11},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",number:2},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",number:4},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",number:5},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",number:6},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",number:9}
]
  return (
    <div className='flex '>
        {data.map((e,i)=>(
          <Stripe key={i} val = {e}/>
        ))}
    </div>
  )
}

export default Stripes