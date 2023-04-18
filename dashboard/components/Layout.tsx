import { ReactNode } from "react";
import Header from "./Header";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className="flex">
      <Header />
      <main>{children}</main>
    </div>
  );
}
