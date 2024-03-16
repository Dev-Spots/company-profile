import { Typography } from "@/components/atoms/typography/material-tailwind";
import { Tooltip } from "./material-tailwind";

export interface GithubTooltipProps {
  href: string;
}

export default function GithubTooltip({ href }: GithubTooltipProps) {
  return (
    <Tooltip content="Go">
      <Typography
        as="a"
        href={href}
        variant="lead"
        color="light-blue"
        textGradient
        className="hover:cursor-pointer"
        target="_blank"
      >
        <i className="fab fa-github" />
      </Typography>
    </Tooltip>
  );
}
