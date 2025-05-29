import { gql, request } from "graphql-request";

export async function getTagsBySlug(slug) {
  const query = gql`
    query GetTagsBySlug($slug: ID!) {
      tag(id: $slug, idType: SLUG) {
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
    return data.tag;
  } catch (err) {
    console.error("Error fetching tag:", err);
    return null;
  }
}
