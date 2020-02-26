import React from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
