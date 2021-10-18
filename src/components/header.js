import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container fluid>
        <header>
          <nav className="navbar navbar-expand-md ">
            <Link to={"/"}>
              <a className="navbar-brand text-light ps-4">destination.com</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <Link to={"/"}>
                  <a
                    className="nav-link text-light active "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </Link>
                <a className="nav-link text-light" href="#">
                  Hotels
                </a>
                <a className="nav-link text-light" href="#">
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
