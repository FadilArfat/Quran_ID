import { NextResponse } from "next/server";

export async function handleTes(Request) {
  if (Request.method !== "POST") {
    return new NextResponse("Method not allowed", {
      status: 405,
    });
  }

  const { nomor } = await Request.json();

  if (!nomor) {
    return NextResponse.json({ message: `Nomor is undefined` });
  }

  return NextResponse.json({ message: `Nomor ${nomor} deleted!` });
}
export { handleTes as POST };
