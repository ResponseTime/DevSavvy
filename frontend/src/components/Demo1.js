import React from "react";
import { motion } from "framer-motion";
export default function Demo1() {
  return (
    <motion.div
      className="d1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div>
        <h1>hello d1</h1>
      </div>
    </motion.div>
  );
}
