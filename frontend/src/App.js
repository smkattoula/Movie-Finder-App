import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
