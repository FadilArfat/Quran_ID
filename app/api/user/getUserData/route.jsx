import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function getUserData(req, res) {
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

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to retrieve user", { status: 500 });
  }
}

export { getUserData as GET };
