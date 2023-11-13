import { gql, useQuery } from "@apollo/client";

function useGetAllCategories() {
  const GET_CATEGORIES = gql`
    query Query {
      getAllCategories {
        name
        image
      }
    }
  `;
  return useQuery(GET_CATEGORIES);
}

export { useGetAllCategories };
