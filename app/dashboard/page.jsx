"use client";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function Dashboard() {
  const [saveAyat, setSaveAyat] = useState(null);
  const [dateMem, setDateMem] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const { data: session } = useSession();
  const audioRefs = useRef({});
  const getAllSurat = async () => {
    try {
      const res = await axios.get("/api/user/getAllSurat");
      setSaveAyat(res.data.savedSurat);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (audioFile, nomor) => {
    const audioRef = audioRefs.current[nomor];

    if (audioRef) {
      if (!audioRef.paused) {
        audioRef.pause();
        setPlaying(nomor, false); // Update the playing state
        return;
      } else {
        audioRef.play();
        setPlaying(nomor, true); // Update the playing state
        return;
      }
    }

    if (audioFile) {
      const newAudioRef = new Audio(audioFile);
      setCurrentAudio(audioFile); // Store the current audio file
      newAudioRef.play();

      newAudioRef.addEventListener("ended", () => {
        // Pause and remove the reference when audio ends
        newAudioRef.pause();
        delete audioRefs.current[nomor];
        setPlaying(nomor, false); // Update the playing state
      });

      audioRefs.current[nomor] = newAudioRef; // Store the audio reference for the specific card
      setPlaying(nomor, true); // Update the playing state
    }
  };

  const setPlaying = (nomor, isPlaying) => {
    setSaveAyat((prevSaveAyat) =>
      prevSaveAyat.map((qur) => {
        if (qur.nomor === nomor) {
          return {
            ...qur,
            isPlaying: isPlaying,
          };
        }
        return qur;
      })
    );
  };

  const handleRemoveSurat = async (nomorIn) => {
    try {
      const data = { nomor: nomorIn };
      await axios.post(`/api/user/deleteSurat/`, data);
      setSaveAyat((prevSaveAyat) =>
        prevSaveAyat.filter((qur) => qur.nomor !== nomorIn)
      );
      toast.success("Surat dihapus");
    } catch (error) {
      console.log(error);
      toast.error("Surat gagal dihapus!");
    }
  };

  const getUser = async () => {
    const res = await axios.get("/api/user/getUserData");
    const dateString = res.data.user.createdAt;
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // Adding 1 because month index is zero-based
    const date = dateObj.getDate();
    setDateMem(`${date}-${month}-${year}`);
  };

  useEffect(() => {
    getUser();
    if (!session) {
      redirect("/login");
    }
    getAllSurat();
  }, [session]);

  return (
    <div className="container mx-auto px-4 pt-12 pb-20 min-h-screen">
      <div className="pt-8">
        <p className="text-2xl font-bold text-emerald-700">Dashboard</p>
      </div>
      <div className="flex flex-col mt-4 lg:flex-row">
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-md shadow">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
              src={session?.user.image}
              alt="User Profile"
            />
            <p className="text-lg font-bold mt-2">
              {session?.user?.name ? session?.user.name : session?.user?.email}
            </p>
          </div>
          <div className="bg-gray-200 p-2 rounded mt-4">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="py-1">Status</p>
              </div>
              <div className="flex-1 flex justify-end">
                <p className="bg-emerald-700 text-white rounded px-4 py-1">
                  Active
                </p>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="py-1">
              <div className="flex items-center">
                <div className="flex-1">
                  <p>Member Sejak:</p>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-black">{dateMem}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="mt-4 bg-red-500 text-white rounded px-4 py-2"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
        <div className="w-full lg:w-3/4 mt-4 md:mt-0 lg:ml-4">
          {/* Display the retrieved data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {saveAyat?.map((qur) => (
              <div
                className="bg-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-full p-4 rounded relative"
                key={qur.nomor}
              >
                <Link href={`/detail/${qur.nomor}`} key={qur.nomor}>
                  <p className="font-bold" style={{ color: "#1C3F39" }}>
                    {`${qur.nomor}. ${qur.namaLatin}`}
                  </p>
                </Link>
                <div className="text-right">
                  <p className="font-extrabold text-3xl">{qur.nama}</p>
                  <p className="text-gray-400">{`${qur.tempatTurun}.${qur.arti}`}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="p-0 ml-0"
                    onClick={() =>
                      handleButtonClick(qur.audioFull["01"], qur.nomor)
                    }
                  >
                    {audioRefs.current[qur.nomor] &&
                    !audioRefs.current[qur.nomor].paused ? (
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
                  <button
                    className="p-0 ml-0 text-red-500 hover:text-red-600 focus:outline-none"
                    onClick={() => handleRemoveSurat(qur.nomor)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
