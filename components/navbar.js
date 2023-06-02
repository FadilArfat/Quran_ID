"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status, data } = useSession();
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  console.log(data);

  return (
    <div>
      <nav
        style={{ backgroundColor: "#E9E6D7" }}
        className="fixed w-full z-20 top-0 left-0"
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
            {/* Cek ada user, jika ada tampilkan foto user dan dropdown menu */}
            {status === "authenticated" ? (
              <div className="md:ml-3 relative mr-3">
                <div className="flex h-full align-middle justify-center items-center">
                  <button
                    className="max-w-xs bg-gray-800 text-gray-400 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    onClick={handleDropdownToggle}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src={
                        data
                          ? data?.user?.image
                          : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                      }
                      alt="User"
                    />
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-[6.5rem] rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link href={"/dashboard"}>
                      <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Dashboard
                      </button>
                    </Link>

                    <button
                      onClick={() => signOut()}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href={"/login"}>
                <button
                  style={{ backgroundColor: "#1C3F39" }}
                  type="button"
                  className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  Masuk
                </button>
              </Link>
            )}

            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={open ? "true" : "false"}
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
            className={`${
              open ? "block" : "hidden"
            } md:block items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul
              style={{ color: "#556561" }}
              className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0"
            >
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href={"/quran"}
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Quran
                </Link>
              </li>

              <li>
                <Link
                  href={"/sholat"}
                  className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0"
                >
                  Jadwal Shalat
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/FadilArfat"
                  className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0"
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
