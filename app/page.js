import Link from "next/link";
import React from "react";

export default async function Home() {
  return (
    <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20">
      <div className="text-center mt-16">
        <h1 className="font-extrabold text-3xl" style={{ color: "#1C3F39" }}>
          Dalam Gemerlapnya Kehidupan,
          <br /> Temukan Kedamaianmu Melalui Al-Quran, <br />
          Petunjuk Terang Dalam Kegelapan Dunia.
        </h1>

        <div style={{ color: "#556561" }}>
          <h2 className="mt-10 text-lg">
            Website ini mengajakmu untuk merenung, menghela nafas dalam, dan
            menemukan kedekatan <br />
            dengan Sang Pencipta melalui ayat-ayat-Nya yang menggetarkan hati.
          </h2>
          <h2 className="mt-4 text-xl">
            وَاِذَا قُرِئَ الْقُرْاٰنُ فَاسْتَمِعُوْا لَهٗ وَاَنْصِتُوْا
            لَعَلَّكُمْ تُرْحَمُوْنَ
          </h2>
          <h2 className="mt-4 text-lg">
            “Dan apabila dibacakan Al-Quran, maka dengarkanlah baik-baik, <br />
            dan perhatikanlah dengan tenang agar kamu mendapat rahmat”
          </h2>
          <h3 className="mt-4 text-xl">(QS. Al-A‘raf [7]: 204)</h3>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        <Link href={"/quran"}>
          <button
            style={{ backgroundColor: "#F2AC0D", color: "#1C3F39" }}
            type="button"
            className=" focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Mulai Membaca
          </button>
        </Link>
      </div>
    </div>
  );
}
