"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
type MenuItem = {
  label: string;
  connectedNode?: {
    node?: {
      slug: string;
      id?: string | number;
    };
  };
};

type Menu = {
  menuItems?: {
    nodes?: MenuItem[];
  };
};

type HeaderClientProps = {
  menus?: Menu[];
};
const HeaderClient: React.FC<HeaderClientProps> = ({ menus }) => {
  const menu = menus?.[0];

  const homeMenuItem = menu?.menuItems?.nodes?.find(
    (item) => item.label.toLowerCase() === "home"
  );

  const slug = homeMenuItem?.path || "/";
  const homeId = homeMenuItem?.connectedNode?.node?.id;

  return (
    <header className="fixed z-[9999] bg-[rgba(255,255,255,0.9)] px-0 py-[11px] border-b-[0.5px] border-b-[rgba(0,0,0,0.1)] border-solid top-0 inset-x-0 before:content before:absolute before:h-full before:w-full before:backdrop-blur-[30px] before:z-[-1] before:left-0 before:top-0">
      <div className="w-full max-w-[1246px] mx-auto my-0 px-4 py-0">
        <div className="navbar flex justify-between items-center">
          {/* <Link
            className="site-logo"
            href={{
              pathname: slug,
              query: homeId ? { id: homeId } : undefined,
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Univer Studio Group"
              width={155}
              height={34}
            />
          </Link> */}

          <Link className="site-logo" href="/">
            <Image
              src="/images/logo.png"
              alt="Univer Studio Group"
              width={155}
              height={34}
            />
          </Link>
          <ul className="flex gap-6">
            {menu?.menuItems?.nodes?.map((item: MenuItem, index: number) => (
              <li key={index}>
                <Link
                  href={{
                    pathname: item?.path as string,
                    query: { id: item?.connectedNode?.node?.id },
                  }}
                  className="text-sm hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
