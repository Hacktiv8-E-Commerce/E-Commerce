import React, { useEffect } from "react";
import { Image, Row, Col, Container, Stack, Button } from "react-bootstrap";
import {
  Header,
  Regulerstar,
  Solidstar,
  Btnloginfalse,
} from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchdetail } from "../store/fetchdetail";
import { setcart } from "../store/setcart";
import { fetchcart } from "../store/fetchcart";
import { useHistory } from "react-router-dom";

function Detail() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { productId } = useParams();
  let history = useHistory();

  useEffect(() => {
    dispatch(fetchdetail(productId, () => history.push(`/product?id=21`)));
  }, []);

  function rating(solid, regular) {
    return (
      <>
        {Array.from(Array(solid), (e, i) => {
          return <Solidstar key={i} />;
        })}
        {Array.from(Array(regular), (e, i) => {
          return <Regulerstar key={i} />;
        })}
      </>
    );
  }

  function addToCart(item) {
    setcart(item, fetchCart);
  }

  const fetchCart = () => {
    dispatch(fetchcart(state.product));
  };

  return (
    <div>
      <Header />
      {!state.loading
        ? state.detailproduct.map((item) => (
            <Container style={{ minWidth: "768px" }} key={item.id}>
              <Row>
                <Col lg={6} className="p-5">
                  <Image
                    src={item.image}
                    alt="First slide"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      maxHeight: "500px",
                    }}
                    rounded
                    width="100%"
                  />
                </Col>
                <Col lg={6} className="p-5">
                  <Stack gap={5}>
                    <Stack>
                      <h2>{item.title}</h2>
                      <h6>
                        Category <strong>{item.category}</strong>
                      </h6>
                      <br />
                      <p>{item.description}</p>
                    </Stack>
                    <Stack gap={4}>
                      <Stack>
                        <h2>
                          <strong>${item.price}</strong>
                        </h2>
                        <Stack direction="horizontal" gap={3}>
                          <Stack direction="horizontal">
                            {rating(
                              Math.round(item.rating.rate),
                              5 - Math.round(item.rating.rate)
                            )}
                          </Stack>
                          <Stack>
                            <p className="my-auto" style={{ color: "#4F46E5" }}>
                              {item.rating.count} reviews
                            </p>
                          </Stack>
                        </Stack>
                      </Stack>
                      {state.login.login ? (
                        <Button
                          onClick={() => addToCart(`${item.id}`)}
                          style={{ background: "#4F46E5" }}
                        >
                          Add to cart
                        </Button>
                      ) : (
                        <Btnloginfalse text="Add to cart" />
                      )}
                      <Stack className="align-items-center">
                        <span>
                          or{" "}
                          <Link
                            to={`/`}
                            style={{ color: "#4F46E5" }}
                            className="text-decoration-none"
                          >
                            Continue Shopping -&gt;{" "}
                          </Link>
                        </span>
                      </Stack>
                    </Stack>
                  </Stack>
                </Col>
              </Row>
            </Container>
          ))
        : ""}
    </div>
  );
}

export default Detail;
