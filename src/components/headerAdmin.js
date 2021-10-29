import React from "react";
import Profile from "./profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Stack,
} from "react-bootstrap";

function HeaderAdmin() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Stack direction="horizontal" className="w-100" gap={5}>
          <Navbar.Brand href="#home" className="m-0">
            <FontAwesomeIcon icon={faAmazon} />
            lazone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#recap">Recap</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <NavDropdown
              title={
                <Button
                  variant="outline-danger"
                  className="shadow-none"
                  style={{ color: "white", border: "none" }}
                >
                  <Stack direction="horizontal" gap={3}>
                    <Profile />
                    <p className="my-auto">Admin-A</p>
                  </Stack>
                </Button>
              }
              id="nav-dropdown-profile"
              align="end"
            >
              <NavDropdown.Item eventKey="4.1">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;
