import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
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
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
