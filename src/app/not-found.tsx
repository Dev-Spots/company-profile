import NavbarApp from "@/components/organs/navbar/navbarApp";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <header className="fixed z-50 xl:ml-auto m-0 w-[100%] xl:mr-auto max-w-screen-2xl 2xl:ml-[2.5rem]">
        <NavbarApp />
      </header>
      <main className="text-center container items-center justify-center m-auto pt-64">
        <hgroup>
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
          <p className="mb-4 text-lg text-gray-600">
            Oops! Looks like you're lost.
          </p>
        </hgroup>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Let's get you back{" "}
          <Link href="/" className="text-blue-500">
            home
          </Link>
          .
        </p>
      </main>
    </>
  );
}
