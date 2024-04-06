import Breakline from "@/components/atoms/contents/breakline";
import Container from "@/components/atoms/contents/container";
import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface HomeLayoutProps extends ChildrenProps {
  missionVision: ReactNode;
  team: ReactNode;
  tech: ReactNode;
}

export default function HomeLayout({
  children,
  missionVision,
  team,
  tech,
}: HomeLayoutProps) {
  return (
    <Container data-aos="fade-up" data-aos-anchor-placement="top-center">
      {children}
      <Breakline className="my-6" />
      {missionVision}
      <Breakline className="my-6" />
      {team}
      <Breakline className="my-6" />
      {tech}
      <Breakline className="my-6" />
    </Container>
  );
}
