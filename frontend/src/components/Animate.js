import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Demo from "./Demo";
import Demo1 from "./Demo1";
import { AnimatePresence } from "framer-motion";

export default function Animate() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo1" element={<Demo1 />} />
      </Routes>
    </AnimatePresence>
  );
}
