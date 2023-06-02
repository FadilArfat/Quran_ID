import NextAuth from "next-auth/next";
import prisma from "../../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "John Smith",
        },
      },
      async authorize(credentials) {
        // check emal dan password ada
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter email and password");
        }

        //check user ada di db
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        //if user gk ada
        if (!user || !user?.hashedPassword) {
          throw new Error("No user found");
        }

        //cek apakah password sama
        const passwordMathc = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        //if password gk sama
        if (!passwordMathc) {
          throw new Error("Password Incorrect");
        }
        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
