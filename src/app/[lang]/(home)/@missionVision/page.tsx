import MissionVision from "@/components/organs/contents/missionAndVission";
import { getMissionVisionText } from "@/helpers/lang";
import type { PageProps } from "@/interfaces";

export default function Page({ params: { lang } }: PageProps) {
  const { mission, vision } = getMissionVisionText(lang);
  return (
    <MissionVision
      missionText={mission.text}
      missionTitle={mission.title}
      visionText={vision.text}
      visionTitle={vision.title}
    />
  );
}
