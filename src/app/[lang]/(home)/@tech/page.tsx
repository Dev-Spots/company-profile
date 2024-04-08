import TechStackList from "@/components/organs/contents/techList";
import type { PageProps } from "@/interfaces";

export default function Page({ params: { lang } }: PageProps) {
  const title = (() => {
    switch (lang) {
      case "id-ID":
        return "Teknologi Kami";
      case "bs-BA":
        return "naši techstacks";
      case "en-US":
      default:
        return "Our Techstacks";
    }
  })();

  return <TechStackList title={title} />;
}
