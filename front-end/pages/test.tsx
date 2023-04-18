import React, { useState } from "react";

interface UserType {
  name: string;
  age: number;
}

export default function Test() {
  const [users, setUsers] = useState<UserType[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitHandler(e: any) {
    e.preventDefault();
    console.log("name: " + e.target.name.value);
    console.log("age: " + e.target.age.value);
    const newUser = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    fetch("http://localhost:3002/user/add", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newUser),
    });
    // fetch("http://localhost:3002/user/bagalzuur")
    //   .then((response) => response.json())
    //   .then((res) => console.log(res));
  }

  function getAllUserHandler() {
    fetch("http://localhost:3002/user/all")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }
  return (
    <div className="w-full h-100 bg-gray-500">
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <label>
          name:
          <input
            type="text"
            name="name"
            className="border border-red-500 block m-5"
          />
        </label>
        <label>
          age:
          <input
            type="number"
            name="age"
            className="border border-red-500 m-5 block"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button
        className="w-1/4 h-1/6 bg-black text-white"
        onClick={getAllUserHandler}
      >
        Get All Users
      </button>
      <ul>
        {users.map((user: UserType, index: number) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
