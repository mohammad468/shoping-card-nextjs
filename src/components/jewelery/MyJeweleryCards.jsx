import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsAction";
import MyCard from "../MyCard";

const MyJeweleryCards = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  let JeweleryProducts = [];

  productsState.products.map((product) => {
    if (product.category == "jewelery") {
      JeweleryProducts.push(product);
    }
  });

  console.log(JeweleryProducts);

  // shorten for short title for 2 word
  const shorten = (title) => {
    const spiltedTitle = title.split(" ");
    const newTitle = `${spiltedTitle[0]} ${spiltedTitle[1]} ${spiltedTitle[2]}`;
    return newTitle;
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex justify-content-start mt-4">
        {JeweleryProducts.map((product) => (
          <MyCard
            key={product.id}
            myTitle={shorten(product.title)}
            image={product.image}
            dynamicRout={product.id}
            price={product.price}
            category={product.category}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MyJeweleryCards;
