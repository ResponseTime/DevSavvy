import React from "react";
import { motion } from "framer-motion";
export default function Demo() {
  return (
    <motion.div
      className="d"
      initial={{ transform: "translateX(-1000px)" }}
      animate={{ transform: "translateX(0px)" }}
      exit={{ transform: "translateX(0px)", transition: { duration: 0.1 } }}
    >
      <div>
        <h1>hello d</h1>
      </div>
    </motion.div>
  );
}
