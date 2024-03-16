import MissionVision from "@/components/organs/content/mission-vision";
import type { Languages, PageProps } from "@/interfaces";

export default function MissionVisionSection({
  searchParams,
}: PageProps<any, { lang?: Languages }>) {
  return <MissionVision lang={searchParams?.lang} />;
}
