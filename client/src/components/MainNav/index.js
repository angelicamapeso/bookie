import React from "react";
import { Link } from "react-router-dom";
import logo from "./bookie-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MainNav() {
  return (
    <Navbar bg="light" className="border-bottom py-0">
      <Navbar.Brand href="/" className="p-2">
        <img
          src={logo}
          className="d-inline-block align-top mr-2"
          width={30}
          height={30}
          alt="Bookie logo"
        />
        Bookie
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/" className="nav-link">
          Search
        </Link>
        <Link to="/recommended" className="nav-link">
          Recommended books
        </Link>
      </Nav>
    </Navbar>
  );
}

export default MainNav;
