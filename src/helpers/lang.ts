import "server-only";
import type { Lang } from "@/constants/lang";
import MainHeroText from "@/json/mainHero.json";
import MissionVisionText from "@/json/missionAndVision.json";

export const getMainHeroText = (lang?: Lang) => {
  switch (lang) {
    case "id-ID":
      return MainHeroText.indonesia;
    case "bs-BA":
      return MainHeroText.bosnia;
    case "en-US":
    default:
      return MainHeroText.english;
  }
};

export const getMissionVisionText = (lang?: Lang) => {
  const { mission, vision } = MissionVisionText;
  switch (lang) {
    case "id-ID":
      return { mission: mission.indonesia, vision: vision.indonesia };
    case "bs-BA":
      return { mission: mission.bosnia, vision: vision.bosnia };
    case "en-US":
    default:
      return { mission: mission.english, vision: vision.english };
  }
};
