import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch(
    "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json"
  );
  const hasil = await res.json();
  return NextResponse.json({ hasil });
}
