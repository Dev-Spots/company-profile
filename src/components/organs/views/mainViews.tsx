"use client";

import type { ChildrenProps } from "@/interfaces";
import AOS from "aos";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MainSidebar from "../sidebar/mainSidebar";
import MobileHeader from "../header/mainMobileHeader";

export default function MainViews({ children }: ChildrenProps) {
  const searchParams = useSearchParams();
  const readMode = searchParams.get("read-mode");
  const hideSidebar = readMode?.toLowerCase() === "true";

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <header className="flex w-full flex-col justify-center lg:flex-row lg:gap-5 lg:hidden">
        <MobileHeader />
      </header>
      <main className="no-scrollbar w-full scroll-smooth transition-all duration-300 lg:ml-72 lg:min-h-screen lg:max-w-[854px]">
        {children}
      </main>
      {!hideSidebar && <MainSidebar />}
    </div>
  );
}
