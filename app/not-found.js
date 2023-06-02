"use client";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link href={"/"}>
        <button className="px-4 py-2 bg-emerald-700 text-white font-semibold rounded hover:bg-emerald-600">
          Kembali ke Beranda
        </button>
      </Link>
    </div>
  );
}
