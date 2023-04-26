import Layout from "@/components/Layout";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import AddBrandModal from "@/components/brands/AddBrandModal";
import BrandRow from "@/components/brands/BrandRow";

export default function Brands({ brands }: any) {
  return (
    <Layout>
      <div className="m-5">
        <div className="flex justify-between">
          <div className="m-5">Brands</div>
          <div className="flex items-center">
            <AddBrandModal title="Add Brand" />
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
              {brands.map((brand: any, index: number) => (
                <BrandRow brand={brand} key={brand._id} index={index} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:2023/brand/all");
  const data = res.data;
  return {
    props: {
      brands: data,
    },
  };
}
