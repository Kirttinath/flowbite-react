import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "730667430674-ee5rqf0docnlqp1jdtjvbv7de2udnnri.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId: "c41bc9a22c05b8debc79",
      clientSecret: "d31394839e7f3a693b1e2f57876866257f12b317",
    }),
  ],
};
export default NextAuth(authOptions);
