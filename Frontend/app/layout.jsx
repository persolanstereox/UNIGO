"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  let [home, setHome] = useState(true);

  // const handlerStartStudying = () => {
  //   setHome(false)
  // };
  // const handlerHome = () => {
  //   setHome(true)
  // }

  return (
    <html lang="en">
      <body >
        <nav className="flex justify-between h-1/4">
          <Image
            src="/unigo-logo.png"
            width={400}
            height={50}
            alt="Logo"
            className="ml-8 h-36"
          />
          <ul className="flex mr-16">
            <li className=" flex items-center mx-11">
              <Link
                onClick={() => setHome(prev => !prev)}
                className={` ${
                  home ? "underline" : ""
                } hover:underline text-1.5xl`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className=" flex items-center mx-11">
              <Link
                onClick={() => setHome(prev => !prev)}
                className={` ${
                  !home ? "underline" : ""
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
