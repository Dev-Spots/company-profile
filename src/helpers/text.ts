import type { Languages } from "@/interfaces";
import headerDesc from "@/json/descriptionHead.json";
import missionVision from "@/json/missionAndVision.json";
import mainHeroText from "@/json/mainHero.json";
import aboutText from "@/json/about.json";

export const getHeaderDesc = (lang?: Languages | string) => {
  switch (lang) {
    case "Bosnia":
      return headerDesc["bosnia"];
    case "Indonesia":
      return headerDesc["indonesia"];
    case "English":
    default:
      return headerDesc["english"];
  }
};

export const getMissionVision = (lang?: Languages | string) => {
  switch (lang) {
    case "Bosnia":
      return {
        mission: missionVision.mission["bosnia"],
        vision: missionVision.vision["bosnia"],
      };
    case "Indonesia":
      return {
        mission: missionVision.mission["indonesia"],
        vision: missionVision.vision["indonesia"],
      };
    case "English":
    default:
      return {
        mission: missionVision.mission["english"],
        vision: missionVision.vision["english"],
      };
  }
};

export const getMainHeroText = (lang?: Languages | string) => {
  switch (lang) {
    case "Bosnia":
      return mainHeroText["bosnia"];
    case "Indonesia":
      return mainHeroText["indonesia"];
    case "English":
    default:
      return mainHeroText["english"];
  }
};

export const getAboutText = (lang?: Languages | string) => {
  switch (lang) {
    case "Bosnia":
      return aboutText["bosnia"];
    case "Indonesia":
      return aboutText["indonesia"];
    case "English":
    default:
      return aboutText["english"];
  }
};
