import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import { React, useState } from "react";

import './Pages.css';
import Annexe from "./annexe.js";
import Page from './Page.js';



function App() {

  const [filter, setFilter] = useState('');
  
  var test = document.querySelector(".uploader");
  
  function page(newselect,oldselect){

    
    test.classList.remove(oldselect);
    test.classList.add(newselect);

  }

 /*document.addEventListener( "onchange" , page(oldselect,newselect) );*/


  return (
    <div className="App">
        
  

        <Nav />

        <Page/>   
      
    </div>
  );
}

export default App;
