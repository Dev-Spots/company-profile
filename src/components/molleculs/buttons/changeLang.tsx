"use client";

import { LANGUAGEOBJ, type Lang } from "@/constants/lang";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoLanguage } from "@/components/atoms/icons/react-icons-io5";
import Link from "next/link";

export default function ChangeLangBtn() {
  const pathname = usePathname();
  const [hover, setHover] = useState<boolean>(false);

  const generateUrl = (lang: Lang) => {
    const urls = pathname.split("/");
    urls[1] = lang;

    return urls.join("/");
  };

  return hover ? (
    <dialog
      onMouseLeave={() => setHover(false)}
      style={{ zIndex: "9999" }}
      className="flex no-scrollbar scroll-smooth relative h-20 w-40 rounded-xl flex-col bg-white dark:bg-neutral-800 py-1 px-1 text-gray-800 shadow-xl overflow-x-scroll overflow-y-visible"
    >
      {Object.keys(LANGUAGEOBJ).map((el) => (
        <Link
          key={el}
          href={generateUrl(el as Lang)}
          prefetch
          style={{ zIndex: "9999" }}
          className="my-2 border-b-2 px-4 border-gray-100 font-semibold text-neutral-800 dark:text-neutral-300 hover:text-neutral-950 hover:dark:text-neutral-400"
        >
          {LANGUAGEOBJ[el as Lang]}
        </Link>
      ))}
    </dialog>
  ) : (
    <motion.button
      id="change-lang-btn"
      aria-label="Change Language Button"
      className="rounded-xl p-2 bg-white dark:bg-neutral-800"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      onClick={() => setHover(!hover)}
    >
      <IoLanguage />
    </motion.button>
  );
}
