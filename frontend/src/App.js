import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./index.css";

import MovieState from "./context/movie/MovieState";

const App = () => {
  return (
    <MovieState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Search />
            </Switch>
          </div>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
