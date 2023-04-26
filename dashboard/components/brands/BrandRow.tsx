import { Td, Tr } from "@chakra-ui/react";
import axios from "axios";
import EditBrandModal from "./EditBrandModal";

interface BrandRowType {
  brand: any;
  index: number;
}

export default function BrandRow({ brand, index }: BrandRowType) {
  function deleteHandler(_id: string) {
    if (window.confirm("Устгах уу?")) {
      axios
        .delete(`http://localhost:2023/brand/${_id}`)
        .then((res) => console.log(res.data));
    }
  }
  return (
    <Tr className="hover:bg-gray-50">
      <Td>{index + 1}</Td>
      <Td>
        <img src={brand.image} className="w-20" alt="logo" />
      </Td>
      <Td>{brand.name}</Td>
      <Td>
        <div className="flex justify-around">
          <EditBrandModal brand={brand} title="Edit Brand" />
          <p
            className="text-red-500 cursor-pointer"
            onClick={() => {
              deleteHandler(brand._id);
            }}
          >
            Delete
          </p>
        </div>
      </Td>
    </Tr>
  );
}
