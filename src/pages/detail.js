import React, { useEffect } from "react";
import { Image, Row, Col, Container, Stack, Button } from "react-bootstrap";
import Header from "../components/header";
import Regulerstar from '../components/regulerstar'
import Solidstar from '../components/solidstar'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, } from "react-router-dom";
import { setDetail } from '../store/setDetail'

function Detail() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    let { productId } = useParams();

    useEffect(() => {
        let filter = state.product.filter(item => item.id == productId)
        // dispatch(setDetail(filter[0].id))
        dispatch(setDetail(filter))
    }, [])

    return (
        <div>
            <Header />
            {
                state.detailproduct.map(item => (
                    <Container style={{ minWidth: '768px' }}>
                        <Row>
                            <Col lg={6} className="p-5">
                                <Image
                                    src={item.image}
                                    alt="First slide"
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    rounded
                                    width="100%"
                                />
                            </Col>
                            <Col className="p-5">
                                <Stack gap={5}>
                                    <Stack>
                                        <h2>{item.title}</h2>
                                        <h6>Category <strong>{item.category}</strong></h6>
                                        <br />
                                        <p>{item.description}</p>
                                    </Stack>
                                    <Stack gap={4}>
                                        <Stack>
                                            <h2><strong>${item.price}</strong></h2>
                                            <Stack direction='horizontal' gap={3}>
                                                <Stack direction='horizontal'>
                                                    <Solidstar />
                                                    <Solidstar />
                                                    <Solidstar />
                                                    <Solidstar />
                                                    <Regulerstar />
                                                </Stack>
                                                <Stack>
                                                    <p className="my-auto" style={{ color: '#4F46E5' }}>{item.rating.count} reviews</p>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                        <Button variant="primary" className="w-75" style={{ background: '#4F46E5' }}>Add to bag</Button>{' '}
                                    </Stack>
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                ))
            }
        </div>
    )
}

export default Detail