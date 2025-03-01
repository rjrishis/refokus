import React from 'react';
import "./Marquee.css"
function Marquee({ val }) {
  return (
    <div className='flex items-center gap-5 w-full overflow-hidden animate-marquee'>
      {val.map((e, index) => (
        <img key={index} src={e} alt={`Logo ${index}`} className="mx-0" />
      ))}
    </div>
  );
}

export default Marquee;
