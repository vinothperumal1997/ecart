import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Offcanvas,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Dropdown from "./Dropdown";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => setShowMenu(!showMenu);

  return (
    <>
      {/* First Row: Logo, Search Bar, and Icons */}
      <div className="nav-main">
        <Navbar bg="light" expand="lg" className="shadow-sm py-2">
          <Container className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            {/* Row 1 - Logo */}
            <Navbar.Brand
              href="#home"
              className="d-flex align-items-center mb-2 mb-lg-0"
            >
              <img
                src="/path/to/logo.png" // Replace with your logo path
                alt="FreshCart Logo"
                style={{ height: "30px" }}
                className="me-2"
              />
              <span className="fw-bold text-dark">FreshCart</span>
            </Navbar.Brand>

            {/* Row 1 - Search Bar */}
            <Form
              className="d-flex mb-2 mb-lg-0 search-bar"
              style={{ maxWidth: "600px", width: "100%" }}
            >
              <FormControl
                type="search"
                placeholder="Search for products"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="warning">
                <i className="fa fa-search"></i>
              </Button>
            </Form>

            {/* Row 1 - Icons */}
            <div className="d-flex align-items-center ">
              {/* Profile Dropdown */}
              <NavDropdown
                title={<i className="fa fa-user"></i>}
                id="profile-dropdown"
                className="me-3"
              >
                <NavDropdown.Item href="#login">Login</NavDropdown.Item>
                <NavDropdown.Item href="#register">Register</NavDropdown.Item>
              </NavDropdown>

              {/* Cart Icon */}
              <Nav.Link href="#cart" className="me-3">
                <i className="fa fa-shopping-cart"></i>
              </Nav.Link>

              {/* Hamburger Menu Toggle */}
              <Button
                variant="light"
                className="p-0 d-lg-none"
                onClick={handleMenuToggle}
                style={{ border: "none" }}
              >
                <i
                  className="fa fa-bars text-warning"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </Button>
            </div>
          </Container>
        </Navbar>

        {/* Second Row: Navigation Menu */}
        <Navbar
          bg="light"
          expand="lg"
          className="shadow-sm py-2 d-none d-lg-flex"
        >
          <Container>
            <Nav className="w-100 justify-content-left">
              <NavDropdown title="All Categories" id="categories-dropdown">
                <NavDropdown.Item href="#electronics">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Item href="#clothing">Clothing</NavDropdown.Item>
                <NavDropdown.Item href="#home-appliances">
                  Home Appliances
                </NavDropdown.Item>
              </NavDropdown>
              <Dropdown />

              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#shop-now">Shop Now</Nav.Link>
              <Nav.Link href="#categories">Categories</Nav.Link>
              <Nav.Link href="#new-arrivals">New Arrivals</Nav.Link>
              <Nav.Link href="#best-sellers">Best Sellers</Nav.Link>
              <Nav.Link href="#sale">Sale</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Form
              className="d-flex mb-2 mb-lg-0 "
              style={{ maxWidth: "600px", width: "100%" }}
            >
              <FormControl
                type="search"
                placeholder="Search for products"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="warning">
                <i className="fa fa-search"></i>
              </Button>
            </Form>
            <p className="msbc">Search by categories</p>
            <div className="mt-4 justify-content-center gap-3 mx-auto nav">
              <a
                className="btn-sm btn text-center border rounded"
                href="/shop?categories=electronics"
              >
                Electronics
              </a>
              <a
                className="btn-sm btn text-center border rounded"
                href="/shop?categories=gaming-accessories"
              >
                Gaming &amp; Accessories
              </a>
              <a
                className="btn-sm btn text-center border rounded"
                href="/shop?categories=travel-clothing"
              >
                Travel &amp; Clothing
              </a>
              <a
                className="btn-sm btn text-center border rounded"
                href="/shop?categories=backpack-fashion-bags"
              >
                Backpack &amp; Fashion Bags
              </a>
              <a
                className="btn-sm btn text-center border rounded"
                href="/shop?categories=computer"
              >
                Computer
              </a>
              <a
                className="btn-sm btn text-center border rounded"
                href="/shop?categories=sporting-goods"
              >
                Sporting Goods
              </a>
              <a
                className="btn-sm btn text-center border rounded"
                href="/shop?categories=home-kitchen"
              >
                Home &amp; Kitchen
              </a>
            </div>
            <p className="m-menu text-center mt-4">Menu</p>
            <div className="w-75 mt-4 mx-auto nav">
              {/* class="w-75 mt-4 mx-auto nav" */}
              <Nav.Link
                className="text-center border rounded my-2 w-100 nav-link m-link"
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="text-center border rounded my-2 w-100 nav-link m-link"
                href="#shop-now"
              >
                Shop Now
              </Nav.Link>
              <Nav.Link
                className="text-center border rounded my-2 w-100 nav-link m-link"
                href="#categories"
              >
                Categories
              </Nav.Link>
              <Nav.Link
                className="text-center border rounded my-2 w-100 nav-link m-link"
                href="#new-arrivals"
              >
                New Arrivals
              </Nav.Link>
              <Nav.Link
                className="text-center border rounded my-2 w-100 nav-link m-link"
                href="#best-sellers"
              >
                Best Sellers
              </Nav.Link>
              <Nav.Link
                className="text-center border rounded my-2 w-100 nav-link m-link"
                href="#sale"
              >
                Sale
              </Nav.Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default App;
