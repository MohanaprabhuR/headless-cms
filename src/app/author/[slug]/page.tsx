import { getAuthorByUsername } from "../../../../lib/getAuthorBySlug";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShowCarousalCard from "@/component/showCarousalCard/showCarousalCard";

export default async function AuthorPage({
  params,
}: {
  params: { slug: string };
}) {
  const author = await getAuthorByUsername(params.slug);
  if (!author) return notFound();

  return (
    <section className="py-10 mt-[56px]">
      <div className="w-full max-w-[1246px] mx-auto px-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
          <p className="mb-4 text-gray-600">{author.description}</p>
        </div>

        <ul className="flex flex-wrap gap-[40px_22px]">
          {author.posts.edges.map(({ node }: any) => (
            <li key={node.id}>
              <Link
                href={`/posts/${node.slug}`}
                className="text-xl font-medium hover:underline"
              >
                {node.featuredImage?.node?.sourceUrl && (
                  <ShowCarousalCard
                    image={node.featuredImage}
                    title={node.title}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
