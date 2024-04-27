import type { Lang } from "@/constants/lang";
import type { SanityPostResponse } from "@/interfaces/blog";
import { createClient } from "@sanity/client";
import SanityImg from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "v2022-03-07",
});

const imgLoader = SanityImg(client);

export const loadSanityImg = (source: SanityImageSource) =>
  imgLoader.image(source);

export default client;

export const getList = async ({
  page = 1,
  limit,
  lang = "en-US",
}: {
  page: number;
  limit: number;
  lang?: Lang;
}) => {
  const { signal } = new AbortController();
  return await client.fetch<(SanityPostResponse & { authorName?: string })[]>(
    `*[
    _type == 'post' &&
    count(categories[_ref in 
        *[_type == 'category' && title == '${lang}']._id
      ]) == 1
   ] 
   {
    'authorName': *[_type == 'author' && _id == ^.author._ref][0].name,
      ...
    } | order(_createdAt) [${page - 1}...${page * limit}]`,
    {},
    { signal }
  );
};

export const getBySlug = async (lang: Lang, slug: string) => {
  const { signal } = new AbortController();
  const [data] = await client.fetch<
    (SanityPostResponse & { authorName: string })[]
  >(
    `*[_type == 'post' && slug.current == '${slug}' &&
          count(categories[_ref in 
            *[_type == 'category' && title == '${lang}']._id
          ]) == 1
        ] {
          'authorName': *[_type == 'author' && _id == ^.author._ref][0].name,
            ...
        }`,
    {},
    { signal }
  );
  return !!data ? data : null;
};
