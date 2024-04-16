import Breakline from "@/components/atoms/contents/breakline";
import Container from "@/components/atoms/contents/container";
import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface ContactLayoutProps extends ChildrenProps {
  contact: ReactNode;
  form: ReactNode;
}

export default function ContactLayout({
  children,
  contact,
  form,
}: ContactLayoutProps) {
  return (
    <Container data-aos="fade-left">
      {children}
      {contact}
      <Breakline className="my-6" />
      {form}
    </Container>
  );
}
