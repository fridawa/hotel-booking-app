import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <h1 className="d-flex justify-content-center">Footer</h1>
        <nav className="row navbar ">
          <ul className="col-sm-4 text-center list-unstyled">
            <li>
              <a className="nav-link ">Link1</a>
            </li>
            <li>
              <a className="nav-link">Link2</a>
            </li>
          </ul>
          <ul className="col-sm-4 text-center list-unstyled">
            <li>
              <a className="nav-link ">Link1</a>
            </li>
            <li>
              <a className="nav-link">Link2</a>
            </li>
          </ul>
          <ul className="col-sm-4 text-center list-unstyled">
            <li>
              <a className="nav-link ">Link1</a>
            </li>
            <li>
              <a className="nav-link">Link2</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
