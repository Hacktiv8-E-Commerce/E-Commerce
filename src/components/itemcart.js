import React from "react";
import { Row, Col, Image, Stack, Container } from 'react-bootstrap'

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
                <Col xs={7} md={7} lg={7} className="p-0">
                    <Stack className="h-100 justify-content-between">
                        <Stack className='flex-grow-0'>
                            <p className="h6 m-0" style={{ fontWeight: '600' }}>Throwback Hip Bag</p>
                            <p className="m-0">Salmon</p>
                        </Stack>
                        <Stack className='flex-grow-0'>
                            <p className="m-0 h-0">Qty 1</p>
                        </Stack>
                    </Stack>
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <Stack className="h-100 w-100 justify-content-between">
                        <p className="m-0" style={{ fontWeight: '600' }}>$90.00</p>
                        <p className="m-0" style={{ fontWeight: '600', color: '#4F46E5' }}>Remove</p>
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