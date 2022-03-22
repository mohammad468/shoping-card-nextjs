import React, { useState } from "react";
import Link from "next/Link";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { RadioGroup } from "@headlessui/react";

const MyDropdown = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(0);

  const showHandler = (id) => {
    if (!show) {
      setShow(true);
      setSelected(id);
    } else {
      setShow(false);
      setSelected(0);
    }
  };

  const hiddenHandler = () => {
    if (show) {
      setShow(false);
      setSelected(0);
    }
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-200">
      <div className="bg-white rounded-xl max-w-md w-full p-2 mt-3">
        <div
          className={`w-full flex items-center justify-between rounded-lg p-2 my-2 cursor-pointer ${
            show && selected == 1
              ? "ring-1 ring-purple-400 bg-purple-200 text-blue-700"
              : "bg-purple-100 hover:bg-purple-200 text-blue-700"
          }`}
          onClick={() => showHandler(1)}
        >
          <h1 className="text-lg font-bold">What is your refund policy?</h1>
          {/* {show && selected == 1 ? (
            <AiOutlineCaretUp className="transition-all duration-700" />
          ) : (
            <AiOutlineCaretDown className="transition-all duration-700" />
          )} */}
          <AiOutlineCaretDown
            className={`${
              show && selected == 1
                ? "transition-all duration-150"
                : "rotate-180 transition-all duration-150"
            }`}
          />
        </div>
        <div
          className={`text-black opacity-50 py-3 px-2 ${
            show && selected == 1 ? "" : "hidden"
          }`}
        >
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </div>
        <div
          onClick={() => showHandler(2)}
          className={`w-full flex items-center justify-between rounded-lg p-2 my-2 cursor-pointer ${
            show && selected == 2
              ? "ring-1 ring-purple-400 bg-purple-200 text-blue-700"
              : "bg-purple-100 hover:bg-purple-200 text-blue-700"
          }`}
        >
          <h1 className="text-lg font-bold">Do you offer technical support?</h1>
          <AiOutlineCaretDown
            className={`${
              show && selected == 2
                ? "transition-all duration-150"
                : "rotate-180 transition-all duration-150"
            }`}
          />
        </div>
        <div
          className={`text-black opacity-50 py-3 px-2 ${
            show && selected == 2 ? "transition-all" : "hidden"
          }`}
        >
          No.
        </div>
      </div>
    </div>
  );
};

export default MyDropdown;
