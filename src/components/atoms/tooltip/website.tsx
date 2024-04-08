import Link from "next/link";
import Tooltip from "./basic";
import { CgWebsite } from "@/components/atoms/icons/react-icons-cg";

export interface WebsiteTooltipProps {
  href: string;
}

export default function WebsiteTooltip({ href }: WebsiteTooltipProps) {
  return (
    <Tooltip title="Website">
      <Link
        href={href}
        color="light-blue"
        className="hover:cursor-pointer"
        target="_blank"
      >
        <CgWebsite size={35} />
      </Link>
    </Tooltip>
  );
}
