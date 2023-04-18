import { ReactNode } from "react";
import Header from "./Header";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

interface PropType {
  children: ReactNode;
}

export default function Layout({ children }: PropType) {
  const [user, setUser] = useState();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get("token");

  useEffect(() => {
    if (token) setUser(jwtDecode(token));
  }, [token]);

  return (
    <div>
      <Header user={user} setUser={setUser} />

      <main>{children}</main>
    </div>
  );
}
