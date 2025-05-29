import { gql, request } from "graphql-request";

export async function getAuthorByUsername(slug) {
  const GET_AUTHOR_BY_USERNAME = gql`
    query GetAuthorByUsername($id: ID!) {
      user(id: $id, idType: SLUG) {
        name
        description
        posts(first: 100) {
          edges {
            node {
              id
              title
              slug
              date
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await request(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
      GET_AUTHOR_BY_USERNAME,
      { id: slug }
    );
    return data.user;
  } catch (err) {
    console.error("Error fetching author:", err);
    return null;
  }
}
