import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  FormControl,
  InputGroup,
  Button,
  NavDropdown,
  Nav,
  Stack
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Btnlogintrue, Btnloginfalse } from './index'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { fetchCategory } from "../store/fetchcategory"

function Header() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    if (!localStorage.getItem('category-list')) {
      dispatch(fetchCategory())
    } else {
      dispatch({
        type: "SET_CATEGORY",
        payload: JSON.parse(localStorage.getItem('category-list'))
      })
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('login');
    dispatch({
      type: "SET_LOGIN",
      payload: { username: null, login: false }
    })
    dispatch({
      type: "SET_CART",
      payload: []
    })
    dispatch({
      type: "SET_USER",
      payload: ['', '']
    })
  }

  const search = (e, type) => {
    if (e.key === 'Enter' || type === 'button') {
      if (state.search.trim()) {
        history.push(`/search?name=${state.search}`)
      }
      dispatch({
        type: "SET_SEARCH",
        payload: ''
      })
    }
  }

  return (
    <Navbar className="shadow-sm p-3 mb-5" style={{ minWidth: '768px' }}>
      <Container fluid>
        <Stack direction="horizontal" className="w-100" gap={3}>
          <Link to={`/`} className="text-decoration-none">
            <Navbar.Brand className="m-0">
              <FontAwesomeIcon icon={faAmazon} />
              lazone
            </Navbar.Brand>
          </Link>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="kategori" id="navbarScrollingDropdown-kategori">
              {
                state.category.map((category, index) => (
                  <NavDropdown.Item key={index}><Link to={`/category?name=${category}`} className="text-decoration-none" style={{ color: 'black' }}>{category}</Link></NavDropdown.Item>
                ))
              }
            </NavDropdown>
          </Nav>
          <InputGroup size="sm" className="w-75 me-auto" style={{ minWidth: '200px' }}>
            <FormControl
              placeholder="Cari barangmu..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="shadow-none"
              value={state.search}
              onChange={e => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
              onKeyDown={e => search(e, 'input')}
            />
            <InputGroup.Text className="p-0">
              <Button variant="light" className="shadow-none" onClick={e => search(e, 'button')}>
                <FontAwesomeIcon icon={faSearch} style={{ color: '#9FA6B0' }} />
              </Button>
            </InputGroup.Text>
          </InputGroup>
          <Link to={'/cart'}>
            <Button variant="outline-light" className="shadow-none my-auto" style={{ color: 'black', border: 'none' }}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Button>
          </Link>
          <Nav>
            {
              state.login.login ?
                <NavDropdown title={<Btnlogintrue name={state.login.user} />} id="nav-dropdown-profile" align="end">
                  <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                </NavDropdown>
                :
                <Btnloginfalse text="Login" />
            }
          </Nav>
        </Stack>
      </Container>
    </Navbar >
  )
}
export default Header;