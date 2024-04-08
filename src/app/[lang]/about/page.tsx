import { getAboutText } from "@/helpers/lang";
import type { PageProps } from "@/interfaces";
import BALKANDREAMS from "@/components/images/BD-Logo.png";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import { LANGUAGE } from "@/constants/lang";
import PageHeading from "@/components/atoms/header/pageHeading";

export default function Page({ params: { lang } }: PageProps) {
  const texts = getAboutText(lang);

  const title = (() => {
    switch (lang) {
      case "id-ID":
        return "Tentang Kami";
      case "bs-BA":
        return "_o";
      case "en-US":
      default:
        return "About Us";
    }
  })();

  return (
    <section className="container mx-auto items-center px-5 py-12">
      <div className="flex justify-center">
        <LazyLoadImg
          className="mb-10 object-cover object-center rounded-3xl"
          alt="balkan-dreams-logo"
          src={BALKANDREAMS}
          width={350}
          height={350}
        />
      </div>
      <PageHeading title={title} className="text-cyan-500 dark:text-cyan-200" />
      <ul className="flex flex-col space-y-2 text-lg font-sora text-neutral-800 dark:text-neutral-300">
        {texts.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </section>
  );
}

export async function generateStaticParams() {
  return LANGUAGE.map((lang) => ({ lang }));
}
