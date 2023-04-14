import { ReactNode } from "react";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}

export default function Layout({ children }: PropType) {
  return (
    <div>
      <Header />

      <main>{children}</main>
    </div>
  );
}
