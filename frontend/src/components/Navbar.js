import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">All posts</Link>
        <Link to="/mposts">My posts</Link>
        <Link to="/apost">Add post</Link>
        <Link to="/blog">read blog</Link>
      </div>
      <Link to="/login" style={{ right: 0, zIndex: "1", position: "absolute" }}>
        Login/Signup
      </Link>
    </>
  );
}
