"use client";

import Image from "next/image";
import Link from "next/link";

export default function PostClient({ post }: { post: any }) {
  console.log("post", post);
  return (
    <section className="py-10 mt-[56px]">
      <div className="w-full max-w-[1246px] mx-auto px-4">
        <article className="">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString()}
          </p>

          {post.featuredImage?.node?.sourceUrl && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              className="my-4"
              width={1080}
              height={600}
            />
          )}

          {post.content ? (
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose"
            />
          ) : (
            <p className="text-gray-500 italic mt-4">Content coming soon...</p>
          )}

          <h3 className="underline mt-6">Category</h3>
          {post.categories.edges.map((list: any) => (
            <Link key={list.node.name} href={`/category/${list.node.slug}`}>
              {list.node.name},
            </Link>
          ))}

          <h3 className="underline mt-4">Tags</h3>
          {post.tags.edges.map((tag: any, index: number) => (
            <div key={index}>
              <Link href={`/tags/${tag.node.slug}`}>{tag.node.name}</Link>,
            </div>
          ))}

          <h3 className="underline mt-4">Author</h3>
          <Link href={`/author/${post.author.node.slug}`}>
            <p className="text-sm text-gray-500 mt-1">
              By {post.author.node.name}
            </p>
          </Link>
        </article>
      </div>
    </section>
  );
}
