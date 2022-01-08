
import './App.css';
import React, { useState } from "react";
import Header from "./components/Header"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {

  //const [page, setPage] = useState("About Me")

  return (
    <div className="App">
      
     <Header></Header>
     <Footer></Footer>
    </div>
  );
}

export default App;
