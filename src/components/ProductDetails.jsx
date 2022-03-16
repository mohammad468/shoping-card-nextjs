import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction"; 

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
    <div>
      <h1>{product.id}</h1>
      <h1>{product.title}</h1>
      <h1>{product.category}</h1>
      <h1>{product.description}</h1>
      <h1>{product.image}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};

export default ProductDetails;