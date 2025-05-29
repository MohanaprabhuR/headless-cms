// lib/getPostBySlug.js
import { gql, request } from "graphql-request";

export async function getPostBySlug(slug) {
  const query = gql`
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        excerpt
        content
        date
        slug
        author {
          node {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        tags {
          edges {
            node {
              tagId
              name
              slug
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
    return data.post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
