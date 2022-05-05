import React from 'react';
import './App.scss';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/contacts";
import Footer from "./footer/Footer";

import Menu from "./Menu/Menu";


function App() {

  return (
    <div className="App">
      {/*<Header/>*/}
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
      <Menu/>
    </div>
  );
}

export default App;
