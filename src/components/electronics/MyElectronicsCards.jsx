import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsAction";
import MyCard from "../MyCard";

const MyElectronicsCards = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  let electronicsProducts = [];

  productsState.products.map((product) => {
    if (product.category == "electronics") {
      electronicsProducts.push(product);
    }
  });

  console.log(electronicsProducts);

  // shorten for short title for 2 word
  const shorten = (title) => {
    const spiltedTitle = title.split(" ");
    const newTitle = `${spiltedTitle[0]} ${spiltedTitle[1]} ${spiltedTitle[2]}`;
    return newTitle;
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex justify-content-start mt-4">
        {electronicsProducts.map((product) => (
          <MyCard
            key={product.id}
            myTitle={shorten(product.title)}
            image={product.image}
            dynamicRout={product.id}
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

export default MyElectronicsCards;
