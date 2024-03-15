import type { ChildrenProps, Languages } from "@/interfaces";
import ThemeProvider from "@/providers/themeProvider";
import HeaderApp from "@/components/organs/head/headerApp";
import GlobalContext from "@/context/global";

export interface MainLayoutProps extends ChildrenProps {
  lang?: Languages;
}

export default function MainLayout({ children, lang }: MainLayoutProps) {
  return (
    <html lang="en">
      <HeaderApp lang={lang} />
      <body>
        <ThemeProvider>
          <GlobalContext>{children}</GlobalContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
