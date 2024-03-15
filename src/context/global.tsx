"use client";

import { LANGUAGES } from "@/constants";
import type { ChildrenProps, GlobalContextValue } from "@/interfaces";
import { useSearchParams } from "next/navigation";
import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";

export type ContextValue = GlobalContextValue & {
  setGlobalState: Dispatch<SetStateAction<GlobalContextValue>>;
  updateParams: (key: string, value: string) => void;
};

export const GLOBAL_CONTEXT = createContext<ContextValue>({} as ContextValue);

export default function GlobalContext({ children }: ChildrenProps) {
  const searchParams = useSearchParams();

  const [globalState, setGlobalState] = useState<GlobalContextValue>({
    lang: "English",
  });

  const params = new URLSearchParams(searchParams.toString());

  function updateParams(key: string, value: string) {
    params.set(key, value);
    if (key === "lang" && LANGUAGES.includes(value))
      setGlobalState((prev) => ({
        ...prev,
        lang: value as any,
      }));
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  useEffect(() => {
    if (!params.get("lang")) updateParams("lang", "English");
  }, [params]);

  return (
    <GLOBAL_CONTEXT.Provider
      value={{ ...globalState, setGlobalState, updateParams }}
    >
      {children}
    </GLOBAL_CONTEXT.Provider>
  );
}
