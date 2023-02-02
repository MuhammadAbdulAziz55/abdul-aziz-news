import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg="2">
            <h2>This is left side</h2>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <h2>This is right</h2>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
