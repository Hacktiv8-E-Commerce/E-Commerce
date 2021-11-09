import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "../components";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Image, Stack, Row, Col } from "react-bootstrap";
import { fetchProduct } from '../store/fetch'

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Search() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    let query = useQuery();

    useEffect(() => {
        dispatch({
            type: "SET_LOAD",
            payload: true
        })
        dispatch(fetchProduct(() => dispatch({
            type: "SET_LOAD",
            payload: false
        })))
    }, [])

    const itemClick = () => {
        dispatch({
            type: "SET_LOAD",
            payload: true
        })
    }
    return (
        <>
            <Header />
            <Container style={{ minWidth: '768px' }} className="p-4 pt-0">
                <Row>
                    {
                        state.product.map((item, index) => (
                            <Col xs={4} md={4} lg={3} className="mb-4" key={item.id}>
                                <Link onClick={() => itemClick()} to={`/${item.id}`} className="text-decoration-none">
                                    <Stack className="flex-grow-0 flex-shrink-0 shadow rounded p-3" gap={2}>
                                        <Image
                                            src={item.image}
                                            alt="First slide"
                                            style={{ objectFit: 'contain', height: '250px', objectPosition: 'center', padding: '1.5rem' }}
                                            width="100%"
                                            rounded
                                        />
                                        <Stack>
                                            <Stack direction="horizontal">
                                                <span className="me-auto" style={{ fontSize: '1vmax', color: '#282C34', fontWeight: '600' }}>{item.title.slice(0, 18) + (item.title.length > 18 ? "..." : "")}</span>
                                                <span style={{ fontSize: '1vmax', color: '#282C34', fontWeight: '600' }}>${item.price}</span>
                                            </Stack>
                                            <span style={{ fontSize: '0.9vmax', color: '#757575', fontWeight: '600' }}>{`${item.category}`}</span>
                                        </Stack>
                                    </Stack>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Search