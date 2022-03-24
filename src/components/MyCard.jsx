import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";

const MyCard = (props) => {
  let x, y, z;
  function separate(Number) {
    Number += "";
    Number = Number.replace(",", "");
    x = Number.split(".");
    y = x[0];
    z = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
    return y + z;
  }

  return (
    <Card
      style={{ width: "18rem" }}
      className="transition-all mx-3 my-2 p-0 d-flex rounded-xl hover:shadow-lg"
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={{ width: "10rem", height: "10rem" }}
        className="my-2 align-self-center"
      />
      <Card.Body>
        <div className="flex justify-between items-center">
          <Card.Title className="text-start text-base capitalize text-gray-400 antialiased">{`${props.category}`}</Card.Title>
          <div className="flex">
            <div className="bg-orange-500 rounded-full w-4 h-4 ring-2 ring-white cursor-pointer"></div>
            <div className="bg-red-500 rounded-full w-4 h-4 ring-2 ring-white cursor-pointer"></div>
            <div className="bg-blue-500 rounded-full w-4 h-4 ring-2 ring-white cursor-pointer"></div>
            <div className="bg-yellow-400 rounded-full w-4 h-4 ring-2 ring-white cursor-pointer"></div>
          </div>
        </div>
        <Card.Title className="text-start text-xl font-bold capitalize text-slate-700 antialiased">
          <Link href={`${props.dynamicRout}`}>
            <a className="transition-all text-start text-lg font-bold capitalize text-slate-600 hover:text-slate-800 antialiased">{`${props.myTitle}`}</a>
          </Link>
        </Card.Title>
        <Card.Title className="text-start text-lg font-semibold capitalize text-orange-700 cursor-default antialiased">{`${separate(
          props.price * 30000
        )} Toman`}</Card.Title>
        <hr className="mx-4 my-2 text-gray-400" />
        <Link href={`${props.dynamicRout}`}>
          <a className="flex justify-center transition-all font-bold text-lg w-full text-center text-decoration-none text-orange-500 hover:text-orange-700 antialiased">
            View and order
          </a>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
