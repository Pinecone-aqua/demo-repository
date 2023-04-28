/* eslint-disable @next/next/no-img-element */
import { Td, Tr } from "@chakra-ui/react";
import axios from "axios";
import EditProductModal from "./EditProductModal";
import Categories from "@/pages/Categories";

interface ProductRowType {
  product: any;
  index: number;
  brands: any;
  categories: any;
}

export default function ProductRow({
  product,
  brands,
  categories,
  index,
}: ProductRowType) {
  function deleteHandler(_id: string) {
    if (window.confirm("Устгах уу?")) {
      axios
        .delete(`http://localhost:2023/product/${_id}`)
        .then((res) => console.log(res.data));
    }
  }
  return (
    <Tr className="hover:bg-gray-50">
      <Td>{index + 1}</Td>
      <Td>
        <img src={product.image} className="w-20" alt="logo" />
      </Td>
      <Td>{product.name}</Td>
      <Td>{product.price}</Td>
      <Td>{product.quantity}</Td>
      <Td>{product.brand.name}</Td>
      <Td>{product.category.name}</Td>
      <Td>
        <div className="flex justify-around">
          <EditProductModal
            brands={brands}
            categories={categories}
            product={product}
            title="Edit Category"
          />
          <p
            className="text-red-500 cursor-pointer"
            onClick={() => {
              deleteHandler(product._id);
            }}
          >
            Delete
          </p>
        </div>
      </Td>
    </Tr>
  );
}
