import Layout from "@/components/Layout";
import axios from "axios";

export default function Categories({ categories }: any) {
  console.log("categories:", categories);
  return (
    <Layout>
      <div className="m-5">Categories Page</div>
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
