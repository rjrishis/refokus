import React from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";
function Products() {
  const [pos, setPos] = useState(0);
  const mover = (value) => {
    setPos(value * 23);
  };
  let d = [
    {
      title: "Arqitel",
      description:
        "hello dear how are you iam fine and kendi hundi si chan tak raah bana de taare ne pasnd menu ek taah dawa de",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "hello dear how are you iam fine and kendi hundi si chan tak raah bana de taare ne pasnd menu ek taah dawa de",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "hello dear how are you iam fine and kendi hundi si chan tak raah bana de taare ne pasnd menu ek taah dawa de",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "hello dear how are you iam fine and kendi hundi si chan tak raah bana de taare ne pasnd menu ek taah dawa de",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="mt-32 relative">
      {d.map((e, i) => (
        <Product key={i} val={e} mover={mover} count={i} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window rounded-lg absolute w-[32rem] h-[23rem]  left-[25%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-100"
          >
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-green-100"
          >
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-purple-100"
          >
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642873744568-a7c5f7d10aae?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-100"
          >
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1638136264464-2711f0078d1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
