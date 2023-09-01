import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Animate from "./components/Animate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Animate />
      </Router>
      <Footer />
    </>
  );
}

export default App;
