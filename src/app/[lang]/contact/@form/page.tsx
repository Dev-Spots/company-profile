import ContactFormWrapper from "@/components/organs/form/contactFormWrapper";
import type { PageProps } from "@/interfaces";

export default function Page({ params: { lang } }: PageProps) {
  const text = (() => {
    switch (lang) {
      case "id-ID":
        return "Atau kirimi kami pesan";
      case "bs-BA":
        return "Ili nam pošaljite poruku";
      case "en-US":
      default:
        return "Or send us message";
    }
  })();
  return <ContactFormWrapper text={text} />;
}
