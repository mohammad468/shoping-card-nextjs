import React from "react";
import Link from "next/Link";
import { Badge } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  XIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  HomeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const resources = [
  {
    name: "Mens Clothing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    href: "/products/mens-clothing",
    icon: SupportIcon,
  },
  {
    name: "Womens Clothing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    href: "/products/womens-clothing",
    icon: BookmarkAltIcon,
  },
  {
    name: "Jewelery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    href: "/products/jewelery",
    icon: CalendarIcon,
  },
  {
    name: "Electronics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    href: "/products/electronics",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyNav = () => {
  const router = useRouter();
  const state = useSelector((state) => state.cartState);

  let activeHomeClass;
  let activeProductClass;
  let activeStoreClass;

  if (router.pathname == "/") {
    activeHomeClass =
      "text-base font-medium text-slate-800 hover:text-slate-800";
  } else {
    activeHomeClass =
      "text-base font-medium text-gray-500 hover:text-slate-800";
  }

  if (router.pathname === "/products") {
    activeProductClass =
      "text-base font-medium text-slate-800 hover:text-slate-800";
  } else {
    activeProductClass =
      "text-base font-medium text-gray-500 hover:text-slate-800";
  }

  if (router.pathname == "/store") {
    activeStoreClass =
      "text-base font-medium text-slate-800 hover:text-slate-800";
  } else {
    activeStoreClass =
      "text-base font-medium text-gray-500 hover:text-slate-800";
  }

  return (
    <Popover className="relative bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1 className="font-bold text-2xl text-slate-800 cursor-default">
              Mohseni <span className="text-orange-400">Shop</span>
            </h1>
          </div>

          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <Link href="/">
              <a className={`${activeHomeClass} flex`}>
                <HomeIcon className="h-5 w-5 me-1 " />
                <span>Home</span>
              </a>
            </Link>
            <Link href="/products">
              <a className={`${activeProductClass} flex`}>
                <ShoppingCartIcon className="h-5 w-5 me-1" />
                <span>Products</span>
              </a>
            </Link>
            <Link href="/store">
              <a className={`${activeStoreClass} flex`}>
                <ShoppingBagIcon className="h-5 w-5 me-1" />
                <span>
                  Store
                  <Badge className="mx-1 bg-slate-800">
                    {state.selectedItems.length}
                  </Badge>
                </span>
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <a
                                className={`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50`}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <Link href="/login">
              <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Login
              </a>
            </Link>
            <Link href="/signup">
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <HomeIcon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Home
                      </span>
                    </a>
                  </Link>

                  <Link href="/products">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <ShoppingCartIcon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Products
                      </span>
                    </a>
                  </Link>

                  <Link href="/store">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Store{" "}
                        <Badge className="mx-1">
                          {state.selectedItems.length}
                        </Badge>
                      </span>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/products/mens-clothing">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Men's clothing
                  </a>
                </Link>

                <Link href="/products/womens-clothing">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Women's clothing
                  </a>
                </Link>

                <Link href="/products/jewelery">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Jewelery
                  </a>
                </Link>

                <Link href="/products/electronics">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Electronics
                  </a>
                </Link>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 mx-2"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default MyNav;
