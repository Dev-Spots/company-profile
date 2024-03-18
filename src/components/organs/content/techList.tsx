import MarqueeElement from "@/components/atoms/content/marquee";
import TechCard from "@/components/molleculs/card/tech";
import {
  BiLogoGoLang,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoRedux,
  SiAstro,
  SiBootstrap,
  SiApachecassandra,
  SiCss3,
  SiDjango,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiRabbitmq,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiSocketdotio,
  FaReact,
  FaVuejs,
  DiRedis,
} from "@/components/svg/stacks";
import type { ReactNode } from "react";
import { Typography } from "@/components/atoms/typography/material-tailwind";

const size = "120%";

const techstacks = {
  golang: <BiLogoGoLang size={size} className="text-cyan-300" />,
  postgres: <BiLogoPostgresql size={size} className=" text-blue-900" />,
  python: <BiLogoPython size={size} className=" text-blue-800" />,
  redux: <BiLogoRedux size={size} className=" text-purple-500" />,
  astro: <SiAstro size={size} className=" text-red-600" />,
  bootstrap: <SiBootstrap size={size} className=" text-purple-700" />,
  cassandra: <SiApachecassandra size={size} className=" text-blue-300" />,
  css: <SiCss3 size={size} className=" text-blue-400" />,
  django: <SiDjango size={size} className=" text-green-900" />,
  elasticSearch: <SiElasticsearch size={size} className=" text-green-500" />,
  express: <SiExpress size={size} className=" text-yellow-500" />,
  firebase: <SiFirebase size={size} className=" text-yellow-600" />,
  graphql: <SiGraphql size={size} className=" text-pink-500" />,
  heroku: <SiHeroku size={size} className=" text-purple-900" />,
  html: <SiHtml5 size={size} className=" text-orange-700" />,
  mongoDb: <SiMongodb size={size} className=" text-green-500" />,
  mongoose: <SiMongoose size={size} className=" text-red-500" />,
  mySql: <SiMysql size={size} className=" text-blue-600" />,
  nestjs: <SiNestjs size={size} className=" text-red-600" />,
  netlify: <SiNetlify size={size} />,
  nextjs: <SiNextdotjs size={size} />,
  nodejs: <SiNodedotjs size={size} className=" text-green-900" />,
  rabbitmq: <SiRabbitmq size={size} className=" text-orange-800" />,
  tailwind: <SiTailwindcss size={size} className=" text-blue-400" />,
  typescript: <SiTypescript size={size} className=" text-blue-500" />,
  vercel: <SiVercel size={size} />,
  socketio: <SiSocketdotio size={size} className=" text-orange-800" />,
  react: <FaReact size={size} className=" text-blue-600" />,
  vue: <FaVuejs size={size} className=" text-green-800" />,
  redis: <DiRedis size={size} className=" text-red-500" />,
};

export default function TechStackList() {
  const stacks: Array<[string, ReactNode]> = Object.entries(techstacks).sort(
    () => Math.random() - 0.5
  );

  return (
    <section className="space-y-6 mb-16 container mx-auto my-auto" id="tech">
      <hgroup className="flex justify-center">
        <Typography
          as="h1"
          className="text-cyan-200 text-5xl font-bold leading-tight"
        >
          Our Techstacks
        </Typography>
      </hgroup>
      <div className="flex flex-col space-y-8 overflow-x-hidden h-32">
        {Array.from({ length: 2 }, (_, idx) => (
          <MarqueeElement
            key={idx}
            direction={idx % 2 === 0 ? "left" : "right"}
            withPadding
          >
            {[...stacks]
              .sort(() => Math.random() - 0.5)
              .map(([name, icon]) => (
                <TechCard name={name} svg={icon} key={name} />
              ))}
          </MarqueeElement>
        ))}
      </div>
    </section>
  );
}
