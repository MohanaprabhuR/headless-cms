import PressClient from "@/app/press/page-client";
import { fetchHomePageBySlug } from "@/utils/fetchData";

export default async function pressPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id?: string };
}) {
  const slug = params.slug;
  const pageList = await fetchHomePageBySlug(slug);

  const { id } = searchParams;
  const allItems = pageList.pages.edges.map((edge: any) => edge.node);
  const filteredData = id
    ? allItems.filter((item: any) => item.id?.toString() === id)
    : allItems;

  return (
    <div className="mt-50">
      <PressClient data={filteredData} />
    </div>
  );
}
