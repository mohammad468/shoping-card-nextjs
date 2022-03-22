import React from "react";
import Link from "next/Link";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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

  const state = useSelector((state) => state.cartState);

  let activeHomeClass;
  let activeProductClass;
  let activeStoreClass;
  let activeProductsMensClothing;
  let activeProductsWomenClothing;
  let activeProductsJewelery;
  let activeProductsElectronics;

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

  if (router.pathname == "/products/mens-clothing") {
    activeProductsMensClothing = "dropdown-item active";
  } else {
    activeProductsMensClothing = "dropdown-item";
  }

  if (router.pathname == "/products/womens-clothing") {
    activeProductsWomenClothing = "dropdown-item active";
  } else {
    activeProductsWomenClothing = "dropdown-item";
  }

  if (router.pathname == "/products/jewelery") {
    activeProductsJewelery = "dropdown-item active";
  } else {
    activeProductsJewelery = "dropdown-item";
  }

  if (router.pathname == "/products/electronics") {
    activeProductsElectronics = "dropdown-item active";
  } else {
    activeProductsElectronics = "dropdown-item";
  }

  return (
    <Navbar className="bg-light" expand="lg" sticky="top">
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
                Store
                <Badge className="mx-1">{state.selectedItems.length}</Badge>
              </a>
            </Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Link href="/products/mens-clothing">
                <a className={activeProductsMensClothing}>Men's clothing</a>
              </Link>
              <Link href="/products/womens-clothing">
                <a className={activeProductsWomenClothing}>Women's clothing</a>
              </Link>
              <Link href="/products/jewelery">
                <a className={activeProductsJewelery}>Jewelery</a>
              </Link>
              <Link href="/products/electronics">
                <a className={activeProductsElectronics}>Electronics</a>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
