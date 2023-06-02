import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function getAllSuratHandler(req, res) {
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
    return new NextResponse("You are not authenticated", { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const savedSurat = (await user.surat) || [];

    return NextResponse.json({ savedSurat });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to retrieve saved surat", { status: 500 });
  }
}

export { getAllSuratHandler as GET };
