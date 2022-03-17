import React from "react";
import Link from "next/Link";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";

//  let activeHomeClass;
//  switch (router.pathname) {
//    case "/":
//      return (activeHomeClass = "nav-link active");
//      break;

//    default:
//      break;
//  }

const MyNav = () => {
  const router = useRouter();

  let activeHomeClass;
  let activeProductClass;
  let activeStoreClass;

  if (router.pathname == "/") {
    activeHomeClass = "nav-link active";
  } else {
    activeHomeClass = "nav-link";
  }

  if (router.pathname == "/products") {
    activeProductClass = "nav-link active";
  } else {
    activeProductClass = "nav-link";
  }

  if (router.pathname == "/store") {
    activeStoreClass = "nav-link active";
  } else {
    activeStoreClass = "nav-link";
  }

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link href="/">
          <a className="navbar-brand fw-bold">Mohseni Shop</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <a className={activeHomeClass}>Home</a>
            </Link>
            <Link href="/products">
              <a className={activeProductClass}>Products</a>
            </Link>
            <Link href="/store">
              <a className={activeStoreClass}>
                Store<Badge className="mx-1">1</Badge>
              </a>
            </Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Men's clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Women's clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jewelery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Electronics
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
