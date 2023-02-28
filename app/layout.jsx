import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between">
          <Image
            src="/unigo-logo.png"
            width={400}
            height={200}
            alt="Logo"
            className="ml-8"
          />
          <ul className="flex mr-16">
            <li className=" flex items-center mx-11">
              <Link className="no-underline hover:underline text-2xl" href="/">Home</Link>
            </li>
            <li className=" flex items-center mx-11">
              <Link className="no-underline hover:underline text-2xl" href="/startstudying" >Start studying</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
