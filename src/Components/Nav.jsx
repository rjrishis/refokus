import React from "react";
import Button from "./Button";
const Nav = () => {
  return (
    <div className="text-white max-w-screen-xl mx-auto py-5 mt-2 flex  justify-between border-b-[1px] border-zinc-700 ">
      <div className="n-left flex gap-16">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14">
          {["Home", "Links", "Carrers", "", "News"].map((e, i) =>
            e.length === 0 ? (
              <span className="w-[1px] h-4 mt-1 bg-zinc-400"></span>
            ) : (
              <a key={i} className="text-sm flex items-center gap-1" href="#">
                {i === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0 0.05em #00FF19" }}
                    className="  inline-block w-1 h-1 rounded-full bg-green-400"
                  ></span>
                )}
                {e}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Nav;
