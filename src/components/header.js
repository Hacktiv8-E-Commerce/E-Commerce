import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  InputGroup,
  Button,
  NavDropdown,
  Nav,
  Stack,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import Profile from "./profile";

function Header() {
  return (
    <Navbar className="shadow-sm p-3 mb-5">
      <Container fluid>
        <Stack direction="horizontal" className="w-100" gap={3}>
          <Navbar.Brand href="#home" className="m-0">
            <FontAwesomeIcon icon={faAmazon} />
            lazone
          </Navbar.Brand>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="category" id="navbarScrollingDropdown-category">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <InputGroup
            size="sm"
            className="w-75 me-auto"
            style={{ minWidth: "200px" }}
          >
            <FormControl
              placeholder="Search anything you want.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="shadow-none"
            />
            <InputGroup.Text className="p-0">
              <Button variant="light" className="shadow-none">
                <FontAwesomeIcon icon={faSearch} style={{ color: "#9FA6B0" }} />
              </Button>
            </InputGroup.Text>
          </InputGroup>
          <Stack direction="horizontal" gap={1}>
            <Button
              variant="outline-light"
              className="shadow-none my-auto"
              style={{ color: "black", border: "none" }}
            >
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Button>
            <Nav>
              <NavDropdown
                title={
                  <Profile
                    style={{ color: "black", border: "none" }}
                    pic="/assets/vkontakte.jpg"
                    name="admin-A"
                  />
                }
                id="nav-dropdown-profile"
                align="end"
              >
                <NavDropdown.Item eventKey="4.1">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Stack>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default Header;
