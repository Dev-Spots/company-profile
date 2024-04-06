import Link from "next/link";
import Tooltip from "./basic";
import { BsTwitter } from "@/components/atoms/icons/react-icons-bs";

export interface TwitterTooltipProps {
  href: string;
}

export default function TwitterTooltip({ href }: TwitterTooltipProps) {
  return (
    <Tooltip title="Twitter">
      <Link
        href={href}
        color="light-blue"
        className="hover:cursor-pointer"
        target="_blank"
      >
        <BsTwitter size={30} />
      </Link>
    </Tooltip>
  );
}
