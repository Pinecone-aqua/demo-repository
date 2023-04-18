import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("http://localhost:2023/user").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Layout>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                index
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Email
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                1
              </td>
              <td className="px-6 py-4">name</td>
              <td className="px-6 py-4">e mail</td>
              <td className="px-6 py-4">role</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
