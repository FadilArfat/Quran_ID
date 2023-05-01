"use client";
import CardDetailSkeleton from "@/components/CardDetailSkeleton";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Detail({ params }) {
  const [detilQuran, setDetilQuran] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-16 mb-20">
      <div className="container mx-auto">
        <div className="w-full bg-white text-center p-10 text-3xl mb-3 rounded">
          <p>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
        </div>
        <div className="mt-3">
          {isLoading && <CardDetailSkeleton cards={10} />}
          {detilQuran?.ayat?.map((d) => (
            <div className="bg-white w-full mb-2" key={d.nomorAyat}>
              <div className="p-4 bg-slate-50">
                <p>1:{d.nomorAyat}</p>
                <div className="text-right">
                  <p className="font-extrabold text-2xl py-4">{d.teksArab}</p>
                </div>
                <p className="mt-3">{d.teksLatin}</p>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                <p>{d.teksIndonesia}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-end">
          <Link href={`/detail/${detilQuran?.suratSelanjutnya?.nomor}`}>
            <p className="p-4 bg-slate-900 text-white">
              {detilQuran?.suratSelanjutnya?.namaLatin}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
