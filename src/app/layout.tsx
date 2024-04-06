import MainViews from "@/components/organs/views/mainViews";
import type { ChildrenProps } from "@/interfaces";
import MainLayout from "@/layouts/mainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balkan Dreams",
  description: "Your web development solutions",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <MainLayout>
      <MainViews>{children}</MainViews>
    </MainLayout>
  );
}
