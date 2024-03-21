import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface HomeLayoutProps extends ChildrenProps {
  missionVision: ReactNode;
  navbar: ReactNode;
  team: ReactNode;
  tech: ReactNode;
  contact: ReactNode;
  footer: ReactNode;
}

export default function HomeLayout({
  children,
  missionVision,
  navbar,
  team,
  tech,
  contact,
  footer,
}: HomeLayoutProps) {
  return (
    <>
      {navbar}
      <main>
        {children}
        <hr className="px-4 mx-12 my-8 sm:my-12 sm:px-6 md:my-16" />
        {missionVision}
        <hr className="px-4 mx-12 my-8 sm:my-12 sm:px-6 md:my-16" />
        {team}
        <hr className="px-4 mx-12 my-8 sm:my-12 sm:px-6 md:my-16" />
        {tech}
        <hr className="px-4 mx-12 my-8 sm:my-12 sm:px-6 md:my-16" />
        {contact}
        <hr className="px-4 mx-12 my-8 sm:my-12 sm:px-6 md:my-16" />
      </main>
      {footer}
    </>
  );
}
