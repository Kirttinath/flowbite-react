import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { theme } from "flowbite-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
