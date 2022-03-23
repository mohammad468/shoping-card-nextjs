import React from "react";
import { Container } from "react-bootstrap";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

const Pages = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <ChevronDoubleLeftIcon className="w-12 h-w-12 transition-all cursor-default text-gray-400 px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
        <ChevronLeftIcon className="w-12 h-w-12 transition-all cursor-default text-gray-400 px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
        <h1 className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
          1
        </h1>
        <h1 className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
          2
        </h1>
        <h1 className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
          3
        </h1>
        <h1 className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
          4
        </h1>
        <h1 className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
          5
        </h1>
        <h1 className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
          5
        </h1>
        <ChevronRightIcon className="w-12 h-w-12 transition-all hover:bg-orange-300 cursor-pointer text-black px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
        <ChevronDoubleRightIcon className="w-12 h-w-12 transition-all hover:bg-orange-300 cursor-pointer text-black px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
      </div>
    </Container>
  );
};

export default Pages;
