import LazyLoadImg from "@/components/atoms/image/lazyImage";
import { getMissionVision } from "@/helpers/text";
import type { LangProps } from "@/interfaces";
import missionIcon from "@/components/images/mission-icon.webp";
import visionIcon from "@/components/images/vision-icon.png";

export default function MissionVision({ lang }: LangProps) {
  const { mission, vision } = getMissionVision(lang);
  return (
    <section
      className="max-w-screen-xl px-4 mx-auto my-8 sm:my-12 sm:px-6 md:my-16 h-1/4"
      id="mission-vision"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <LazyLoadImg
            src={missionIcon}
            alt="mission"
            width={400}
            height={400}
            className="ml-16 sm:ml-[7rem]"
          />
        </div>
        <hgroup className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10">
          <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight sm:leading-none sm:text-6xl lg:text-5xl xl:text-4xl text-cyan-200 underline cursor-default">
            Our Mission
          </h2>
          <p className="mt-1 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
            {mission}
          </p>
        </hgroup>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-0 items-center">
        <hgroup className="hidden lg:block sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10">
          <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-cyan-200 sm:leading-none sm:text-6xl lg:text-5xl xl:text-4xl underline cursor-default">
            Our Vision
          </h2>
          <p className="mt-1 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
            {vision}
          </p>
        </hgroup>
        <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <LazyLoadImg
            className="ml-12"
            width={400}
            height={400}
            src={visionIcon}
            alt="vision"
          />
        </div>
        <hgroup className="lg:hidden sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10">
          <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-cyan-200 sm:leading-none sm:text-6xl lg:text-5xl xl:text-4xl">
            Our Vision
          </h2>
          <p className="mt-1 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-sans">
            {vision}
          </p>
        </hgroup>
      </div>
    </section>
  );
}
