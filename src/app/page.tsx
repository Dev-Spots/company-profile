import MissionVision from "@/components/organs/content/mission-vision";
import MainHero from "@/components/organs/hero/mainHero";
import NavbarApp from "@/components/organs/navbar/navbarApp";
import type { Languages, PageProps } from "@/interfaces";

export default function Home({
  searchParams,
}: PageProps<any, { lang?: Languages }>) {
  return (
    <>
      <NavbarApp />
      <main>
        <MainHero lang={searchParams?.lang} />
        <MissionVision lang={searchParams?.lang} />
      </main>
    </>
  );
}
