import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Stack, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

function Items() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const itemClick = () => {
    dispatch({
      type: "SET_LOAD",
      payload: true,
    });
  };

  return (
    <Container style={{ minWidth: "768px" }} className="p-4 pt-0">
      <Stack gap={2}>
        <h2 style={{ fontFamily: 'Inter', fontSize: '2vmax', fontWeight: '700' }}>Customers also purchased</h2>
        <Row className="overflow-auto">
          {
            state.product.slice(0, 8).map((item) => (
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
                    <span
                      style={{
                        fontSize: "0.9vmax",
                        color: "#757575",
                        fontWeight: "600",
                      }}
                    >{`${item.category}`}</span>
                  </Stack>
                </Link>
              </Col>
            ))
          }
        </Row>
      </Stack>
    </Container>
  );
}

export default Items;
