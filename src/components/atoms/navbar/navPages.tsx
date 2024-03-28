"use client";

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@/components/atoms/menu/material-tailwind";
import { useState } from "react";
import Link from "next/link";

const pageLists = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export default function NavPages() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Menu allowHover open={open} handler={setOpen}>
        <MenuHandler>
          <a className="cursor-pointer flex items-center hover:text-blue-500 transition-colors">
            Pages
          </a>
        </MenuHandler>
        <MenuList>
          {pageLists.map(({ title, href }) => (
            <Link prefetch href={href} key={title}>
              <MenuItem>{title}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
