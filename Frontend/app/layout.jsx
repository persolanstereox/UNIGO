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
    const PageInfo = localStorage.getItem('page');

    if(PageInfo === '1') {
      setPage(false)
    }
    if(PageInfo === '2') {
      setPage(true)
    }
  })

 
  const pageHandlerStartStudying = () => {
    localStorage.setItem('page', '1');
    setPage(false)
  }

  const pageHandlerHome = () => {
    localStorage.setItem('page', '2');
    setPage(true)
  }


  return (
    <html lang="en">
      <body >
        <nav className="flex flex-wrap  justify-between  h-1/6 mb-8  items-center whitespace-nowrap max-[850px]:justify-center">
          <Image
            src="/unigo-logo.png"
            width={400}
            height={50}
            alt="Logo"
            className="ml-8 h-32 max-[850px]:ml-0"
          />
          <ul className="flex">
            <li className=" flex items-center mx-11">
              <Link
                
                onClick={pageHandlerHome}
                className={` ${
                  page ? "underline" : ""
                } hover:underline text-1.5xl`}
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
                } hover:underline text-1.5xl`}
                href="/startstudying"
              >
                Start studying
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
