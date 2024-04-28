import PageHeading from "@/components/atoms/header/pageHeading";
import BlogList from "@/components/molleculs/contents/blogList";
import type { PageProps } from "@/interfaces";
import { getList } from "@/libs/sanity";

export default async function Page({ params: { lang } }: PageProps) {
  const datas = await getList({ page: 1, limit: 10, lang });

  return (
    <>
      <PageHeading title="Blog" />
      {!!datas.length && <BlogList initialDatas={datas} lang={lang} />}
    </>
  );
}
