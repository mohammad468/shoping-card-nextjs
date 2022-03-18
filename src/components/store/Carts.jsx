import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Actions
import {
  removeItem,
  decrease,
  increase,
  clear,
  checkout,
} from "../../redux/cart/cartAction";

const Carts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectedItems[index].quantity;
    }
  };

  return (
    <div>
      <h1>{state.itemsCounter}</h1>
      <h1>{state.total}</h1>
      <h1>{state.checkout}</h1>
      {state.selectedItems.map((product) => (
        <h1>{product.id}</h1>
      ))}
      {/* {quantityCount(state, props.productId) === 1 && (
        <Button onClick={() => dispatch(removeItem(props.productData))}>
          Remove
        </Button>
      )}
      {quantityCount(state, props.productId) > 1 && (
        <Button onClick={() => dispatch(decrease(props.productData))}>-</Button>
      )}
      {quantityCount(state, props.productData.id) > 0 && (
        <span>{quantityCount(state, props.productData.id)}</span>
      )}
      {isInCart(state, props.productData.id) ? (
        <Button onClick={() => dispatch(increase(props.productData))}>+</Button>
      ) : (
        <Button onClick={() => dispatch(addItem(props.productData))}>
          Add to Cart
        </Button>
      )} */}

      <Button onClick={() => dispatch(clear())}>Clear</Button>
      <Button onClick={() => dispatch(checkout())}>Checkout</Button>
    </div>
  );
};

export default Carts;
