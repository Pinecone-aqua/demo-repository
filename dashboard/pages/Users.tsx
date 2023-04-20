import Layout from "@/components/Layout";
import UsersRow from "@/components/UsersRow";
import axios from "axios";

export default function Users({ users }: any) {
  return (
    <Layout>
      <div className="m-5">Хэрэглэгчид</div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                #
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
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {users &&
              users.map((user: any, index: number) => {
                return <UsersRow key={user._id} user={user} index={index} />;
              })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:2023/user");
  const users = res.data;
  return {
    props: {
      users,
    },
  };
}
