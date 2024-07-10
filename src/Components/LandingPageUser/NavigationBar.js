import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../Images/LandingPageUser/logo.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  // Fungsi logout dengan redirect ke halaman landing page
  const handleLogout = () => {
    // Contoh: membersihkan token dari local storage
    localStorage.removeItem("accessToken");
    // Redirect ke halaman utama (landing page)
    window.location.href = "/"; // Ganti dengan URL halaman utama yang sesuai
  };

  return (
    <div>
      <Navbar className="navigation0">
        <div className="logo">
          <img src={logo} className="logomen" alt="Logo" />
        </div>
        <Container className="navigation">
          <Nav className="navigationTengah">
            {/* Tempatkan navigasi tengah di sini jika diperlukan */}
          </Nav>
          <Nav className="login">
            <Nav.Link>
              <Link to={"/home"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/jokivalorant"}>Joki Valorant</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/cekpesanan"}>Cek Pesanan</Link>
            </Nav.Link>
            <NavDropdown title="USER" id="basic-nav-dropdown">
              {/* Item dropdown dengan opsi logout */}
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
