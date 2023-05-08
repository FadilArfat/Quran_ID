import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-green-800 via-green-600 to-emerald-900 fixed w-full z-20 top-0 left-0 border-b-2 border-yellow-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href={"/"} className="flex items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/TV%20-%201%20(2).png?alt=media&token=33625b77-def2-495b-8bcf-9bf3167b0730"
              className="object-cover w-12 mr-1"
              alt="Logo"
            />
            <span className="self-center text-yellow-400 text-2xl font-semibold whitespace-nowrap">
              Quran+
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-emerald-800 border border-gray-50 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Get started
            </button>
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/sholat"}
                  className="block py-2 pl-3 pr-4 rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-200"
                >
                  Jadwal Shalat
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/FadilArfat"
                  className="block py-2 pl-3 pr-4 rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-200 "
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
