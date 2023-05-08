import React from "react";

export default function Footer() {
  return (
    <footer className=" rounded-lg shadow my-4 mb-0 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-white">
          © 2023{" "}
          <a href="https://github.com/FadilArfat" className="hover:underline">
            FXDL
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a
              href="https://equran.id/apidev"
              className="mr-4 hover:underline md:mr-6 "
            >
              API
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/fxdl14" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
