import MainHero from "@/components/organs/hero/mainHero";
import type { Languages, PageProps } from "@/interfaces";
import { Suspense } from "react";

export default function HeroSection({
  searchParams,
}: PageProps<any, { lang?: Languages }>) {
  return (
    <Suspense>
      {" "}
      <MainHero lang={searchParams?.lang} />
    </Suspense>
  );
}

export const ssg = false;
