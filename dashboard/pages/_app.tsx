import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "@/context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UserProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}
