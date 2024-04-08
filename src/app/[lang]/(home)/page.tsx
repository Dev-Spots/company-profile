import MainHero from "@/components/organs/hero/mainHero";
import { LANGUAGE } from "@/constants/lang";
import { getMainHeroText } from "@/helpers/lang";
import type { PageProps } from "@/interfaces";

export default function Page({ params: { lang } }: PageProps) {
  const { title, subTitle, desc } = getMainHeroText(lang);
  return <MainHero title={title} subTitle={subTitle} desc={desc} />;
}

export const dinamic = "force-static";

export async function generateStaticParams() {
  return LANGUAGE.map((lang) => ({ lang }));
}
