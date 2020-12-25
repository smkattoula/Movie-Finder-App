import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Movie from "./components/Movie";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import WatchList from "./components/WatchList";
import "./index.css";
import PrivateRoute from "./components/routing/PrivateRoute";

import MovieState from "./context/movie/MovieState";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <MovieState>
        <Router>
          <div className="App">
            <AppNavbar />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/movie/:id" component={Movie} />
                <PrivateRoute exact path="/watchlist" component={WatchList} />
              </Switch>
            </Container>
          </div>
        </Router>
      </MovieState>
    </AuthState>
  );
};

export default App;
