import axios from "axios";
import UserModal from "./UserModal";

interface TableRowType {
  user: any;
  index: number;
}

export default function UsersRow({ user, index }: TableRowType) {
  function deleteHandler() {
    if (window.confirm("Устгах уу?")) {
      axios.delete(`http://localhost:2023/user/${user._id}`);
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
        <UserModal user={user} />
      </td>
      <td className="px-6 py-4 cursor-pointer" onClick={deleteHandler}>
        Delete
      </td>
    </tr>
  );
}
