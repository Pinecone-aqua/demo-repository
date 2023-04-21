import Layout from "@/components/Layout";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { currentUser } = useUser();
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
