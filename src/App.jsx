import React from "react";
import { Routes ,Route} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Error from "./Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from "./Navbar";
const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>

  </>
  )
}

export default App;