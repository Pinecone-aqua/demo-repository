import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex w-[10vw] h-[100vh] justify-center border-e">
      <div
        className="cursor-pointer p-5"
        onClick={() => {
          router.push("/Users");
        }}
      >
        Users
      </div>
    </div>
  );
}
