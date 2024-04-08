import type { Lang } from "@/constants/lang";
import type { ReactNode } from "react";

export interface ChildrenProps {
  readonly children: ReactNode;
}

export interface OptionalChildrenProps {
  readonly children?: ReactNode;
}

export interface WindowWithDataLayer extends Window {
  dataLayer: Record<string, unknown>[];
}

export type PageProps<
  params = Record<string, string>,
  searchParams = Record<string, string>
> = {
  params: { lang: Lang } & params;
  searchParams?: searchParams;
};

export type WrapperAs = "div" | "article" | "main" | "section";
