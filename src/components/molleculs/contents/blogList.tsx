"use client";

import OvalLoader from "@/components/atoms/loaders/ovalLoader";
import BlogCard from "@/components/organs/card/blogCard";
import type { Lang } from "@/constants/lang";
import useScroll from "@/hooks/useScroll";
import type { SanityPostResponse } from "@/interfaces/blog";
import { getList, loadSanityImg } from "@/libs/sanity";

export interface BlogListProps {
  initialDatas: (SanityPostResponse & { authorName?: string })[];
  lang: Lang;
}

export default function BlogList({ initialDatas, lang }: BlogListProps) {
  const { pending, data, ref } = useScroll<
    SanityPostResponse & { authorName?: string }
  >({
    initialState: initialDatas,
    fetchLimit: 10,
    handler: getList,
    filterCond: (curr, prev) => prev.some((el) => el._id !== curr._id),
  });

  return data.length ? (
    <section className="h-[26rem] flex flex-col justify-between">
      <div className="grid gap-6 pt-2 sm:grid-cols-2 mb-4 space-y-2 h-80 overflow-x-visible overflow-y-scroll no-scrollbar">
        {data.map((el) => (
          <BlogCard
            key={el._id}
            slug={el.slug.current}
            src={loadSanityImg(el.mainImage).fit("max").auto("format").url()}
            title={el.title}
            lang={lang}
            desc={el.body.find((el) => el.style === "normal")?.children[0].text}
          />
        ))}
      </div>
      <br />
      <div ref={ref} className="flex items-center justify-center">
        {pending && <OvalLoader />}
      </div>
    </section>
  ) : null;
}
