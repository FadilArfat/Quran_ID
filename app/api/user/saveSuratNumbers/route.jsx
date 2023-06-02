import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function savedSuratNumbers(req, res) {
  const session = await getServerSession(
    req,
    {
      ...res,
      getHeader: (name) => res.headers?.get(name),
      setHeader: (name, value) => res.headers?.set(name, value),
    },
    authOptions
  );

  const userEmail = session?.user?.email;

  if (!userEmail) {
    return new NextResponse.json(
      { error: "You are not authenticated" },
      { status: 401 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      include: { surat: true },
    });

    const savedSuratNumbers = user.surat.map((surat) => surat.nomor);

    return new NextResponse.json({ data: savedSuratNumbers }, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse.json(
      { error: "Failed to return save surat" },
      { status: 502 }
    );
  }
}
export { savedSuratNumbers as GET };
