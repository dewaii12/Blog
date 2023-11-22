import Navbar from "./components/navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/css/custom.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Gallery" element={<Gallery/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;