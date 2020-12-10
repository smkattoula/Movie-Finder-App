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
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import MovieContext from "../context/movie/MovieContext";

const AppNavbar = (props) => {
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
      <NavLink style={{ color: "white" }}>Hello {user && user.name}!</NavLink>
      <NavItem>
        <NavLink href="/watchlist">Watchlist</NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </NavLink>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <NavLink href="/register">Register</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login">Login</NavLink>
      </NavItem>
    </Fragment>
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <NavbarBrand href="/">Movie Finder</NavbarBrand>
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
