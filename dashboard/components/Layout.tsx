import { ReactNode, useEffect } from "react";
import Header from "./Header";
import { useUser } from "@/context/UserContext";
import Login from "./Login";
import jwtDecode from "jwt-decode";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  const { currentUser } = useUser();

  if (currentUser) console.log(jwtDecode(currentUser));

  return (
    <>
      {currentUser ? (
        <div className="flex">
          <Header />
          <main className="w-full p-5">{children}</main>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
