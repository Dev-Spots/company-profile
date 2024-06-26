import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import BALKANDREAMS from "@/components/images/Balkan-Dreams-Logo.png";

export interface CopyrightProps {
  isHover: boolean;
}

export default function Copyright({ isHover }: CopyrightProps) {
  return (
    <footer className="font-sora flex items-center gap-1 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-400">
      {isHover ? (
        <>
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span className="cursor-pointer hover:dark:text-neutral-400">
            Balkan Dreams
          </span>
        </>
      ) : (
        <LazyLoadImg
          src={BALKANDREAMS}
          alt="balkan dreams logo"
          className="animate-pulse rounded-full"
          width={100}
          height={100}
        />
      )}
    </footer>
  );
}
