import Link from "next/link";

export default function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Pages
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Account
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blocks
        </Link>
      </li>
      <li color="blue-gray" className="p-1 font-medium">
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Docs
        </Link>
      </li>
    </ul>
  );
}
