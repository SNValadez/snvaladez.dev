
import './App.css';
import React, { useState } from "react";
import Header from "./components/Header"

function App() {

  const [page, setPage] = useState("About Me")

  return (
    <div className="App">
      <Header page={page}/>

    </div>
  );
}

export default App;
