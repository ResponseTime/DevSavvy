import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Demo from "./components/Demo";
import Demo1 from "./components/Demo1";
import Animate from "./components/Animate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Animate />
        <Footer />
      </Router>
    </>
  );
}

export default App;
