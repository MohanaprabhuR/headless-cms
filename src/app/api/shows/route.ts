// app/api/home/route.ts

import { NextResponse } from "next/server";
import { gql, request } from "graphql-request";

const QUERY = gql`
  query GetAllPages {
    pages(first: 100) {
      edges {
        node {
          id
          title
          content
          slug
          date
          uri
          author {
            node {
              id
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const API_URL = process.env.API_URL;
  if (!API_URL) {
    console.error("Missing API_URL in environment variables");
    return NextResponse.json(
      { error: "API_URL is not defined in the environment" },
      { status: 500 }
    );
  }

  try {
    const data = await request(`${API_URL}/graphql`, QUERY);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("GraphQL request error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch data from WordPress GraphQL API",
        details: error.response?.errors ?? error.message,
      },
      { status: 500 }
    );
  }
}
