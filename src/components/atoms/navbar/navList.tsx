import ChangeLang from "@/components/molleculs/menu/change-lang";
import Link from "next/link";

export default function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="/#company"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Company
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="/#mission-vision"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Mission And Vision
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="/#team"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Our Team
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="/#tech"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Our Techstack
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="/#contact"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact / Carrers
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <ChangeLang />
      </li>
    </ul>
  );
}
