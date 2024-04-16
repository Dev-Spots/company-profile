import ContactCard from "@/components/molleculs/cards/contactCard";
import { SOCIALMEDIA } from "@/constants/social";
import type { PageProps } from "@/interfaces";

export default function Page({ params: { lang } }: PageProps) {
  const title = (() => {
    switch (lang) {
      case "id-ID":
        return "Temukan kami di";
      case "bs-BA":
        return "Pronađite nas na";
      case "en-US":
      default:
        return "Find us on";
    }
  })();
  return (
    <section className="flex flex-col items-center space-y-4">
      <h2>{title}</h2>
      <div className="flex flex-wrap gap-3" suppressHydrationWarning>
        {SOCIALMEDIA.map((el) => (
          <ContactCard key={el.title} {...el} />
        ))}
      </div>
    </section>
  );
}
