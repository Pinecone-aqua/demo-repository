/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";

interface HeaderType {
  user: any;
  setUser: (arg: any) => void;
}

export default function Header({ user, setUser }: HeaderType) {
  const router = useRouter();
  console.log(user);
  return (
    <div className="p-5 flex justify-between border">
      <div className="flex gap-5">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </div>
        <div>2</div>
        <div>3</div>
      </div>
      {user ? (
        <div className="flex gap-5">
          <div>hello {user.name}</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              Cookies.remove("token");
              setUser("");
            }}
          >
            logout
          </div>
        </div>
      ) : (
        <div
          className="cursor-pointer flex items-center"
          onClick={() => {
            router.push("/Login");
          }}
        >
          <FaUser />
        </div>
      )}
    </div>
  );
}
