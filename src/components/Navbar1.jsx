import React from "react";
import logo from "../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <img src={logo} alt="" style={{ height: "40px" }} />
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li>
              <Link className="nav-link" rel="stylesheet" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" rel="stylesheet" to="/katalog-barang">
                Katalog Barang
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                rel="stylesheet"
                to="/manajemen-barang"
              >
                Manajemen Barang
              </Link>
            </li>
            <li>
              <Link className="nav-link" rel="stylesheet" to="/tentang-kami">
                About
              </Link>
            </li>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/manajemen-barang">Manajemen Barang</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
