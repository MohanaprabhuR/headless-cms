import { getPostBySlug } from "../../../../lib/getPostBySlug";
import { notFound } from "next/navigation";
import PostClient from "@/app/posts/[slug]/page-client";

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return <PostClient post={post} />;
}
