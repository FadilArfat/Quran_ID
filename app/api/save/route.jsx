import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function saveHandler(req, res) {
  const session = await getServerSession(
    req,
    {
      ...res,
      getHeader: (name) => res.headers?.get(name),
      setHeader: (name, value) => res.headers?.set(name, value),
    },
    authOptions
  );
  console.log(session.user.email);

  if (!session) {
    return new NextResponse("You are not authenticated", { status: 302 });
  }

  const body = await req.json();
  const { nomor, namaLatin, nama, tempatTurun, arti, audioFull } = body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const savedSurat = user.surat || [];

    const existingSurat = savedSurat.find((surat) => surat.nomor === nomor);

    if (existingSurat) {
      return new NextResponse("Surat already exists in user's saved surat", {
        status: 400,
      });
    }

    const surat = {
      nomor,
      namaLatin,
      nama,
      tempatTurun,
      arti,
      audioFull,
    };

    savedSurat.push(surat);

    await prisma.user.update({
      where: { email: session.user.email },
      data: { surat: savedSurat },
    });

    return new NextResponse("Successfully update surat", { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to save surat", { status: 500 });
  }
}

export { saveHandler as POST };
