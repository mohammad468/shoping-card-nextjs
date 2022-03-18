import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import Link from "next/link";

// Actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../redux/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";

const MyCard = (props) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectedItems[index].quantity;
    }
  };

  const isInCart = (state, id) => {
    const result = !!state.selectedItems.find((item) => item.id === id);
    return result;
  };

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
          <Link href={`${props.dynamicRout}`}>
            <a className="text-decoration-none">Go To Details</a>
          </Link>
          {quantityCount(state, props.productId) === 1 && (
            <Button onClick={() => dispatch(removeItem(props.productData))}>
              Remove
            </Button>
          )}
          {quantityCount(state, props.productId) > 1 && (
            <Button onClick={() => dispatch(decrease(props.productData))}>
              -
            </Button>
          )}
          {quantityCount(state, props.productData.id) > 0 && (
            <span>{quantityCount(state, props.productData.id)}</span>
          )}
          {isInCart(state, props.productData.id) ? (
            <Button onClick={() => dispatch(increase(props.productData))}>
              +
            </Button>
          ) : (
            <Button onClick={() => dispatch(addItem(props.productData))}>
              Add to Cart
            </Button>
          )}
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Badge bg="secondary">{props.category}</Badge>
      </Card.Footer>
    </Card>
  );
};

export default MyCard;
