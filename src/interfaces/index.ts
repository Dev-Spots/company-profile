import type { ReactNode } from "react";

export interface ChildrenProps {
  readonly children: ReactNode;
}

export interface HeaderAppProps {
  lang?: Languages;
}

export type Languages = "English" | "Bosnia" | "Indonesia";

export interface GlobalContextValue {
  lang: Languages;
}

export type PageProps<
  params = Record<string, string>,
  searchParams = Record<string, string>
> = {
  params?: params;
  searchParams?: searchParams;
};

export interface LangProps {
  lang?: Languages;
}
