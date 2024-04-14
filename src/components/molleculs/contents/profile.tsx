"use client";

import useMenu from "@/hooks/useMenu";
import useMobile from "@/hooks/useMobile";
import clsxm from "@/libs/clsxm";
import { useEffect } from "react";
import ProfileHeader from "./profileHeader";
import ThemeButtonToggle from "../buttons/themeToogleBtn";
import MobileMenuButton from "../buttons/mobileMenuBtn";
import { AnimatePresence } from "framer-motion";
import MobileSidebarMenu from "../menu/mobileSidebarMenu";
import ChangeLangBtn from "../buttons/changeLang";

export default function Profile() {
  const isMobile = useMobile();
  const { isOpen, toggleMenu } = useMenu();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={clsxm(
        "fixed z-20 w-full bg-white p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-dark lg:relative lg:border-none lg:!bg-transparent lg:p-0 xl:shadow-none",
        isOpen && "pb-0"
      )}
    >
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4">
        <ProfileHeader expand={isOpen} imgSize={isMobile ? 40 : 100} />
        {isMobile && (
          <div
            className={clsxm(
              "mt-2 flex items-center gap-5 lg:hidden",
              isOpen &&
                "h-[120px] flex-col-reverse !items-end justify-between pb-1"
            )}
          >
            <ChangeLangBtn />
            <ThemeButtonToggle />
            <MobileMenuButton expand={isOpen} setExpand={toggleMenu} />
          </div>
        )}
      </div>
      {isMobile && (
        <AnimatePresence>{isOpen && <MobileSidebarMenu />}</AnimatePresence>
      )}
    </header>
  );
}
