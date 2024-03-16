import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface HomeLayoutProps extends ChildrenProps {
  missionVision: ReactNode;
  navbar: ReactNode;
  team: ReactNode;
  tech: ReactNode;
}

export default function HomeLayout({
  children,
  missionVision,
  navbar,
  team,
  tech,
}: HomeLayoutProps) {
  return (
    <>
      {navbar}
      <main>
        {children}
        {missionVision}
        {team}
        {tech}
      </main>
    </>
  );
}
