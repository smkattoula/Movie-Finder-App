import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/movie/:id" component={Movie} />
            </Switch>
          </div>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
