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
      <div className="card">
        <p className="desc">abc</p>
        <div className="card-img">
          <img src="./test.png" alt="" />
        </div>
        <div className="card-detail">
          <p className="card-detail-title">Iphone 13</p>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
            earum!
          </p>
          <p className="card-detail-price">120000</p>
        </div>
      </div>
    </Layout>
  );
}
