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

function Category() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    let query = useQuery();

    useEffect(() => {
        dispatch({
            type: "SET_LOAD",
            payload: true
        })
        dispatch(fetchProduct(filterProduct))
    }, [query.get("name")])

    const filterProduct = (data) => {
        let filter = data.filter(x => x.category.toLowerCase().includes(`${query.get("name")}`))
        dispatch({
            type: "SET_FILTER",
            payload: filter
        })
        dispatch({
            type: "SET_LOAD",
            payload: false
        })
    }

    const itemClick = () => {
        dispatch({
            type: "SET_LOAD",
            payload: true
        })
    }
    return (
        <>
            <Header />
            {!state.loading ? (
                <Container style={{ minWidth: '768px' }} className="p-4 pt-0">
                    <Row>
                        {
                            state.filter.map((item, index) => (
                                <Col xs={4} md={4} lg={3} className="mb-4" key={item.id}>
                                    <Link onClick={() => itemClick()} to={`/product/${item.id}`} className="text-decoration-none">
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
                        {
                            state.filter.length === 0
                                ? <Stack className="justify-content-center align-items-center" gap={3}>
                                    <img src="assets/empty-box.svg" alt="" width="80" />
                                    <p style={{ color: '#7B7B7B' }}>Pencarian Kosong</p>
                                </Stack>
                                : ''
                        }
                    </Row>
                </Container>
            ) :
                ''
            }
        </>
    )
}

export default Category