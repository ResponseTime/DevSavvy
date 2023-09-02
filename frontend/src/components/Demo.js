import React from "react";
import { motion } from "framer-motion";
import MyEditor from "./MyEditor";
import Blog from "./Blog";
export default function Demo(props) {
  return (
    <motion.div
      className="d"
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
      <div className="cen">
        <MyEditor set={props.set} />
      </div>
    </motion.div>
  );
}
