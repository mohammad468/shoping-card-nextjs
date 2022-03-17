import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsAction";
import MyCard from "../MyCard";

const MyMensClothing = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let MensClothingProducts = [];

  productsState.products.map((product) => {
    if (product.category == "men's clothing") {
      MensClothingProducts.push(product);
    }
  });

  console.log(MensClothingProducts);

  // shorten for short title for 2 word
  const shorten = (title) => {
    const spiltedTitle = title.split(" ");
    const newTitle = `${spiltedTitle[0]} ${spiltedTitle[1]} ${spiltedTitle[2]}`;
    return newTitle;
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex justify-content-start mt-4">
        {MensClothingProducts.map((product) => (
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

export default MyMensClothing;
