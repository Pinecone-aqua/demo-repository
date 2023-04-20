import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  function loginHandler(e: any) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  }

  function googleLoginHandler() {
    axios.get("http://localhost:2023/google-login").then((res) => {
      router.push(res.data);
    });
  }

  return (
    <div className="w-[50vw] h-[100vh] m-auto flex items-center justify-center">
      <div className="w-[30vw]">
        <form onSubmit={loginHandler}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl className="mt-2">
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
          <Button className="w-full mt-5" colorScheme="blue">
            Login
          </Button>
        </form>
        <div
          onClick={googleLoginHandler}
          className="rounded-md text-sm bg-cyan-500 px-5 py-[0.6rem] mt-5 flex justify-between align-center text-white cursor-pointer hover:bg-cyan-700 transition duration-300"
        >
          <div className="flex items-center">
            <FaGoogle className="my-auto text-gray-300 absolute" />
          </div>
          <span className="mx-auto">Google-р Нэвтрэх</span>
        </div>
      </div>
    </div>
  );
}
