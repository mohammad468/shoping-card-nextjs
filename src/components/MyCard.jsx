import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Badge } from "react-bootstrap";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction";

const MyCard = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // shorten for short title for 2 word
  const shorten = (title) => {
    const spiltedTitle = title.split(" ");
    const newTitle = `${spiltedTitle[0]} ${spiltedTitle[1]} ${spiltedTitle[2]}`;
    return newTitle;
  };

  return productsState.products.map((product) => (
    <Card
      style={{ width: "18rem" }}
      className="mx-3 my-2 p-0 d-flex"
      key={product.id}
    >
      <Card.Header>{shorten(product.title)}</Card.Header>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "10rem", height: "10rem" }}
        className="my-2 align-self-center"
      />
      <Card.Body>
        <Card.Title>
          <Link href={`details/${product.id}`}>
            <a>Go To Details</a>
          </Link>
        </Card.Title>
        <Card.Text>{`${product.price} $`}</Card.Text>
      </Card.Body>
      <Button variant="primary" className="align-self-center mb-3">
        Add to Store
      </Button>
      <Card.Footer>
        <Badge bg="secondary">{product.category}</Badge>
      </Card.Footer>
    </Card>
  ));
};

export default MyCard;
