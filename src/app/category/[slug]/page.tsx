import { getCategoryBySlug } from "../../../../lib/getCategoryBySlug";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShowCarousalCard from "@/component/showCarousalCard/showCarousalCard";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) return notFound();

  return (
    <section className="py-10 mt-[56px]">
      <div className="w-full max-w-[1246px] mx-auto px-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
          <p className="mb-4 text-gray-600">{category.description}</p>
        </div>
        <ul className="flex flex-wrap gap-[40px_22px]">
          {category.posts.edges.map(({ node }: any) => (
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
