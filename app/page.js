import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBookOpen,
  FaHeadphones,
  FaSearch,
  FaBookmark,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import satu from "../public/undraw_reading_book_re_kqpk.svg";
import dua from "../public/undraw_listening_re_c2w0.svg";
import tiga from "../public/undraw_the_search_s0xf.svg";
import empat from "../public/undraw_organized_content_re_831r.svg";

export default async function Home() {
  return (
    <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20">
      <div className="text-center mt-16">
        <h1 className="font-extrabold text-3xl text-green-900">
          Dalam Gemerlapnya Kehidupan,
          <br /> Temukan Kedamaianmu Melalui Al-Quran, <br />
          Petunjuk Terang Dalam Kegelapan Dunia.
        </h1>

        <div className="text-gray-600 mt-10">
          <h2 className="text-lg">
            Website ini mengajakmu untuk merenung, menghela nafas dalam, dan
            menemukan kedekatan <br />
            dengan Sang Pencipta melalui ayat-ayat-Nya yang menggetarkan hati.
          </h2>
          <h2 className="text-xl mt-4">
            وَاِذَا قُرِئَ الْقُرْاٰنُ فَاسْتَمِعُوْا لَهٗ وَاَنْصِتُوْا
            لَعَلَّكُمْ تُرْحَمُوْنَ
          </h2>
          <h2 className="text-lg mt-4">
            “Dan apabila dibacakan Al-Quran, maka dengarkanlah baik-baik, <br />
            dan perhatikanlah dengan tenang agar kamu mendapat rahmat”
          </h2>
          <h3 className="text-xl mt-4">(QS. Al-A‘raf [7]: 204)</h3>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 gap-4">
        <Link href={"/quran"}>
          <button
            style={{ backgroundColor: "#F2AC0D", color: "#1C3F39" }}
            type="button"
            className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Mulai Membaca
          </button>
        </Link>
      </div>

      <div className="my-16 p-8 bg-emerald-900 text-white rounded-xl">
        <div>
          <h2 className="text-2xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-lg">
            Selamat datang di situs kami! Kami adalah komunitas yang berdedikasi
            untuk menjadikan Al-Quran lebih mudah diakses dan dipahami oleh
            semua orang. Kami percaya bahwa Al-Quran adalah sumber
            kebijaksanaan, petunjuk hidup, dan keindahan yang tak ternilai
            harganya.
          </p>
          <p className="text-lg">
            Visi kami adalah memberikan akses yang mudah dan nyaman untuk
            membaca, mencari, dan mendengarkan Al-Quran. Kami ingin membantu
            masyarakat dalam memahami dan menghargai pesan yang terkandung dalam
            setiap ayat Al-Quran, serta menjadikannya sebagai panduan dalam
            kehidupan sehari-hari.
          </p>
          <p className="text-lg">
            Situs kami menyediakan berbagai fitur yang akan membantu Anda dalam
            menjelajahi Al-Quran. Anda dapat membaca Al-Quran secara online
            dengan mudah, mencari ayat-ayat yang spesifik, mendengarkan bacaan
            yang indah dari para qari terkenal, dan menyimpan surah-surah yang
            ingin Anda simpan untuk referensi di masa depan.
          </p>
          <p className="text-lg">
            Kami berkomitmen untuk memberikan pengalaman yang baik kepada
            pengguna kami. Jika Anda memiliki pertanyaan, saran, atau umpan
            balik, jangan ragu untuk menghubungi kami melalui kontak yang
            tersedia. Kami berharap situs ini dapat membantu Anda dalam
            menemukan kedamaian dan kedekatan dengan Sang Pencipta melalui
            Al-Quran.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-16">
        {/* About Section */}

        {/* Quran Reading Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Baca Al-Quran</h2>
          <p className="text-lg text-gray-600">
            Nikmati kemudahan membaca Al-Quran secara online. Jelajahi surah dan
            ayat-ayatnya dengan mudah menggunakan fitur navigasi kami. Dapatkan
            akses ke terjemahan Al-Quran dan pilihan tafsir untuk memperdalam
            pemahaman Anda.
          </p>
          <Link href={"/quran"}>
            <button
              style={{ backgroundColor: "#F2AC0D", color: "#1C3F39" }}
              type="button"
              className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mt-4"
            >
              <FaBookOpen className="inline mr-2" /> Mulai Membaca Al-Quran
            </button>
          </Link>
        </div>

        {/* Empty Left Column */}
        <div className="md:block hidden md:visible">
          <Image
            width={200}
            height={100}
            src={satu}
            className="mx-auto my-auto "
          />
        </div>
        {/* Empty Left Column */}
        <div className="md:block hidden md:visible">
          <Image width={300} src={dua} className="mx-auto" />
        </div>

        {/* Audio Recitation Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Dengarkan Bacaan Al-Quran</h2>
          <p className="text-lg text-gray-600">
            Rasakan keindahan dan ketenangan dalam mendengarkan bacaan Al-Quran
            yang terkaji dengan baik. Kami menawarkan koleksi bacaan dari qari
            terkenal yang akan membawa hati Anda dekat dengan ayat-ayat-Nya.
          </p>
          <Link href={"/detail/1"}>
            <button
              style={{ backgroundColor: "#F2AC0D", color: "#1C3F39" }}
              type="button"
              className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mt-4"
            >
              <FaHeadphones className="inline mr-2" /> Dengarkan Bacaan Al-Quran
            </button>
          </Link>
        </div>

        {/* Search Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Pencarian</h2>
          <p className="text-lg text-gray-600">
            Temukan ayat-ayat Al-Quran yang Anda cari dengan mudah melalui fitur
            pencarian kami. Ketikkan kata kunci, nama surah, atau nomor ayat
            yang ingin Anda temukan, dan kami akan menampilkan hasil pencarian
            yang relevan.
          </p>
          <Link href={"/quran"}>
            <button
              style={{ backgroundColor: "#F2AC0D", color: "#1C3F39" }}
              type="button"
              className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mt-4"
            >
              <FaSearch className="inline mr-2" /> Cari Ayat-Al-Quran
            </button>
          </Link>
        </div>

        {/* Empty Left Column */}
        <div className="hidden md:visible md:block">
          <Image width={200} src={tiga} className="mx-auto" />
        </div>

        {/* Saved Surah Section */}

        <>
          {/* Empty Left Column */}
          <div className="hidden md:visible md:block">
            <Image width={300} src={empat} className="mx-auto" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Surah Tersimpan</h2>
            <p className="text-lg text-gray-600">
              Jelajahi surah-surah yang telah Anda simpan ke profil Anda. Anda
              dapat menyimpan surah yang ingin Anda baca atau kaji lebih lanjut
              nanti, dan mengaksesnya dengan mudah setiap saat.
              <br />
              <span className="text-red-400">
                *registrasi dibutuhkan untuk mengakses fitur ini
              </span>
            </p>
            <Link href={"/dashboard"}>
              <button
                style={{ backgroundColor: "#F2AC0D", color: "#1C3F39" }}
                type="button"
                className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center mt-4"
              >
                <FaBookmark className="inline mr-2" /> Lihat Surah Tersimpan
              </button>
            </Link>
          </div>
        </>
      </div>

      <div className="mt-24 p-16 bg-emerald-900 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Kontak</h2>
        <p className="text-lg text-center text-gray-100">
          Jika Anda memiliki pertanyaan, umpan balik, atau ingin menghubungi
          kami, silakan gunakan media sosial di bawah ini:
        </p>
        <ul className="mt-4 flex items-center justify-center">
          <li className="mr-4">
            <a
              href="https://www.facebook.com/fadil.rezpectureapwg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl text-blue-500" />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://www.linkedin.com/in/fadilarfat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-blue-500" />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://www.instagram.com/fadil991407/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-pink-500" />
            </a>
          </li>
          <li>
            <a href="mailto:fadilitas14@gmail.com">
              <FaEnvelope className="text-3xl text-red-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
