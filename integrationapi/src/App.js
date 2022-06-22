import React from 'react';
import Registerform from './components/Registerform';
import {
  BrowserRouter,
  Routes,
  Route,
}
from "react-router-dom";
import Home from './Pages/Home.js';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
    <div>
      <Registerform />
      <BrowserRouter>
        <Routes>
          <Route path= "/home" element={<Home/>} ></Route>
          <Route path= "/about" element={ <About/>}></Route>
          <Route path= "/contactus" element={<ContactUs/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
