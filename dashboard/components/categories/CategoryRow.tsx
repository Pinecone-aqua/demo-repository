/* eslint-disable @next/next/no-img-element */
import { Td, Tr } from "@chakra-ui/react";
import axios from "axios";
import EditCategoryModal from "./EditCategoryModal";

interface CategoryRowType {
  category: any;
  index: number;
}

export default function CategoryRow({ category, index }: CategoryRowType) {
  function deleteHandler(_id: string) {
    if (window.confirm("Устгах уу?")) {
      axios
        .delete(`http://localhost:2023/category/${_id}`)
        .then((res) => console.log(res.data));
    }
  }
  return (
    <Tr className="hover:bg-gray-50">
      <Td>{index + 1}</Td>
      <Td>
        <img src={category.image} className="w-20" alt="logo" />
      </Td>
      <Td>{category.name}</Td>
      <Td>
        <div className="flex justify-around">
          <EditCategoryModal category={category} title="Edit Category" />
          <p
            className="text-red-500 cursor-pointer"
            onClick={() => {
              deleteHandler(category._id);
            }}
          >
            Delete
          </p>
        </div>
      </Td>
    </Tr>
  );
}
