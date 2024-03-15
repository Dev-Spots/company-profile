import MainHero from "@/components/organs/hero/mainHero";
import NavbarApp from "@/components/organs/navbar/navbarApp";

export default function Home() {
  return (
    <>
      <NavbarApp />
      <main>
        <MainHero />
      </main>
    </>
  );
}
