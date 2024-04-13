import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        number: {
          label: "Number",
          type: "number",
          placeholder: "번호를 입력하세요. (ex. 1)",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "비밀번호를 입력하세요.",
        },
      },
      async authorize(credentials: any) {
        let db = (await connectDB).db("dimicheck_database24");
        let user = await db
          .collection("users")
          .findOne({ number: credentials?.number });
        if (user) {
          const pwcheck = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (pwcheck) {
            return user as any;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30d
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        console.log(token);
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = token;
      console.log(session.user);
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(connectDB),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
