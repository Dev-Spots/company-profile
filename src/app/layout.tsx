import MainViews from "@/components/organs/views/mainViews";
import { LANGUAGE } from "@/constants/lang";
import type { ChildrenProps, PageProps } from "@/interfaces";
import MainLayout from "@/layouts/mainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balkan Dreams",
  description: "Your web development solutions",
};

export type RootLayoutProps = ChildrenProps & PageProps;

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <MainLayout lang={lang}>
      <MainViews>{children}</MainViews>
    </MainLayout>
  );
}

export async function generateStaticParams() {
  return LANGUAGE.map((lang) => ({ lang }));
}
