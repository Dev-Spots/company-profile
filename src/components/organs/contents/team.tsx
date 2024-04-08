import ProfileCard from "@/components/molleculs/cards/profilCard";
import { TEAM } from "@/constants/team";
import { FiInfo, FiActivity } from "@/components/atoms/icons/react-icons-fi";
import SectionHeading from "@/components/atoms/header/sectionHeading";

export interface OurTeamProps {
  title: string;
}

export default function OurTeam({ title }: OurTeamProps) {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat" id="teams">
      <SectionHeading
        title={title}
        className="!text-cyan-500 dark:!text-cyan-200 flex justify-center !text-2xl"
        icon={<FiActivity size={20} />}
      />
      <article className="max-w-screen-xl flex flex-wrap xl:justify-between space-x-4 mt-3 justify-center items-center xl:space-x-16 lg:space-x-8">
        {TEAM.map((el) => (
          <ProfileCard key={el.name} {...el} />
        ))}
      </article>
    </section>
  );
}
