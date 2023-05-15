import React from "react";

export default function TableSkeleton({ jumlah }) {
  return (
    <div class=" overflow-x-auto shadow-md sm:rounded-lg mt-5 animate-pulse">
      <table class="w-full text-sm text-left text-black dark:text-black">
        <thead class="text-xs text-gray-900 uppercase bg-gray-100">
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
          {jumlah?.map((i, index) => {
            return (
              <tr
                className={`border-b bg-gray-${
                  index % 2 === 0 ? "200" : "50"
                } dark:border-gray-700`}
                key={i}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  a
                </th>
                <td class="px-6 py-4 text-white">a</td>
                <td class="px-6 py-4 text-white">a</td>
                <td class="px-6 py-4 text-white">a</td>
                <td class="px-6 py-4 text-white">a</td>
                <td class="px-6 py-4 text-white">a</td>
                <td class="px-6 py-4 text-white">a</td>
                <td class="px-6 py-4 text-white">a</td>
                <td class="px-6 py-4 text-white">a</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
