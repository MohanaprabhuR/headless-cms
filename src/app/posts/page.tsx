import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "@/utils/fetchData";
import ShowCarousalCard from "@/component/showCarousalCard/showCarousalCard";

export default async function PostsPage() {
  const postList = await fetchPosts();
  const posts = postList.posts.edges;

  console.log("posts", posts);

  return (
    <section className="py-24 mt-[56px]">
      <div className="w-full max-w-[1246px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        <ul className="flex flex-wrap gap-[40px_22px]">
          {posts.map(({ node: post }) => (
            <li key={post.id} id={post.id}>
              <Link href={`/posts/${post.slug}`}>
                {/* <h2
                  className="text-xl font-semibold hover:underline"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                /> */}
                {post.featuredImage?.node?.sourceUrl && (
                  <div className="">
                    <ShowCarousalCard
                      image={post.featuredImage}
                      title={post.title}
                    />
                  </div>
                )}
              </Link>

              {/* <div
                className="text-gray-700 mt-2"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />

              <h3 className="underline">Category</h3>
              {post.categories.edges.map((list, index) => (
                <div key={index}>{list.node.name}</div>
              ))}
              <h3 className="underline">Tags</h3>
              {post.tags.edges.map((tag, index) => (
                <div key={index}>{tag.node.name}</div>
              ))}
              <h3 className="underline">Author</h3>
              <p className="text-sm text-gray-500 mt-2">
                By {post.author.node.name} —{" "}
                {new Date(post.date).toDateString()}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
