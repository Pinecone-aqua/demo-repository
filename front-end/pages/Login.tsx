import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function loginHandler(e: any) {
    e.preventDefault();
    console.log(e.target.userName.value);
    console.log(e.target.password.value);
  }
  function googleLoginHandler() {
    axios.get("http://localhost:2023/google-login").then((res) => {
      router.push(res.data);
    });
  }

  return (
    <Layout>
      <div className="w-screen h-[80vh] flex justify-center items-center">
        <form onSubmit={loginHandler} className="w-1/4">
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="userName"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </div>
          <div className="mt-3">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg text-sm bg-cyan-500 px-5 py-2 mt-5 text-white"
          >
            Нэвтрэх
          </button>
          <div
            onClick={googleLoginHandler}
            className="rounded-lg text-sm bg-cyan-500 px-5 py-2 mt-5 flex justify-between align-center text-white cursor-pointer"
          >
            <div className="flex items-center">
              <FaGoogle className="my-auto text-gray-300 absolute" />
            </div>
            <span className="mx-auto">Google-р Нэвтрэх</span>
          </div>
          <div className="text-xs mt-2 text-center">
            Бүртгэл үүсгээгүй бол
            <span
              className="cursor-pointer text-blue-700"
              onClick={() => {
                router.push("/Register");
              }}
            >
              {" "}
              энд дарж{" "}
            </span>
            бүртгүүлэх
          </div>
        </form>
      </div>
    </Layout>
  );
}
