import Container from "@/components/atoms/contents/container";
import Link from "next/link";

export default function notFound() {
  return (
    <Container data-aos="fade-left" as="section">
      <hgroup className="flex flex-col justify-center mt-64 items-center font-sora">
        <h1 className="text-8xl font-bold text-neutral-800 dark:text-neutral-300">
          404
        </h1>
        <p className="text-4xl font-medium text-neutral-800 dark:text-neutral-300">
          Page Not Found
        </p>
        <Link
          href="/"
          prefetch
          className="mt-4 text-xl text-blue-600 hover:underline"
        >
          Go back home
        </Link>
      </hgroup>
    </Container>
  );
}
