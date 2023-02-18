import React from "react"
import { Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Doctors from './Doctors';
import NavHeader from "./NavHeader";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Doctors" component={Doctors}/>
    </div>
  );
}

export default App;
