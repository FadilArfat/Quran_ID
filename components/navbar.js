import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#E9E6D7" }}
        className="fixed w-full z-20 top-0 left-0 "
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href={"/"} className="flex items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/Quran%2B.png?alt=media&token=8656ecba-8124-41f4-a63b-7741100fc7c1"
              className="object-cover w-12 mr-1"
              alt="Logo"
            />
            <span
              style={{ color: "#1C3F39" }}
              className="self-center text-2xl font-semibold whitespace-nowrap"
            >
              Quran+
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link href={"/quran"}>
              <button
                style={{ backgroundColor: "#1C3F39" }}
                type="button"
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
              >
                Mulai Baca
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
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
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              style={{ color: "#556561" }}
              className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0"
            >
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/sholat"}
                  className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 "
                >
                  Jadwal Shalat
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/FadilArfat"
                  className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent  md:p-0  "
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr
          style={{ width: "92%", backgroundColor: "#556561" }}
          className="h-0.5 mx-auto 0 border-0 mt-2"
        ></hr>
      </nav>
    </div>
  );
}
