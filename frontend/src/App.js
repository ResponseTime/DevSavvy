import "./App.css";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Animate from "./components/Animate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyEditor from "./components/MyEditor";
import { useEffect, useState } from "react";
import Login from "./components/Login";

function App() {
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState(null);
  useEffect(() => {
    if ("token" in localStorage) {
      setUser(localStorage.getItem("token"));
    }
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        {!user ? <Login /> : null}
        <Animate blog={blog} set={setBlog} user={user} setUser={setUser} />
      </Router>
    </>
  );
}

export default App;
