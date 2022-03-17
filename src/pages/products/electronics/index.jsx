import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyElectronicsCards from "../../../components/electronics/MyElectronicsCards";
import MyCard from "../../../components/MyCard";
import MyNav from "../../../components/MyNav";
import { fetchProducts } from "../../../redux/products/productsAction";

const index = () => {
  return (
    <>
      <MyNav />
      <MyElectronicsCards />
    </>
  );
};

export default index;
