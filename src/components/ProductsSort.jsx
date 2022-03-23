import React from "react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const ProductsSort = () => {
  const router = useRouter();
  let sortQuery = router.query.sort;

  const sortHandler = () => {
    switch (sortQuery) {
      case "default":
        return "default";
        break;
      case "cheapest":
        return "cheapest";
        break;
      case "expensive":
        return "expensive";
        break;
      default:
        return "default";
        break;
    }
  };

  return (
    <Container>
      <div className="bg-white m-4 rounded-lg px-4 py-3 flex justify-center items-center">
        <h1 className="mx-2 lg:mx-4 text-2xl font-bold text-orange-400">
          Sort
        </h1>
        <Link href="/products?sort=default">
          <a
            className={
              sortHandler() == "default"
                ? "mx-2 lg:mx-3 text-lg md:text-xl font-semibold  text-slate-800 hover:text-slate-800 cursor-default"
                : "mx-2 lg:mx-3 text-lg md:text-xl text-gray-400 hover:text-slate-500"
            }
          >
            default
          </a>
        </Link>
        <Link href="/products?sort=cheapest">
          <a
            className={
              sortHandler() == "cheapest"
                ? "mx-2 lg:mx-3 text-lg md:text-xl font-semibold  text-slate-800 hover:text-slate-800 cursor-default"
                : "mx-2 lg:mx-3 text-lg md:text-xl text-gray-400 hover:text-slate-500"
            }
          >
            cheapest
          </a>
        </Link>
        <Link href="/products?sort=expensive">
          <a
            className={
              sortHandler() == "expensive"
                ? "mx-2 lg:mx-3 text-lg md:text-xl font-semibold  text-slate-800 hover:text-slate-800 cursor-default"
                : "mx-2 lg:mx-3 text-lg md:text-xl text-gray-400 hover:text-slate-500"
            }
          >
            expensive
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default ProductsSort;
