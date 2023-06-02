"use client";
import Clock from "../../components/Clock";
import TableSkeleton from "../../components/TableSkeleton";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

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
  const generatePDF = () => {
    const doc = new jsPDF();
    const table = document.getElementById("tbl-jadwal");
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 10, 10, 190, 0);
      doc.save("jadwal_shalat.pdf");
    });
  };

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

  const handleClickKota = (itemProp) => {
    setKota(itemProp);
    setIsOpen(false);
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
          className="inline-flex justify-center items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
                    onClick={() => handleClickKota(item)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
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
        <div className="flex justify-end items-end mr-4">
          <Clock />
        </div>
      </div>

      <div id="tbl-jadwal">
        <div className="w-full  text-center p-5 rounded-lg bg-emerald-900 text-white">
          <p className="text-3xl">{`Jadwal Sholat untuk ${kota}`}</p>
          <p className="text-xl">{` ${monthNames[currentMonth]} ${currentYear}`}</p>
        </div>
        {/* tabel */}
        {isLoading ? (
          <TableSkeleton jumlah={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
        ) : (
          <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left text-black dark:text-black">
              <thead className="text-xs text-gray-900 uppercase bg-gray-100 ">
                <tr className="bg-emerald-900 hover:bg-emerald-800 text-white">
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Imsyak
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Shubuh
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Terbit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dhuha
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dzuhur
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ashr
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Maghrib
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Isya
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataKota?.map((dataJadwal, index) => {
                  return (
                    <tr
                      className={`border-b bg-gray-${
                        index % 2 === 0 ? "200" : "50"
                      } dark:border-gray-700`}
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {dataJadwal.tanggal}
                      </th>
                      <td className="px-6 py-3">{dataJadwal.imsyak}</td>
                      <td className="px-6 py-3">{dataJadwal.shubuh}</td>
                      <td className="px-6 py-3">{dataJadwal.terbit}</td>
                      <td className="px-6 py-3">{dataJadwal.dhuha}</td>
                      <td className="px-6 py-3">{dataJadwal.dzuhur}</td>
                      <td className="px-6 py-3">{dataJadwal.ashr}</td>
                      <td className="px-6 py-3">{dataJadwal.magrib}</td>
                      <td className="px-6 py-3">{dataJadwal.isya}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <button
        className="p-2 border outline-1 rounded-2xl bg-emerald-900 hover:bg-emerald-800 text-white mt-4"
        onClick={generatePDF}
      >
        Unduh Jadwal
      </button>
    </div>
  );
}
