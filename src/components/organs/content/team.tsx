import { Typography } from "@/components/atoms/typography/material-tailwind";
import ProfileCard from "@/components/molleculs/card/profile";
import { TEAM } from "@/constants/team";

export default function OurTeam() {
  return (
    <section
      id="team"
      className="container flex flex-col mx-auto my-0 px-5 py-12 items-center justify-center h-1/4"
    >
      <Typography
        className="my-4 text-5xl font-bold leading-tight text-cyan-200 underline cursor-default"
        as="h1"
      >
        Our Teams
      </Typography>
      <article className="max-w-screen-xl flex flex-wrap xl:justify-between justify-center items-center xl:space-x-16 lg:space-x-8">
        {TEAM.map((el) => (
          <ProfileCard {...el} key={el.name} />
        ))}
      </article>
    </section>
  );
}
