"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  let [page, setPage] = useState(true);

  useEffect(() => {
    const PageInfo = localStorage.getItem("page");

    if (PageInfo === "1") {
      setPage(false);
    }
    if (PageInfo === "2") {
      setPage(true);
    }
  });
  
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    console.log(toggle);
    !toggle ? setToggle(true) : setToggle(false);
  };

  const pageHandlerStartStudying = () => {
    localStorage.setItem("page", "1");
    setPage(false);
    setToggle(false);
  };

  const pageHandlerHome = () => {
    localStorage.setItem("page", "2");
    setPage(true);
    setToggle(false);
  };


  return (
    <html lang="en">
      <body>
        <nav className="flex flex-wrap  justify-between  h-1/6 items-center whitespace-nowrap ">
          <Image
            src="/unigo-logo.png"
            width={400}
            height={50}
            alt="Logo"
            className="ml-5% h-32 max-[875px]:ml-0 max-[500px]:h-24 max-[500px]:w-52"
          />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleHandler}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fillRule="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`mr-5% max-[875px]:mr-0 ${
              toggle
                ? " flex justify-center h-5/6 absolute inset-x-0 bottom-0 bg-white z-20 origin-top animate-open-menu"
                : "hidden "
            } md:block  `}
          >
            <ul className={`${toggle ? "block" : "flex"} `}>
              <li className=" flex items-center mx-11">
                <Link
                  onClick={pageHandlerHome}
                  className={` ${
                    page ? "underline" : ""
                  } hover:underline text-1.5xl ${
                    toggle ? "text-2xl my-5" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className=" flex items-center mx-11">
                <Link
                  onClick={pageHandlerStartStudying}
                  className={` ${
                    !page ? "underline" : ""
                  } hover:underline text-1.5xl ${toggle ? "text-2xl" : ""}`}
                  href="/startstudying"
                >
                  Start studying
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
