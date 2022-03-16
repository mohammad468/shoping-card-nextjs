import React from "react";
import Link from "next/Link";
import ProductDetails from "../../../components/ProductDetails";

const ProductDetail = () => {
  return (
    <div>
      <ProductDetails />
      <Link href="/products">
        <a>go to home</a>
      </Link>
    </div>
  );
};

export default ProductDetail;
