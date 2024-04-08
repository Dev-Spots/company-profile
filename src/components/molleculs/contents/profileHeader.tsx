import clsxm from "@/libs/clsxm";
import BACKDROP from "@/components/images/backdrop.webp";
import Link from "next/link";
import Image from "next/image";
import ThemeButtonToggle from "../buttons/themeToogleBtn";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import BALKANDREAM from "@/components/images/Balkan-Dreams-Logo.png";

export interface ProfileHeaderProps {
  expand: boolean;
  imgSize: number;
}

export default function ProfileHeader({ expand, imgSize }: ProfileHeaderProps) {
  return (
    <article
      className={clsxm(
        "flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5",
        expand && "flex-col !items-start"
      )}
    >
      <div className="relative hidden w-full flex-col items-center overflow-hidden pb-2 lg:flex">
        <div className="h-24 w-full overflow-hidden rounded-lg dark:brightness-50">
          <Image
            src={BACKDROP}
            alt="backdrop"
            width={100}
            height={100}
            className="w-full scale-125 rounded-full"
            priority
          />
        </div>
        <div className="absolute -right-1 bottom-[55px] z-10 rounded-xl py-2 pr-2">
          <ThemeButtonToggle />
        </div>
        <div className="z-10 -mt-11 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
          <LazyLoadImg
            src={BALKANDREAM}
            alt="profile"
            width={expand ? 80 : imgSize * 0.9}
            height={expand ? 80 : imgSize * 0.9}
            rounded="rounded-full"
            className="lg:hover:scale-105"
          />
        </div>
      </div>
      <LazyLoadImg
        src={BALKANDREAM}
        alt="profile"
        width={expand ? 80 : imgSize * 0.9}
        height={expand ? 80 : imgSize * 0.9}
        rounded="rounded-full"
        className="lg:hidden lg:hover:scale-105"
      />
      <div className="mt-1 flex items-center gap-2">
        <Link href="/" passHref>
          <h2 className="font-sora flex-grow whitespace-nowrap text-lg font-medium lg:text-xl">
            Balkan Dreams
          </h2>
        </Link>
      </div>
    </article>
  );
}
