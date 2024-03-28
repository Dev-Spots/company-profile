import LazyLoadImg from "@/components/atoms/image/lazyImage";
import logo from "@/components/images/BD-Logo.png";
import { getAboutText } from "@/helpers/text";
import type { Languages, PageProps } from "@/interfaces";

export default function Page({
  searchParams,
}: PageProps<any, { lang?: Languages }>) {
  const texts = getAboutText(searchParams?.lang);
  return (
    <section className="container mx-auto flex items-center px-5 py-12 justify-center flex-col">
      <LazyLoadImg
        className="mb-10 object-cover object-center"
        alt="balkan-dreams-logo"
        src={logo}
        width={350}
        height={350}
      />
      <summary className="flex flex-col space-y-2 text-lg font-serif text-gray-50">
        {texts.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
      </summary>
    </section>
  );
}
