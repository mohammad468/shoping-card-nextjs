import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import Link from "next/link";

const MyCard = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="mx-3 my-2 p-0 d-flex">
      <Card.Header>{props.myTitle}</Card.Header>
      <Card.Img
        variant="top"
        src={props.image}
        style={{ width: "10rem", height: "10rem" }}
        className="my-2 align-self-center"
      />
      <Card.Body>
        <Card.Title className="text-center fw-bolder mb-3">{`${props.price} $`}</Card.Title>
        <Card.Text className="d-flex justify-content-between align-items-center">
          <Link href={`products/${props.dynamicRout}`}>
            <a className="text-decoration-none">Go To Details</a>
          </Link>
          <Button variant="primary">Add to Store</Button>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Badge bg="secondary">{props.category}</Badge>
      </Card.Footer>
    </Card>
  );
};

export default MyCard;
