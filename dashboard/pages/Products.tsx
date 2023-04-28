import Layout from "@/components/Layout";
import AddProductModal from "@/components/products/AddProductModal";
import ProductRow from "@/components/products/ProductRow";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";

export default function Products({ products, brands, categories }: any) {
  return (
    <Layout>
      <div className="m-5">
        <div className="flex justify-between">
          <div className="m-5">Products</div>
          <div className="flex items-center">
            <AddProductModal
              title="Add Product"
              brands={brands}
              categories={categories}
            />
          </div>
        </div>

        <TableContainer className="mt-5 border rounded-lg shadow-md">
          <Table variant="simple">
            <Thead>
              <Tr className="bg-[#F7FAFC]">
                <Th>#</Th>
                <Th>image</Th>
                <Th>name</Th>
                <Th>price</Th>
                <Th>quantiy</Th>
                <Th>brand</Th>
                <Th>category</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product: any, index: number) => (
                <ProductRow
                  product={product}
                  brands={brands}
                  categories={categories}
                  key={product._id}
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
  const productFetch = await axios.get("http://localhost:2023/product/all");
  const brandFetch = await axios.get("http://localhost:2023/brand/all");
  const categoryFetch = await axios.get("http://localhost:2023/category/all");

  const products = productFetch.data;
  const brands = brandFetch.data;
  const categories = categoryFetch.data;

  return {
    props: {
      products,
      brands,
      categories,
    },
  };
}
