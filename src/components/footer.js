import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={10}>
          <p>Created by: Fadila Kharisma Yoga & Difen Yedidya Sjamsu</p>
        </Col>
        <Col xs={6} md={2}>
          <FontAwesomeIcon icon={faAmazon} />
          lazone
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
