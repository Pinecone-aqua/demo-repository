import client from "@/apollo-client";
import ProductProvider from "@/context/PropductContext";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  UserProvider;
  return (
    <ApolloProvider client={client}>
      <ProductProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ProductProvider>
    </ApolloProvider>
  );
}
