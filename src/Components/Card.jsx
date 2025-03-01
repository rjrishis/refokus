import React from "react";
import { GoArrowRight } from "react-icons/go";
function Card({ width ,start , para,hover }) {
  return (
    <div
      className={`${
        (width)
      } ${hover} bg-zinc-800 p-5 rounded-xl text-white min-h-[30rem] flex flex-col justify-between hover:p-6`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between text-white items-center">
          <h1>oneheading</h1>
          <GoArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading.</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
