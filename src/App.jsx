import React from "react"
import { Routes, Route } from 'react-router-dom';
import './assets/style/App.css';
import "./assets/style/App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Doctors from "./Doctors";
import NavHeader from "./Navbar/NavHeader";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import ForDoctors from "./ForDoctors";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
    <NavHeader />
      <Routes>
        <Route name="home" path="/" element={ <Home />}/>
        <Route name="contact" path="/Contact" element={ <Contact />}/>
        <Route path="/About" element={ <About />}/>
        <Route path="/Doctors" element={ <Doctors />}/>
        <Route path="/SignUp" element={ <SignUp /> } />
        <Route path="/SignIn" element={ <SignIn />}/>
        <Route path="/ForDoctors" element={ <ForDoctors />}/>
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
