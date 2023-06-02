"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Link from "next/link";

export default function Login() {
  const session = useSession();
  const [data, setData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (session?.status === "authenticated") {
      redirect("/dashboard");
    }
  }, [session]);

  const loginUser = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("logged in successfully!");
      }
    });
  };

  return (
    <>
      <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20 min-h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Masuk ke akun
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
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
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
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
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Masuk
              </button>
            </div>
          </form>
          <h1 className="text-center py-4 text-gray-500">
            --- Atau masuk dengan ---
          </h1>
          <div className="gap-1 flex flex-col">
            <GithubLoginButton onClick={() => signIn("github")} />

            <GoogleLoginButton onClick={() => signIn("google")} />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 flex flex-row justify-center align-middle items-center">
            Belum memiliki akun?{" "}
            <Link href={"/register"}>
              <h1 className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
                Daftar Sekarang
              </h1>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
