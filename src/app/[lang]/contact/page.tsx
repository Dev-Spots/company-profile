import PageHeading from "@/components/atoms/header/pageHeading";
import type { PageProps } from "@/interfaces";

export default function Page({ params: { lang } }: PageProps) {
  const title = (() => {
    switch (lang) {
      case "id-ID":
        return "Hubungi kami";
      case "bs-BA":
        return "kontaktirajte nas";
      case "en-US":
      default:
        return "Contact us";
    }
  })();

  const desc = (() => {
    switch (lang) {
      case "id-ID":
        return "Mari terhubung";
      case "bs-BA":
        return "hajde da stupimo u kontakt";
      case "en-US":
      default:
        return "lets get in touch";
    }
  })();
  return <PageHeading title={title} desc={desc} />;
}
