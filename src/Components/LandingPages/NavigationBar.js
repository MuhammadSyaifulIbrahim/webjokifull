import logo from "../../Images/LandingPages/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import "../../style/LandingPage.css";
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navigation0">
        <div className="logo">
          <img src={logo} className="logomen" />
        </div>
        <Container className="navigation">
          <Nav className="navigationTengah"></Nav>
          <Nav className="login">
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
