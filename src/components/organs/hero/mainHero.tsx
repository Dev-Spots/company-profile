import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import TypographAnimation from "@/components/atoms/typography/animate-typography";
import BALKANDREAMSLOGO from "@/components/images/Balkan-Dreams-Logo.png";

export default function MainHero() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat" id="company">
      <header className="flex items-center justify-between">
        <div className="font-sora flex gap-2 text-2xl font-medium lg:text-3xl">
          <TypographAnimation
            className="my-4 cursor-default underline text-2xl font-bold leading-tight text-cyan-200 font-sora"
            sequence={["Balkan Dreams", "Your software development solutions"]}
          />
        </div>
        <LazyLoadImg
          src={BALKANDREAMSLOGO}
          alt="balkan-dreams-logo"
          className="object-cover object-center mt-4 mr-4"
          width={100}
          height={100}
        />
      </header>
      <article className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-8">
          <li>Software House</li>
          <li>
            Based in Bosnia <span className="ml-1">🇧🇦</span>
          </li>
        </ul>
        <p className="text-lg mb-4 text-neutral-800 dark:text-neutral-300 font-sora">
          Balkan Dreams isn&apos;t just another player in the game – we&apos;re
          here to dominate the field and assert our position as the undisputed
          leader in software development across the entire Balkan region.
        </p>
      </article>
    </section>
  );
}
