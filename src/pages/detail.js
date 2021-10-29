import React from "react";
import { Image, Row, Col, Container, Stack, Button } from "react-bootstrap";
import { Header, Regulerstar, Solidstar } from "../components/index";

function Detail() {
  return (
    <>
      <Header />
      <Container style={{ minWidth: "768px" }}>
        <Row>
          <Col lg={6} className="me-4">
            <Image
              src="./assets/clothes.jpg"
              alt="First slide"
              style={{ objectFit: "cover" }}
              rounded
              width="100%"
            />
          </Col>
          <Col className="py-5">
            <Stack gap={5}>
              <Stack>
                <h2>Mens Casual Premium Slim Fit T-Shirts</h2>
                <h6>
                  Category <strong>men's clothing</strong>
                </h6>
                <br />
                <p>
                  Slim-fitting style, contrast raglan long sleeve, three-button
                  henley placket, light weight & soft fabric for breathable and
                  comfortable wearing. And Solid stitched shirts with round neck
                  made for durability and a great fit for casual fashion wear
                  and diehard baseball fans. The Henley style round neckline
                  includes a three-button placket.
                </p>
              </Stack>
              <Stack gap={4}>
                <Stack>
                  <h2>
                    <strong>$22.3</strong>
                  </h2>
                  <Stack direction="horizontal" gap={3}>
                    <Stack direction="horizontal">
                      <Solidstar />
                      <Solidstar />
                      <Solidstar />
                      <Solidstar />
                      <Regulerstar />
                    </Stack>
                    <Stack>
                      <p className="my-auto" style={{ color: "#4F46E5" }}>
                        259 reviews
                      </p>
                    </Stack>
                  </Stack>
                </Stack>
                <Button
                  variant="primary"
                  className="w-75"
                  style={{ background: "#4F46E5" }}
                >
                  Add to bag
                </Button>{" "}
              </Stack>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detail;
