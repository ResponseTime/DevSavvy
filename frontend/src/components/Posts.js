import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
export default function Posts(props) {
  const location = useLocation();
  return (
    <motion.div
      className="post"
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
      {location.pathname === "/mposts" && props.user
        ? props.user
        : location.pathname}
    </motion.div>
  );
}
