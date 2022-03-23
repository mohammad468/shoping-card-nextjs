import React from "react";
import Store from "../../components/Store";
import MyNav from "../../components/MyNav";
import ProductsSort from "../../components/ProductsSort";

const index = () => {
  return (
    <>
      <MyNav />
      <ProductsSort />
      <Store />
    </>
  );
};

export default index;
