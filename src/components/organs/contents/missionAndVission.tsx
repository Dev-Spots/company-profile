import SectionHeading from "@/components/atoms/header/sectionHeading";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import MISSION from "@/components/images/mission-icon.webp";
import VISION from "@/components/images/vision-icon.png";
import { FiTarget, FiEye } from "@/components/atoms/icons/react-icons-fi";

export interface MissionVisionProps {
  missionTitle: string;
  visionTitle: string;
  missionText: string;
  visionText: string;
}

export default function MissionVision({
  missionText,
  missionTitle,
  visionText,
  visionTitle,
}: MissionVisionProps) {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat" id="mission-vision">
      <div className="lg:grid lg:grid-cols-12 lg:gap-4 space-y-2 items-center">
        <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center bg-neutral-700 rounded-full dark:bg-inherit h-3/4">
          <LazyLoadImg
            src={MISSION}
            alt="mission"
            width={300}
            height={300}
            className="ml-32 lg:ml-12"
          />
        </div>
        <hgroup className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10 font-sora">
          <SectionHeading
            title={missionTitle}
            icon={<FiTarget size={20} />}
            className="!text-cyan-500 dark:!text-cyan-200 !text-2xl"
          />
          <p className="mt-1 text-base text-neutral-800 dark:text-neutral-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {missionText}
          </p>
        </hgroup>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-0 items-center">
        <hgroup className="hidden lg:block sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10 font-sora">
          <SectionHeading
            title={visionTitle}
            icon={<FiEye size={20} />}
            className="!text-cyan-500 dark:!text-cyan-200 !text-2xl"
          />
          <p className="mt-1 text-base text-neutral-800 dark:text-neutral-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {visionText}
          </p>
        </hgroup>
        <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center bg-neutral-700 dark:bg-inherit h-3/4 rounded-full">
          <LazyLoadImg
            className="ml-24 lg:ml-12"
            width={300}
            height={300}
            src={VISION}
            alt="vision"
          />
        </div>
        <hgroup className="lg:hidden sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10 font-sora">
          <SectionHeading
            title={visionTitle}
            icon={<FiEye size={20} />}
            className="!text-cyan-500 dark:!text-cyan-200 !text-2xl"
          />
          <p className="mt-1 text-base text-neutral-800 dark:text-neutral-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {visionText}
          </p>
        </hgroup>
      </div>
    </section>
  );
}
