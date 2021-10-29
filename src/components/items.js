import React from "react";
import { Container, Image, Stack, Row, Col } from "react-bootstrap";

function Items() {
  return (
    <Container style={{ minWidth: "768px" }}>
      <Stack gap={2}>
        <h2 style={{ fontFamily: "Inter", fontSize: "2vw", fontWeight: "700" }}>
          Customers also purchased
        </h2>
        <Row>
          <Col xs={4} md={4} lg={3} className="mb-4">
            <Stack className="flex-grow-0 flex-shrink-0" gap={2}>
              <Image
                src="./assets/clothes.jpg"
                alt="First slide"
                style={{ objectFit: "cover" }}
                rounded
              />
              <Stack>
                <Stack direction="horizontal">
                  <span
                    className="me-auto"
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    Basic Tee
                  </span>
                  <span
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    $35
                  </span>
                </Stack>
                <span
                  style={{
                    fontSize: "1vw",
                    color: "#414855",
                    fontWeight: "600",
                  }}
                >
                  Black
                </span>
              </Stack>
            </Stack>
          </Col>
          <Col xs={4} md={4} lg={3} className="mb-4">
            <Stack className="flex-grow-0 flex-shrink-0" gap={2}>
              <Image
                src="./assets/clothes.jpg"
                alt="First slide"
                style={{ objectFit: "cover" }}
                rounded
              />
              <Stack>
                <Stack direction="horizontal">
                  <span
                    className="me-auto"
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    Basic Tee
                  </span>
                  <span
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    $35
                  </span>
                </Stack>
                <span
                  style={{
                    fontSize: "1vw",
                    color: "#414855",
                    fontWeight: "600",
                  }}
                >
                  Black
                </span>
              </Stack>
            </Stack>
          </Col>
          <Col xs={4} md={4} lg={3} className="mb-4">
            <Stack className="flex-grow-0 flex-shrink-0" gap={2}>
              <Image
                src="./assets/clothes.jpg"
                alt="First slide"
                style={{ objectFit: "cover" }}
                rounded
              />
              <Stack>
                <Stack direction="horizontal">
                  <span
                    className="me-auto"
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    Basic Tee
                  </span>
                  <span
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    $35
                  </span>
                </Stack>
                <span
                  style={{
                    fontSize: "1vw",
                    color: "#414855",
                    fontWeight: "600",
                  }}
                >
                  Black
                </span>
              </Stack>
            </Stack>
          </Col>
          <Col xs={4} md={4} lg={3} className="mb-4">
            <Stack className="flex-grow-0 flex-shrink-0" gap={2}>
              <Image
                src="./assets/clothes.jpg"
                alt="First slide"
                style={{ objectFit: "cover" }}
                rounded
              />
              <Stack>
                <Stack direction="horizontal">
                  <span
                    className="me-auto"
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    Basic Tee
                  </span>
                  <span
                    style={{
                      fontSize: "1vw",
                      color: "#282C34",
                      fontWeight: "600",
                    }}
                  >
                    $35
                  </span>
                </Stack>
                <span
                  style={{
                    fontSize: "1vw",
                    color: "#414855",
                    fontWeight: "600",
                  }}
                >
                  Black
                </span>
              </Stack>
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}

export default Items;
