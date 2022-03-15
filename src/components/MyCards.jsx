import React from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

const MyCards = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-start mt-4">
        {/* map in here */}
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </Row>
    </Container>
  );
};

export default MyCards;
