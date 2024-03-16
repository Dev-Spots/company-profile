import MainHero from "@/components/organs/hero/mainHero";
import type { Languages, PageProps } from "@/interfaces";

export default function HeroSection({
  searchParams,
}: PageProps<any, { lang?: Languages }>) {
  return <MainHero lang={searchParams?.lang} />;
}
