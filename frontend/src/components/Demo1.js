import React from "react";
import { motion } from "framer-motion";
export default function Demo1() {
  return (
    <motion.div
      className="d1"
      initial={{ transform: "translateX(-3000px)", opacity: 0 }}
      animate={{ transform: "translateX(0px)", opacity: 1 }}
      exit={{
        transform: "translateX(0px)",

        transition: {
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
        },
        opacity: 1,
      }}
    >
      <div>
        <h1>hello d1</h1>
      </div>
    </motion.div>
  );
}
