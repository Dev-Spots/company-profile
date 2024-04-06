"use client";

import type { ChildrenProps, WrapperAs } from "@/interfaces";
import { useSearchParams } from "next/navigation";

export interface ContainerProps extends ChildrenProps {
  className?: string;
  withMarginTop?: boolean;
  as?: WrapperAs;
  [key: string]: any | undefined;
}

export default function Container({
  children,
  className = "",
  withMarginTop = true,
  as = "div",
  ...rest
}: ContainerProps) {
  const searchParams = useSearchParams();
  const readMode = searchParams?.get("read-mode");
  const classname = `mb-10 ${
    (readMode?.toLowerCase() !== "true" || withMarginTop) && "mt-6"
  } p-4 md:p-8 lg:pr-0 ${className}`;

  switch (as) {
    case "main":
      return (
        <main data-testid="container" className={classname} {...rest}>
          {children}
        </main>
      );
    case "section":
      return (
        <section data-testid="container" className={classname} {...rest}>
          {children}
        </section>
      );
    case "article":
      return (
        <article data-testid="container" className={classname} {...rest}>
          {children}
        </article>
      );
    case "div":
    default:
      return (
        <div data-testid="container" className={classname} {...rest}>
          {children}
        </div>
      );
  }
}
