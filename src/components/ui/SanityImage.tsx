"use client"
import React from "react"
import { useNextSanityImage } from "next-sanity-image"
import { sanityClient } from "@/lib/sanity.client"
import Image from "next/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  imageWidth?: number
  imageData: {
    asset: {
      metadata: {
        lqip: string
      }
    }
  }
  altText: string
}

export default function SanityImage({
  imageData,
  imageWidth,
  className,
  altText,
}: Props) {
  const imageProps = useNextSanityImage(sanityClient, imageData)

  return (
    <Image
      alt={altText}
      {...imageProps}
      width={imageWidth}
      className={cn(className, "object-contain aspect-auto my-4 ")} // layout="responsive" prior to Next 13.0.0
      placeholder="blur"
      blurDataURL={imageData.asset.metadata.lqip}
    />
  )
}
