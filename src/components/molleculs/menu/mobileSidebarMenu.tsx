"use client";

import { motion } from "framer-motion";
import { SIDEBAR_MENU } from "@/constants/sidebar";
import SidebarMenu from "./sidebarMenu";
import Breakline from "@/components/atoms/contents/breakline";
import { useParams } from "next/navigation";
import type { Lang } from "@/constants/lang";

export default function MobileSidebarMenu() {
  const { lang } = useParams<{ lang: Lang }>();
  return (
    <motion.nav
      className="my-3 flex h-screen flex-col"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Breakline className="mt-2" />
      <SidebarMenu lists={SIDEBAR_MENU(lang)} />
    </motion.nav>
  );
}
