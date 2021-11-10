import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Container, Nav, NavDropdown, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function HeaderAdmin() {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("login-admin");
    dispatch({
      type: "SET_LOGIN_ADMIN",
      payload: false,
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
          <Nav variant="pills" defaultActiveKey="#home">
            <Link to={`/admin-rekap`} className="text-decoration-none">
              <Nav.Link href="#recap">Sales Recap</Nav.Link>
            </Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavDropdown title="Admin" id="nav-dropdown-profile">
              <Link to={`/`} className="text-decoration-none">
                <NavDropdown.Item onClick={() => logout()}>
                  Logout
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;
