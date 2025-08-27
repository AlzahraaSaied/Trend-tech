import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";

import styles from "./styles.module.css";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>

      <Container className="bg-light text-dark">
        <div className="top-0 end-0 start-0 text-center">
          <p className="text-center small fs-6">
            Welcome to our store!{" "}
            <span className="text-decoration-underline">Shop Now</span>
          </p>
        </div>
      </Container>

  
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span className="text-muted">Trend & Tech</span> <Badge bg="secondary">Co.</Badge>
        </h1>
        <HeaderLeftBar />
      </div>

      <Navbar
        expand="lg"
        className="navbar navbar-light border fs-5 fw-medium"
        style={{
          backgroundColor: "#efeff0",
          borderColor: "#000",
          borderWidth: "1px",
          borderStyle: "solid",
         
          
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto font">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="products">
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
