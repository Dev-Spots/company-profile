import LazyLoadImg from "@/components/atoms/image/lazyImage";
import logo from "@/components/images/Balkan-Dreams-Logo.png";
import SimpleButtonGroup from "@/components/molleculs/button/buttonGroup";
import { getMainHeroText } from "@/helpers/text";
import type { LangProps } from "@/interfaces";
import { Typography } from "@/components/atoms/typography/material-tailwind";

export default function MainHero({ lang }: LangProps) {
  return (
    <section
      className="container mx-auto flex px-5 py-16 items-center justify-center flex-col"
      id="company"
    >
      <LazyLoadImg
        src={logo}
        className="mb-10 object-cover object-center"
        alt="balkan-dreams-logo"
      />
      <hgroup className="text-center lg:w-5/12 w-full">
        <Typography
          as="h1"
          className="my-4 text-5xl font-bold leading-tight text-cyan-200"
        >
          Balkan Dreams
        </Typography>
        <p className="text-2xl mb-8 text-gray-600 font-sans">
          {getMainHeroText(lang)}
        </p>
        <SimpleButtonGroup datas={[{ text: "btn1" }, { text: "btn2" }]} />
      </hgroup>
    </section>
  );
}
