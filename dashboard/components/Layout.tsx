import { ReactNode } from "react";
import Header from "./Header";
import { useUser } from "@/context/UserContext";
import Login from "./Login";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  const { currentUser } = useUser();

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
