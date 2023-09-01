import React from "react";
import { motion } from "framer-motion";
export default function Demo() {
  return (
    <motion.div
      className="d"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div>
        <h1>hello d</h1>
      </div>
    </motion.div>
  );
}
