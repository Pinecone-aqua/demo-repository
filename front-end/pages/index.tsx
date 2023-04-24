import Layout from "@/components/Layout";
import { useProduct } from "@/context/PropductContext";

import { useUser } from "@/context/UserContext";
import { useFetch } from "@/custom-hooks/useFetch";

export default function Home() {
  const { currentUser } = useUser();
  const { products, setProducts } = useProduct("abc");
  const { fetchedData } = useFetch("http://localhost:3002/product/all");
  console.log(fetchedData);

  console.log("products: ", products);
  setProducts([]);

  function deleteHandler() {
    fetch("http://localhost:2023/user/643fbf167054e2b349de36eb", {
      method: "DELETE",
      headers: {
        authorization: `Barear: ${currentUser}`,
      },
    }).then((res) => {
      console.log("res: ", res);
    });
  }

  return (
    <Layout>
      <button onClick={deleteHandler}>Delete User</button>
      <div>Hello</div>
    </Layout>
  );
}
