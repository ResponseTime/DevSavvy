import React from "react";
import { motion } from "framer-motion";
export default function Demo1() {
  return (
    <motion.div
      className="d1"
      initial={{ transform: "translateX(1000px)" }}
      animate={{ transform: "translateX(0px)" }}
      exit={{ transform: "translateX(0px)", transition: { duration: 0.1 } }}
    >
      <div>
        <h1>hello d1</h1>
      </div>
    </motion.div>
  );
}
