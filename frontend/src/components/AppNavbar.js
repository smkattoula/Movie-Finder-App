import React, { Fragment, useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import AuthContext from "../context/auth/AuthContext";
import MovieContext from "../context/movie/MovieContext";

const AppNavbar = () => {
  const authContext = useContext(AuthContext);
  const movieContext = useContext(MovieContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearLogout } = movieContext;

  const onLogout = () => {
    logout();
    clearLogout();
  };

  const authLinks = (
    <Fragment>
      <NavLink style={{ color: "white" }}>Hello, {user && user.name}!</NavLink>
      <NavItem>
        <NavLink className="navbar-link" href="/watchlist">
          My Watchlist
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbar-link" onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt fa-sm"></i> <span>Logout</span>
        </NavLink>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <NavLink className="navbar-link" href="/register">
          Register
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbar-link" href="/login">
          Login
        </NavLink>
      </NavItem>
    </Fragment>
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <NavbarBrand href="/">
          <i className="fas fa-ticket-alt fa-sm"></i> Movie Finder
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
