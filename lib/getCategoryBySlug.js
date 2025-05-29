import { gql, request } from "graphql-request";

export async function getCategoryBySlug(slug) {
  const query = gql`
    query GetCategoryBySlug($slug: ID!) {
      category(id: $slug, idType: SLUG) {
        name
        slug
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
      query,
      { slug }
    );
    return data.category;
  } catch (err) {
    console.error("Error fetching category:", err);
    return null;
  }
}
