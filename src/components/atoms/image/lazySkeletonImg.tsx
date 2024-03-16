"use client";

import Image, { type StaticImageData, type ImageProps } from "next/image";
import { Suspense } from "react";
import SkeletonImgLoader from "./skeletonLoadingImg";

export interface LazySkeletonLoadImgProps extends ImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  rounded?: string;
}

export default function LazySkeletonLoadImg({
  src,
  alt,
  className = "",
  rounded = "",
  ...rest
}: LazySkeletonLoadImgProps) {
  return (
    <figure className={`overflow-hidden ${!!rounded ? rounded : ""}`}>
      <Suspense fallback={<SkeletonImgLoader />}>
        <Image
          alt={alt}
          src={src}
          loading="lazy"
          className={`scale-100 blur-0 grayscale-0 ${
            !!rounded ? rounded : ""
          } ${className}`}
          {...rest}
        />
      </Suspense>
    </figure>
  );
}
