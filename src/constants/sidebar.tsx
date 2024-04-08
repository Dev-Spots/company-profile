import {
  BiPaperPlane,
  BiHomeSmile,
  BiLeaf,
} from "@/components/atoms/icons/react-icons-bi";
import type { Lang } from "./lang";

export const getAboutTitle = (lang?: Lang) => {
  switch (lang) {
    case "id-ID":
      return "Tentang";
    case "bs-BA":
      return "_o";
    case "en-US":
    default:
      return "About";
  }
};

export const getContactTitle = (lang?: Lang) => {
  switch (lang) {
    case "id-ID":
      return "Kontak";
    case "bs-BA":
      return "kontakt";
    case "en-US":
    default:
      return "Contact";
  }
};

export const SIDEBAR_MENU = (lang: Lang) => [
  {
    title: "Home",
    href: `/${lang}`,
    icon: <BiHomeSmile size={20} />,
    isExternal: false,
  },
  {
    title: getAboutTitle(lang),
    href: `/${lang}/about`,
    icon: <BiLeaf size={20} />,
    isExternal: false,
  },
  {
    title: getContactTitle(lang),
    href: `/${lang}/contact`,
    icon: <BiPaperPlane size={20} />,
    isExternal: false,
  },
];
