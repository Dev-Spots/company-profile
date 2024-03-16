import GithubTooltip from "@/components/atoms/tooltip/github";
import LinkedinTooltip from "@/components/atoms/tooltip/linkedin";
import TwitterTooltip from "@/components/atoms/tooltip/twitter";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@/components/atoms/card/material-tailwind";
import LazyLoadImg from "@/components/atoms/image/lazyImage";
import { Typography } from "@/components/atoms/typography/material-tailwind";

export interface ProfileCardProps {
  github?: string;
  twitter?: string;
  linkedin?: string;
  name: string;
  title: string;
  src: string;
  alt: string;
}

export default function ProfileCard({
  github,
  twitter,
  linkedin,
  name,
  title,
  src,
  alt,
}: ProfileCardProps) {
  return (
    <Card className="w-96 mb-4">
      <CardHeader floated={false} className="h-80">
        <LazyLoadImg
          className="object-cover object-center mb-10 hover:cursor-pointer"
          src={src}
          alt={alt}
          width={500}
          height={500}
        />
      </CardHeader>
      <CardBody className="text-center">
        <hgroup>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 hover:cursor-pointer"
          >
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium hover:cursor-pointer"
            textGradient
          >
            {title}
          </Typography>
        </hgroup>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        {!!github && <GithubTooltip href={github} />}
        {!!linkedin && <LinkedinTooltip href={linkedin} />}
        {!!twitter && <TwitterTooltip href={twitter} />}
      </CardFooter>
    </Card>
  );
}
