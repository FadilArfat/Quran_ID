import React from "react";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

export default function loading() {
  return (
    <>
      <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20 min-h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 animate-pulse">
            Masuk ke akun
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3 animate-pulse">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 animate-pulse"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 animate-pulse"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 animate-pulse"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 animate-pulse"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 animate-pulse"
              >
                Masuk
              </button>
            </div>
          </form>
          <h1 className="text-center py-4 text-gray-500 animate-pulse">
            --- Atau masuk dengan ---
          </h1>
          <div className="gap-1 flex flex-col animate-pulse">
            <GithubLoginButton onClick={() => {}} />
            <GoogleLoginButton onClick={() => {}} />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 flex flex-row justify-center align-middle items-center animate-pulse">
            Belum memiliki akun?{" "}
            <span className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
              Daftar Sekarang
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
