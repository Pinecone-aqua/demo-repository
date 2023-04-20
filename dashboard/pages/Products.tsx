import Layout from "@/components/Layout";
import axios from "axios";

export default function Products({ products }: any) {
  console.log("products: ", products);
  return (
    <Layout>
      <div className="m-5">Products Page</div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:2023/product");
  const products = res.data;
  return {
    props: {
      products,
    },
  };
}
