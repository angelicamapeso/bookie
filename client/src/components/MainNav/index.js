import React from "react";
import { Link } from "react-router-dom";
import logo from "./bookie-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function MainNav() {
  return (
    <Navbar className="border-bottom py-0" id="main-nav">
      <Navbar.Brand href="/" className="py-3 px-3" id="nav-brand">
        <img
          src={logo}
          className="d-inline-block align-top mr-3"
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
