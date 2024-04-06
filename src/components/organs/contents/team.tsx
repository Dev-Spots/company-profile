import ProfileCard from "@/components/molleculs/cards/profilCard";
import { TEAM } from "@/constants/team";

export default function OurTeam() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat" id="teams">
      <h1 className="my-4 text-5xl flex justify-center font-bold leading-tight text-cyan-200 underline font-sora cursor-default">
        Our Teams
      </h1>
      <article className="max-w-screen-xl flex flex-wrap xl:justify-between space-x-4 mt-3 justify-center items-center xl:space-x-16 lg:space-x-8">
        {TEAM.map((el) => (
          <ProfileCard key={el.name} {...el} />
        ))}
      </article>
    </section>
  );
}
