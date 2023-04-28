import Layout from "@/components/Layout";
import AddCategoryModal from "@/components/categories/AddCategoryModal";
import CategoryRow from "@/components/categories/CategoryRow";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";

export default function Categories({ categories }: any) {
  return (
    <Layout>
      <div className="m-5">
        <div className="flex justify-between">
          <div className="m-5">Categories</div>
          <div className="flex items-center">
            <AddCategoryModal title="Add Category" />
          </div>
        </div>

        <TableContainer className="mt-5 border rounded-lg shadow-md">
          <Table variant="simple">
            <Thead>
              <Tr className="bg-[#F7FAFC]">
                <Th>#</Th>
                <Th>image</Th>
                <Th>name</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {categories.map((category: any, index: number) => (
                <CategoryRow
                  category={category}
                  key={category._id}
                  index={index}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:2023/category/all");
  const data = res.data;

  return {
    props: {
      categories: data,
    },
  };
}
