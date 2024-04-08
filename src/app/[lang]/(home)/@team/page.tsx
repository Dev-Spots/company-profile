import OurTeam from "@/components/organs/contents/team";
import type { PageProps } from "@/interfaces";

export default function Page({ params: { lang } }: PageProps) {
  const title = (() => {
    switch (lang) {
      case "id-ID":
        return "Tim Kami";
      case "bs-BA":
        return "naš tim";
      case "en-US":
      default:
        return "Our Teams";
    }
  })();
  return <OurTeam title={title} />;
}
