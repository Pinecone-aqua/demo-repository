import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
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
      <div
        className="cursor-pointer"
        onClick={() => {
          router.push("/Login");
        }}
      >
        login
      </div>
    </div>
  );
}
