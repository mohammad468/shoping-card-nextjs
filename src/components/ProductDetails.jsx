import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction";
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const router = useRouter();
  const routId = router.query.id;
  const product = productsState.products[routId - 1];
  console.log(routId);
  // console.log(productsState.products[routId - 1]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container className="border rounded mt-2 p-2">
      <Row className="d-flex align-items-center justify-content-start">
        <Image src={product.image} fluid style={{ width: "15rem" }} />
        <Col>
          <h2 className="fw-bolder text-uppercase">{product.title}</h2>
          <p className="opacity-50">{product.description}</p>
          <div className="w-50 d-flex align-items-center justify-content-between">
            <h2 className="fw-bolder">{`${product.price} $`}</h2>
            <Button variant="primary">Add to store</Button>
            <h2 className="fw-bolder">
              <Badge className="text-uppercase">{product.category}</Badge>
            </h2>
          </div>
          <h5 className="justify-self-end mt-5">
            <Link href="/products">
              <a className="text-decoration-none text-uppercase">go to Products</a>
            </Link>
          </h5>
        </Col>
      </Row>
      {/* <h1>{product.title}</h1>
      <h1>{product.category}</h1>
      <h1>{product.description}</h1>
      <h1>{product.image}</h1>
      <h1>{product.price}</h1> */}
    </Container>
  );
};

export default ProductDetails;
