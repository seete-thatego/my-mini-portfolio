import React from 'react'
import NavBar from "./components/NavBar";
import Home from './components/home';
import About from './components/about';
import SocialLinks from './components/SocialLinks'
import Experience from './components/experience'
import Contact from './components/contact';

function App() {
  return (
    <>
      <div>
        <NavBar /> 
        <Home />
        <About />
        <Experience />
        <Contact />

        <SocialLinks />
      </div>
    </>
       
  );
}

export default App;

