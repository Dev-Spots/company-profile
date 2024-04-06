"use client";

import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import useMounted from "@/hooks/useMounted";
import { useTheme } from "next-themes";
import { useState } from "react";
import BALKANDREAMSLOGO from "@/components/images/Balkan-Dreams-Logo.png";

export default function MainSidebar() {
  const [hover, setHover] = useState<boolean>(false);
  const mount = useMounted();
  const { resolvedTheme } = useTheme();

  return (
    <aside
      className="fixed bottom-0 left-0 top-0 z-30 hidden w-16 flex-col items-center justify-between overflow-hidden rounded-r-2xl px-2 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 dark:shadow-neutral-800 lg:flex"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <section
        className={`flex h-64 ${hover ? "items-start" : "items-center"}`}
      >
        {hover ? (
          <></>
        ) : (
          <article className="flex flex-col items-center gap-8">
            <div className="z-10 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
              <LazyLoadImg
                src={BALKANDREAMSLOGO}
                alt="balkan-dreams-logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </article>
        )}
      </section>
    </aside>
  );
}
