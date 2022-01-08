
import './App.css';
import React, { useState } from "react";
import Header from "./components/Header"
import About from "./components/About"

function App() {

  const [page, setPage] = useState("About Me")

  return (
    <div className="App">
      
      <main>
      <Header page={page}/>
      <About></About>
      
      </main>
      
    </div>
  );
}

export default App;
