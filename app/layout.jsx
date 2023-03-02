import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${poppins.className}`}>
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
              <Link className="no-underline hover:underline text-1.5xl" href="/">Home</Link>
            </li>
            <li className=" flex items-center mx-11">
              <Link className="no-underline hover:underline text-1.5xl" href="/startstudying" >Start studying</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
