import MarqueeElement from "@/components/atoms/contents/marquee";
import TechCard from "@/components/molleculs/cards/techCard";
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
} from "@/components/atoms/icons/stacks";
import type { ReactNode } from "react";
import Link from "next/link";
import SectionHeading from "@/components/atoms/header/sectionHeading";
import { FiCode } from "@/components/atoms/icons/react-icons-fi";

const size = "120%";

const techstacks = {
  golang: (
    <Link target="_blank" href="https://go.dev/">
      <BiLogoGoLang size={size} className="text-cyan-300" />
    </Link>
  ),
  postgres: (
    <Link target="_blank" href="https://www.postgresql.org/">
      <BiLogoPostgresql size={size} className=" text-blue-900" />
    </Link>
  ),
  python: (
    <Link target="_blank" href="https://www.python.org/">
      <BiLogoPython size={size} className=" text-blue-800" />
    </Link>
  ),
  redux: (
    <Link target="_blank" href="https://redux.js.org/">
      <BiLogoRedux size={size} className=" text-purple-500" />
    </Link>
  ),
  astro: (
    <Link target="_blank" href="https://astro.build/">
      <SiAstro size={size} className=" text-red-600" />
    </Link>
  ),
  bootstrap: (
    <Link target="_blank" href="https://getbootstrap.com/">
      {" "}
      <SiBootstrap size={size} className=" text-purple-700" />
    </Link>
  ),
  cassandra: (
    <Link target="_blank" href="https://cassandra.apache.org/_/index.html">
      <SiApachecassandra size={size} className=" text-blue-300" />
    </Link>
  ),
  css: (
    <Link target="_blank" href="https://devdocs.io/css/">
      <SiCss3 size={size} className=" text-blue-400" />
    </Link>
  ),
  django: (
    <Link target="_blank" href="https://www.djangoproject.com/">
      <SiDjango size={size} className=" text-green-900" />
    </Link>
  ),
  elasticSearch: (
    <Link target="_blank" href="https://www.elastic.co/elasticsearch">
      <SiElasticsearch size={size} className=" text-green-500" />
    </Link>
  ),
  express: (
    <Link target="_blank" href="https://expressjs.com/">
      <SiExpress size={size} className=" text-yellow-500" />
    </Link>
  ),
  firebase: (
    <Link target="_blank" href="https://firebase.google.com/">
      <SiFirebase size={size} className=" text-yellow-600" />
    </Link>
  ),
  graphql: (
    <Link target="_blank" href="https://graphql.org/">
      <SiGraphql size={size} className=" text-pink-500" />
    </Link>
  ),
  heroku: (
    <Link target="_blank" href="https://www.heroku.com/">
      <SiHeroku size={size} className=" text-purple-900" />
    </Link>
  ),
  html: (
    <Link
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
    >
      <SiHtml5 size={size} className=" text-orange-700" />
    </Link>
  ),
  mongoDb: (
    <Link target="_blank" href="https://www.mongodb.com/">
      <SiMongodb size={size} className=" text-green-500" />
    </Link>
  ),
  mongoose: (
    <Link target="_blank" href="https://mongoosejs.com/">
      <SiMongoose size={size} className=" text-red-500" />
    </Link>
  ),
  mySql: (
    <Link target="_blank" href="https://www.mysql.com/">
      <SiMysql size={size} className=" text-blue-600" />
    </Link>
  ),
  nestjs: (
    <Link target="_blank" href="https://nestjs.com/">
      <SiNestjs size={size} className=" text-red-600" />
    </Link>
  ),
  netlify: (
    <Link target="_blank" href="https://www.netlify.com/">
      <SiNetlify size={size} />
    </Link>
  ),
  nextjs: (
    <Link target="_blank" href="https://nextjs.org/">
      <SiNextdotjs size={size} />
    </Link>
  ),
  nodejs: (
    <Link target="_blank" href="https://nodejs.org/en">
      <SiNodedotjs size={size} className=" text-green-900" />
    </Link>
  ),
  rabbitmq: (
    <Link target="_blank" href="https://www.rabbitmq.com/">
      <SiRabbitmq size={size} className=" text-orange-800" />
    </Link>
  ),
  tailwind: (
    <Link target="_blank" href="https://tailwindcss.com/docs/installation">
      <SiTailwindcss size={size} className=" text-blue-400" />
    </Link>
  ),
  typescript: (
    <Link target="_blank" href="https://www.typescriptlang.org/">
      <SiTypescript size={size} className=" text-blue-500" />
    </Link>
  ),
  vercel: (
    <Link target="_blank" href="https://vercel.com/">
      <SiVercel size={size} />
    </Link>
  ),
  socketio: (
    <Link target="_blank" href="https://socket.io/">
      <SiSocketdotio size={size} className=" text-orange-800" />
    </Link>
  ),
  react: (
    <Link target="_blank" href="https://react.dev/">
      <FaReact size={size} className=" text-blue-600" />
    </Link>
  ),
  vue: (
    <Link target="_blank" href="https://vuejs.org/">
      <FaVuejs size={size} className=" text-green-800" />
    </Link>
  ),
  redis: (
    <Link target="_blank" href="https://redis.io/">
      <DiRedis size={size} className=" text-red-500" />
    </Link>
  ),
};

export interface TechStackListProps {
  title: string;
}

export default function TechStackList({ title }: TechStackListProps) {
  const stacks: Array<[string, ReactNode]> = Object.entries(techstacks).sort(
    () => Math.random() - 0.5
  );

  return (
    <section className="space-y-6 mb-16 container mx-auto my-auto" id="tech">
      <hgroup className="flex justify-center">
        <SectionHeading
          title={title}
          icon={<FiCode size={20} />}
          className="!text-cyan-500 dark:!text-cyan-200 !text-xl"
        />
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
