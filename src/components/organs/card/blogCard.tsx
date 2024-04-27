import AnimateCard from "@/components/atoms/cards/animateCard";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import type { Lang } from "@/constants/lang";
import type { StaticImageData } from "next/image";
import Link from "next/link";

export interface BlogCardProps {
  src: string | StaticImageData;
  slug: string;
  title: string;
  lang: Lang;
  desc?: string;
}

export default function BlogCard({
  src,
  slug,
  title,
  lang,
  desc,
}: BlogCardProps) {
  return (
    <AnimateCard className="relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]">
      <Link href={`/${lang}/blog/${slug}`} prefetch passHref>
        <LazyLoadImg
          alt={`${title} pic`}
          src={src}
          width={400}
          height={200}
          className="h-48 rounded-t-xl object-cover object-left"
        />
        <hgroup className="font-sora px-2 py-2">
          <h1 className="cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
            {title}
          </h1>
          {!!desc && (
            <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
              {desc.slice(0, 70) + (desc.length > 70 ? "..." : "")}
            </p>
          )}
        </hgroup>
      </Link>
    </AnimateCard>
  );
}
