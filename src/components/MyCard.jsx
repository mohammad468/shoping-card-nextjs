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
        <Card.Title>
          <Link href={`details/${props.dynamicRout}`}>
            <a>Go To Details</a>
          </Link>
        </Card.Title>
        <Card.Text>{`${props.price} $`}</Card.Text>
      </Card.Body>
      <Button variant="primary" className="align-self-center mb-3">
        Add to Store
      </Button>
      <Card.Footer>
        <Badge bg="secondary">{props.category}</Badge>
      </Card.Footer>
    </Card>
  );
};

export default MyCard;
