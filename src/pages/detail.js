import React, { useEffect } from "react";
import { Image, Row, Col, Container, Stack, Button } from "react-bootstrap";
import Header from "../components/header";
import Regulerstar from '../components/regulerstar'
import Solidstar from '../components/solidstar'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, } from "react-router-dom";
import { fetchdetail } from '../store/fetchdetail'
import { setcart } from '../store/setcart'

function Detail() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    let { productId } = useParams();

    useEffect(() => {
        // let filter = state.product.filter(item => item.id == productId)
        dispatch(fetchdetail(productId))
        // dispatch(setDetail(filter))
    }, [])

    function rating(solid, regular) {
        return <>{Array.from(Array(solid), (e, i) => {
            return <Solidstar key={i} />
        })}{Array.from(Array(regular), (e, i) => {
            return <Regulerstar key={i} />
        })}</>
    }

    function addToCart(item) {
        setcart(item)
    }

    return (
        <div>
            <Header />
            {
                state.detailproduct.map(item => (
                    <Container style={{ minWidth: '768px' }} key={item.id}>
                        <Row>
                            <Col lg={6} className="p-5">
                                <Image
                                    src={item.image}
                                    alt="First slide"
                                    style={{ objectFit: 'contain', objectPosition: 'center', maxHeight: '500px' }}
                                    rounded
                                    width="100%"
                                />
                            </Col>
                            <Col lg={6} className="p-5">
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
                                                    {
                                                        rating(Math.round(item.rating.rate), 5 - Math.round(item.rating.rate))
                                                    }
                                                </Stack>
                                                <Stack>
                                                    <p className="my-auto" style={{ color: '#4F46E5' }}>{item.rating.count} reviews</p>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                        <Button onClick={() => addToCart(`${item.id}`)} variant="primary" className="w-75" style={{ background: '#4F46E5' }}>Add to bag</Button>
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