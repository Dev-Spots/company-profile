import type { ChildrenProps, Languages } from "@/interfaces";
import ThemeProvider from "@/providers/themeProvider";
import HeaderApp from "@/components/organs/head/headerApp";
import GlobalContext from "@/context/global";
import { Suspense } from "react";
import { Spinner } from "@/components/atoms/loader/material-tailwind";

export interface MainLayoutProps extends ChildrenProps {
  lang?: Languages;
}

export default function MainLayout({ children, lang }: MainLayoutProps) {
  return (
    <html lang="en">
      <HeaderApp lang={lang} />
      <body>
        <Suspense fallback={<Spinner className="h-6 w-6" />}>
          <ThemeProvider>
            <GlobalContext>{children}</GlobalContext>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
