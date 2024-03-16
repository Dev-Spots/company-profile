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
  golang: <BiLogoGoLang size={size} />,
  postgres: <BiLogoPostgresql size={size} />,
  python: <BiLogoPython size={size} />,
  redux: <BiLogoRedux size={size} />,
  astro: <SiAstro size={size} />,
  bootstrap: <SiBootstrap size={size} />,
  cassandra: <SiApachecassandra size={size} />,
  css: <SiCss3 size={size} />,
  django: <SiDjango size={size} />,
  elasticSearch: <SiElasticsearch size={size} />,
  express: <SiExpress size={size} />,
  firebase: <SiFirebase size={size} />,
  graphql: <SiGraphql size={size} />,
  heroku: <SiHeroku size={size} />,
  html: <SiHtml5 size={size} />,
  mongoDb: <SiMongodb size={size} />,
  mongoose: <SiMongoose size={size} />,
  mySql: <SiMysql size={size} />,
  nestjs: <SiNestjs size={size} />,
  netlify: <SiNetlify size={size} />,
  nextjs: <SiNextdotjs size={size} />,
  nodejs: <SiNodedotjs size={size} />,
  rabbitmq: <SiRabbitmq size={size} />,
  tailwind: <SiTailwindcss size={size} />,
  typescript: <SiTypescript size={size} />,
  vercel: <SiVercel size={size} />,
  socketio: <SiSocketdotio size={size} />,
  react: <FaReact size={size} />,
  vue: <FaVuejs size={size} />,
  redis: <DiRedis size={size} />,
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
      <div className="flex flex-col space-y-1 overflow-x-hidden h-20">
        {Array.from({ length: 2 }, (_, idx) => (
          <MarqueeElement
            key={idx}
            direction={idx % 2 === 0 ? "left" : "right"}
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
