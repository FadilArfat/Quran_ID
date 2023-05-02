"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./loader.css";
import CardSkeleton from "@/components/CardSkeleton";

export default function Home() {
  const [quran, setQuran] = useState([]);
  const [key, setKey] = useState("");
  const [cariState, setCariState] = useState(null);
  const [nyari, setNyari] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cari = async (keyword) => {
    const hasilCari = quran.filter((item) => {
      return item.namaLatin.toLowerCase().includes(keyword.toLowerCase());
    });
    if (hasilCari.length > 0) {
      setCariState(hasilCari);
    } else {
      setCariState(null);
    }
    setNyari(true);
  };

  const ambil = async () => {
    setIsLoading(true);
    const hihi = await fetch("/api/quran/")
      .then((res) => res.json())
      .then((data) => {
        const haha = data.hasil.data;
        return haha;
      });
    setQuran(hihi);
    setIsLoading(false);
  };

  useEffect(() => {
    ambil();
  }, []);

  return (
    <main className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20">
      <div className="relative top-0 w-full pt-10 px-4 bg-gray-800">
        <div className="w-full bg-white text-center p-10 text-3xl mb-3 rounded">
          <p>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
        </div>
        <div className="bg-white border-2 p-2 rounded-lg flex flex-col md:flex-row justify-center md:justify-between items-center">
          <input
            onChange={(e) => setKey(e.target.value)}
            className="w-full md:w-3/4 py-2 px-3 text-gray-800 rounded-lg focus:outline-none mb-3 md:mb-0"
            type="text"
            placeholder="input surah name"
          />
          <button
            onClick={() => cari(key)}
            className="p-2 rounded-md text-gray-500 bottom-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {isLoading && <CardSkeleton cards={114} />}

        {nyari ? (
          <Link
            href={`/detail/${cariState.nomor}`}
            props={cariState.nomor}
            key={cariState.nomor}
          >
            <div
              className="bg-white w-full p-4 rounded"
              key={cariState[0].nomor}
            >
              <p>{`${cariState[0].nomor}. ${cariState[0].namaLatin}`}</p>
              <div className="text-right">
                <p className="font-extrabold">{cariState[0].nama}</p>
                <p>{`${cariState[0].tempatTurun}.${cariState[0].arti}`}</p>
              </div>
            </div>
          </Link>
        ) : (
          quran?.map((qur) => (
            <Link
              href={`/detail/${qur.nomor}`}
              props={qur.nomor}
              key={qur.nomor}
            >
              <div className="bg-white w-full p-4 rounded" key={qur.nomor}>
                <p>{`${qur.nomor}. ${qur.namaLatin}`}</p>
                <div className="text-right">
                  <p className="font-extrabold text-3xl">{qur.nama}</p>
                  <p>{`${qur.tempatTurun}.${qur.arti}`}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
