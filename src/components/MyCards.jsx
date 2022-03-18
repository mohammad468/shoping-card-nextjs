import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction";

const MyCards = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  // shorten for short title for 2 word
  const shorten = (title) => {
    const spiltedTitle = title.split(" ");
    const newTitle = `${spiltedTitle[0]} ${spiltedTitle[1]} ${spiltedTitle[2]}`;
    return newTitle;
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-4">
        {productsState.products.map((product) => (
          <MyCard
            key={product.id}
            myTitle={shorten(product.title)}
            image={product.image}
            dynamicRout={`products/${product.id}`}
            price={product.price}
            category={product.category}
            productId={product.id}
            productData={product}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MyCards;
