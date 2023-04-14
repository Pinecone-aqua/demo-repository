import Layout from "@/components/Layout";

export default function Register() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function registerHandler(e: any) {
    e.preventDefault();
  }
  return (
    <Layout>
      <div className="w-screen h-[80vh] flex justify-center items-center">
        <form onSubmit={registerHandler} className="w-1/4">
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Овог
            </span>
            <input
              type="text"
              name="lastName"
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
              Нэр
            </span>
            <input
              type="email"
              name="firstName"
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
              Утасны дугаар
            </span>
            <input
              type="number"
              name="phoneNumber"
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
            Бүртгүүлэх
          </button>
        </form>
      </div>
    </Layout>
  );
}
