import React from "react";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import Header from '../components/header'
import Itemcart from '../components/itemcart'

function Cart() {
    return (
        <>
            <Header />
            <Container style={{ minWidth: '768px' }}>
                <Row className="">
                    <Col lg={12} style={{ fontSize: '2vmax', fontWeight: '600' }}>Shopping Cart</Col>
                </Row>
                <Row className="justify-content-center p-4">
                    <Col xs={12} md={12} lg={6}>
                        <Stack>
                            <Itemcart />
                            <Itemcart />
                            <Itemcart />
                        </Stack>
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <Stack className="border border-primary border-start-0 border-bottom-0 p-3">
                            <Stack direction="horizontal" className="justify-content-between pt-2">
                                <p className="h6" style={{ fontWeight: '600' }}>Subtotal</p>
                                <p className="h6" style={{ fontWeight: '600' }}>$262.00</p>
                            </Stack>
                            <Stack gap={4}>
                                <p>Shipping and taxes calculated at checkout</p>
                                <Button variant="primary" className="w-100" style={{ background: '#4F46E5' }}>Checkout</Button>{' '}
                                <Stack className="align-items-center">
                                    <p>or <span style={{ color: '#4F46E5' }}>Countinue Shopping -&gt;</span></p>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart