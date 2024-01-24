import { error } from "console";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req): any {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "K@gmail.com" || password !== "kirtti") {
          return null;
        }
        return { id: 1, name: "Kojha", email: "Kojha@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/Signin",
  },
};

export default NextAuth(authOptions);
