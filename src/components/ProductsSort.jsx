import React from "react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { SortDescendingIcon } from "@heroicons/react/outline";

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
      <div className="bg-white m-4 rounded-lg px-4 py-3 flex justify-start items-center">
        <SortDescendingIcon className="text-orange-400 cursor-default w-7 h-7 mr-3" />
        <Link href="/products?sort=default">
          <a
            className={
              sortHandler() == "default"
                ? "mx-3 lg:mx-4 text-lg font-semibold  text-slate-800 hover:text-slate-800 cursor-default"
                : "mx-3 lg:mx-4 text-lg text-gray-400 hover:text-slate-800"
            }
          >
            default
          </a>
        </Link>
        <Link href="/products?sort=cheapest">
          <a
            className={
              sortHandler() == "cheapest"
                ? "mx-3 lg:mx-4 text-lg font-semibold  text-slate-800 hover:text-slate-800 cursor-default"
                : "mx-3 lg:mx-4 text-lg text-gray-400 hover:text-slate-800"
            }
          >
            cheapest
          </a>
        </Link>
        <Link href="/products?sort=expensive">
          <a
            className={
              sortHandler() == "expensive"
                ? "mx-3 lg:mx-4 text-lg font-semibold  text-slate-800 hover:text-slate-800 cursor-default"
                : "mx-3 lg:mx-4 text-lg text-gray-400 hover:text-slate-800"
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
