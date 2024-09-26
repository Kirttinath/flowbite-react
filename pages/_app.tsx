import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import BlogProvider from "./Components/Context/BlogProvider";
import { theme } from "flowbite-react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="730667430674-ee5rqf0docnlqp1jdtjvbv7de2udnnri.apps.googleusercontent.com">
      <ThemeProvider theme={theme}>
        <BlogProvider>

        <Component {...pageProps} />
        </BlogProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
