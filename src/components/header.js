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
    Image
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Btnlogintrue from '../components/btnlogintrue'
import Btnloginfalse from '../components/btnloginfalse'
import { useSelector, useDispatch } from 'react-redux'

function Header() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.setItem('login', JSON.stringify(false));
        dispatch({
            type: "SET_LOGIN",
            payload: false
        })
        dispatch({
            type: "SET_CART",
            payload: []
        })
    }

    return (
        <Navbar className="shadow-sm p-3 mb-5" style={{ minWidth: '768px' }}>
            <Container fluid>
                <Stack direction="horizontal" className="w-100" gap={3}>
                    <Link to={`/`} className="text-decoration-none">
                        <Navbar.Brand className="m-0">
                            <Image
                                alt=""
                                src="/assets/react-bootstrap.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span>React Bootstrap</span>
                        </Navbar.Brand>
                    </Link>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="kategori" id="navbarScrollingDropdown-kategori">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <InputGroup size="sm" className="w-75 me-auto" style={{ minWidth: '200px' }}>
                        <FormControl
                            placeholder="Cari barang elektronik"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className="shadow-none"
                        />
                        <InputGroup.Text className="p-0">
                            <Button variant="light" className="shadow-none">
                                <FontAwesomeIcon icon={faSearch} style={{ color: '#9FA6B0' }} />
                            </Button>
                        </InputGroup.Text>
                    </InputGroup>
                    <Stack direction="horizontal" gap={3}>
                        <Link to={'/cart'}>
                            <Button variant="outline-light" className="shadow-none my-auto" style={{ color: 'black', border: 'none' }} >
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                            </Button>
                        </Link>
                        <Nav>
                            {
                                state.login ?
                                    <NavDropdown title={<Btnlogintrue />} id="nav-dropdown-profile" align="end">
                                        <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    <Btnloginfalse text="Login" />
                            }
                        </Nav>
                    </Stack>
                </Stack>
            </Container>
        </Navbar >
    )
}

export default Header