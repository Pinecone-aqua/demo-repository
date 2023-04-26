import ProductProvider from "@/context/PropductContext";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  UserProvider;
  return (
    <ProductProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ProductProvider>
  );
}
