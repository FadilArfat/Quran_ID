import React from "react";

export default function TableSkeleton({ jumlah }) {
  return (
    <div class=" overflow-x-auto shadow-md sm:rounded-lg mt-5 animate-pulse">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-gray-700">
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
          {jumlah?.map((i) => {
            return (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900"
                key={i}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900"
                >
                  a
                </th>
                <td class="px-6 py-4">a</td>
                <td class="px-6 py-4">a</td>
                <td class="px-6 py-4">a</td>
                <td class="px-6 py-4">a</td>
                <td class="px-6 py-4">a</td>
                <td class="px-6 py-4">a</td>
                <td class="px-6 py-4">a</td>
                <td class="px-6 py-4">a</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
