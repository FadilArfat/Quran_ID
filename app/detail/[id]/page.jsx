"use client";
import CardDetailSkeleton from "../../../components/CardSkeleton";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Detail({ params }) {
  const [detilQuran, setDetilQuran] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
    setIsPlaying(true);

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  };

  useEffect(() => {
    const ambil = async () => {
      setIsLoading(true);
      const hihi = await fetch(`/api/quran/detail/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          const haha = data.hasil.data;
          return haha;
        });
      setDetilQuran(hihi);
      setIsLoading(false);
    };
    ambil();
  }, []);

  console.log(detilQuran);

  return (
    <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-16 mb-20 min-h-screen">
      <div className="container mx-auto">
        <div className="w-full bg-white text-center p-10 text-3xl mb-3 rounded font-bold">
          <p>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
        </div>
        <div className="mt-3">
          {isLoading && <CardDetailSkeleton cards={10} />}
          {detilQuran?.ayat?.map((d) => (
            <div className="bg-white w-full mb-2" key={d.nomorAyat}>
              <div className="p-4 bg-white">
                <p>1:{d.nomorAyat}</p>
                <div className="text-right">
                  <p className="font-extrabold text-2xl py-4">{d.teksArab}</p>
                </div>
                <p className="mt-3">{d.teksLatin}</p>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                <p className="text-gray-500">{d.teksIndonesia}</p>
                <button
                  className="mt-4 p-0 ml-0"
                  onClick={() => handleButtonClick(d.audio["01"])}
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-end">
          <Link href={`/detail/${detilQuran?.suratSelanjutnya?.nomor}`}>
            <p className="p-2 border outline-1 rounded-2xl bg-emerald-900 hover:bg-emerald-800 text-white">
              {`Next : ${detilQuran?.suratSelanjutnya?.namaLatin}`}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
