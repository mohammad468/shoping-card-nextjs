import React from "react";
import Store from "../../components/Store";
import MyNav from "../../components/MyNav";
import ProductsSort from "../../components/ProductsSort";
import Pages from "../../components/Pages";

const index = () => {
  return (
    <>
      <MyNav />
      <ProductsSort />
      <Store />
      <Pages />
    </>
  );
};

export default index;
