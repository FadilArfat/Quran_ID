import prisma from "../../../../libs/prismadb"; // Update the path to your Prisma client
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function handleDelete(req, res) {
  const session = await getServerSession(
    req,
    {
      ...res,
      getHeader: (name) => res.headers?.get(name),
      setHeader: (name, value) => res.headers?.set(name, value),
    },
    authOptions
  );

  if (!session) {
    return new NextResponse("Unauthorized", {
      status: 401,
    });
  }

  if (req.method !== "POST") {
    return new NextResponse("Method not allowed", {
      status: 405,
    });
  }

  const { nomor } = await req.json();

  if (!nomor) {
    return NextResponse.json({ message: `Nomor is undefined` });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const savedSurat = user.surat || [];

    const existingSuratIndex = savedSurat.findIndex(
      (surat) => surat.nomor === nomor
    );

    if (existingSuratIndex === -1) {
      return new NextResponse("Surat not found in user's saved surat", {
        status: 404,
      });
    }

    savedSurat.splice(existingSuratIndex, 1);

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { surat: savedSurat },
    });

    if (!updatedUser) {
      return new NextResponse("Gagal disimpan", { status: 501 });
    }

    return new NextResponse("Berhasil Disimpan!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error deleting ayah", { status: 500 });
  }
}

export { handleDelete as POST };
