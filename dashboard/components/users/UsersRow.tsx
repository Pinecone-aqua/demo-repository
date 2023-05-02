import axios from "axios";
import EditUserModal from "./EditUserModal";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

interface TableRowType {
  user: any;
  index: number;
}

export default function UsersRow({ user, index }: TableRowType) {
  function deleteHandler() {
    const token = Cookies.get("token");
    if (window.confirm("Устгах уу?")) {
      axios
        .delete(`http://localhost:2023/user/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          toast.info("Амжилттай устгагдлаа");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  }

  return (
    <tr className="hover:bg-gray-50">
      <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        {index + 1}
      </td>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4">
        <EditUserModal user={user} />
      </td>
      <td
        className="px-6 py-4 cursor-pointer text-red-500"
        onClick={deleteHandler}
      >
        Delete
      </td>
    </tr>
  );
}
