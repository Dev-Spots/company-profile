import "./globals.css";
import MainLayout from "@/layouts/mainLayout";
import type { ChildrenProps } from "@/interfaces";

export default function RootLayout({ children }: ChildrenProps) {
  return <MainLayout>{children}</MainLayout>;
}
