import "@/styles/globals.css";
import "aos/dist/aos.css";
import TopLoader from "nextjs-toploader";
import { soraSans } from "@/libs/font";
import type { ChildrenProps } from "@/interfaces";
import { Suspense } from "react";
import GtmHeadScript from "@/components/atoms/scripts/gtmHead";
import Analytics from "@/components/atoms/scripts/analytics";
import AppThemeProvider from "@/providers/theme.providers";
import MainFooter from "@/components/atoms/footer/mainFooter";
import AppLoader from "@/components/atoms/loaders/appLoader";
import type { Lang } from "@/constants/lang";

export interface MainLayoutProps extends ChildrenProps {
  lang: Lang;
}

export default function MainLayout({ children, lang }: MainLayoutProps) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <GtmHeadScript />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Balkan Dreams</title>
      </head>
      <body className={soraSans.className}>
        <Suspense fallback={<AppLoader />}>
          <TopLoader
            color="#05b6d3"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
          />
          <Analytics />
          <AppThemeProvider>
            {children}
            <MainFooter />
          </AppThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
