import { Typography } from "@/components/atoms/typography/material-tailwind";
import { Tooltip } from "./material-tailwind";

export interface TwitterTooltipProps {
  href: string;
}

export default function TwitterTooltip({ href }: TwitterTooltipProps) {
  return (
    <Tooltip content="Go">
      <Typography
        as="a"
        href={href}
        variant="lead"
        color="light-blue"
        className="hover:cursor-pointer"
        textGradient
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </Typography>
    </Tooltip>
  );
}
