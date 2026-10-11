"use client";

import Image, { ImageProps } from "next/image";
import { useBlobUrl } from "./BlobProvider";

export function BlobImage(props: ImageProps) {
  const { src, ...rest } = props;
  const resolvedSrc = useBlobUrl(src as string);
  
  if (!resolvedSrc) return null;

  return <Image src={resolvedSrc} {...rest} />;
}
