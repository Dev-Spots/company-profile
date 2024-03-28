import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface AboutLayoutProps extends ChildrenProps {
  navbar: ReactNode;
  footer: ReactNode;
}

export default function AboutLayout({
  children,
  navbar,
  footer,
}: AboutLayoutProps) {
  return (
    <>
      {navbar}
      <main className="mx-28">{children}</main>
      {footer}
    </>
  );
}
