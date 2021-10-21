import React from "react";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo";

// This is the header with a standard navbar pretty much taken from bootstraps example.
// Added routing links on logo and home-button
// Also added the FA bars for the hamburger menu (even though the app isnt supposed to be viewed in smaller formats)
const Header = () => {
  return (
    <>
      <Container fluid>
        <header>
          <nav className="navbar navbar-expand-md ">
            <Link to={"/"}>
              <a className="navbar-brand text-light ps-1">
                <Logo />
              </a>
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon ">
                <FontAwesomeIcon icon="bars" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse text-light"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ">
                <Link to={"/"}>
                  <a
                    className="nav-link text-light active font-soft"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </Link>
                <a className="nav-link text-light font-soft" href="#">
                  Hotels
                </a>
                <a className="nav-link text-light font-soft" href="#">
                  Flights
                </a>
              </div>
            </div>
          </nav>
        </header>
      </Container>
    </>
  );
};

export default Header;
