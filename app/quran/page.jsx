"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { BookmarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";

export default function Quran() {
  const [quran, setQuran] = useState(null);
  const [key, setKey] = useState("");
  const [cariState, setCariState] = useState(null);
  const [nyari, setNyari] = useState(false);
  const [savedSuratNumbers, setSavedSuratNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { status } = useSession();

  const cari = (keyword) => {
    const hasilCari = quran.filter((item) => {
      return item.namaLatin.toLowerCase().includes(keyword.toLowerCase());
    });
    if (hasilCari != null) {
      setCariState(hasilCari);
    } else {
      setCariState(null);
    }
    setNyari(true);
  };

  const ambil = async () => {
    try {
      const response = await axios.get("/api/quran/"); // Updated API endpoint
      const hihi = response.data.hasil.data;
      setQuran(hihi);
    } catch (error) {
      console.error(error);
    }
  };

  const checkSuratSaved = (nomora) => {
    return savedSuratNumbers.includes(nomora);
  };

  const saveSurat = async (
    nomora,
    namaLatina,
    namaa,
    tempatTuruna,
    artia,
    audioFulla
  ) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/save", {
        nomor: nomora,
        namaLatin: namaLatina,
        nama: namaa,
        tempatTurun: tempatTuruna,
        arti: artia,
        audioFull: audioFulla,
      });

      if (response.status === 200) {
        const updatedSavedSuratNumbers = [...savedSuratNumbers, nomora];
        setSavedSuratNumbers(updatedSavedSuratNumbers);

        toast.success("Berhasil menyimpan surat");
        setLoading(false);
      } else {
        toast.success("Berhasil menyimpan surat");
        setLoading(false);
      }
    } catch (error) {
      toast.success("Berhasil menyimpan surat");
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSavedSuratNumbers = async () => {
      try {
        const response = await axios.get("/api/user/getAllSurat");
        if (response.status === 200) {
          const suratNumbers = response.data.savedSurat.map(
            (surat) => surat.nomor
          );
          setSavedSuratNumbers(suratNumbers);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSavedSuratNumbers();
  }, [savedSuratNumbers]);

  useEffect(() => {
    ambil();
  }, []);

  return (
    <main className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20 min-h-screen">
      <div className="relative top-0 w-full pt-10 px-4">
        <div className="w-full backdrop-blur bg-gray-50 text-center p-10 text-3xl mb-3 rounded font-bold">
          <p>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
        </div>
        <div className="bg-gray-50 border-2 p-2 rounded-lg flex flex-col md:flex-row justify-center md:justify-between items-center">
          <input
            onChange={(e) => setKey(e.target.value)}
            className="bg-gray-50 w-full md:w-3/4 py-2 px-3 text-gray-800 rounded-lg focus:outline-none mb-3 md:mb-0"
            type="text"
            placeholder="input surah name"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                cari(key);
              }
            }}
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
              className="w-6 h-6 text-emerald-900"
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
        {nyari ? (
          cariState?.length > 0 ? (
            cariState.map((qurCari) => (
              <div
                className="bg-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-full p-4 rounded"
                key={qurCari.nomor}
              >
                <Link
                  href={`/detail/${qurCari.nomor}`}
                  props={qurCari.nomor}
                  key={qurCari.nomor}
                >
                  <p
                    className="font-bold"
                    style={{ color: "#1C3F39" }}
                  >{`${qurCari.nomor}. ${qurCari.namaLatin}`}</p>
                </Link>
                <div className="text-right">
                  <p className="font-extrabold text-3xl">{qurCari.nama}</p>
                  <p className="text-gray-400">{`${qurCari.tempatTurun}.${qurCari.arti}`}</p>
                </div>
                {status === "authenticated" && (
                  <button
                    className="mt-3"
                    onClick={() =>
                      saveSurat(
                        qurCari.nomor,
                        qurCari.namaLatin,
                        qurCari.nama,
                        qurCari.tempatTurun,
                        qurCari.arti,
                        qurCari.audioFull
                      )
                    }
                  >
                    {loading && (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-emerald-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                    {checkSuratSaved(qurCari.nomor) ? (
                      <>
                        <CheckIcon className="h-5 w-5 mr-2 inline-block" />
                      </>
                    ) : (
                      <>
                        <BookmarkIcon className="h-5 w-5 mr-2 inline-block" />
                      </>
                    )}
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="font-bold pl-5">Surah tidak ditemukan.</p>
          )
        ) : (
          quran?.map((qur) => {
            const isSuratSaved = checkSuratSaved(qur.nomor);
            return (
              <div
                className="bg-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-full p-4 rounded"
                key={qur.nomor}
              >
                <Link
                  href={`/detail/${qur.nomor}`}
                  props={qur.nomor}
                  key={qur.nomor}
                >
                  <p
                    className="font-bold "
                    style={{ color: "#1C3F39" }}
                  >{`${qur.nomor}. ${qur.namaLatin}`}</p>
                </Link>
                <div className="text-right">
                  <p className="font-extrabold text-3xl">{qur.nama}</p>
                  <p className="text-gray-400">{`${qur.tempatTurun}.${qur.arti}`}</p>
                </div>
                {status === "authenticated" && (
                  <button
                    className="mt-3"
                    onClick={() =>
                      saveSurat(
                        qur.nomor,
                        qur.namaLatin,
                        qur.nama,
                        qur.tempatTurun,
                        qur.arti,
                        qur.audioFull
                      )
                    }
                  >
                    {loading && (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-emerald-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                    {checkSuratSaved(qur.nomor) ? (
                      <>
                        <CheckIcon className="h-5 w-5 mr-2 inline-block" />
                      </>
                    ) : (
                      <>
                        <BookmarkIcon className="h-5 w-5 mr-2 inline-block" />
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
