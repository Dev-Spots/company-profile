"use client";

import { Bars3Icon, XMarkIcon } from "@/components/icons/outline/heroIcons";
import { Collapse } from "@/components/atoms/collapse/material-tailwind";
import { Navbar } from "@/components/atoms/navbar/material-tailwind";
import { IconButton } from "@/components/icons/material-tailwind";
import NavList from "@/components/atoms/navbar/navList";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarApp() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link as="a" href="#" className="mr-4 cursor-pointer py-1.5">
          Balkan Dreams
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
