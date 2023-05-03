"use client";
import TableSkeleton from "@/components/TableSkeleton";
import React, { useEffect, useState } from "react";

export default function Sholat() {
  const [listKota, setListKota] = useState([]);
  const [kota, setKota] = useState("bandarlampung");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataKota, setDataKota] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const ambil = async () => {
    setIsLoading(true);
    const hihi = await fetch(`/api/quran/sholat/${kota}`)
      .then((res) => res.json())
      .then((data) => {
        const haha = data.hasil;
        return haha;
      });
    setDataKota(hihi);
    console.log(hihi);
    setIsLoading(false);
  };

  const ambilKota = async () => {
    setIsLoading(true);
    const hihi = await fetch(`/api/quran/sholat/`)
      .then((res) => res.json())
      .then((data) => {
        const haha = data.hasil;
        return haha;
      });
    setListKota(hihi);
    setIsLoading(false);
  };

  useEffect(() => {
    ambilKota();
  }, []);

  useEffect(() => {
    ambil();
  }, [kota]);

  return (
    <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-16 mb-20">
      {/* dropdown menu kota */}
      <div className="relative">
        <button
          type="button"
          className="inline-flex justify-center items-center space-x-2 bg-gray-500 hover:bg-gray-600 px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          id="dropdown-menu-button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          <span>Pilih Kota</span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div
            className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {listKota?.map((item, index) => {
                return (
                  <a
                    onClick={() => setKota(item)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    tabIndex="-1"
                    id={`dropdown-menu-item-${index}`}
                    key={index}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="w-full bg-gray-900 text-center p-5 my-3 rounded-lg text-white">
        <p className="text-3xl">{`Jadwal Sholat untuk ${kota}`}</p>
        <p className="text-xl">{`${monthNames[currentMonth]} ${currentYear}`}</p>
      </div>
      {/* tabel */}
      {isLoading ? (
        <TableSkeleton jumlah={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
      ) : (
        <div class=" overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Tanggal
                </th>
                <th scope="col" class="px-6 py-3">
                  Imsyak
                </th>
                <th scope="col" class="px-6 py-3">
                  Shubuh
                </th>
                <th scope="col" class="px-6 py-3">
                  Terbit
                </th>
                <th scope="col" class="px-6 py-3">
                  Dhuha
                </th>
                <th scope="col" class="px-6 py-3">
                  Dzuhur
                </th>
                <th scope="col" class="px-6 py-3">
                  Ashr
                </th>
                <th scope="col" class="px-6 py-3">
                  Maghrib
                </th>
                <th scope="col" class="px-6 py-3">
                  Isya
                </th>
              </tr>
            </thead>
            <tbody>
              {dataKota?.map(
                ({
                  tanggal,
                  imsyak,
                  shubuh,
                  terbit,
                  dhuha,
                  dzuhur,
                  ashr,
                  magrib,
                  isya,
                  index,
                }) => {
                  return (
                    <tr
                      class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {tanggal}
                      </th>
                      <td class="px-6 py-4">{imsyak}</td>
                      <td class="px-6 py-4">{shubuh}</td>
                      <td class="px-6 py-4">{terbit}</td>
                      <td class="px-6 py-4">{dhuha}</td>
                      <td class="px-6 py-4">{dzuhur}</td>
                      <td class="px-6 py-4">{ashr}</td>
                      <td class="px-6 py-4">{magrib}</td>
                      <td class="px-6 py-4">{isya}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
