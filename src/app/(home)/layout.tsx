import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface HomeLayoutProps extends ChildrenProps {
  missionVision: ReactNode;
  navbar: ReactNode;
  team: ReactNode;
  tech: ReactNode;
  contact: ReactNode;
}

export default function HomeLayout({
  children,
  missionVision,
  navbar,
  team,
  tech,
  contact,
}: HomeLayoutProps) {
  return (
    <>
      {navbar}
      <main>
        {children}
        {missionVision}
        {team}
        {tech}
        {contact}
      </main>
    </>
  );
}
