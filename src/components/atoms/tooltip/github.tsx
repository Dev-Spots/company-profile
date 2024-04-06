import Link from "next/link";
import Tooltip from "./basic";
import { BsGithub } from "@/components/atoms/icons/react-icons-bs";

export interface GithubTooltipProps {
  href: string;
}

export default function GithubTooltip({ href }: GithubTooltipProps) {
  return (
    <Tooltip title="Github">
      <Link
        href={href}
        color="light-blue"
        className="hover:cursor-pointer"
        target="_blank"
      >
        <BsGithub size={30} />
      </Link>
    </Tooltip>
  );
}
