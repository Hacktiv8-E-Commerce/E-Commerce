import React from "react";
import { Row, Col, Image, Stack, Container, InputGroup, FormControl, Button } from 'react-bootstrap'

function Itemcart() {
    return (
        <>
            <Row className="py-2">
                <Col xs={3} md={3} lg={3}>
                    <Image
                        src="./assets/clothes.jpg"
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            height: "100px",
                        }}
                        rounded
                        width="100px"
                        className="img-thumbnail p-1"
                    />
                </Col>
                <Col xs={7} md={7} lg={6} className="p-0">
                    <Stack className="h-100 justify-content-between">
                        <Stack className='flex-grow-0'>
                            <p className="h6 m-0" style={{ fontWeight: '600' }}>Throwback Hip Bag</p>
                            <p className="m-0">Salmon</p>
                        </Stack>
                        <Stack className='flex-grow-0 align-items-center' direction="horizontal">
                            <InputGroup className="w-50" size="sm">
                                <InputGroup.Text role="button">-</InputGroup.Text>
                                <FormControl aria-label="Amount (to the nearest dollar)" value="1" className="text-center" />
                                <InputGroup.Text role="button">+</InputGroup.Text>
                            </InputGroup>
                            <p className="m-0 ms-3 h-0">Qty</p>
                        </Stack>
                    </Stack>
                </Col>
                <Col xs={2} md={2} lg={3}>
                    <Stack className="h-100 w-100 justify-content-between">
                        <p className="m-0 text-center" style={{ fontWeight: '600' }}>$90.00</p>
                        <Button className="m-0 bg-transparent border-0 shadow-none" style={{ fontWeight: '600', color: '#4F46E5' }}>Remove</Button>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Container>
                    <hr />
                </Container>
            </Row>
        </>
    )
}

export default Itemcart