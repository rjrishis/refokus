import React from "react";
import { useState } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
  const [image,setImage]=useState([
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      top: "50%",
      left: "50%",
      isAcitve: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1666901328578-7fcbe821735e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isAcitve: false,
    },
    {
      url: "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isAcitve: false,
    },
    {
      url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "53%",
      isAcitve: false,
    },
    {
      url: "https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "43%",
      left: "40%",
      isAcitve: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661727547850-3d7c020a64a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "65%",
      left: "55%",
      isAcitve: false,
    },
  ])

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    console.log(Math.floor(data*100));
    function imagesShow(arr) {
      setImage((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break; // Add break statement here
      case 3:
        imagesShow([0, 1, 2]);
        break; // Add break statement here
      case 4:
        imagesShow([0, 1, 2, 3]);
        break; // Add break statement here
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break; // Add break statement here
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break; // Add break statement here
      // default:
      //   imagesShow([]);
    }
  });

  return (
    <div className="w-full mt-5">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[25vw] leading-none font-medium tracking-tighter select-none text-white">
          work
        </h1>
        <div className="absolute top-[40%] left-[45%] w-full h-full -translate-x-[50%] -translate-y-[50%]">
          {image.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-44 h-44"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
