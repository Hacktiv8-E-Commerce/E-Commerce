import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Container, Nav, NavDropdown, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function HeaderAdmin() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("login");
    dispatch({
      type: "SET_LOGIN",
      payload: { username: null, login: false },
    });
    dispatch({
      type: "SET_USER",
      payload: ["", ""],
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Stack direction="horizontal" className="w-100" gap={5}>
          <Link to={`/admin`} className="text-decoration-none">
            <Navbar.Brand href="#home" className="m-0">
              <FontAwesomeIcon icon={faAmazon} />
              lazone
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to={`/admin`} className="text-decoration-none">
                <Nav.Link href="#products">Update Stock</Nav.Link>
              </Link>
              <Link to={`/adminRecap`} className="text-decoration-none">
                <Nav.Link href="#recap">Sales Recap</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <NavDropdown title="Admin" id="nav-dropdown-profile" align="end">
              <NavDropdown.Item onClick={() => logout()}>
                <Link to={`/`} className="text-decoration-none">
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;