import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Container, Nav, Stack, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
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
    <Navbar bg="dark" variant="dark" style={{ minWidth: '768px' }}>
      <Container fluid>
        <Stack direction="horizontal" className="w-100 px-5" gap={5}>
          <Link to={`/admin`} className="text-decoration-none">
            <Navbar.Brand className="m-0">
              <FontAwesomeIcon icon={faAmazon} />
              lazone
            </Navbar.Brand>
          </Link>
          <Nav>
            <NavLink to={`/admin-rekap`} href="#recap" className="text-decoration-none" style={isActive => ({
              color: isActive ? "white" : "silver"
            })}>Sales Recap</NavLink>
          </Nav>
          <Nav className="justify-content-end ms-auto">
            <Button variant="light" onClick={() => logout()}>Log Out</Button>
          </Nav>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;
