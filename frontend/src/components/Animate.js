import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Demo from "./Demo";
import Demo1 from "./Demo1";
import { AnimatePresence } from "framer-motion";
import Posts from "./Posts";
import Login from "./Login";
import Blog from "./Blog";

export default function Animate(props) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts user={props.user} />} />
        <Route path="/login" element={<Login setUser={props.setUser} />} />
        <Route path="/mposts" element={<Posts user={props.user} />} />
        <Route path="/blog" element={<Demo1 blog={props.blog} />} />
        <Route path="/apost" element={<Demo set={props.set} />} />
      </Routes>
    </AnimatePresence>
  );
}
