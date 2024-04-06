import Link from "next/link";
import Tooltip from "./basic";
import { BsLinkedin } from "@/components/atoms/icons/react-icons-bs";

export interface LinkedinTooltipProps {
  href: string;
}

export default function LinkedinTooltip({ href }: LinkedinTooltipProps) {
  return (
    <Tooltip title="Linkedin">
      <Link
        href={href}
        color="light-blue"
        className="hover:cursor-pointer"
        target="_blank"
      >
        <BsLinkedin size={30} />
      </Link>
    </Tooltip>
  );
}
