import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">All posts</Link>
      <Link to="/mposts">My posts</Link>
      <Link to="/apost">Add post</Link>
    </div>
  );
}
