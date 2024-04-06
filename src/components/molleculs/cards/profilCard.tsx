import BasicCard from "@/components/atoms/cards/basicCard";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import GithubTooltip from "@/components/atoms/tooltip/github";
import LinkedinTooltip from "@/components/atoms/tooltip/linkedin";
import TwitterTooltip from "@/components/atoms/tooltip/twitter";

export interface ProfileCardProps {
  github?: string;
  twitter?: string;
  linkedin?: string;
  name: string;
  title: string;
  src: string;
  alt: string;
}

export default function ProfileCard({
  github,
  title,
  twitter,
  linkedin,
  name,
  src,
  alt,
}: ProfileCardProps) {
  return (
    <BasicCard
      as="article"
      className="space-y-4 mt-2 xl:space-y-6 cursor-pointer overflow-hidden rounded-l-xl rounded-r-xl border h-max min-w-[350px] border-neutral-300 py-2 !shadow-none duration-500 hover:scale-95 dark:border-neutral-600 dark:bg-neutral-900"
    >
      <header className="flex items-center flex-col">
        <LazyLoadImg
          src={src}
          alt={alt}
          width={100}
          height={100}
          rounded="rounded-full"
          className="lg:hover:scale-105 object-cover object-center mb-10 hover:cursor-pointer h-48 w-48"
        />
      </header>
      <hgroup className="mt-4 text-center leading-6">
        <h4 className="font-bold text-neutral-800 dark:text-neutral-300 text-lg">
          {name}
        </h4>
        <h1 className="text-center text-neutral-800 dark:text-neutral-300 mt-2 leading-relaxed">
          {title}
        </h1>
      </hgroup>
      <footer className="flex justify-center gap-7 pt-2 mb-2">
        {!!github && <GithubTooltip href={github} />}
        {!!linkedin && <LinkedinTooltip href={linkedin} />}
        {!!twitter && <TwitterTooltip href={twitter} />}
      </footer>
    </BasicCard>
  );
}
