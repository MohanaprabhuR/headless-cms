import HeaderClient from "@/app/header/page-client";

import { fetchMenus } from "@/utils/fetchData";

export default async function Header() {
  const menusList = await fetchMenus();
  const menus = menusList.menus.nodes;
  console.log("meuns", menus);
  return (
    <div>
      <HeaderClient menus={menus} />
    </div>
  );
}
