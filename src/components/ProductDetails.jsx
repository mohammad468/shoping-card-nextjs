import React, { useEffect, useState } from "react";
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

  const [colorSelection, setColorSelection] = useState("bg-orange-500");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    // <Container className="border rounded mt-2 p-2">
    //   <Row className="d-flex align-items-center justify-content-start">
    //     <Image src={product.image} fluid style={{ width: "15rem" }} />
    //     <Col>
    //       <h2 className="fw-bolder text-uppercase">{product.title}</h2>
    //       <p className="opacity-50">{product.description}</p>
    //       <div className="w-50 d-flex align-items-center justify-content-between">
    //         <h2 className="fw-bolder">{`${product.price} $`}</h2>
    //         <Button variant="primary">Add to store</Button>
    //         <h2 className="fw-bolder">
    //           <Badge className="text-uppercase">{product.category}</Badge>
    //         </h2>
    //       </div>
    //       <h5 className="justify-self-end mt-5">
    //         <Link href="/products">
    //           <a className="text-decoration-none text-uppercase">
    //             go to Products
    //           </a>
    //         </Link>
    //       </h5>
    //     </Col>
    //   </Row>
    // </Container>
    <Container className="bg-white rounded-xl mt-2 p-2">
      <Row className="lg:flex justify-around items-start">
        <Col xs={12} lg={8} className="border rounded-lg my-1 mx-2">
          <div className="flex row-auto">
            <Image src={product.image} fluid style={{ width: "15rem" }} />
            <div className="my-3">
              {product.category == "mens's clothing" && (
                <span>clothing icon</span>
              )}
              <p className="text-uppercase mx-5 text-orange-400">
                {product.category}
              </p>
              <span className="fw-bolder text-uppercase m-2 mx-5">
                {product.title}
              </span>
              <p className="opacity-50 m-2 mx-5 text-slate-800">
                {product.description}
              </p>
              <hr className="text-stone-300 mx-5" />
              <div className="mx-5 my-2 flex">
                <span className="fw-bolder text-uppercase text-slate-800">
                  select color:
                </span>
                <div className="flex mx-3">
                  <div
                    onClick={() => setColorSelection("bg-orange-500")}
                    className={`bg-orange-500 rounded-full w-6 h-6 cursor-pointer ${
                      colorSelection == "bg-orange-500"
                        ? "ring-2 ring-slate-800 z-10"
                        : "ring-2 ring-white"
                    }`}
                  ></div>
                  <div
                    onClick={() => setColorSelection("bg-red-500")}
                    className={`bg-red-500 rounded-full w-6 h-6 cursor-pointer ${
                      colorSelection == "bg-red-500"
                        ? "ring-2 ring-slate-800 z-10"
                        : "ring-2 ring-white"
                    }`}
                  ></div>
                  <div
                    onClick={() => setColorSelection("bg-blue-500")}
                    className={`bg-blue-500 rounded-full w-6 h-6 cursor-pointer ${
                      colorSelection == "bg-blue-500"
                        ? "ring-2 ring-slate-800 z-10"
                        : "ring-2 ring-white"
                    }`}
                  ></div>
                  <div
                    onClick={() => setColorSelection("bg-yellow-400")}
                    className={`bg-yellow-400 rounded-full w-6 h-6 cursor-pointer ${
                      colorSelection == "bg-yellow-400"
                        ? "ring-2 ring-slate-800 z-10"
                        : "ring-2 ring-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3} className="bg-stone-100 rounded-lg">
          <div className="mb-36">
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <p>{product.price}</p>
          <button className="bg-orange-400 text-white text-xl transition-all rounded-lg w-full border-0 my-3 px-3 py-2  hover:bg-orange-600">
            Add to cart
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
