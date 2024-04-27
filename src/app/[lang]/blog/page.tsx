import PageHeading from "@/components/atoms/header/pageHeading";
import BlogCard from "@/components/organs/card/blogCard";
import type { PageProps } from "@/interfaces";
import { getList, loadSanityImg } from "@/libs/sanity";

export default async function Page({ params: { lang } }: PageProps) {
  const datas = await getList({ page: 1, limit: 10, lang });

  return (
    <>
      <PageHeading title="Blog" />
      <div className="grid gap-6 pt-2 sm:grid-cols-2 mb-4 space-y-2">
        {!!datas.length &&
          datas.map((el) => (
            <BlogCard
              key={el._id}
              slug={el.slug.current}
              src={loadSanityImg(el.mainImage).fit("max").auto("format").url()}
              title={el.title}
              lang={lang}
              desc={
                el.body.find((el) => el.style === "normal")?.children[0].text
              }
            />
          ))}
      </div>
    </>
  );
}
