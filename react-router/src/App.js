import {Route, Routes } from "react-router-dom"; 
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import './App.css';
function App() {
  return (
    <>
     <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      </>
      
  );
}

export default App;
