import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const formattedMonth =
    currentMonth < 9 ? `0${currentMonth + 1}` : `${currentMonth + 1}`;
  const res = await fetch(
    `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${params.kota}/${currentYear}/${formattedMonth}.json`
  );
  const hasil = await res.json();
  console.log(hasil);
  return NextResponse.json({ hasil });
}
