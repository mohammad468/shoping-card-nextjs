import React, { useState } from "react";
import Link from "next/Link";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const MyDropdown = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const hiddenHandler = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <div
      className="bg-gray-100 h-screen flex flex-col justify-center items-center"
      onClick={hiddenHandler}
    >
      <div className="relative">
        <button
          className={
            show
              ? "bg-blue-700 text-white text-lg px-4 py-3 rounded-xl ring-2 ring-blue-400 ring-offset-2 ring-offset-white"
              : "bg-blue-500 text-white text-lg px-4 py-3 rounded-xl hover:bg-blue-600 transition-all"
          }
          onClick={showHandler}
        >
          <span>Show more</span>
          {show ? (
            <AiOutlineCaretDown className="inline ms-2" />
          ) : (
            <AiOutlineCaretUp className="inline ms-2" />
          )}
        </button>
        <div
          className={`${
            show ? "" : "hidden"
          } bg-white w-56 mt-2 rounded-xl overflow-hidden border-1 border-gray-200 absolute`}
        >
          <Link href="#">
            <a className="block hover:text-gray-700 text-gray-700 p-2 hover:bg-gray-100">
              Link 1
            </a>
          </Link>
          <Link href="#">
            <a className="block hover:text-gray-700 text-gray-700 p-2 hover:bg-gray-100">
              Link 2
            </a>
          </Link>
          <Link href="#">
            <a className="block hover:text-gray-700 text-gray-700 p-2 hover:bg-gray-100">
              Link 3
            </a>
          </Link>
          <Link href="#">
            <a className="block hover:text-gray-700 text-gray-700 p-2 hover:bg-gray-100">
              Link 4
            </a>
          </Link>
          <Link href="#">
            <a className="block hover:text-gray-700 text-gray-700 p-2 hover:bg-gray-100">
              Link 5
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyDropdown;
