import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyNav from "../../../components/MyNav";
import { fetchProducts } from "../../../redux/products/productsAction";

const index = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let electronicsProducts = [];

  productsState.products.map((product) => {
    if (product.category == "electronics") {
      electronicsProducts.push(product);
    }
  });

  console.log(electronicsProducts);

  return (
    <div>
      <MyNav />
      {electronicsProducts ? (
        electronicsProducts.map((product) => <h1>{product.title}</h1>)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default index;
