import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md ">
          <div className="container-fluid">
            <a className="navbar-brand text-light ps-4" href="#">
              destination.com
            </a>
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
                <a
                  className="nav-link text-light active "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a className="nav-link text-light" href="#">
                  Hotels
                </a>
                <a className="nav-link text-light" href="#">
                  Flights
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
