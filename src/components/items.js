import React, { useEffect } from "react";
import { Container, Image, Stack, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../store/fetch'

function Items() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    return (
        <Container style={{ minWidth: '768px' }} className="p-4 pt-0">
            <Stack gap={2}>
                <h2 style={{ fontFamily: 'Inter', fontSize: '2vmax', fontWeight: '700' }}>Customers also purchased</h2>
                <Row>
                    {
                        state.product.map((item, index) => (
                            <Col xs={4} md={4} lg={3} className="mb-4" key={index}>
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
                                            <span className="me-auto" style={{ fontSize: '1vmax', color: '#282C34', fontWeight: '600' }}>{item.title.slice(0, 20) + (item.title.length > 20 ? "..." : "")}</span>
                                            <span style={{ fontSize: '1vmax', color: '#282C34', fontWeight: '600' }}>${item.price}</span>
                                        </Stack>
                                        <span style={{ fontSize: '0.9vmax', color: '#757575', fontWeight: '600' }}>{`Tersedia ${item.category}`}</span>
                                    </Stack>
                                </Stack>
                            </Col>
                        ))
                    }
                </Row>
            </Stack>
        </Container>
    )
}

export default Items