import Breakline from "@/components/atoms/contents/breakline";
import Container from "@/components/atoms/contents/container";
import type { ChildrenProps } from "@/interfaces";

export default function BlogLayout({ children }: ChildrenProps) {
  return (
    <Container data-aos="fade-left" as="section">
      {children}
      <Breakline className="my-6" />
    </Container>
  );
}
