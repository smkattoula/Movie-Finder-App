import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Movies from "./components/Movies";
import "./index.css";

import MovieState from "./context/movie/MovieState";

const App = () => {
  return (
    <MovieState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Search />
            <Movies />
          </div>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
