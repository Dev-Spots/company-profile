import LazyLoadImg from "@/components/atoms/image/lazyImage";
import logo from "@/components/images/Balkan-Dreams-Logo.png";
import SimpleButtonGroup from "@/components/molleculs/button/buttonGroup";
import { getMainHeroText } from "@/helpers/text";
import type { LangProps } from "@/interfaces";

export default function MainHero({ lang }: LangProps) {
  return (
    <section
      className="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      id="company"
    >
      <LazyLoadImg
        src={logo}
        className="mb-10 object-cover object-center"
        alt="balkan-dreams-logo"
      />
      <div className="text-center lg:w-5/12 w-full">
        <hgroup>
          <h1 className="my-4 text-5xl font-bold leading-tight text-cyan-200">
            Balkan Dreams
          </h1>
          <p className="text-2xl mb-8 text-gray-600 font-sans">
            {getMainHeroText(lang)}
          </p>
        </hgroup>
        <SimpleButtonGroup datas={[{ text: "btn1" }, { text: "btn2" }]} />
      </div>
    </section>
  );
}
