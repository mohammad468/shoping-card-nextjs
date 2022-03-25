import React from "react";
import { Container } from "react-bootstrap";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Pages = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <ChevronDoubleLeftIcon className="w-12 h-w-12 transition-all cursor-default text-gray-400 px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
        <ChevronLeftIcon className="w-12 h-w-12 transition-all cursor-default text-gray-400 px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
        <Link href="?page=1">
          <a className="transition-all bg-orange-400 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
            1
          </a>
        </Link>
        <Link href="?page=2">
          <a className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
            2
          </a>
        </Link>
        <Link href="?page=3">
          <a className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
            3
          </a>
        </Link>
        <Link href="?page=4">
          <a className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
            4
          </a>
        </Link>
        <Link href="?page=5">
          <a className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
            5
          </a>
        </Link>
        <Link href="?page=6">
          <a className="transition-all hover:bg-orange-300 cursor-pointer px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold">
            6
          </a>
        </Link>
        <ChevronRightIcon className="w-12 h-w-12 transition-all hover:bg-orange-300 cursor-pointer text-black px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
        <ChevronDoubleRightIcon className="w-12 h-w-12 transition-all hover:bg-orange-300 cursor-pointer text-black px-3 py-3 mx-2 my-4 rounded-lg text-2xl font-bold" />
      </div>
    </Container>
  );
};

export default Pages;
