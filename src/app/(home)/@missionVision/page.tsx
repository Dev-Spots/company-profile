import MissionVision from "@/components/organs/content/mission-vision";
import type { Languages, PageProps } from "@/interfaces";
import { Suspense } from "react";

export default function MissionVisionSection({
  searchParams,
}: PageProps<any, { lang?: Languages }>) {
  return (
    <Suspense>
      <MissionVision lang={searchParams?.lang} />
    </Suspense>
  );
}
