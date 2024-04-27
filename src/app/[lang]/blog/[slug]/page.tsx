import { notFound } from "next/navigation";
import BlogViews from "@/components/organs/views/blogViews";
import type { PageProps } from "@/interfaces";
import { getBySlug } from "@/libs/sanity";
import BackBtn from "@/components/molleculs/buttons/backBtn";

export default async function Page({
  params: { lang, slug },
}: PageProps<{ slug: string }>) {
  const data = await getBySlug(lang, slug);
  if (!data) notFound();

  return (
    <>
      <BackBtn />
      <BlogViews value={data.body} />
    </>
  );
}

export const dynamic = "force-static";
