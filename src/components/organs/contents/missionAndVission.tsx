import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import MISSION from "@/components/images/mission-icon.webp";
import VISION from "@/components/images/vision-icon.png";

export default function MissionVision() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat" id="mission-vision">
      <div className="lg:grid lg:grid-cols-12 lg:gap-4 space-y-2 items-center">
        <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <LazyLoadImg
            src={MISSION}
            alt="mission"
            width={300}
            height={300}
            className="ml-32 lg:ml-12"
          />
        </div>
        <hgroup className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10 font-sora">
          <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight sm:leading-none sm:text-6xl lg:text-5xl xl:text-4xl text-cyan-200 underline cursor-default">
            Our Mission
          </h2>
          <p className="mt-1 text-base text-neutral-800 dark:text-neutral-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            At Balkan Dreams, our mission is crystal clear, we strive to
            establish ourselves as the premier agency in the Balkan region. We
            achieve this through our unwavering commitment to delivering
            pixel-perfect, fully-functional, production-ready projects. Join us
            as we reshape the landscape of digital excellence.
          </p>
        </hgroup>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-0 items-center">
        <hgroup className="hidden lg:block sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10 font-sora">
          <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-cyan-200 sm:leading-none sm:text-6xl lg:text-5xl xl:text-4xl underline cursor-default">
            Our Vision
          </h2>
          <p className="mt-1 text-base text-neutral-800 dark:text-neutral-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Balkan Dreams aims to be the industry leader in quality and
            innovation, pursuing perfection and striving to become the top
            company in the Balkan region through a commitment to excellence.
            Were Not Here To Take Part Were Here To Take Over. We&apos;ll
            achieve that by producing the best products, projects, and services.
          </p>
        </hgroup>
        <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <LazyLoadImg
            className="ml-24 lg:ml-12"
            width={300}
            height={300}
            src={VISION}
            alt="vision"
          />
        </div>
        <hgroup className="lg:hidden sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left p-10 font-sora">
          <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-cyan-200 sm:leading-none sm:text-6xl lg:text-5xl xl:text-4xl">
            Our Vision
          </h2>
          <p className="mt-1 text-base text-neutral-800 dark:text-neutral-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Balkan Dreams aims to be the industry leader in quality and
            innovation, pursuing perfection and striving to become the top
            company in the Balkan region through a commitment to excellence.
            Were Not Here To Take Part Were Here To Take Over. We&apos;ll
            achieve that by producing the best products, projects, and services.
          </p>
        </hgroup>
      </div>
    </section>
  );
}
