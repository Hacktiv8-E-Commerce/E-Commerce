import React from "react";
import { Container, Carousel, Image } from 'react-bootstrap'

function Promo() {
    return (
        <Container style={{ minWidth: '768px' }} className="p-4 pt-0">
            <Carousel
                interval={2000}
                pause='hover'
                indicators={false}
                className="overflow-hidden"
                style={{
                    borderRadius: '10px',
                }}
            >
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="./assets/banner-two.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="./assets/banner-one.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="./assets/banner-three.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Promo